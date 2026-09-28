import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

// The OpenAPI 3.1 document is canonical; the 3.0 downgrade endpoint is not maintained.
const DEFAULT_SOURCE = "https://getminds.ai/_openapi.json";
const OUTPUT = fileURLToPath(new URL("../apiDefinition.swagger.json", import.meta.url));

// Minds' own OAuth 2.0 authorization server, as published at
// https://getminds.ai/.well-known/oauth-authorization-server. The same values
// drive apiProperties.json; validate.mjs asserts that the two cannot drift.
// Matches the name the connector designer generates, so its editor finds no semantic errors.
export const OAUTH_SECURITY_NAME = "oauth2-auth";
export const OAUTH_AUTHORIZATION_URL = "https://getminds.ai/oauth/authorize";
export const OAUTH_TOKEN_URL = "https://getminds.ai/oauth/token";
export const OAUTH_SCOPES = {
  "flows:read": "Read your Studies, their messages, and summaries.",
  "flows:write": "Create Studies and preview research plans.",
  "sparks:read": "Read the Minds and Audiences attached to your Studies.",
};

const operationSelection = [
  ["/api/v1/studies", "get", "ListStudies", "List Studies"],
  ["/api/v1/studies", "post", "CreateStudy", "Create a Study"],
  ["/api/v1/studies/{studyId}", "get", "GetStudy", "Get a Study"],
  ["/api/v1/studies/{studyId}/research-plans/preview", "post", "PreviewStudyResearchPlan", "Preview a Study research plan"],
  ["/api/v1/studies/{studyId}/summary", "get", "GetStudySummary", "Get a Study summary"],
];

function convertReference(reference) {
  return reference.replace("#/components/schemas/", "#/definitions/");
}

const STRING_FORMATS_NOT_INFERRED = new Set(["uuid", "uri", "date-time", "date", "email"]);

