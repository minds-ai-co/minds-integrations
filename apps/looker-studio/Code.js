const cc = DataStudioApp.createCommunityConnector();
const API_ROOT = "https://getminds.ai";

function getAuthType() {
  return cc.newAuthTypeResponse().setAuthType(cc.AuthType.KEY).build();
}

function setCredentials(request) {
  PropertiesService.getUserProperties().setProperty("MINDS_API_KEY", request.key.trim());
  return { errorCode: "NONE" };
}

function resetAuth() {
  PropertiesService.getUserProperties().deleteProperty("MINDS_API_KEY");
}

function isAuthValid() {
  return Boolean(PropertiesService.getUserProperties().getProperty("MINDS_API_KEY"));
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
  const apiKey = PropertiesService.getUserProperties().getProperty("MINDS_API_KEY");
  if (!apiKey) throw new Error("Minds API key is not configured");
  const panelId = request.configParams.panelId;
  if (!panelId) throw new Error("Panel ID is required");
  const response = UrlFetchApp.fetch(`${API_ROOT}/api/v1/panels/${encodeURIComponent(panelId)}/analytics`, {
    method: "get",
    headers: { Authorization: `Bearer ${apiKey}`, Accept: "application/json" },
    muteHttpExceptions: true,
  });
  if (response.getResponseCode() >= 400) throw new Error(`Minds returned HTTP ${response.getResponseCode()}`);
  const payload = JSON.parse(response.getContentText());
  const requestedIds = request.fields.map((field) => field.name);
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
