import assert from "node:assert/strict";
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import test from "node:test";
import { appRoot, MakeModuleError, readJson as json, runCommunication } from "./scripts/runner.mjs";

const API = "https://getminds.ai/api/v1";
const STUDY_ID = "943f9d7c-aab6-4a78-ab67-a7827e1358c9";
const AUDIENCE_ID = "07227280-435f-42fa-9949-3def1b6e17b0";
const DRAFT_ID = "75e10cab-cf1a-4dd2-8470-c71b8c450d90";

// Operations of the canonical Study API (https://getminds.ai/_openapi.json)
// that the app may call. The deprecated /panels aliases are not allowed.
const OPERATIONS = new Set([
  "GET /auth/me",
  "GET /audiences",
  "GET /studies",
  "POST /studies",
  "GET /studies/{studyId}",
  "GET /studies/{studyId}/summary",
  "POST /studies/{studyId}/research-plans/preview",
]);

const manifest = json("modules/manifest.json");
const module = (name, file = "api.json") => json(`modules/${name}/${file}`);

const study = (index) => ({
  id: `00000000-0000-4000-8000-${String(index).padStart(12, "0")}`,
  name: index === 3 ? "Homepage Positioning review" : `Study ${index}`,
  studyMode: "study",
  createdAt: `2026-09-${String(10 + index).padStart(2, "0")}T09:00:00.000Z`,
  updatedAt: `2026-09-${String(10 + index).padStart(2, "0")}T10:00:00.000Z`,
  messageCount: index,
  isPublic: false,
  isLinkSharingEnabled: false,
  publicShareId: null,
  audiences: [],
});

// A fake Minds API: 250 Studies and 3 Audiences, offset pagination with a
// { total, limit, offset } envelope, and the canonical error envelope.
const fakeMinds = () => {
  const studies = Array.from({ length: 250 }, (_unused, index) => study(index + 1));
  const calls = [];
  const fetch = async (url, init) => {
    const parsed = new URL(url);
    calls.push({ method: init.method, path: parsed.pathname.replace("/api/v1", ""), query: Object.fromEntries(parsed.searchParams), headers: init.headers, body: init.body && JSON.parse(init.body) });
    const reply = (status, body) => ({ status, headers: [], text: async () => JSON.stringify(body) });
    if (init.headers.Authorization !== "Bearer minds_test_key") {
      return reply(401, { error: true, statusCode: 401, statusMessage: "Unauthorized", message: "Unauthorized" });
    }
    const page = (rows) => {
      const limit = Number(parsed.searchParams.get("limit") || 100);
      const offset = Number(parsed.searchParams.get("offset") || 0);
      return reply(200, { data: rows.slice(offset, offset + limit), pagination: { total: rows.length, limit, offset } });
    };
    const path = parsed.pathname;
    if (path === "/api/v1/auth/me") return reply(200, { id: "eaac5ce7-6951-4e0e-a0ec-4940e8f9b7b9" });
    if (path === "/api/v1/studies" && init.method === "GET") return page(studies);
    if (path === "/api/v1/audiences") return page([1, 2, 3].map((index) => ({ id: `${AUDIENCE_ID.slice(0, -1)}${index}`, name: `Audience ${index}`, mindCount: 20 })));
    if (path === "/api/v1/studies" && init.method === "POST") {
      const body = JSON.parse(init.body);
      return reply(200, { data: { ...study(999), id: STUDY_ID, name: body.name, isLinkSharingEnabled: body.isLinkSharingEnabled, audiences: body.audienceIds.map((id) => ({ id, name: "Audience", mindCount: 20, minds: [] })) } });
    }
    if (path === `/api/v1/studies/${STUDY_ID}`) return reply(200, { data: { ...study(1), id: STUDY_ID } });
    if (path === `/api/v1/studies/${STUDY_ID}/summary`) return reply(200, { data: { summary: null, revision: 0, isGenerating: false, messageCount: 0, newMessageCount: 0, isStale: false, hasEnoughContent: false } });
    if (path === `/api/v1/studies/${STUDY_ID}/research-plans/preview`) {
      return reply(200, { data: { draftPlanId: DRAFT_ID, revision: 1, draftStatus: "draft", planningMode: "planner", status: "needs_confirmation", plan: { intent: { objective: "Learn which headline is clearer." } }, confirmationQuestions: [], warnings: [], executionPolicyAudit: { sourcePolicy: "request_only" }, audiences: [], nextAction: "Explain the proposed plan and ask the user to confirm it before execution." } });
    }
    return reply(404, { error: true, statusCode: 404, statusMessage: "Study not found", message: "Study not found" });
  };
  return { fetch, calls };
};

