import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import {
  OAUTH_AUTHORIZATION_URL,
  OAUTH_SCOPES,
  OAUTH_SECURITY_NAME,
  OAUTH_TOKEN_URL,
} from "./sync-openapi.mjs";

const swaggerPath = fileURLToPath(new URL("../apiDefinition.swagger.json", import.meta.url));
const propertiesPath = fileURLToPath(new URL("../apiProperties.json", import.meta.url));
const requiredOperations = new Map([
  ["GET /studies", "ListStudies"],
  ["POST /studies", "CreateStudy"],
  ["GET /studies/{studyId}", "GetStudy"],
  ["POST /studies/{studyId}/research-plans/preview", "PreviewStudyResearchPlan"],
  ["GET /studies/{studyId}/summary", "GetStudySummary"],
]);

function fail(message) {
  throw new Error(`Power Platform connector validation failed: ${message}`);
}

function walk(value, visit) {
  if (!value || typeof value !== "object") return;
  visit(value);
  for (const child of Object.values(value)) walk(child, visit);
}

const PLACEHOLDER_CLIENT_ID = /^(|.*(replace|placeholder|client[ _-]?id|todo|x{4,}).*)$/i;

function sameMembers(left = [], right = []) {
  return left.length === right.length && left.every((value) => right.includes(value));
}

function validateOAuth(swagger, properties, { submission }) {
  const scopes = Object.keys(OAUTH_SCOPES);
  const definition = swagger.securityDefinitions?.[OAUTH_SECURITY_NAME];
  if (Object.keys(swagger.securityDefinitions || {}).length !== 1 || !definition) {
    fail(`securityDefinitions must contain only ${OAUTH_SECURITY_NAME}`);
  }
  if (definition.type !== "oauth2" || definition.flow !== "accessCode") fail("security must be OAuth 2.0 authorization code");
  if (definition.authorizationUrl !== OAUTH_AUTHORIZATION_URL || definition.tokenUrl !== OAUTH_TOKEN_URL) {
    fail("OAuth endpoints drifted from the Minds authorization server");
  }
  if (!sameMembers(Object.keys(definition.scopes || {}), scopes)) fail("swagger OAuth scopes drifted");
  const requirements = [swagger.security, ...Object.values(swagger.paths || {}).flatMap((item) => Object.values(item).map((op) => op.security))];
  for (const requirement of requirements) {
    if (requirement?.length !== 1 || !sameMembers(requirement[0][OAUTH_SECURITY_NAME], scopes)) {
      fail("every operation must require the connector OAuth scopes");
    }
  }

  const parameters = properties.properties?.connectionParameters || {};
  if (Object.keys(parameters).length !== 1 || parameters.token?.type !== "oauthSetting") {
    fail("the only connection parameter must be the OAuth token");
  }
  const settings = parameters.token.oAuthSettings || {};
  if (settings.identityProvider !== "oauth2generic") fail("OAuth must use the oauth2generic identity provider");
  if (settings.redirectMode !== "GlobalPerConnector") fail("OAuth must use the per-connector redirect URI");
  if (settings.clientSecret) fail("apiProperties must never contain a client secret");
  if (!sameMembers(settings.scopes, scopes)) fail("apiProperties OAuth scopes drifted from the swagger definition");

  const custom = Object.fromEntries(Object.entries(settings.customParameters || {}).map(([key, value]) => [key, value?.value]));
  if (custom.authorizationUrlTemplate !== OAUTH_AUTHORIZATION_URL) fail("authorization URL drifted");
  if (custom.tokenUrlTemplate !== OAUTH_TOKEN_URL || custom.refreshUrlTemplate !== OAUTH_TOKEN_URL) fail("token URL drifted");
  if (custom.scopeListDelimiter !== " ") fail("scopes must be space-delimited");
  const query = new URLSearchParams(custom.authorizationUrlQueryStringTemplate || "");
  const expectedQuery = {
    client_id: "{ClientId}",
    response_type: "code",
    redirect_uri: "{RedirectUrl}",
    scope: "{Scopes}",
    state: "{State}",
    code_challenge: "{CodeChallenge}",
    code_challenge_method: "S256",
  };
  for (const [key, value] of Object.entries(expectedQuery)) {
    if (query.get(key) !== value) fail(`authorization query must send ${key}=${value}`);
  }
  const tokenBody = new URLSearchParams(custom.tokenBodyTemplate || "");
  const expectedToken = {
    client_id: "{ClientId}",
    grant_type: "authorization_code",
    code: "{Code}",
    redirect_uri: "{RedirectUrl}",
    code_verifier: "{CodeVerifier}",
  };
  for (const [key, value] of Object.entries(expectedToken)) {
    if (tokenBody.get(key) !== value) fail(`token request must send ${key}=${value}`);
  }
  const refreshBody = new URLSearchParams(custom.refreshBodyTemplate || "");
  if (refreshBody.get("grant_type") !== "refresh_token" || refreshBody.get("refresh_token") !== "{RefreshToken}"
    || refreshBody.get("client_id") !== "{ClientId}") {
    fail("refresh request must send client_id, grant_type=refresh_token and the refresh token");
  }
  for (const template of [custom.tokenBodyTemplate, custom.refreshBodyTemplate]) {
    if (/client_secret/i.test(template || "")) fail("the Minds OAuth client is public; do not send a client secret");
  }

  if (submission && (typeof settings.clientId !== "string" || PLACEHOLDER_CLIENT_ID.test(settings.clientId))) {
    fail("submission requires the registered Minds OAuth client ID in apiProperties.json");
  }
}

