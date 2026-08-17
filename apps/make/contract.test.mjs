import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const json = (path) => JSON.parse(readFileSync(join(root, path), "utf8"));

test("pins the production host and sanitizes authorization", () => {
  const base = json("base.json");
  assert.equal(base.baseUrl, "https://getminds.ai/api/v1");
  assert.equal(base.headers.Authorization, "Bearer {{connection.apiKey}}");
  assert.deepEqual(base.log.sanitize, ["request.headers.authorization"]);

  const connection = json("connection/parameters.json");
  assert.equal(connection[0].name, "apiKey");
  assert.equal(connection[0].type, "password");
});

test("defines five bounded modules and no destructive or execution module", () => {
  const manifest = json("modules/manifest.json");
  assert.equal(manifest.length, 5);
  assert.deepEqual(
    manifest.map(({ name }) => name).sort(),
    ["createPanel", "getPanel", "getPanelSummary", "listPanels", "previewResearchPlan"],
  );
  assert.equal(manifest.some(({ name }) => /delete|run|execute/i.test(name)), false);
});

test("every module has parseable parameters and communication", () => {
  const manifest = json("modules/manifest.json");
  for (const { name } of manifest) {
    const directory = name.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
    const files = readdirSync(join(root, "modules", directory));
    assert.deepEqual(files.sort(), ["communication.json", "parameters.json"]);
    const communication = json(`modules/${directory}/communication.json`);
    assert.match(communication.url, /^\//);
    assert.ok(["GET", "POST"].includes(communication.method));
  }
});
