import assert from "node:assert/strict";
import test from "node:test";
import { buildSwagger, convertSchema } from "./sync-openapi.mjs";

test("convertSchema rewrites references and removes nullable unions", () => {
  assert.deepEqual(convertSchema({ anyOf: [{ type: "string" }, { type: "null" }] }), { type: "string" });
  assert.deepEqual(convertSchema({ $ref: "#/components/schemas/PanelSummary" }), {
    $ref: "#/definitions/PanelSummary",
  });
});

test("buildSwagger emits only the bounded operation set", () => {
  const paths = {};
  const selected = [
    ["/api/v1/panels", "get"],
    ["/api/v1/panels", "post"],
    ["/api/v1/panels/{panelId}", "get"],
    ["/api/v1/panels/{panelId}/research-plans/preview", "post"],
    ["/api/v1/panels/{panelId}/summary", "get"],
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
  paths["/api/v1/panels/{panelId}"].delete = {
    summary: "Delete",
    description: "Must not be emitted",
    responses: { 204: { description: "Deleted" } },
  };

  const swagger = buildSwagger({
    paths,
    components: { schemas: { Response: { type: "object", properties: { ok: { type: "boolean" } } } } },
  });

  assert.equal(swagger.swagger, "2.0");
  assert.equal(swagger.paths["/panels/{panelId}"].delete, undefined);
  assert.equal(swagger.paths["/panels"].get.operationId, "ListPanels");
  assert.deepEqual(swagger.definitions.Response, {
    type: "object",
    properties: { ok: { type: "boolean" } },
  });
});
