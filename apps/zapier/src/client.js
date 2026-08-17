const API_BASE_URL = "https://getminds.ai/api/v1";

const addAuthorizationHeader = (request, _z, bundle) => {
  request.headers = request.headers || {};
  request.headers.Authorization = `Bearer ${bundle.authData.apiKey}`;
  request.headers.Accept = "application/json";
  return request;
};

const request = async (z, options) => {
  const response = await z.request({
    ...options,
    url: `${API_BASE_URL}${options.path}`,
  });
  response.throwForStatus();
  return response.data;
};

const unwrapData = (payload) => {
  if (!payload || typeof payload !== "object" || !("data" in payload)) {
    throw new Error("Minds returned an unexpected response.");
  }
  return payload.data;
};

const toZapierRecord = (value, fallbackId) => {
  const record = value && typeof value === "object" ? value : { value };
  const id = record.id || record.panelId || record.draftPlanId || fallbackId;
  return {
    ...record,
    id: String(id),
  };
};

module.exports = {
  API_BASE_URL,
  addAuthorizationHeader,
  request,
  toZapierRecord,
  unwrapData,
};
