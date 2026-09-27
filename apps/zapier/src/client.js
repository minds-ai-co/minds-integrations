const API_BASE_URL = "https://getminds.ai/api/v1";
const API_KEY_SETTINGS_URL = "https://getminds.ai/?settings=api";
const PAGE_SIZE = 100;

const addAuthorizationHeader = (request, _z, bundle) => {
  request.headers = request.headers || {};
  if (bundle.authData && bundle.authData.apiKey) {
    request.headers.Authorization = `Bearer ${bundle.authData.apiKey}`;
  }
  request.headers.Accept = "application/json";
  return request;
};

const errorMessage = (response) => {
  const body = response.data || response.json;
  if (body && typeof body === "object") {
    return body.message || body.statusMessage || null;
  }
  return null;
};

// Turns Minds API errors into messages a Zap owner can act on. Runs before
// zapier-platform-core's automatic throwForStatus.
const handleErrors = (response, z) => {
  if (response.status === 401) {
    throw new z.errors.Error(
      `Minds rejected the API key. Create a new key in Minds API settings (${API_KEY_SETTINGS_URL}) and reconnect.`,
      "AuthenticationError",
      response.status,
    );
  }
  // Callers that opt out of status errors (for example a search treating 404
  // as "not found") inspect the status themselves.
  if (response.skipThrowForStatus) return response;
  if (response.status === 429) {
    throw new z.errors.ThrottledError("Minds rate limit reached. Zapier will retry.", 60);
  }
  if (response.status >= 400) {
    const detail = errorMessage(response) || `HTTP ${response.status}`;
    throw new z.errors.Error(`Minds API error: ${detail}`, "MindsApiError", response.status);
  }
  return response;
};

const request = async (z, options) => {
  const { path, ...rest } = options;
  const response = await z.request({ ...rest, url: `${API_BASE_URL}${path}` });
  if (!rest.skipThrowForStatus) response.throwForStatus();
  return rest.skipThrowForStatus ? response : response.data;
};

const unwrapData = (payload) => {
  if (!payload || typeof payload !== "object" || !("data" in payload)) {
    throw new Error("Minds returned an unexpected response.");
  }
  return payload.data;
};

const toZapierRecord = (value, fallbackId) => {
  const record = value && typeof value === "object" ? value : { value };
  const id = record.id || record.draftPlanId || fallbackId;
  return {
    ...record,
    id: String(id),
  };
};

// Zapier dynamic dropdowns and polling triggers read at most one page per call.
const pageParams = (bundle) => ({
  limit: PAGE_SIZE,
  offset: ((bundle.meta && bundle.meta.page) || 0) * PAGE_SIZE,
});

module.exports = {
  API_BASE_URL,
  API_KEY_SETTINGS_URL,
  PAGE_SIZE,
  addAuthorizationHeader,
  handleErrors,
  pageParams,
  request,
  toZapierRecord,
  unwrapData,
};
