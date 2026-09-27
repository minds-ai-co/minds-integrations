#!/usr/bin/env node
// Live smoke test of every operation against the production Minds API.
//
//   MINDS_API_KEY=... node scripts/live-smoke.js           # read-only
//   MINDS_API_KEY=... node scripts/live-smoke.js --write   # also create, preview, delete
//
// --write creates a throwaway Study in the key's account, previews a research
// plan on it (no study runs) and deletes it again. Use a test account's key.
const zapier = require("zapier-platform-core");
const App = require("..");
const { API_BASE_URL } = require("../src/client");

const apiKey = process.env.MINDS_API_KEY;
if (!apiKey) {
  console.error("Set MINDS_API_KEY.");
  process.exit(2);
}
const write = process.argv.includes("--write");
const appTester = zapier.createAppTester(App);
const authData = { apiKey };
let failures = 0;

const summarize = (result) => {
  if (Array.isArray(result)) {
    return `${result.length} result(s)${result[0] ? `, first id ${result[0].id}` : ""}`;
  }
  return result && result.id ? `id ${result.id}` : JSON.stringify(result);
};

const step = async (name, fn, { expectError = false } = {}) => {
  const started = Date.now();
  try {
    const result = await fn();
    const ok = !expectError;
    if (!ok) failures += 1;
    console.log(`${ok ? "PASS" : "FAIL"} ${name} (${Date.now() - started} ms): ${summarize(result)}`);
    return result;
  } catch (error) {
    const ok = expectError;
    if (!ok) failures += 1;
    console.log(`${ok ? "PASS" : "FAIL"} ${name} (${Date.now() - started} ms): ${error.message.split("\n")[0]}`);
    return null;
  }
};

const perform = (operation, inputData = {}, meta = { page: 0 }) =>
  appTester(operation.operation.perform, { authData, inputData, meta });

(async () => {
  const me = await step("authentication test", () => appTester(App.authentication.test, { authData }));
  if (me) console.log(`     connection label: ${App.authentication.connectionLabel(null, { inputData: me })}`);
  await step(
    "authentication test rejects a bad key",
    () => appTester(App.authentication.test, { authData: { apiKey: "minds_invalid" } }),
    { expectError: true },
  );
  const studies = (await step("trigger New Study", () => perform(App.triggers.new_study))) || [];
  const audiences = (await step("dropdown Audiences", () => perform(App.triggers.audience_list))) || [];
  const study = studies.find((item) => item.messageCount > 0) || studies[0];
  if (study) {
    await step("search Find Study by ID", () => perform(App.searches.find_study, { studyId: study.id }));
    await step("search Find Study by name", () => perform(App.searches.find_study, { name: study.name }));
    await step("search Get Study Summary", () => perform(App.searches.get_study_summary, { studyId: study.id }));
  } else {
    console.log("SKIP Study searches: the account has no Studies.");
  }
  await step("search Find Study, unknown ID gives no result", () =>
    perform(App.searches.find_study, { studyId: "00000000-0000-4000-8000-000000000000" }),
  );

  if (write) {
    const created = await step("action Create Study", () =>
      perform(App.creates.create_study, {
        name: `Zapier smoke test ${new Date().toISOString()} (safe to delete)`,
        audienceIds: audiences[0] ? [audiences[0].id] : [],
        isLinkSharingEnabled: false,
      }),
    );
    if (created) {
      await step("action Preview Research Plan", () =>
        perform(App.creates.preview_research_plan, {
          studyId: created.id,
          request: "Which of two headlines makes the product benefit clearer?",
          studyLocale: "en",
          sourceLabel: "Headlines",
          sourceContent: "A: Research in minutes, not weeks. B: Ask your customers before you build.",
        }),
      );
      await step("cleanup: delete the smoke-test Study", async () => {
        const response = await fetch(`${API_BASE_URL}/studies/${created.id}`, {
          method: "DELETE",
          headers: { Authorization: `Bearer ${apiKey}`, "User-Agent": "minds-zapier-smoke/1" },
        });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return { id: created.id };
      });
    }
  } else {
    console.log("SKIP Create Study and Preview Research Plan: pass --write to run them.");
  }
  process.exit(failures ? 1 : 0);
})();
