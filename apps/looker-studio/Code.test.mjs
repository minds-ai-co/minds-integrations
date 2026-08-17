import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import vm from "node:vm";

const source = readFileSync(new URL("./Code.js", import.meta.url), "utf8");

function load(overrides = {}) {
  const values = new Map();
  const userProperties = {
    getProperty: (key) => values.get(key),
    setProperty: (key, value) => values.set(key, value),
    deleteProperty: (key) => values.delete(key),
  };
  const connector = {
    AuthType: { KEY: "KEY" },
    FieldType: { TEXT: "TEXT" },
    newAuthTypeResponse: () => ({ setAuthType() { return this; }, build: () => ({ type: "KEY" }) }),
  };
  const sandbox = {
    JSON,
    Object,
    String,
    Array,
    Error,
    DataStudioApp: { createCommunityConnector: () => connector },
    PropertiesService: { getUserProperties: () => userProperties },
    ...overrides,
  };
  vm.createContext(sandbox);
  vm.runInContext(source, sandbox);
  return { sandbox, values };
}

test("setCredentials rejects blank or unauthorized API keys", () => {
  const { sandbox, values } = load({
    UrlFetchApp: { fetch: () => ({ getResponseCode: () => 401 }) },
  });
  assert.equal(sandbox.setCredentials({ key: "" }).errorCode, "INVALID_CREDENTIALS");
  assert.equal(sandbox.setCredentials({ key: "bad" }).errorCode, "INVALID_CREDENTIALS");
  assert.equal(values.size, 0);
});

test("setCredentials stores a key only after successful validation", () => {
  const { sandbox, values } = load({
    UrlFetchApp: { fetch: () => ({ getResponseCode: () => 200 }) },
  });
  assert.equal(sandbox.setCredentials({ key: "  valid-key  " }).errorCode, "NONE");
  assert.equal(values.get("MINDS_API_KEY"), "valid-key");
  assert.equal(sandbox.isAuthValid(), true);
  sandbox.resetAuth();
  assert.equal(sandbox.isAuthValid(), false);
});

test("Looker manifest includes publication metadata and fetch safelist", () => {
  const manifest = JSON.parse(readFileSync(new URL("./appsscript.json", import.meta.url), "utf8"));
  assert.equal(manifest.dataStudio.company, "Minds");
  assert.deepEqual(manifest.dataStudio.authType, ["KEY"]);
  assert.ok(manifest.dataStudio.feeType.includes("PAID"));
  assert.deepEqual(manifest.dataStudio.sources, ["MINDS_PANEL_ANALYTICS"]);
  assert.deepEqual(manifest.urlFetchWhitelist, ["https://getminds.ai/api/v1/"]);
});
