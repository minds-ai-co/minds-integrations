import assert from "node:assert/strict";
import test from "node:test";
import { decodeMcpResponse, MINDS_MCP_ENDPOINT } from "../dist/index.js";

test("pins the canonical endpoint", () => {
  assert.equal(MINDS_MCP_ENDPOINT, "https://getminds.ai/mcp");
});

test("decodes JSON and event-stream payloads", () => {
  assert.deepEqual(decodeMcpResponse('{"jsonrpc":"2.0","id":1,"result":{"ok":true}}'), {
    jsonrpc: "2.0",
    id: 1,
    result: { ok: true },
  });
  assert.deepEqual(
    decodeMcpResponse('event: message\ndata: {"jsonrpc":"2.0","id":2,"result":{"ok":true}}\n\n'),
    { jsonrpc: "2.0", id: 2, result: { ok: true } },
  );
});
