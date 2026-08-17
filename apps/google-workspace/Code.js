const MINDS_MCP_ENDPOINT = "https://getminds.ai/mcp";

function onOpen() {
  SpreadsheetApp.getUi()
    .createAddonMenu()
    .addItem("Set Minds API key", "setMindsApiKey")
    .addItem("Ask a Group from selected rows", "askGroupFromSelection")
    .addToUi();
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
  if (!key) throw new Error("API key cannot be empty");
  PropertiesService.getUserProperties().setProperty("MINDS_API_KEY", key);
  ui.alert("Minds API key saved.");
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
  return {
    result: payload.result,
    sessionId: response.getHeaders()["Mcp-Session-Id"] || sessionId,
  };
}

function callTool_(name, args) {
  const apiKey = PropertiesService.getUserProperties().getProperty("MINDS_API_KEY");
  if (!apiKey) throw new Error("Set your Minds API key first");
  const initialized = mcpRequest_(apiKey, null, 1, "initialize", {
    protocolVersion: "2025-06-18",
    capabilities: {},
    clientInfo: { name: "minds-google-sheets", version: "0.1.0" },
  });
  const response = mcpRequest_(apiKey, initialized.sessionId, 2, "tools/call", {
    name,
    arguments: args,
  });
  if (response.result.isError) throw new Error("Minds returned a tool error");
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
  const range = SpreadsheetApp.getActiveRange();
  if (!range) throw new Error("Select one or more question rows first");
  const questions = range.getDisplayValues().map((row) => row[0].trim()).filter(Boolean);
  if (!questions.length) throw new Error("The first selected column contains no questions");
  if (questions.length > 25) throw new Error("Run at most 25 questions at a time");

  const groupPrompt = ui.prompt("Minds Group", "Enter an existing Group ID", ui.ButtonSet.OK_CANCEL);
  if (groupPrompt.getSelectedButton() !== ui.Button.OK) return;
  const groupId = groupPrompt.getResponseText().trim();
  if (!groupId) return;
  const confirmation = ui.alert(
    "Run research?",
    `This will ask ${questions.length} question(s) to the selected Minds Group and may consume plan allowance.`,
    ui.ButtonSet.YES_NO,
  );
  if (confirmation !== ui.Button.YES) return;

  const output = questions.map((question) => [resultText_(callTool_("ask_group", { groupId, question }))]);
  range.offset(0, range.getNumColumns(), output.length, 1).setValues(output);
  ui.alert(`Completed ${output.length} Minds question(s).`);
}
