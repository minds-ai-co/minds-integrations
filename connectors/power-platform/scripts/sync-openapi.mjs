import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const DEFAULT_SOURCE = "https://getminds.ai/_openapi-3.0.json";
const OUTPUT = fileURLToPath(new URL("../apiDefinition.swagger.json", import.meta.url));

const operationSelection = [
  ["/api/v1/panels", "get", "ListPanels"],
  ["/api/v1/panels", "post", "CreatePanel"],
  ["/api/v1/panels/{panelId}", "get", "GetPanel"],
  ["/api/v1/panels/{panelId}/research-plans/preview", "post", "PreviewPanelResearchPlan"],
  ["/api/v1/panels/{panelId}/summary", "get", "GetPanelSummary"],
];

function convertReference(reference) {
  return reference.replace("#/components/schemas/", "#/definitions/");
}

export function convertSchema(schema) {
  if (schema === true || schema === false || schema == null) return schema;
  if (Array.isArray(schema)) return schema.map(convertSchema);
  if (typeof schema !== "object") return schema;

  if (schema.$ref) return { $ref: convertReference(schema.$ref) };

  const union = schema.anyOf || schema.oneOf;
  if (union) {
    const nonNull = union.filter((entry) => entry && entry.type !== "null");
    if (nonNull.length === 1) {
      return { ...convertSchema(nonNull[0]), ...(schema.description ? { description: schema.description } : {}) };
    }
  }

  const converted = {};
  const scalarKeys = [
    "title",
    "description",
    "format",
    "default",
    "minimum",
    "maximum",
    "exclusiveMinimum",
    "exclusiveMaximum",
    "minLength",
    "maxLength",
    "minItems",
    "maxItems",
    "pattern",
    "uniqueItems",
    "readOnly",
  ];

  let type = schema.type;
  if (Array.isArray(type)) type = type.find((candidate) => candidate !== "null");
  if (type && type !== "null") converted.type = type;
  for (const key of scalarKeys) {
    if (schema[key] !== undefined) converted[key] = schema[key];
  }
  if (schema.const !== undefined) converted.enum = [schema.const];
  if (Array.isArray(schema.enum) && schema.enum.length) converted.enum = schema.enum;
  if (Array.isArray(schema.required) && schema.required.length) converted.required = schema.required;
  if (schema.items) converted.items = convertSchema(schema.items);
  if (schema.properties) {
    converted.properties = Object.fromEntries(
      Object.entries(schema.properties).map(([name, value]) => [name, convertSchema(value)]),
    );
  }
  if (schema.additionalProperties !== undefined) {
    converted.additionalProperties =
      typeof schema.additionalProperties === "object"
        ? convertSchema(schema.additionalProperties)
        : schema.additionalProperties;
  }
  if (Array.isArray(schema.allOf)) converted.allOf = schema.allOf.map(convertSchema);

  return converted;
}

function convertParameter(parameter) {
  const converted = {
    name: parameter.name,
    in: parameter.in,
    required: parameter.in === "path" ? true : Boolean(parameter.required),
  };
  if (parameter.description) converted.description = parameter.description;
  Object.assign(converted, convertSchema(parameter.schema || {}));
  return converted;
}

function convertResponse(response) {
  const converted = { description: response.description || "Response" };
  const schema = response.content?.["application/json"]?.schema;
  if (schema) converted.schema = convertSchema(schema);
  return converted;
}

function collectSchemaNames(value, names = new Set()) {
  if (!value || typeof value !== "object") return names;
  if (typeof value.$ref === "string" && value.$ref.startsWith("#/components/schemas/")) {
    names.add(value.$ref.slice("#/components/schemas/".length));
  }
  for (const child of Object.values(value)) collectSchemaNames(child, names);
  return names;
}

export function buildSwagger(openapi) {
  const paths = {};
  const referencedSchemas = new Set();

  for (const [sourcePath, method, operationId] of operationSelection) {
    const sourceOperation = openapi.paths?.[sourcePath]?.[method];
    if (!sourceOperation) throw new Error(`Missing canonical operation ${method.toUpperCase()} ${sourcePath}`);
    collectSchemaNames(sourceOperation, referencedSchemas);

    const targetPath = sourcePath.replace(/^\/api\/v1/, "") || "/";
    paths[targetPath] ||= {};
    const operation = {
      operationId,
      summary: sourceOperation.summary,
      description: sourceOperation.description,
      tags: sourceOperation.tags || ["Panels"],
      "x-ms-visibility": "important",
      parameters: (sourceOperation.parameters || []).map(convertParameter),
      responses: Object.fromEntries(
        Object.entries(sourceOperation.responses || {}).map(([status, response]) => [status, convertResponse(response)]),
      ),
      security: [{ apiKey: [] }],
    };
    const bodySchema = sourceOperation.requestBody?.content?.["application/json"]?.schema;
    if (bodySchema) {
      operation.parameters.push({
        name: "body",
        in: "body",
        required: Boolean(sourceOperation.requestBody.required),
        schema: convertSchema(bodySchema),
      });
    }
    paths[targetPath][method] = operation;
  }

  const definitions = {};
  const pending = [...referencedSchemas];
  while (pending.length) {
    const name = pending.shift();
    if (definitions[name]) continue;
    const schema = openapi.components?.schemas?.[name];
    if (!schema) throw new Error(`Missing canonical schema ${name}`);
    definitions[name] = convertSchema(schema);
    for (const dependency of collectSchemaNames(schema)) {
      if (!definitions[dependency]) pending.push(dependency);
    }
  }

  return {
    swagger: "2.0",
    info: {
      title: "Minds Market Research",
      description: "Create and review synthetic market research Panels with Minds.",
      version: "1.0",
    },
    host: "getminds.ai",
    basePath: "/api/v1",
    schemes: ["https"],
    consumes: ["application/json"],
    produces: ["application/json"],
    securityDefinitions: {
      apiKey: {
        type: "apiKey",
        in: "header",
        name: "Authorization",
        description: "Enter the complete value: Bearer minds_..._key",
      },
    },
    security: [{ apiKey: [] }],
    paths,
    definitions,
  };
}

async function loadSource(source) {
  if (/^https:\/\//.test(source)) {
    const response = await fetch(source, { headers: { Accept: "application/json" } });
    if (!response.ok) throw new Error(`OpenAPI source returned HTTP ${response.status}`);
    return response.json();
  }
  return JSON.parse(await readFile(source, "utf8"));
}

async function main() {
  const source = process.env.MINDS_OPENAPI_SOURCE || DEFAULT_SOURCE;
  const openapi = await loadSource(source);
  const swagger = buildSwagger(openapi);
  await writeFile(OUTPUT, `${JSON.stringify(swagger, null, 2)}\n`);
  console.log(`Wrote ${operationSelection.length} operations from ${source} to ${OUTPUT}`);
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  await main();
}
