const test = require("node:test");
const assert = require("node:assert/strict");
const App = require("..");

const response = (data) => ({
  data,
  throwForStatus() {},
});

test("defines the bounded public Zapier surface", () => {
  assert.deepEqual(Object.keys(App.triggers), ["new_panel"]);
  assert.deepEqual(Object.keys(App.searches).sort(), ["find_panel", "get_panel_summary"]);
  assert.deepEqual(Object.keys(App.creates).sort(), ["create_panel", "preview_research_plan"]);
  assert.equal(App.authentication.fields[0].type, "password");
  assert.equal(App.authentication.connectionLabel, "Minds {{bundle.authData.label}}");
});

test("adds the bearer credential without changing the production host", () => {
  const request = App.beforeRequest[0](
    { url: "https://getminds.ai/api/v1/panels", headers: {} },
    {},
    { authData: { apiKey: "secret" } },
  );
  assert.equal(request.headers.Authorization, "Bearer secret");
  assert.equal(request.headers.Accept, "application/json");
  assert.equal(request.url, "https://getminds.ai/api/v1/panels");
});

test("creates a Panel with normalized Group IDs", async () => {
  let captured;
  const z = {
    request: async (options) => {
      captured = options;
      return response({ data: { id: "panel-1", name: options.body.name } });
    },
  };
  const result = await App.creates.create_panel.operation.perform(z, {
    inputData: {
      name: "Positioning check",
      groupIds: "group-1, group-2",
      isLinkSharingEnabled: false,
    },
  });
  assert.equal(captured.url, "https://getminds.ai/api/v1/panels");
  assert.deepEqual(captured.body.groupIds, ["group-1", "group-2"]);
  assert.equal(result.id, "panel-1");
});

test("previews a research plan without exposing a run action", async () => {
  let captured;
  const z = {
    request: async (options) => {
      captured = options;
      return response({ data: { draftPlanId: "draft-1", status: "draft" } });
    },
  };
  const result = await App.creates.preview_research_plan.operation.perform(z, {
    inputData: {
      panelId: "panel-1",
      request: "Evaluate the positioning",
      studyLocale: "de",
      sourceLabel: "Landing page copy",
      sourceContent: "Research without waiting weeks.",
    },
  });
  assert.equal(
    captured.url,
    "https://getminds.ai/api/v1/panels/panel-1/research-plans/preview",
  );
  assert.equal(captured.body.source.kind, "prompt");
  assert.equal(result.id, "draft-1");
  assert.equal(App.creates.run_study, undefined);
});