export function validateConnector(swagger, properties, { submission = false } = {}) {
  if (swagger.swagger !== "2.0") fail("apiDefinition must be Swagger 2.0");
  if (swagger.host !== "getminds.ai" || swagger.basePath !== "/api/v1") fail("canonical host or base path drifted");
  if (swagger.info?.title !== "Minds Market Research") fail("public connector title drifted");
  if (JSON.stringify(swagger).includes("Minds AI")) fail("public metadata must use Minds");
  const metadata = Object.fromEntries((swagger["x-ms-connector-metadata"] || []).map((entry) => [entry.propertyName, entry.propertyValue]));
  for (const name of ["Website", "Privacy policy", "Categories"]) {
    if (!metadata[name]) fail(`x-ms-connector-metadata needs ${name}`);
  }
  if (!swagger.info?.contact?.url) fail("info.contact needs a support URL");

  const actualOperations = new Map();
  for (const [path, pathItem] of Object.entries(swagger.paths || {})) {
    for (const [method, operation] of Object.entries(pathItem)) {
      const key = `${method.toUpperCase()} ${path}`;
      actualOperations.set(key, operation.operationId);
      if (!operation.summary || !operation.description) fail(`${key} needs a summary and description`);
      // Certification: summaries are short phrases of letters, digits, spaces and parentheses.
      if (operation.summary.length > 80 || !/^[A-Za-z0-9 ()]+$/.test(operation.summary)) {
        fail(`${key} summary must be at most 80 alphanumeric characters`);
      }
      if (!/[.!?]$/.test(operation.description.trim())) fail(`${key} description must end with punctuation`);
      const successResponse = Object.entries(operation.responses || {}).find(([status]) => /^2\d\d$/.test(status));
      if (!successResponse?.[1]?.schema) fail(`${key} needs a successful response schema`);
      for (const parameter of operation.parameters || []) {
        const fields = parameter.in === "body" ? Object.entries(parameter.schema?.properties || {}) : [[parameter.name, parameter]];
        for (const [name, field] of fields) {
          if (!field["x-ms-summary"] || !/[.!?]$/.test(field.description?.trim() || "")) {
            fail(`${key} parameter ${name} needs an x-ms-summary and a full-sentence description`);
          }
        }
      }
      walk(successResponse[1].schema, (schema) => {
        if (schema.type === "object" && !schema.properties && !schema.$ref && !schema.additionalProperties && !schema.allOf) {
          fail(`${key} has an empty object response schema`);
        }
      });
    }
  }
  if (actualOperations.size !== requiredOperations.size) fail(`expected ${requiredOperations.size} operations, found ${actualOperations.size}`);
  for (const [key, operationId] of requiredOperations) {
    if (actualOperations.get(key) !== operationId) fail(`missing ${key} with operationId ${operationId}`);
  }

  if (!swagger.paths["/studies"].get.parameters.some((parameter) => parameter.name === "limit")) {
    fail("ListStudies must expose canonical pagination parameters");
  }
  if (!swagger.paths["/studies"].post.responses["201"]?.schema) fail("CreateStudy must retain the canonical 201 response");
  if (!Object.keys(swagger.definitions || {}).length) fail("canonical response definitions are missing");

  walk(swagger, (value) => {
    if (Array.isArray(value.enum) && value.enum.length === 0) fail("empty enum found");
    if (value.requestBody || value.content?.["application/json"]) fail("OpenAPI 3 fields remain in Swagger 2 output");
    if (typeof value.$ref === "string" && value.$ref.startsWith("#/components/")) fail("OpenAPI 3 reference remains");
  });

  if (properties.properties?.publisher !== "Minds" || properties.properties?.stackOwner !== "Minds") {
    fail("publisher and stack owner must be Minds");
  }
  if (properties.properties?.iconBrandColor !== "#FFDD00") fail("icon brand color must match the Minds yellow");
  validateOAuth(swagger, properties, { submission });

  return actualOperations.size;
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  const swagger = JSON.parse(await readFile(swaggerPath, "utf8"));
  const properties = JSON.parse(await readFile(propertiesPath, "utf8"));
  const submission = process.argv.includes("--submission");
  const count = validateConnector(swagger, properties, { submission });
  console.log(`Power Platform connector is valid with ${count} bounded operations${submission ? " and is ready for submission" : ""}.`);
}
