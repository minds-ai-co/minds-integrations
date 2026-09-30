const test = require("node:test");
const assert = require("node:assert/strict");
const App = require("..");
const { handleErrors } = require("../src/client");

const response = (data, status = 200) => ({
  status,
  data,
  throwForStatus() {
    if (status >= 400) throw new Error(`HTTP ${status}`);
  },
});

const fakeZ = (reply) => {
  const calls = [];
  return {
    calls,
    errors: {
      Error: class extends Error {
        constructor(message, code, status) {
          super(message);
          this.code = code;
          this.status = status;
        }
      },
      ThrottledError: class extends Error {},
    },
    request: async (options) => {
      calls.push(options);
      return reply(options);
    },
  };
};

test("defines the bounded Study surface on the canonical API", () => {
  assert.deepEqual(Object.keys(App.triggers).sort(), ["audience_list", "new_study"]);
  assert.equal(App.triggers.audience_list.display.hidden, true);
  assert.deepEqual(Object.keys(App.searches).sort(), ["find_study", "get_study_summary"]);
  assert.deepEqual(Object.keys(App.creates).sort(), ["create_study", "preview_research_plan"]);
  assert.equal(App.authentication.fields[0].type, "password");
  for (const operation of [
    ...Object.values(App.triggers),
    ...Object.values(App.searches),
    ...Object.values(App.creates),
  ]) {
    assert.ok(operation.operation.sample, `${operation.key} has sample data`);
    assert.ok(operation.operation.outputFields.length, `${operation.key} has output fields`);
  }
  assert.equal(App.creates.run_study, undefined);
});

test("adds the bearer credential without changing the production host", () => {
  const request = App.beforeRequest[0](
    { url: "https://getminds.ai/api/v1/studies", headers: {} },
    {},
    { authData: { apiKey: "secret" } },
  );
  assert.equal(request.headers.Authorization, "Bearer secret");
  assert.equal(request.headers.Accept, "application/json");
  assert.equal(request.url, "https://getminds.ai/api/v1/studies");
});

test("tests the connection against /auth/me and labels it", async () => {
  const z = fakeZ(() => response({ id: "eaac5ce7-6951-4e0e-a0ec-4940e8f9b7b9" }));
  const me = await App.authentication.test(z, { authData: {} });
  assert.equal(z.calls[0].url, "https://getminds.ai/api/v1/auth/me");
  assert.equal(App.authentication.connectionLabel(z, { authData: {}, inputData: me }), "Minds user eaac5ce7");
  assert.equal(App.authentication.fields.length, 1);
});

test("turns API errors into actionable messages", () => {
  const z = fakeZ(() => null);
  assert.throws(() => handleErrors({ status: 401, data: {} }, z), /rejected the API key/);
  assert.throws(
    () => handleErrors({ status: 404, data: { message: "Study not found" } }, z),
    /Minds API error: Study not found/,
  );
  const skipped = { status: 404, data: {}, skipThrowForStatus: true };
  assert.equal(handleErrors(skipped, z), skipped);
});

test("polls Studies page by page", async () => {
  const z = fakeZ(() => response({ data: [{ id: "study-1", name: "One" }] }));
  const result = await App.triggers.new_study.operation.perform(z, { meta: { page: 2 } });
  assert.equal(z.calls[0].url, "https://getminds.ai/api/v1/studies");
  assert.deepEqual(z.calls[0].params, { limit: 100, offset: 200 });
  assert.equal(result[0].id, "study-1");
});

test("creates a Study with de-duplicated Audience IDs", async () => {
  const z = fakeZ((options) => response({ data: { id: "study-1", name: options.body.name } }, 201));
  const result = await App.creates.create_study.operation.perform(z, {
    inputData: {
      name: "Positioning check",
      audienceIds: ["audience-1", " audience-2", "audience-1"],
      isLinkSharingEnabled: false,
    },
  });
  assert.equal(z.calls[0].url, "https://getminds.ai/api/v1/studies");
  assert.deepEqual(z.calls[0].body, {
    name: "Positioning check",
    audienceIds: ["audience-1", "audience-2"],
    isLinkSharingEnabled: false,
  });
  assert.equal(result.id, "study-1");
});

test("finds a Study by ID and treats 404 as no result", async () => {
  const found = fakeZ(() => response({ data: { id: "study-1", name: "One" } }));
  assert.deepEqual(
    (await App.searches.find_study.operation.perform(found, { inputData: { studyId: "study-1" } })).map((s) => s.id),
    ["study-1"],
  );
  assert.equal(found.calls[0].url, "https://getminds.ai/api/v1/studies/study-1");
  const missing = fakeZ(() => response({ message: "Study not found" }, 404));
  assert.deepEqual(await App.searches.find_study.operation.perform(missing, { inputData: { studyId: "x" } }), []);
});

