const MINDS_MCP_ENDPOINT = "https://getminds.ai/mcp";
const MINDS_API_KEY_PROPERTY = "MINDS_API_KEY";
const MINDS_MAX_BATCH_SIZE = 25;

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
      '<p><a href="https://getminds.ai/contact" target="_blank">Support</a></p>' +
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
    const output = questionsByRow.map((question) => {
      if (!question) return [""];
      const result = callToolInSession_(session, "ask_group", { groupId, question });
      return [resultText_(result)];
    });
    outputRange.setValues(output);
    ui.alert(`Completed ${questions.length} Minds question(s). Results are in the next column.`);
  } catch (error) {
    showMindsError_(error && error.message ? error.message : "The Minds request could not be completed.");
  }
}