const run = (api, parameters, options = {}) =>
  runCommunication(api, { parameters, connection: { apiKey: "minds_test_key" }, ...options });

test("pins the production host, sanitizes authorization and handles errors", () => {
  const base = json("base.json");
  assert.equal(base.baseUrl, API);
  assert.equal(base.headers.Authorization, "Bearer {{connection.apiKey}}");
  assert.deepEqual(base.log.sanitize, ["request.headers.authorization"]);
  assert.ok(base.response.error.message);
  assert.equal(base.response.error["401"].type, "InvalidAccessTokenError");
  assert.equal(base.response.error["429"].type, "RateLimitError");

  const [apiKey] = json("connection/parameters.json");
  assert.equal(apiKey.name, "apiKey");
  assert.equal(apiKey.type, "password");
  const connection = json("connection/api.json");
  assert.equal(connection.url, `${API}/auth/me`);
  assert.deepEqual(connection.log.sanitize, ["request.headers.authorization"]);
  assert.ok(connection.response.error.message);
});

test("the connection verifies the key against /auth/me", async () => {
  const { fetch } = fakeMinds();
  const connection = json("connection/api.json");
  const ok = await runCommunication(connection, { parameters: { apiKey: "minds_test_key" }, fetch, useBase: false });
  assert.deepEqual(ok.requests.map(({ url }) => url), [`${API}/auth/me`]);
  await assert.rejects(
    runCommunication(connection, { parameters: { apiKey: "minds_wrong" }, fetch, useBase: false,
      base: { response: { error: connection.response.error } } }),
    /\[401\] Unauthorized/,
  );
});

test("uses only canonical Study API operations", () => {
  const calls = [];
  const collect = (api) => (Array.isArray(api) ? api : [api]).filter(({ url }) => url).forEach(({ method = "GET", url }) => {
    calls.push(`${method} ${url.replace(/^https:\/\/getminds\.ai\/api\/v1/, "").replace(/\{\{parameters\.studyId\}\}/g, "{studyId}")}`);
  });
  collect(json("connection/api.json"));
  for (const { name } of json("rpcs/manifest.json")) collect(json(`rpcs/${name}/api.json`));
  for (const { name, typeId } of manifest) {
    if (typeId === 12) continue;
    collect(module(name));
    if (typeId === 1) collect(module(name, "epoch.json"));
  }
  for (const call of calls) assert.ok(OPERATIONS.has(call), `${call} is not an allowed Study API operation`);
  const source = JSON.stringify(readdirSync(appRoot, { recursive: true }).filter((path) => path.endsWith(".json")).map((path) => readFileSync(join(appRoot, path), "utf8")));
  assert.equal(/\/panels/.test(source), false, "deprecated /panels routes must not be used");
});

test("follows Make naming, structure and review rules", () => {
  const names = manifest.map(({ name }) => name);
  assert.deepEqual(names, ["watchNewStudies", "createStudy", "getStudy", "listStudies", "getStudySummary", "previewResearchPlan", "makeApiCall"]);
  assert.equal(manifest.filter(({ typeId }) => typeId === 12).length, 1, "exactly one universal module");
  assert.equal(names.some((name) => /delete|run|execute|confirm/i.test(name)), false, "no destructive or execution module");
  for (const { name, label, description, typeId } of manifest) {
    assert.match(name, /^[a-zA-Z][0-9a-zA-Z]+[0-9a-zA-Z]$/);
    assert.ok([1, 4, 9, 12].includes(typeId));
    const rest = label.replace("API", "api").slice(1);
    assert.ok(/^[A-Z]/.test(label) && rest === rest.toLowerCase(), `${label} is sentence case`);
    assert.match(description, /^[A-Z].*\.$/);
    const files = readdirSync(join(appRoot, "modules", name)).sort();
    const expected = ["api.json", "expect.json", "interface.json", "parameters.json", "samples.json"];
    assert.deepEqual(files, typeId === 1 ? [...expected.slice(0, 1), "epoch.json", ...expected.slice(1)] : expected);
  }
  // Polling triggers, searches and RPCs need a limit and pagination.
  for (const name of ["watchNewStudies", "listStudies"]) {
    assert.equal(module(name).response.limit, "{{parameters.limit}}");
    assert.ok(module(name).pagination.condition);
  }
  assert.equal(module("watchNewStudies", "parameters.json")[0].required, true);
  const searchLimit = module("listStudies", "expect.json").find(({ name }) => name === "limit");
  assert.equal(searchLimit.required, false);
  assert.equal(searchLimit.default, 10);
  for (const { name } of json("rpcs/manifest.json")) {
    const rpc = json(`rpcs/${name}/api.json`);
    assert.ok(rpc.response.limit >= 300 && rpc.response.limit <= 500);
    assert.ok(rpc.pagination.condition);
  }
  // Get-style modules let users map the ID immediately.
  for (const name of ["getStudy", "getStudySummary", "previewResearchPlan"]) assert.equal(module(name, "expect.json")[0].mode, "edit");
  assert.match(json("connection/parameters.json")[0].help, /https:\/\/getminds\.ai\/settings\/api-keys/);
  // The universal module only accepts paths on the Minds API host.
  const universal = module("makeApiCall");
  assert.equal(universal.url, "https://getminds.ai/api/{{parameters.url}}");
  // Dates are parsed in every Study interface.
  for (const name of ["watchNewStudies", "getStudy", "listStudies"]) {
    const types = Object.fromEntries(module(name, "interface.json").map(({ name: field, type }) => [field, type]));
    assert.equal(types.createdAt, "date");
    assert.equal(types.updatedAt, "date");
  }
  const logo = join(appRoot, "assets/logo-512.png");
  assert.ok(existsSync(logo) && statSync(logo).size < 500_000);
  assert.deepEqual([...readFileSync(logo).subarray(16, 24)], [0, 0, 2, 0, 0, 0, 2, 0], "logo is 512x512");
});

