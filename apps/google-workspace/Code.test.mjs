import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import vm from "node:vm";

const source = readFileSync(new URL("./Code.js", import.meta.url), "utf8");

function load(overrides = {}) {
  const sandbox = {
    JSON,
    Object,
    String,
    Error,
    ...overrides,
  };
  vm.createContext(sandbox);
  vm.runInContext(source, sandbox);
  return sandbox;
}

test("onInstall builds the same menu as onOpen", () => {
  const items = [];
  const menu = {
    addItem(label, handler) {
      items.push([label, handler]);
      return this;
    },
    addSeparator() {
      items.push(["separator"]);
      return this;
    },
    addToUi() {
      items.push(["addToUi"]);
    },
  };
  const sandbox = load({ SpreadsheetApp: { getUi: () => ({ createAddonMenu: () => menu }) } });

  sandbox.onInstall({});

  assert.deepEqual(items[0], ["Set Minds API key", "setMindsApiKey"]);
  assert.ok(items.some(([label]) => label === "Ask a Group from selected rows"));
  assert.deepEqual(items.at(-1), ["addToUi"]);
});

test("decodeMcpResponse accepts JSON and event-stream payloads", () => {
  const sandbox = load();
  assert.deepEqual(JSON.parse(JSON.stringify(sandbox.decodeMcpResponse_('{"result":{"ok":true}}'))), {
    result: { ok: true },
  });
  assert.deepEqual(
    JSON.parse(
      JSON.stringify(
        sandbox.decodeMcpResponse_('event: message\ndata: {"result":{"step":1}}\n\ndata: {"result":{"step":2}}\n'),
      ),
    ),
    { result: { step: 2 } },
  );
});

test("mcpRequest reads the session header case-insensitively", () => {
  const response = {
    getResponseCode: () => 200,
    getContentText: () => '{"jsonrpc":"2.0","id":1,"result":{}}',
    getHeaders: () => ({ "mcp-session-id": "session-123" }),
  };
  const sandbox = load({ UrlFetchApp: { fetch: () => response } });

  const result = sandbox.mcpRequest_("secret", null, 1, "initialize", {});

  assert.equal(result.sessionId, "session-123");
});

test("resultText joins text content and falls back to structured content", () => {
  const sandbox = load();
  assert.equal(
    sandbox.resultText_({ content: [{ type: "text", text: "one" }, { type: "text", text: "two" }] }),
    "one\ntwo",
  );
  assert.equal(sandbox.resultText_({ structuredContent: { ok: true } }), '{"ok":true}');
});
