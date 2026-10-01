// Runs every module's communication JSON against production Minds.
//
//   MINDS_API_KEY=... node apps/make/scripts/live-smoke.mjs [--write]
//
// Read-only by default. --write creates a throwaway Study (attached to the
// first Audience), previews a research plan on it, then deletes the Study.
// Use a test account's key. No research ever runs.
import { readJson, runCommunication } from "./runner.mjs";

const apiKey = process.env.MINDS_API_KEY;
if (!apiKey) throw new Error("Set MINDS_API_KEY.");
const write = process.argv.includes("--write");
const connection = { apiKey };
const module = (name, file = "api.json") => readJson(`modules/${name}/${file}`);
const run = (api, parameters = {}) => runCommunication(api, { parameters, connection, fetch });
const log = (label, detail) => console.log(`ok  ${label}${detail ? `  ${detail}` : ""}`);

const me = await runCommunication(readJson("connection/api.json"), { parameters: { apiKey }, fetch, useBase: false });
log("connection test", `${me.requests.length} request`);

const audiences = await run(readJson("rpcs/listAudiences/api.json"));
log("rpc listAudiences", `${audiences.output.length} options`);
const studies = await run(readJson("rpcs/listStudies/api.json"));
log("rpc listStudies", `${studies.output.length} options`);

const watched = await run(module("watchNewStudies"), { limit: 3 });
log("watchNewStudies", `${watched.output.length} bundles, createdAt ${watched.output[0]?.createdAt}`);
const epoch = await run(module("watchNewStudies", "epoch.json"));
log("watchNewStudies epoch", `${epoch.output.length} items`);
const listed = await run(module("listStudies"), { limit: 10 });
log("listStudies", `${listed.output.length} bundles`);

let created;
try {
  let studyId = studies.output[0]?.value;
  if (write) {
    created = (await run(module("createStudy"), {
      name: `Make live smoke ${new Date().toISOString()}`,
      audienceIds: audiences.output.slice(0, 1).map(({ value }) => value),
    })).output;
    studyId = created.id;
    log("createStudy", `${created.id} with ${created.audiences.length} Audience(s)`);
    const latest = await run(module("listStudies"), { limit: 5 });
    if (!latest.output.some(({ id }) => id === studyId)) throw new Error("listStudies did not return the new Study");
    log("listStudies after create", "new Study listed");
  }
  if (!studyId) throw new Error("No Study to read; rerun with --write.");
  const got = await run(module("getStudy"), { studyId });
  log("getStudy", got.output.name);
  const summary = await run(module("getStudySummary"), { studyId });
  log("getStudySummary", `hasSummary=${summary.output.hasSummary}`);
  try {
    await run(module("getStudy"), { studyId: "00000000-0000-4000-8000-000000000000" });
    throw new Error("expected 404");
  } catch (error) {
    if (error.statusCode !== 404) throw error;
    log("getStudy unknown ID", error.message);
  }
  const universal = await run(module("makeApiCall"), { url: "/v1/auth/me", method: "GET" });
  log("makeApiCall", `status ${universal.output.statusCode}`);
  if (write) {
    const preview = await run(module("previewResearchPlan"), {
      studyId,
      request: "Which of two homepage headlines is clearer: \"Research with Minds\" or \"Ask synthetic customers\"? One question is enough.",
      material: "text",
      sourceContent: "Research with Minds",
      sourceLabel: "Headline A",
      idempotencyKey: `make-smoke-${Date.now()}`,
    });
    log("previewResearchPlan", `${preview.output.status}, draft ${preview.output.draftPlanId}, ${preview.output.reviewUrl}`);
  }
} finally {
  if (created) {
    const response = await fetch(`https://getminds.ai/api/v1/studies/${created.id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${apiKey}`, Accept: "application/json" },
    });
    console.log(`${response.ok ? "ok " : "ERR"} deleted throwaway Study ${created.id} (${response.status})`);
  }
}