test("Watch new studies pages through every Study and keys the trigger on createdAt", async () => {
  const { fetch, calls } = fakeMinds();
  const api = module("watchNewStudies");
  assert.deepEqual(api.response.trigger, { id: "{{item.id}}", date: "{{item.createdAt}}", type: "date", order: "unordered" });
  const { output } = await run(api, { limit: 1000 }, { fetch });
  assert.equal(output.length, 250);
  assert.deepEqual(calls.map(({ query }) => query.offset ?? "0"), ["0", "100", "200"]);
  assert.equal(output[0].id, study(1).id);

  const limited = fakeMinds();
  assert.equal((await run(api, { limit: 2 }, { fetch: limited.fetch })).output.length, 2);
  assert.equal(limited.calls.length, 1);

  const epoch = await run(module("watchNewStudies", "epoch.json"), {}, { fetch: fakeMinds().fetch });
  assert.equal(epoch.output.length, 250);
  assert.deepEqual(Object.keys(epoch.output[0]).sort(), ["date", "label"]);
});

test("Create a study sends the name, selected Audiences and sharing flag only", async () => {
  const { fetch, calls } = fakeMinds();
  const { output } = await run(module("createStudy"), { name: "Make QA", audienceIds: [AUDIENCE_ID] }, { fetch });
  assert.deepEqual(calls[0].body, { name: "Make QA", audienceIds: [AUDIENCE_ID], isLinkSharingEnabled: false });
  assert.equal(calls[0].method, "POST");
  assert.equal(output.id, STUDY_ID);
  assert.equal(output.audiences[0].id, AUDIENCE_ID);

  const bare = fakeMinds();
  await run(module("createStudy"), { name: "No audience" }, { fetch: bare.fetch });
  assert.deepEqual(bare.calls[0].body, { name: "No audience", audienceIds: [], isLinkSharingEnabled: false });

  const audiences = module("createStudy", "expect.json").find(({ name }) => name === "audienceIds");
  assert.equal(audiences.options, "rpc://listAudiences");
  assert.equal(audiences.multiple, true);
});

test("Get a study and Get a study summary read one Study", async () => {
  const { fetch, calls } = fakeMinds();
  const studyOutput = await run(module("getStudy"), { studyId: STUDY_ID }, { fetch });
  assert.equal(studyOutput.output.id, STUDY_ID);
  const summary = await run(module("getStudySummary"), { studyId: STUDY_ID }, { fetch });
  assert.equal(summary.output.studyId, STUDY_ID);
  assert.equal(summary.output.hasSummary, false);
  assert.deepEqual(calls.map(({ path }) => path), [`/studies/${STUDY_ID}`, `/studies/${STUDY_ID}/summary`]);

  await assert.rejects(run(module("getStudy"), { studyId: "00000000-0000-4000-8000-000000000000" }, { fetch }), (error) =>
    error instanceof MakeModuleError && error.statusCode === 404 && error.type === "DataError" && error.message === "[404] Study not found");
  await assert.rejects(runCommunication(module("getStudy"), { parameters: { studyId: STUDY_ID }, connection: { apiKey: "minds_bad" }, fetch }),
    (error) => error.type === "InvalidAccessTokenError");
});

