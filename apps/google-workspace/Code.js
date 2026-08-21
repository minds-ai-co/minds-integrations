const MINDS_MCP_ENDPOINT = "https://getminds.ai/mcp";
const MINDS_API_KEY_PROPERTY = "MINDS_API_KEY";
const MINDS_MAX_BATCH_SIZE = 25;
const MINDS_POLL_INTERVAL_MS = 5000;
// Apps Script caps menu-driven executions at six minutes. Stop polling well
// short of that so results still get written back to the sheet.
const MINDS_POLL_DEADLINE_MS = 4.5 * 60 * 1000;

function onInstall(event) {
  onOpen(event);
}

function onOpen() {
  SpreadsheetApp.getUi()
    .createAddonMenu()
    .addItem("Set Minds API key", "setMindsApiKey")
    .addItem("Clear Minds API key", "clearMindsApiKey")
    .addSeparator()
    .addItem("Ask a Group from selected rows", "askGroupFromSelection")
    .addSeparator()
    .addItem("Help and account setup", "showMindsHelp")
    .addToUi();
}

function showMindsError_(message) {
  SpreadsheetApp.getUi().alert("Minds", message, SpreadsheetApp.getUi().ButtonSet.OK);
}

function showMindsHelp() {
  const html = HtmlService.createHtmlOutput(
    '<div style="font-family:Arial,sans-serif;font-size:14px;line-height:1.5;padding:8px">' +
      "<p>Run questions from the first column of a selected range against an existing Minds Group.</p>" +
      '<p><a href="https://getminds.ai" target="_blank">Create or open your Minds account</a></p>' +
      '<p><a href="https://getminds.ai/settings/api-keys" target="_blank">Create a Minds API key</a></p>' +
      '<p><a href="https://getminds.ai/pricing" target="_blank">Plans and pricing</a></p>' +
      '<p><a href="https://getminds.ai/faq/overview" target="_blank">Support</a></p>' +
      "</div>",
  )
    .setWidth(360)
    .setHeight(250);
  SpreadsheetApp.getUi().showModalDialog(html, "Minds for Google Sheets");
}

function setMindsApiKey() {
  const ui = SpreadsheetApp.getUi();
  const response = ui.prompt(
    "Minds API key",
    "Create a key at getminds.ai/settings/api-keys. It is stored in your Google Apps Script user properties.",
    ui.ButtonSet.OK_CANCEL,
  );
  if (response.getSelectedButton() !== ui.Button.OK) return;
  const key = response.getResponseText().trim();
  if (!key) {
    showMindsError_("Enter a Minds API key, or choose Cancel.");
    return;
  }
  PropertiesService.getUserProperties().setProperty(MINDS_API_KEY_PROPERTY, key);
  ui.alert("Minds API key saved.");
}

function clearMindsApiKey() {
  const ui = SpreadsheetApp.getUi();
  const confirmation = ui.alert(
    "Clear Minds API key?",
    "This removes the key stored in your Google Apps Script user properties. It does not revoke the key in Minds.",
    ui.ButtonSet.YES_NO,
  );
  if (confirmation !== ui.Button.YES) return;
  PropertiesService.getUserProperties().deleteProperty(MINDS_API_KEY_PROPERTY);
  ui.alert("Minds API key cleared.");
}

function decodeMcpResponse_(raw) {
  const trimmed = raw.trim();
  if (trimmed.startsWith("{")) return JSON.parse(trimmed);
  const matches = raw.match(/^data:\s*(.+)$/gm) || [];
  if (!matches.length) throw new Error("Minds returned an unsupported response");
  return JSON.parse(matches[matches.length - 1].replace(/^data:\s*/, ""));
}

function mcpRequest_(apiKey, sessionId, id, method, params) {
  const body = { jsonrpc: "2.0", id, method };
  if (params !== undefined) body.params = params;
  const headers = {
    Accept: "application/json, text/event-stream",
    Authorization: `Bearer ${apiKey}`,
  };
  if (sessionId) headers["Mcp-Session-Id"] = sessionId;
  const response = UrlFetchApp.fetch(MINDS_MCP_ENDPOINT, {
    method: "post",
    contentType: "application/json",
    headers,
    payload: JSON.stringify(body),
    muteHttpExceptions: true,
  });
  if (response.getResponseCode() >= 400) {
    throw new Error(`Minds request failed with HTTP ${response.getResponseCode()}`);
  }
  const payload = decodeMcpResponse_(response.getContentText());
  if (payload.error) throw new Error(payload.error.message);
  const responseHeaders = response.getHeaders();
  const returnedSessionHeader = Object.keys(responseHeaders).find(
    (header) => header.toLowerCase() === "mcp-session-id",
  );
  return {
    result: payload.result,
    sessionId: returnedSessionHeader ? responseHeaders[returnedSessionHeader] : sessionId,
  };
}

function createMcpSession_() {
  const apiKey = PropertiesService.getUserProperties().getProperty(MINDS_API_KEY_PROPERTY);
  if (!apiKey) throw new Error("Set your Minds API key first");
  const initialized = mcpRequest_(apiKey, null, 1, "initialize", {
    protocolVersion: "2025-06-18",
    capabilities: {},
    clientInfo: { name: "minds-google-sheets", version: "1.0.0" },
  });
  if (!initialized.sessionId) throw new Error("Minds did not return an MCP session ID");
  return { apiKey, sessionId: initialized.sessionId, nextId: 2 };
}

