import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import vm from "node:vm";

const source = (await readFile(new URL("../web/response.js", import.meta.url), "utf8"))
  .replace(/^import .*;$/gm, "").replace("export function", "function")
  .replace("import.meta.url", '"https://comfy.example/extensions/minds/response.js"');

function setup(width = 620, height = 520) {
  let bridge, observer;
  const iframe = { clientWidth: width, clientHeight: height, style: {},
    setAttribute() {}, remove() { this.removed = true; }, contentWindow: {} };
  class AppBridge {
    constructor(_client, _info, _capabilities, options) {
      bridge = this; this.context = options.hostContext; this.messages = [];
    }
    setHostContext(value) { assert.ok(this.connected); this.context = value; }
    async connect() { this.connected = true; }
    async sendToolInput(value) { this.messages.push(value); }
    async sendToolResult(value) { this.messages.push(value); }
    async close() { this.closed = true; }
  }
  class ResizeObserver {
    constructor(callback) { observer = this; this.callback = callback; }
    observe(element) { this.element = element; }
    disconnect() { this.disconnected = true; }
  }
  const container = { replaceChildren(...children) { this.children = children; }, append() {} };
  const context = { AppBridge, ResizeObserver, PostMessageTransport: class {}, URL,
    document: { createElement: tag => tag === "iframe" ? iframe : {} },
    STRINGS: { en: { viewStudy: "View Study" } } };
  vm.runInNewContext(`${source}; globalThis.mount = mountResponse;`, context);
  const payload = { studyId: "example", outputData: {} };
  const dispose = context.mount(container, payload, "en");
  return { bridge, observer, iframe, dispose, payload };
}

test("initial handshake advertises the actual frame, including shorter node heights", async () => {
  const env = setup();
  assert.equal(env.bridge.context.containerDimensions.height, 520);
  assert.equal(env.bridge.context.containerDimensions.width, 620);
  await env.bridge.oninitialized();
  assert.equal(env.observer.element, env.iframe);
  assert.equal(env.bridge.messages[1].structuredContent, env.payload);
});

test("resizing preserves host context and uses CSS dimensions rather than zoomed bounds", async () => {
  const env = setup(); await env.bridge.oninitialized();
  env.iframe.clientWidth = 360; env.iframe.clientHeight = 460;
  env.iframe.getBoundingClientRect = () => ({ width: 180, height: 230 });
  env.observer.callback();
  assert.equal(env.bridge.context.containerDimensions.height, 460);
  assert.equal(env.bridge.context.containerDimensions.width, 360);
  assert.equal(env.bridge.context.locale, "en");
  assert.equal(env.bridge.context.displayMode, "inline");
});

test("an initially hidden node reports dimensions after it becomes visible", async () => {
  const env = setup(0, 0); await env.bridge.oninitialized();
  assert.equal(env.bridge.context.containerDimensions, undefined);
  env.iframe.clientWidth = 620; env.iframe.clientHeight = 780; env.observer.callback();
  assert.equal(env.bridge.context.containerDimensions.height, 780);
});

test("removal stops resize tracking, closes the bridge and ignores queued callbacks", async () => {
  const env = setup(); await env.bridge.oninitialized(); env.dispose();
  assert.ok(env.observer.disconnected); assert.ok(env.bridge.closed); assert.ok(env.iframe.removed);
  env.iframe.clientHeight = 900; env.observer.callback();
  assert.equal(env.bridge.context.containerDimensions.height, 520);
});
