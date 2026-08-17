import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const swaggerPath = fileURLToPath(new URL("../apiDefinition.swagger.json", import.meta.url));
const propertiesPath = fileURLToPath(new URL("../apiProperties.json", import.meta.url));
const requiredOperations = new Map([
  ["GET /panels", "ListPanels"],
  ["POST /panels", "CreatePanel"],
  ["GET /panels/{panelId}", "GetPanel"],
  ["POST /panels/{panelId}/research-plans/preview", "PreviewPanelResearchPlan"],
  ["GET /panels/{panelId}/summary", "GetPanelSummary"],
]);

function fail(message) {
  throw new Error(`Power Platform connector validation failed: ${message}`);
}

function walk(value, visit) {
  if (!value || typeof value !== "object") return;
  visit(value);
  for (const child of Object.values(value)) walk(child, visit);
}

const swagger = JSON.parse(await readFile(swaggerPath, "utf8"));
const properties = JSON.parse(await readFile(propertiesPath, "utf8"));

if (swagger.swagger !== "2.0") fail("apiDefinition must be Swagger 2.0");
if (swagger.host !== "getminds.ai" || swagger.basePath !== "/api/v1") fail("canonical host or base path drifted");
if (swagger.info?.title !== "Minds Market Research") fail("public connector title drifted");
if (JSON.stringify(swagger).includes("Minds AI")) fail("public metadata must use Minds");

const actualOperations = new Map();
for (const [path, pathItem] of Object.entries(swagger.paths || {})) {
  for (const [method, operation] of Object.entries(pathItem)) {
    const key = `${method.toUpperCase()} ${path}`;
    actualOperations.set(key, operation.operationId);
    if (!operation.summary || !operation.description) fail(`${key} needs a summary and description`);
    const successResponse = Object.entries(operation.responses || {}).find(([status]) => /^2\d\d$/.test(status));
    if (!successResponse?.[1]?.schema) fail(`${key} needs a successful response schema`);
  }
}
if (actualOperations.size !== requiredOperations.size) fail(`expected ${requiredOperations.size} operations, found ${actualOperations.size}`);
for (const [key, operationId] of requiredOperations) {
  if (actualOperations.get(key) !== operationId) fail(`missing ${key} with operationId ${operationId}`);
}

if (!swagger.paths["/panels"].get.parameters.some((parameter) => parameter.name === "limit")) {
  fail("ListPanels must expose canonical pagination parameters");
}
if (!swagger.paths["/panels"].post.responses["201"]?.schema) fail("CreatePanel must retain the canonical 201 response");
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
if (properties.properties?.connectionParameters?.apiKey?.type !== "securestring") fail("API key must remain a secure string");

console.log(`Power Platform connector is valid with ${actualOperations.size} bounded operations.`);
