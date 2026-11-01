const MINDS_API_ROOT = "https://getminds.ai/api/v1";
const MINDS_API_KEY_PROPERTY = "MINDS_API_KEY";
const MINDS_MAX_BATCH_SIZE = 25;
const MINDS_MAX_SELECTED_ROWS = 250;

function onInstall(event) { onOpen(event); }
function onOpen() {
  SpreadsheetApp.getUi().createAddonMenu()
    .addItem("Set Minds API key", "setMindsApiKey")
    .addItem("Clear Minds API key", "clearMindsApiKey").addSeparator()
    .addItem("Prepare research from selected rows", "askAudienceFromSelection")
    .addItem("Load completed answers into selected rows", "loadCompletedMindsAnswers")
    .addSeparator().addItem("Help and account setup", "showMindsHelp").addToUi();
}
function showMindsError_(message) {
  SpreadsheetApp.getUi().alert("Minds", message, SpreadsheetApp.getUi().ButtonSet.OK);
}
function escapeMindsHtml_(value) {
  return String(value).replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
}
function showMindsHelp() {
  const content = '<p>Select up to 25 unique open-ended questions in the first column of a range. Blank rows keep their positions.</p>' +
    '<p><b>Prepare research</b> saves one private Study and one exact draft. Open the draft in Minds to review the Audience, questions and usage, then explicitly confirm and run it there. Sheets never starts research automatically.</p>' +
    '<p>Return to the same range and choose <b>Load completed answers</b>. Only completed results for that exact draft are written to the adjacent column, after overwrite confirmation. Incomplete research leaves cells unchanged.</p>' +
    '<p>Keep the questions unchanged until import. Scales, choice options and branching require the full Minds questionnaire workflow.</p>' +
    '<p><a href="https://getminds.ai/guide/google-sheets" target="_blank">Setup and help</a> · <a href="https://getminds.ai/pricing" target="_blank">Plans</a></p>';
  SpreadsheetApp.getUi().showModalDialog(HtmlService.createHtmlOutput(content).setWidth(420).setHeight(360), "Minds for Google Sheets");
}
function mindsApiKey_() {
  const key = PropertiesService.getUserProperties().getProperty(MINDS_API_KEY_PROPERTY);
  if (!key) throw new Error("Set your Minds API key first.");
  return key;
}
function mindsRequest_(path, method, body, requestKey, apiKey) {
  const headers = { Authorization: `Bearer ${apiKey || mindsApiKey_()}`, Accept: "application/json", "X-Minds-Study-Plan-Protocol": "1" };
  if (requestKey) headers["Idempotency-Key"] = requestKey;
  const options = { method: method || "get", headers, muteHttpExceptions: true, followRedirects: false };
  if (body !== undefined) { options.contentType = "application/json"; options.payload = JSON.stringify(body); }
  const response = UrlFetchApp.fetch(MINDS_API_ROOT + path, options);
  const status = response.getResponseCode();
  if (status < 200 || status >= 300) throw new Error(status === 401 ? "Your Minds API key is invalid or expired. Set a valid key and retry." : `Minds request failed (HTTP ${status}). Retry the same selection; its saved request will be reused.`);
  let value;
  try { value = JSON.parse(response.getContentText()); } catch (_) { throw new Error("Minds returned an unreadable response. Retry the same selection."); }
  return { status, data: value && Object.prototype.hasOwnProperty.call(value, "data") ? value.data : value };
}
function mindsOwner_() {
  const owner = mindsRequest_("/auth/me").data;
  if (!owner || !mindsUuid_(owner.id)) throw new Error("Unable to verify the Minds account.");
  return owner.id;
}
function setMindsApiKey() {
  ScriptApp.requireAllScopes(ScriptApp.AuthMode.FULL);
  const ui = SpreadsheetApp.getUi();
  const answer = ui.prompt("Minds API key", "Create a key at getminds.ai/settings/api-keys. It stays in your Apps Script user properties, never in cells.", ui.ButtonSet.OK_CANCEL);
  if (answer.getSelectedButton() !== ui.Button.OK) return;
  const key = answer.getResponseText().trim();
  try {
    if (!key || /[\r\n]/.test(key)) throw new Error("Enter a valid Minds API key, or choose Cancel.");
    const owner = mindsRequest_("/auth/me", "get", undefined, undefined, key).data;
    if (!owner || !mindsUuid_(owner.id)) throw new Error("Unable to verify the Minds account.");
    PropertiesService.getUserProperties().setProperty(MINDS_API_KEY_PROPERTY, key);
    ui.alert("Minds API key verified and saved.");
  } catch (error) { showMindsError_(error.message); }
}
function clearMindsApiKey() {
  const ui = SpreadsheetApp.getUi();
  if (ui.alert("Clear Minds API key?", "This removes the stored key. It does not revoke the key or cancel research in Minds.", ui.ButtonSet.YES_NO) !== ui.Button.YES) return;
  PropertiesService.getUserProperties().deleteProperty(MINDS_API_KEY_PROPERTY);
  ui.alert("Minds API key cleared.");
}
function mindsUuid_(value) { return typeof value === "string" && /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(value); }
function mindsDigest_(value) {
  return Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, JSON.stringify(value), Utilities.Charset.UTF_8)
    .map(byte => ((byte + 256) % 256).toString(16).padStart(2, "0")).join("");
}
function mindsSelection_() {
  const range = SpreadsheetApp.getActiveRange();
  if (!range || range.getNumRows() > MINDS_MAX_SELECTED_ROWS) throw new Error(`Select between 1 and ${MINDS_MAX_SELECTED_ROWS} rows first.`);
  const questions = range.getDisplayValues().map(row => row[0].trim());
  const nonempty = questions.filter(Boolean);
  if (!nonempty.length || nonempty.length > MINDS_MAX_BATCH_SIZE) throw new Error(`Select 1–${MINDS_MAX_BATCH_SIZE} non-empty questions.`);
  if (nonempty.some(text => text.length > 2000)) throw new Error("Each question must contain at most 2,000 characters.");
  if (new Set(nonempty).size !== nonempty.length) throw new Error("Each non-empty question must be unique.");
  const sheet = range.getSheet();
  const target = [sheet.getParent().getId(), sheet.getSheetId(), range.getRow(), range.getColumn(), range.getNumRows(), range.getNumColumns()];
  const output = range.offset(0, range.getNumColumns(), range.getNumRows(), 1);
  return { range, output, questions, target, key: "MINDS_SHEETS_JOB_" + mindsDigest_(target), hash: mindsDigest_([target, questions]) };
}
function withMindsLock_(fn) {
  const lock = LockService.getUserLock();
  if (!lock.tryLock(1000)) throw new Error("Another Minds Sheets action is in progress. Retry shortly.");
  try { return fn(); } finally { lock.releaseLock(); }
}
function mindsQuestions_(selection) {
  return selection.questions.flatMap((text, index) => text ? [{ id: `row-${index + 1}`, text, response: { type: "qualitative" } }] : []);
}
function checkMindsPlan_(plan, selection) {
  const expected = mindsQuestions_(selection);
  if (!plan || !Array.isArray(plan.modules) || plan.modules.some(module => !Array.isArray(module.questions))) throw new Error("Minds returned an invalid question plan.");
  const actual = plan.modules.flatMap(module => module.questions);
  if (actual.length !== expected.length || actual.some((question, index) => question.id !== expected[index].id || question.text !== expected[index].text || question.response?.type !== "qualitative" || question.askIf)) {
    throw new Error("The draft questions changed. No answers were written. Prepare a new plan from the current rows.");
  }
}
function readMindsJob_(selection) {
  const raw = PropertiesService.getUserProperties().getProperty(selection.key);
  if (!raw) return null;
  try {
    const job = JSON.parse(raw);
    if (job.version === 1 && mindsUuid_(job.requestKey) && mindsUuid_(job.ownerId) && mindsUuid_(job.audienceId)
      && typeof job.inputHash === "string" && /^[a-f0-9]{64}$/.test(job.inputHash)
      && typeof job.name === "string" && job.name.length <= 200
      && (job.studyId === undefined || mindsUuid_(job.studyId))
      && (job.draftPlanId === undefined || (mindsUuid_(job.draftPlanId) && Number.isInteger(job.revision) && job.revision > 0))) return job;
  } catch (_) { /* Report fixed error below. */ }
  throw new Error("The saved sheet plan is unreadable. No new research or cell write was attempted.");
}
function saveMindsJob_(selection, job) {
  PropertiesService.getUserProperties().setProperty(selection.key, JSON.stringify(job));
}
function prepareMindsSelection_(selection, audienceId, startNew) {
  return withMindsLock_(() => {
    const ownerId = mindsOwner_();
    let job = readMindsJob_(selection);
    if (startNew || !job || job.inputHash !== selection.hash || job.ownerId !== ownerId || job.audienceId !== audienceId) {
      job = { version: 1, requestKey: Utilities.getUuid(), ownerId, audienceId, inputHash: selection.hash,
        name: `Sheets research ${selection.range.getA1Notation()} ${new Date().toISOString()}` };
      // Persist identity before any uncertain remote request. Never retry with a fresh key.
      saveMindsJob_(selection, job);
    }
    if (!job.studyId) {
      const created = mindsRequest_("/studies", "post", { name: job.name, audienceIds: [audienceId], isLinkSharingEnabled: false }, "sheets-study-" + job.requestKey).data;
      if (!created || !mindsUuid_(created.id)) throw new Error("Minds did not return the saved Study. Retry the same selection.");
      job.studyId = created.id; saveMindsJob_(selection, job);
    }
    if (!job.draftPlanId) {
      const response = mindsRequest_(`/studies/${job.studyId}/research-plans/preview`, "post", { questions: mindsQuestions_(selection), studyLocale: "en" }, "sheets-plan-" + job.requestKey);
      if (response.status === 202) return job;
      const draft = response.data;
      if (!draft || !mindsUuid_(draft.draftPlanId) || !Number.isInteger(draft.revision) || draft.revision < 1) throw new Error("Minds did not return a saved draft. Retry the same selection.");
      checkMindsPlan_(draft.plan, selection);
      job.draftPlanId = draft.draftPlanId; job.revision = draft.revision; saveMindsJob_(selection, job);
    }
    return job;
  });
}
function showMindsDraft_(job) {
  if (!job.draftPlanId) { showMindsError_("Plan preparation is pending. Run Prepare research again with the same rows and Audience to retrieve the saved draft. No research has started."); return; }
  const url = `https://getminds.ai/?studyId=${encodeURIComponent(job.studyId)}&draftPlanId=${encodeURIComponent(job.draftPlanId)}`;
  const html = '<p>One private Study and the exact question draft are saved. No research has started from Sheets.</p>' +
    `<p><a href="${escapeMindsHtml_(url)}" target="_blank" rel="noopener noreferrer">Review and confirm this draft in Minds</a></p>` +
    '<p>Review the Audience, questions and usage, then explicitly confirm and run in Minds. After completion, select the same rows and choose <b>Load completed answers</b>. Existing cells stay unchanged until you approve an overwrite.</p>';
  SpreadsheetApp.getUi().showModalDialog(HtmlService.createHtmlOutput(html).setWidth(420).setHeight(260), "Review your Minds research plan");
}
function askAudienceFromSelection() {
  ScriptApp.requireAllScopes(ScriptApp.AuthMode.FULL);
  const ui = SpreadsheetApp.getUi();
  try {
    const selected = mindsSelection_();
    const response = ui.prompt("Minds Audience", "Enter an existing Audience ID for these exact open-ended questions.", ui.ButtonSet.OK_CANCEL);
    if (response.getSelectedButton() !== ui.Button.OK) return;
    const audienceId = response.getResponseText().trim();
    if (!mindsUuid_(audienceId)) throw new Error("Enter a valid Minds Audience ID, or choose Cancel.");
    const existing = readMindsJob_(selected);
    let startNew = false;
    if (existing && existing.inputHash === selected.hash && existing.audienceId === audienceId) {
      const choice = ui.alert("Resume the saved sheet plan?", "Yes: reopen or resume the same saved plan. No: prepare a new private Study and draft for these rows. Cancel: stop. Existing Studies and research remain in Minds.", ui.ButtonSet.YES_NO_CANCEL);
      if (choice === ui.Button.CANCEL) return;
      startNew = choice === ui.Button.NO;
    } else if (ui.alert("Prepare one Minds Study?", `Save ${selected.questions.filter(Boolean).length} open-ended question(s) in one private Study draft. Review and explicitly confirm its usage in Minds before research runs. Changed questions or a different Audience start a new saved sheet plan; existing Studies remain in Minds.`, ui.ButtonSet.YES_NO) !== ui.Button.YES) return;
    const current = mindsSelection_();
    if (current.hash !== selected.hash) throw new Error("The selected rows changed during review. Select the intended rows and try again.");
    showMindsDraft_(prepareMindsSelection_(current, audienceId, startNew));
  } catch (error) { showMindsError_(error.message || "Unable to prepare the Minds plan."); }
}
function completedMindsAnswers_(selection, job) {
  if (job.inputHash !== selection.hash) throw new Error("The selected questions changed. No answers were written.");
  if (mindsOwner_() !== job.ownerId) throw new Error("Reconnect the Minds account that prepared this sheet plan.");
  if (!mindsUuid_(job.studyId) || !mindsUuid_(job.draftPlanId)) throw new Error("Prepare this selection again to retrieve its saved draft first.");
  const draft = mindsRequest_(`/studies/${job.studyId}/research-plans/preview`, "post", { loadLatest: true, draftPlanId: job.draftPlanId }).data;
  if (draft?.draftPlanId !== job.draftPlanId || draft.revision !== job.revision) throw new Error("The saved draft revision changed. Prepare a new sheet plan before importing answers.");
  checkMindsPlan_(draft.plan, selection);
  if (draft.draftStatus !== "confirmed") throw new Error("Review, confirm and run this exact draft in Minds first. No answers were written.");
  const runId = draft.runId || job.draftPlanId;
  if (!mindsUuid_(runId)) throw new Error("The draft has no valid research run.");
  const run = mindsRequest_(`/studies/${job.studyId}/research-runs/${runId}`).data;
  if (run?.studyId !== job.studyId || run.runId !== runId) throw new Error("Minds returned a different research run. No answers were written.");
  if (run.status !== "completed" || run.ready !== true) throw new Error(`Research is ${["queued", "running", "partial", "failed", "cancelled", "plan_limited"].includes(run.status) ? run.status : "not ready"}. Existing cells are unchanged. Check the saved run in Minds and try Load completed answers again.`);
  checkMindsPlan_(run.executionPlan || run.plan, selection);
  const expected = mindsQuestions_(selection);
  if (!Array.isArray(run.artifacts)) throw new Error("The run has no completed answer artifacts.");
  const answers = expected.map((_question, index) => {
    const artifacts = run.artifacts.filter(artifact => artifact.kind === "responses" && artifact.questionIndex === index);
    if (artifacts.length !== 1 || artifacts[0].error || artifacts[0].responseCoverage) throw new Error("Some answers are missing or incomplete. Existing cells are unchanged.");
    const output = artifacts[0].outputData;
    const answer = typeof output?.summary === "string" ? output.summary.trim() : "";
    if (!answer) throw new Error("Completed findings are not available for every question. Existing cells are unchanged.");
    if (answer.length > 50000) throw new Error("A finding is too long for a Google Sheets cell. Read it in Minds; existing cells are unchanged.");
    return answer;
  });
  let index = 0;
  return selection.questions.map(question => [question ? literalMindsCell_(answers[index++]) : ""]);
}
function literalMindsCell_(value) { return /^[=+\-@\t\r]/.test(value) ? "'" + value : value; }
function loadCompletedMindsAnswers() {
  ScriptApp.requireAllScopes(ScriptApp.AuthMode.FULL);
  const ui = SpreadsheetApp.getUi();
  try {
    const selected = mindsSelection_();
    const prepared = withMindsLock_(() => {
      const job = readMindsJob_(selected);
      if (!job) throw new Error("Prepare a research plan for this exact selection first.");
      return { job, answers: completedMindsAnswers_(selected, job), outputHash: mindsDigest_(selected.output.getDisplayValues()) };
    });
    // Apps Script alerts suspend execution and release locks: reacquire and recheck afterwards.
    if (ui.alert("Write completed Minds answers?", "Write the completed findings into the adjacent column? Existing values there will be overwritten, including blank question rows.", ui.ButtonSet.YES_NO) !== ui.Button.YES) return;
    withMindsLock_(() => {
      const current = mindsSelection_();
      const latest = readMindsJob_(current);
      if (current.hash !== selected.hash || !latest || latest.requestKey !== prepared.job.requestKey || mindsDigest_(current.output.getDisplayValues()) !== prepared.outputHash) throw new Error("The selection, saved plan or output cells changed during confirmation. No answers were written; retry Load completed answers.");
      if (mindsOwner_() !== prepared.job.ownerId) throw new Error("The connected Minds account changed. No answers were written.");
      current.output.setValues(prepared.answers);
    });
    ui.alert("Completed findings were written. No new research was started.");
  } catch (error) { showMindsError_(error.message || "Unable to load completed Minds answers."); }
}
