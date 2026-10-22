import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import vm from "node:vm";

const source = (await readFile(new URL("../web/minds.js", import.meta.url), "utf8"))
  .replace(/^import .*;$/gm, "");
const strings = JSON.parse((await readFile(new URL("../web/strings.js", import.meta.url), "utf8"))
  .replace("export const STRINGS = ", "").replace(/;\s*$/, ""));

function setup() {
  let extension, review;
  const elements = [];
  const document = { createElement(tag) {
    const element = { tag, replaceChildren() {}, children: [], style: {}, textContent: "", append(...items) { this.children.push(...items); },
      addEventListener() {}, close() {}, showModal() {}, remove() {} };
    elements.push(element); return element;
  }, body: { append() {} } };
  const app = { ui: { settings: { getSettingValue: () => "en" } }, registerExtension(value) { extension = value; },
    graph: { links: { 1: { origin_id: 1 } }, getNodeById: () => ({ mindsReview: review }) },
    extensionManager: { toast: { add() {} } } };
  vm.runInNewContext(source, { app, document, crypto: { randomUUID: () => "generated-id" }, STRINGS: strings,
    installDynamicMediaInputs() {} });
  class Node {
    constructor() { this.widgets = [{ name: "reviewed_draft", value: "" }, { name: "request_id", value: "" }];
      this.inputs = [{ name: "draft", link: 1 }]; }
    addWidget(type, label, value, callback) { this.widgets.push({ type, label, callback }); }
    setDirtyCanvas() {}
    computeSize() { return [620, 1000]; }
    setSize() {}
    addDOMWidget(name, type, element) { this.widgets.push({ name, type, element }); }
  }
  return { extension, Node, elements, setReview: value => { review = value; } };
}

test("approval is granted only by the user's dialog action on the displayed draft", async () => {
  const env = setup();
  await env.extension.beforeRegisterNodeDef(env.Node, { name: "MindsRunCreativeTest" });
  const node = new env.Node(); node.onNodeCreated();
  env.setReview({ approval: "exact-draft-hash", locale: "en", audiences: [{ name: "Viewers" }],
    question: { text: "Which do you prefer?" }, creativeLabels: ["A", "B"] });
  node.widgets.at(-1).callback();
  assert.equal(node.widgets[0].value, "");
  assert.match(env.elements.find(item => item.tag === "pre").textContent, /Which do you prefer\?/);
  env.elements.find(item => item.textContent === "Approve this draft").onclick();
  assert.equal(node.widgets[0].value, "exact-draft-hash");
});

test("cancelling review never approves research", async () => {
  const env = setup();
  await env.extension.beforeRegisterNodeDef(env.Node, { name: "MindsRunCreativeTest" });
  const node = new env.Node(); node.onNodeCreated();
  env.setReview({ approval: "hash", locale: "en", audiences: [], question: { text: "Question" }, creativeLabels: [] });
  node.widgets.at(-1).callback();
  env.elements.find(item => item.textContent === "Cancel").onclick();
  assert.equal(node.widgets[0].value, "");
});

test("UI copy has complete key parity across nine languages", () => {
  assert.equal(Object.keys(strings).length, 9);
  for (const value of Object.values(strings)) assert.deepEqual(Object.keys(value), Object.keys(strings.en));
});

test("loading a template fills its blank request ID after widget values are restored", async () => {
  const env = setup();
  await env.extension.beforeRegisterNodeDef(env.Node, { name: "MindsPrepareCreativeTest" });
  const node = new env.Node(); node.onNodeCreated();
  node.widgets[1].value = ""; // A saved template's blank widgets_values overwrite creation defaults.
  node.onConfigure({});
  assert.equal(node.widgets[1].value, "generated-id");
  node.widgets[1].value = "saved-request";
  node.onConfigure({});
  assert.equal(node.widgets[1].value, "saved-request");
});


test("single node opens its own draft review and clears approval for a new test", async () => {
  const env = setup();
  await env.extension.beforeRegisterNodeDef(env.Node, { name: "MindsPreference" });
  const node = new env.Node(); node.onNodeCreated();
  assert.equal(node.widgets[0].type, "converted-widget");
  node.onExecuted({ minds_review: [{ approval: "single-node-hash", locale: "en", audiences: [{ name: "Viewers" }],
    question: { text: "Pick a creative" }, creativeLabels: ["A", "B"] }] });
  assert.equal(node.widgets[0].value, "");
  env.elements.find(item => item.textContent === "Approve this draft").onclick();
  assert.equal(node.widgets[0].value, "single-node-hash");
  node.widgets.find(widget => widget.label === "New test request").callback();
  assert.equal(node.widgets[0].value, "");
  assert.equal(node.mindsReview, null);
});
