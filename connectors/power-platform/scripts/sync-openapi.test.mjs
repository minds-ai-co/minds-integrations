import assert from "node:assert/strict";
import test from "node:test";
import { buildSwagger, convertSchema } from "./sync-openapi.mjs";

test("convertSchema rewrites references and marks nullable unions", () => {
  assert.deepEqual(convertSchema({ anyOf: [{ type: "string" }, { type: "null" }] }), { type: "string", "x-nullable": true });
  assert.deepEqual(convertSchema({ type: ["string", "null"] }), { type: "string", "x-nullable": true });
  assert.deepEqual(convertSchema({ anyOf: [{ type: "string" }] }), { type: "string" });
  assert.deepEqual(convertSchema({ type: "string", format: "uuid" }), { type: "string" });
  assert.deepEqual(convertSchema({ type: "integer" }), { type: "integer", format: "int32" });
  assert.deepEqual(
    convertSchema({ type: "object", required: ["id", "shareId"], properties: { id: { type: "string" }, shareId: { type: ["string", "null"] } } }),
    { type: "object", required: ["id"], properties: { id: { type: "string" }, shareId: { type: "string", "x-nullable": true } } },
  );
  assert.deepEqual(convertSchema({ $ref: "#/components/schemas/StudySummary" }), {
    $ref: "#/definitions/StudySummary",
  });
});

test("buildSwagger emits only the bounded operation set", () => {
  const paths = {};
  const selected = [
    ["/api/v1/studies", "get"],
    ["/api/v1/studies", "post"],
    ["/api/v1/studies/{studyId}", "get"],
    ["/api/v1/studies/{studyId}/research-plans/preview", "post"],
    ["/api/v1/studies/{studyId}/summary", "get"],
  ];
  for (const [path, method] of selected) {
    paths[path] ||= {};
    paths[path][method] = {
      summary: "Summary",
      description: "Description",
      parameters: [],
      responses: {
        200: {
          description: "OK",
          content: { "application/json": { schema: { $ref: "#/components/schemas/Response" } } },
        },
      },
    };
  }
  paths["/api/v1/studies/{studyId}"].delete = {
    summary: "Delete",
    description: "Must not be emitted",
    responses: { 204: { description: "Deleted" } },
  };

  const swagger = buildSwagger({
    paths,
    components: { schemas: { Response: { type: "object", properties: { ok: { type: "boolean" } } } } },
  });

  assert.equal(swagger.swagger, "2.0");
  assert.equal(swagger.paths["/studies/{studyId}"].delete, undefined);
  assert.equal(swagger.paths["/studies"].get.operationId, "ListStudies");
  assert.deepEqual(Object.keys(swagger.securityDefinitions), ["oauth2-auth"]);
  assert.equal(swagger.securityDefinitions["oauth2-auth"].flow, "accessCode");
  assert.equal(swagger.securityDefinitions["oauth2-auth"].tokenUrl, "https://getminds.ai/oauth/token");
  assert.deepEqual(swagger.paths["/studies"].get.security, [
    { "oauth2-auth": ["flows:read", "flows:write", "sparks:read"] },
  ]);
  assert.deepEqual(swagger.definitions.Response, {
    type: "object",
    properties: { ok: { type: "boolean" } },
  });
});
