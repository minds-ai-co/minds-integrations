import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const manifest = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));
const source = readFileSync(join(root, "src/extension.ts"), "utf8");
const sharedClient = readFileSync(join(root, "../../packages/mcp-client/src/index.ts"), "utf8");

test("contains the Marketplace presentation and support files", () => {
  assert.equal(manifest.publisher, "minds-ai");
  assert.equal(manifest.pricing, "Free");
  assert.equal(manifest.preview, true);
  assert.equal(manifest.icon, "icon.png");
  for (const file of ["README.md", "CHANGELOG.md", "SUPPORT.md", "SECURITY.md", "LICENSE"]) {
    assert.ok(manifest.files.includes(file), `${file} must be packaged`);
    assert.ok(readFileSync(join(root, file), "utf8").length > 20);
  }
});

test("exposes credential removal and no consequential run command", () => {
  const commands = manifest.contributes.commands.map(({ command }) => command);
  assert.ok(commands.includes("minds.clearApiKey"));
  assert.equal(commands.some((command) => /delete|run|execute/i.test(command)), false);
  assert.doesNotMatch(source, /run_panel_study|runPanelStudy|delete_panel/);
});

test("validates credentials before SecretStorage persistence", () => {
  const validate = source.indexOf("await validateApiKey(apiKey)");
  const store = source.indexOf("await context.secrets.store(secretKey, apiKey)");
  assert.ok(validate >= 0);
  assert.ok(store > validate);
  assert.match(sharedClient, /https:\/\/getminds\.ai\/mcp/);
});