export function convertSchema(schema) {
  if (schema === true || schema === false || schema == null) return schema;
  if (Array.isArray(schema)) return schema.map(convertSchema);
  if (typeof schema !== "object") return schema;

  if (schema.$ref) return { $ref: convertReference(schema.$ref) };

  const union = schema.anyOf || schema.oneOf;
  if (union) {
    const nonNull = union.filter((entry) => entry && entry.type !== "null");
    if (nonNull.length === 1) {
      return {
        ...convertSchema(nonNull[0]),
        ...(schema.description ? { description: schema.description } : {}),
        ...(nonNull.length < union.length ? { "x-nullable": true } : {}),
      };
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
  if (schema.nullable === true || (Array.isArray(schema.type) && schema.type.includes("null"))) converted["x-nullable"] = true;
  for (const key of scalarKeys) {
    if (schema[key] !== undefined) converted[key] = schema[key];
  }
  // The connector test console compares declared formats with the formats it
  // infers from live values: it never infers uuid, uri or date-time for strings
  // and always reports integers as int32. Align the declarations so responses
  // validate without "type mismatch" errors, which certification does not allow.
  if (converted.type === "string" && STRING_FORMATS_NOT_INFERRED.has(converted.format)) delete converted.format;
  if (converted.type === "integer" && !converted.format) converted.format = "int32";
  if (schema.const !== undefined) converted.enum = [schema.const];
  if (Array.isArray(schema.enum) && schema.enum.length) converted.enum = schema.enum;
  if (Array.isArray(schema.required) && schema.required.length) converted.required = schema.required;
  if (schema.items) converted.items = convertSchema(schema.items);
  if (schema.properties) {
    converted.properties = Object.fromEntries(
      Object.entries(schema.properties).map(([name, value]) => [name, convertSchema(value)]),
    );
  }
  // The flow runtime rejects null for a required property even when it is
  // marked x-nullable, so nullable properties are never listed as required.
  if (converted.required && converted.properties) {
    converted.required = converted.required.filter((name) => !converted.properties[name]?.["x-nullable"]);
    if (!converted.required.length) delete converted.required;
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

// The canonical document types the summary payload only as `object`. Power
// Platform certification rejects empty response schemas, so the connector
// documents the persisted-summary shape returned by readStudyConversationSummary.
export const STUDY_SUMMARY_DATA_SCHEMA = {
  type: "object",
  required: ["revision", "isGenerating", "messageCount", "newMessageCount", "isStale", "hasEnoughContent"],
  properties: {
    // No `type`: the test console reports a null object as a string type mismatch.
    summary: {
      "x-nullable": true,
      description: "The persisted summary, or null when none has been generated yet.",
      properties: {
        content: { type: "string", description: "Summary text in Markdown." },
        length: { type: "string", description: "Requested summary length." },
        coveredMessageCount: { type: "integer", format: "int32", description: "Number of messages the summary covers." },
        coveredUpToMessageId: { type: "string", description: "ID of the last message the summary covers." },
        updatedAt: { type: "string", description: "When the summary was last updated." },
      },
    },
    revision: { type: "integer", format: "int32", description: "Summary revision number." },
    isGenerating: { type: "boolean", description: "Whether a summary is being generated right now." },
    messageCount: { type: "integer", format: "int32", description: "Number of public messages in the Study." },
    newMessageCount: { type: "integer", format: "int32", description: "Messages added since the summary was generated." },
    isStale: { type: "boolean", description: "Whether newer messages are not yet covered by the summary." },
    hasEnoughContent: { type: "boolean", description: "Whether the Study has enough messages to summarize." },
  },
};

// Maker-facing labels. Certification requires a summary (x-ms-summary) and a
// full-sentence description for every parameter; the canonical document omits
// some of them. `visibility` follows the connector extension of the same name.
const PARAMETER_PRESENTATION = {
  limit: { summary: "Limit", description: "Maximum number of Studies to return." },
  offset: { summary: "Offset", description: "Number of Studies to skip before returning results." },
  studyId: { summary: "Study ID", description: "The ID of the Study." },
};

const BODY_PRESENTATION = {
  CreateStudy: {
    name: { summary: "Study name", description: "Name of the new Study." },
    audienceIds: { summary: "Audience IDs", description: "IDs of existing Audiences to attach to the Study." },
    audienceConfigs: {
      summary: "New Audiences",
      description: "Audiences to create from existing Minds and attach to the Study.",
      visibility: "advanced",
      items: {
        name: { summary: "Audience name", description: "Name of the new Audience." },
        mindIds: { summary: "Mind IDs", description: "IDs of the Minds in the new Audience." },
      },
    },
    isLinkSharingEnabled: {
      summary: "Enable link sharing",
      description: "Whether anyone with the link can view the Study and its Audiences.",
      visibility: "advanced",
    },
  },
  // The canonical preview request also exposes draft-editing and experimental
  // controls. The connector keeps the fields needed to start and revise a plan.
  PreviewStudyResearchPlan: {
    request: {
      summary: "Research request",
      description: "What you want to learn. Required when you start a new draft plan.",
      visibility: "important",
    },
    studyLocale: { summary: "Study language", description: "Language used for the plan and its eventual study output." },
    source: {
      summary: "Main source",
      description: "The main material that respondents see, such as a prompt, website, image, video or document.",
      visibility: "advanced",
      properties: {
        kind: { summary: "Source type", description: "The type of the main source." },
        label: { summary: "Source label", description: "A short name for the main source." },
        url: { summary: "Source URL", description: "Public URL of the main source." },
        mimeType: { summary: "Source MIME type", description: "MIME type of the main source, for example image/png." },
        content: { summary: "Source content", description: "Exact text that respondents see, for a prompt source." },
      },
    },
    draftPlanId: {
      summary: "Draft plan ID",
      description: "ID of an existing draft plan to revise. Leave empty to start a new draft.",
      visibility: "advanced",
    },
    revision: {
      summary: "Draft revision",
      description: "Current revision number of the draft plan you revise.",
      visibility: "advanced",
    },
    refinement: {
      summary: "Refinement",
      description: "Instructions for revising the existing draft plan.",
      visibility: "advanced",
    },
    answers: {
      summary: "Answers",
      description: "Answers to the planner's confirmation questions, keyed by question ID.",
      visibility: "advanced",
    },
  },
};

function present(schema, presentation) {
  const result = { ...schema, "x-ms-summary": presentation.summary, description: presentation.description };
  if (presentation.visibility) result["x-ms-visibility"] = presentation.visibility;
  if (presentation.properties && schema.properties) {
    result.properties = presentBodyProperties(schema.properties, presentation.properties);
  }
  if (presentation.items && schema.items?.properties) {
    result.items = { ...schema.items, properties: presentBodyProperties(schema.items.properties, presentation.items) };
  }
  return result;
}

function presentBodyProperties(properties, presentation) {
  return Object.fromEntries(
    Object.entries(presentation)
      .filter(([name]) => properties[name])
      .map(([name, entry]) => [name, present(properties[name], entry)]),
  );
}

export function presentParameters(operationId, parameters) {
  return parameters.map((parameter) => {
    if (parameter.in === "body") {
      const presentation = BODY_PRESENTATION[operationId];
      if (!presentation || !parameter.schema?.properties) return parameter;
      const schema = { ...parameter.schema, properties: presentBodyProperties(parameter.schema.properties, presentation) };
      if (schema.required) schema.required = schema.required.filter((name) => schema.properties[name]);
      if (schema.required && !schema.required.length) delete schema.required;
      return { ...parameter, schema };
    }
    const presentation = PARAMETER_PRESENTATION[parameter.name];
    return presentation
      ? { ...parameter, "x-ms-summary": presentation.summary, description: presentation.description }
      : parameter;
  });
}

function isBareObject(schema) {
  return schema?.type === "object" && !schema.properties && !schema.$ref && !schema.additionalProperties;
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

  for (const [sourcePath, method, operationId, summary] of operationSelection) {
    const sourceOperation = openapi.paths?.[sourcePath]?.[method];
    if (!sourceOperation) throw new Error(`Missing canonical operation ${method.toUpperCase()} ${sourcePath}`);
    collectSchemaNames(sourceOperation, referencedSchemas);

    const targetPath = sourcePath.replace(/^\/api\/v1/, "") || "/";
    paths[targetPath] ||= {};
    const operation = {
      operationId,
      // Connector summaries use the product terms consistently (certification string guidance).
      summary: summary || sourceOperation.summary,
      description: sourceOperation.description,
      tags: sourceOperation.tags || ["Studies"],
      "x-ms-visibility": "important",
      parameters: (sourceOperation.parameters || []).map(convertParameter),
      responses: Object.fromEntries(
        Object.entries(sourceOperation.responses || {}).map(([status, response]) => [status, convertResponse(response)]),
      ),
      security: [{ [OAUTH_SECURITY_NAME]: Object.keys(OAUTH_SCOPES) }],
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
    const success = operation.responses["200"]?.schema;
    if (operationId === "GetStudySummary" && isBareObject(success?.properties?.data)) {
      success.properties.data = STUDY_SUMMARY_DATA_SCHEMA;
    }
    operation.parameters = presentParameters(operationId, operation.parameters);
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
      description: "Create and review synthetic market research Studies with Minds.",
      version: "1.0",
      contact: {
        name: "Minds Support",
        url: "https://getminds.ai/contact",
      },
    },
    host: "getminds.ai",
    basePath: "/api/v1",
    schemes: ["https"],
    consumes: ["application/json"],
    produces: ["application/json"],
    securityDefinitions: {
      [OAUTH_SECURITY_NAME]: {
        type: "oauth2",
        flow: "accessCode",
        authorizationUrl: OAUTH_AUTHORIZATION_URL,
        tokenUrl: OAUTH_TOKEN_URL,
        scopes: OAUTH_SCOPES,
      },
    },
    security: [{ [OAUTH_SECURITY_NAME]: Object.keys(OAUTH_SCOPES) }],
    paths,
    definitions,
    "x-ms-connector-metadata": [
      { propertyName: "Website", propertyValue: "https://getminds.ai" },
      { propertyName: "Privacy policy", propertyValue: "https://getminds.ai/privacy" },
      { propertyName: "Categories", propertyValue: "AI;Marketing" },
    ],
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