function callToolInSession_(session, name, args) {
  const response = mcpRequest_(session.apiKey, session.sessionId, session.nextId, "tools/call", {
    name,
    arguments: args,
  });
  session.nextId += 1;
  session.sessionId = response.sessionId || session.sessionId;
  if (response.result.isError) {
    const detail = resultText_(response.result);
    throw new Error(detail || "Minds returned a tool error");
  }
  return response.result;
}

function resultText_(result) {
  const text = (result.content || [])
    .filter((item) => item.type === "text" && item.text)
    .map((item) => item.text)
    .join("\n");
  return text || JSON.stringify(result.structuredContent || result);
}

function panelIdFromResult_(result) {
  const structured = result.structuredContent || {};
  if (structured.panelId) return structured.panelId;
  const match = resultText_(result).match(/[?&]flowId=([0-9a-fA-F-]{36})/);
  return match ? match[1] : null;
}

function answerFromOutputData_(outputData) {
  if (!outputData) return "";
  const groups = outputData.groups;
  if (Array.isArray(groups) && groups.length) {
    const values = groups
      .map((group) => (group && typeof group.value === "string" ? group.value.trim() : ""))
      .filter(Boolean);
    if (values.length) return values.join(" | ");
  }
  return typeof outputData.summary === "string" ? outputData.summary.trim() : "";
}

function resolveQuestion_(status, question) {
  const structured = status.structuredContent || {};
  const completed = (structured.recentResults || []).filter(Boolean);
  for (const entry of completed) {
    if (entry.question === question && entry.status === "completed") {
      return { answer: answerFromOutputData_(entry.outputData), error: null };
    }
  }
  const failed = (structured.failedQuestions || []).filter(Boolean);
  for (const entry of failed) {
    if (entry.question === question) {
      return { answer: "", error: entry.error || "The panel could not answer this question." };
    }
  }
  return null;
}

function askGroupFromSelection() {
  const ui = SpreadsheetApp.getUi();
  try {
    const range = SpreadsheetApp.getActiveRange();
    if (!range) throw new Error("Select one or more question rows first.");
    const questionsByRow = range.getDisplayValues().map((row) => row[0].trim());
    const questions = questionsByRow.filter(Boolean);
    if (!questions.length) throw new Error("The first selected column contains no questions.");
    if (questions.length > MINDS_MAX_BATCH_SIZE) {
      throw new Error(`Run at most ${MINDS_MAX_BATCH_SIZE} non-empty questions at a time.`);
    }

    const groupPrompt = ui.prompt("Minds Group", "Enter an existing Group ID", ui.ButtonSet.OK_CANCEL);
    if (groupPrompt.getSelectedButton() !== ui.Button.OK) return;
    const groupId = groupPrompt.getResponseText().trim();
    if (!groupId) {
      showMindsError_("Enter an existing Minds Group ID, or choose Cancel.");
      return;
    }

    const outputRange = range.offset(0, range.getNumColumns(), range.getNumRows(), 1);
    const overwritesExistingCells = outputRange
      .getDisplayValues()
      .some((row) => row.some((value) => value.trim()));
    const overwriteWarning = overwritesExistingCells
      ? " Existing values in the output column will be overwritten."
      : "";
    const confirmation = ui.alert(
      "Run Minds research?",
      `This will ask ${questions.length} question(s) to the selected Minds Group and may consume plan allowance.${overwriteWarning}`,
      ui.ButtonSet.YES_NO,
    );
    if (confirmation !== ui.Button.YES) return;

    const session = createMcpSession_();
    const startedAt = Date.now();

    // ask_group only starts the panel; answers arrive asynchronously. Submit
    // every question first so the Minds work in parallel, then poll.
    const jobs = questionsByRow.map((question) => {
      if (!question) return null;
      const result = callToolInSession_(session, "ask_group", { groupId, question });
      const structured = result.structuredContent || {};
      return {
        question,
        panelId: panelIdFromResult_(result),
        workspaceUrl: structured.workspaceUrl || "",
        answer: "",
        error: null,
        done: false,
      };
    });

    const outstanding = () => jobs.filter((job) => job && job.panelId && !job.done);
    while (outstanding().length && Date.now() - startedAt < MINDS_POLL_DEADLINE_MS) {
      Utilities.sleep(MINDS_POLL_INTERVAL_MS);
      for (const job of outstanding()) {
        const status = callToolInSession_(session, "get_panel_status", { panelId: job.panelId });
        const resolved = resolveQuestion_(status, job.question);
        if (resolved) {
          job.answer = resolved.answer;
          job.error = resolved.error;
          job.done = true;
        }
      }
    }

    const output = jobs.map((job) => {
      if (!job) return [""];
      if (job.error) return [`Error: ${job.error}`];
      if (job.done) return [job.answer || "The panel returned no answer."];
      return [`Still running. Open in Minds: ${job.workspaceUrl}`];
    });
    outputRange.setValues(output);

    const answered = jobs.filter((job) => job && job.done && !job.error).length;
    const stillRunning = jobs.filter((job) => job && !job.done).length;
    const runningNote = stillRunning
      ? ` ${stillRunning} still running - run this again later to collect them.`
      : "";
    ui.alert(`Completed ${answered} of ${questions.length} Minds question(s).${runningNote}`);
  } catch (error) {
    showMindsError_(error && error.message ? error.message : "The Minds request could not be completed.");
  }
}
