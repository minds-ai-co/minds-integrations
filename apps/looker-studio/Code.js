const cc = DataStudioApp.createCommunityConnector();
const API_ROOT = "https://getminds.ai";
const MINDS_API_KEY_PROPERTY = "MINDS_API_KEY";

function throwUserError_(userMessage, debugMessage) {
  cc.newUserError().setText(userMessage).setDebugText(debugMessage || userMessage).throwException();
}

function getAuthType() {
  return cc.newAuthTypeResponse().setAuthType(cc.AuthType.KEY).build();
}

function setCredentials(request) {
  const key = request && request.key ? request.key.trim() : "";
  if (!key) return { errorCode: "INVALID_CREDENTIALS" };
  let response;
  try {
    response = UrlFetchApp.fetch(`${API_ROOT}/api/v1/panels?limit=1`, {
      method: "get",
      headers: { Authorization: `Bearer ${key}`, Accept: "application/json" },
      muteHttpExceptions: true,
    });
  } catch (error) {
    return { errorCode: "INVALID_CREDENTIALS" };
  }
  if (response.getResponseCode() >= 400) return { errorCode: "INVALID_CREDENTIALS" };
  PropertiesService.getUserProperties().setProperty(MINDS_API_KEY_PROPERTY, key);
  return { errorCode: "NONE" };
}

function resetAuth() {
  PropertiesService.getUserProperties().deleteProperty(MINDS_API_KEY_PROPERTY);
}

function isAuthValid() {
  return Boolean(PropertiesService.getUserProperties().getProperty(MINDS_API_KEY_PROPERTY));
}

function getConfig() {
  const config = cc.getConfig();
  config.newInfo().setId("instructions").setText("Enter the ID of an existing Minds Panel.");
  config.newTextInput().setId("panelId").setName("Panel ID").setPlaceholder("Panel UUID").setAllowOverride(true);
  config.setDateRangeRequired(false);
  return config.build();
}

function fields_() {
  const fields = cc.getFields();
  const types = cc.FieldType;
  fields.newDimension().setId("panel_id").setName("Panel ID").setType(types.TEXT);
  fields.newDimension().setId("metric_name").setName("Metric").setType(types.TEXT);
  fields.newDimension().setId("value_json").setName("Value (JSON)").setType(types.TEXT);
  return fields;
}

function getSchema() {
  return { schema: fields_().build() };
}

function getData(request) {
  const apiKey = PropertiesService.getUserProperties().getProperty(MINDS_API_KEY_PROPERTY);
  if (!apiKey) {
    throwUserError_("Connect your Minds account with an API key before loading data.", "Missing Minds API key");
  }
  const panelId = request && request.configParams ? String(request.configParams.panelId || "").trim() : "";
  if (!panelId) {
    throwUserError_("Enter an existing Minds Panel ID.", "Missing panelId config parameter");
  }
  const requestedIds = request && request.fields ? request.fields.map((field) => field.name) : [];
  const supportedIds = ["panel_id", "metric_name", "value_json"];
  if (!requestedIds.length || requestedIds.some((id) => supportedIds.indexOf(id) === -1)) {
    throwUserError_("Refresh the Minds data source fields and try again.", "Unsupported or empty field request");
  }

  let response;
  try {
    response = UrlFetchApp.fetch(
      `${API_ROOT}/api/v1/panels/${encodeURIComponent(panelId)}/analytics`,
      {
        method: "get",
        headers: { Authorization: `Bearer ${apiKey}`, Accept: "application/json" },
        muteHttpExceptions: true,
      },
    );
  } catch (error) {
    throwUserError_(
      "Minds could not load this Panel right now. Try again, or contact support if the problem continues.",
      `Network error while fetching Panel analytics: ${error}`,
    );
  }

  const status = response.getResponseCode();
  if (status === 401 || status === 403) {
    throwUserError_(
      "Your Minds API key is no longer valid. Reconnect the data source with a current key.",
      `Minds returned HTTP ${status}`,
    );
  }
  if (status === 404) {
    throwUserError_("That Minds Panel was not found. Check the Panel ID and try again.", "Minds returned HTTP 404");
  }
  if (status >= 400) {
    throwUserError_(
      "Minds could not load this Panel right now. Try again, or contact support if the problem continues.",
      `Minds returned HTTP ${status}`,
    );
  }

  let payload;
  try {
    payload = JSON.parse(response.getContentText());
  } catch (error) {
    throwUserError_(
      "Minds returned data that Looker Studio could not read. Try again, or contact support if the problem continues.",
      `Invalid analytics JSON: ${error}`,
    );
  }
  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    throwUserError_(
      "Minds returned data that Looker Studio could not read. Try again, or contact support if the problem continues.",
      "Analytics response was not an object",
    );
  }
  const rows = Object.keys(payload).map((metric) => {
    const values = {
      panel_id: panelId,
      metric_name: metric,
      value_json: JSON.stringify(payload[metric]),
    };
    return { values: requestedIds.map((id) => values[id]) };
  });
  return { schema: fields_().forIds(requestedIds).build(), rows };
}

function isAdminUser() {
  return false;
}