test("List studies pages with offsets and honours the limit", async () => {
  const { fetch, calls } = fakeMinds();
  const all = await run(module("listStudies"), { limit: 150 }, { fetch });
  assert.equal(all.output.length, 150);
  assert.deepEqual(calls.map(({ query }) => query.offset ?? "0"), ["0", "100"]);
  const few = fakeMinds();
  assert.equal((await run(module("listStudies"), { limit: 10 }, { fetch: few.fetch })).output.length, 10);
  assert.equal(few.calls.length, 1);
  // Filtering stays with Make's own filters; the module has no client-side filter.
  assert.equal(typeof module("listStudies").response.iterate, "string");
});

test("Preview a research plan drafts a plan and never runs research", async () => {
  const cases = [
    [{ material: "none" }, undefined],
    [{}, undefined],
    [{ material: "text", sourceContent: "New headline", sourceLabel: "Headline" }, { kind: "prompt", label: "Headline", content: "New headline" }],
    [{ material: "text", sourceContent: "New headline" }, { kind: "prompt", label: "Make material", content: "New headline" }],
    [{ material: "url", sourceUrl: "https://getminds.ai/images/logo.png" }, { kind: "image", label: "Make material", url: "https://getminds.ai/images/logo.png" }],
    [{ material: "url", sourceUrl: "https://getminds.ai/", sourceKind: "website" }, { kind: "website", label: "Make material", url: "https://getminds.ai/" }],
  ];
  for (const [material, source] of cases) {
    const { fetch, calls } = fakeMinds();
    const { output } = await run(module("previewResearchPlan"), { studyId: STUDY_ID, request: "Which headline is clearer?", ...material }, { fetch });
    assert.equal(calls.length, 1, "exactly one request");
    assert.equal(calls[0].path, `/studies/${STUDY_ID}/research-plans/preview`);
    assert.deepEqual(calls[0].body, { request: "Which headline is clearer?", studyLocale: "en", ...(source ? { source } : {}) });
    assert.equal("idempotencyKey" in calls[0].body, false, "an empty identifier is not sent");
    assert.equal(calls[0].headers["Idempotency-Key"], undefined);
    assert.equal(output.draftPlanId, DRAFT_ID);
    assert.equal(output.status, "needs_confirmation");
    assert.equal(output.reviewUrl, `https://getminds.ai/?studyId=${STUDY_ID}&draftPlanId=${DRAFT_ID}`);
    // The whole preview response is passed through, plus studyId and reviewUrl.
    assert.equal(output.plan.intent.objective, "Learn which headline is clearer.");
    assert.equal(output.executionPolicyAudit.sourcePolicy, "request_only");
    assert.equal(output.studyId, STUDY_ID);
  }
  const { fetch, calls } = fakeMinds();
  await run(module("previewResearchPlan"), { studyId: STUDY_ID, request: "Q", studyLocale: "de", idempotencyKey: "row-42" }, { fetch });
  assert.equal(calls[0].body.idempotencyKey, "row-42");
  assert.equal(calls[0].body.studyLocale, "de");
  const expect = module("previewResearchPlan", "expect.json");
  assert.equal(expect.find(({ name }) => name === "studyId").mode, "edit");
  assert.equal(expect.find(({ name }) => name === "idempotencyKey").advanced, true);
  assert.equal(expect.some(({ name }) => name === "sourceLabel"), false, "the label is nested under Text and URL material");
  const source = JSON.stringify(module("previewResearchPlan"));
  assert.equal(/research-runs|confirm"|\/runs/.test(source), false, "never confirms or runs research");
});

test("RPCs list Audiences and Studies as label/value options", async () => {
  const audiences = await run(json("rpcs/listAudiences/api.json"), {}, { fetch: fakeMinds().fetch });
  assert.deepEqual(audiences.output[0], { label: "Audience 1 (20 Minds)", value: `${AUDIENCE_ID.slice(0, -1)}1` });
  const studies = await run(json("rpcs/listStudies/api.json"), {}, { fetch: fakeMinds().fetch });
  assert.equal(studies.output.length, 250);
  assert.deepEqual(studies.output[0], { label: "Study 1", value: study(1).id });
});

test("Make an API call sends a relative path with the connection's key", async () => {
  const { fetch, calls } = fakeMinds();
  const { output } = await run(module("makeApiCall"), { url: "/v1/auth/me", method: "GET", headers: [{ key: "Content-Type", value: "application/json" }] }, { fetch });
  assert.equal(calls[0].path.endsWith("/auth/me"), true);
  assert.equal(calls[0].headers.Authorization, "Bearer minds_test_key");
  assert.equal(output.statusCode, 200);
});