test("finds a Study by exact name across pages", async () => {
  const z = fakeZ((options) =>
    response({
      data:
        options.params.offset === 0
          ? Array.from({ length: 100 }, (_, index) => ({ id: `s-${index}`, name: `Study ${index}` }))
          : [{ id: "target", name: "Homepage Review" }],
    }),
  );
  const result = await App.searches.find_study.operation.perform(z, { inputData: { name: " homepage review " } });
  assert.deepEqual(result.map((s) => s.id), ["target"]);
  assert.equal(z.calls.length, 2);
});

test("returns no summary until one is persisted", async () => {
  const empty = fakeZ(() => response({ data: { summary: null, revision: 0 } }));
  assert.deepEqual(
    await App.searches.get_study_summary.operation.perform(empty, { inputData: { studyId: "study-1" } }),
    [],
  );
  const ready = fakeZ(() => response({ data: { summary: { headline: "Clear" }, revision: 3 } }));
  const summaries = await App.searches.get_study_summary.operation.perform(ready, {
    inputData: { studyId: "study-1" },
  });
  assert.deepEqual(summaries, [{
    id: "study-1-summary-3",
    studyId: "study-1",
    summary: { headline: "Clear" },
    revision: 3,
  }]);
  const [summary] = summaries;
  assert.equal(ready.calls[0].url, "https://getminds.ai/api/v1/studies/study-1/summary");
  assert.equal(summary.id, "study-1-summary-3");
  assert.equal(summary.studyId, "study-1");
});

test("returns an empty summary search result when Minds reports the Study is missing", async () => {
  const z = fakeZ((options) => handleErrors({
    ...response({ message: "Study not found" }, 404),
    skipThrowForStatus: options.skipThrowForStatus,
  }, z));
  assert.deepEqual(
    await App.searches.get_study_summary.operation.perform(z, { inputData: { studyId: "missing-study" } }),
    [],
  );
  assert.equal(z.calls[0].url, "https://getminds.ai/api/v1/studies/missing-study/summary");
});

test("does not treat other summary request errors as an empty search result", async () => {
  for (const status of [401, 403, 429, 500]) {
    const z = fakeZ(() => response({ message: "Request failed" }, status));
    await assert.rejects(
      App.searches.get_study_summary.operation.perform(z, { inputData: { studyId: "study-1" } }),
      new RegExp(`HTTP ${status}`),
    );
  }
});

test("previews a research plan without exposing a run action", async () => {
  const z = fakeZ(() => response({ data: { draftPlanId: "draft-1", status: "needs_confirmation" } }));
  const result = await App.creates.preview_research_plan.operation.perform(z, {
    inputData: {
      studyId: "study-1",
      request: "Evaluate the positioning",
      studyLocale: "de",
      sourceLabel: "Landing page copy",
      sourceContent: "Research without waiting weeks.",
    },
  });
  assert.equal(z.calls[0].url, "https://getminds.ai/api/v1/studies/study-1/research-plans/preview");
  assert.equal(z.calls[0].body.source.kind, "prompt");
  assert.equal(z.calls[0].body.studyLocale, "de");
  assert.equal(result.id, "draft-1");
  assert.equal(result.studyId, "study-1");
});

test("attaches creative URLs and preserves retry identity without running research", async () => {
  const z = fakeZ(() => response({ data: { draftPlanId: "draft-image", status: "needs_confirmation" } }));
  await App.creates.preview_research_plan.operation.perform(z, { inputData: {
    studyId: "study-1", request: "Review this creative", sourceUrl: "https://assets.example/frame.png", sourceKind: "image", idempotencyKey: "event-1",
  } });
  assert.deepEqual(z.calls[0].body.source, { kind: "image", label: "Zapier creative", url: "https://assets.example/frame.png" });
  assert.equal(z.calls[0].headers["Idempotency-Key"], "event-1");
  assert.equal(z.calls[0].body.run, undefined);
});

test("rejects ambiguous material and non-HTTPS URLs before making an API call", async () => {
  for (const input of [
    { sourceUrl: "http://assets.example/a.png" },
    { sourceUrl: "https://user:password@assets.example/a.png" },
    { sourceUrl: "https://assets.example/a.png", sourceContent: "copy" },
    { sourceUrl: "https://assets.example/a.png", sourceKind: "invalid" },
    { idempotencyKey: "bad key" },
  ]) {
    const z = fakeZ(() => { throw new Error("must not call"); });
    await assert.rejects(App.creates.preview_research_plan.operation.perform(z, { inputData: { studyId: "study-1", request: "Review", ...input } }));
    assert.equal(z.calls.length, 0);
  }
});
