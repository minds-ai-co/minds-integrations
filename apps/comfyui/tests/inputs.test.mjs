import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import vm from "node:vm";

const source = (await readFile(new URL("../web/inputs.js", import.meta.url), "utf8"))
  .replace("export function", "function");
const schema = Object.fromEntries(["images", "images_b", "videos", "videos_b",
  ...Array.from({ length: 18 }, (_, i) => `images_${i + 3}`),
  ...Array.from({ length: 18 }, (_, i) => `videos_${i + 3}`)]
  .map(name => [name, [name.startsWith("images") ? "IMAGE" : "VIDEO"]]));

async function setup() {
  const context = vm.createContext({ queueMicrotask });
  vm.runInContext(source, context);
  class Node {
    constructor() {
      this.inputs = Object.entries(schema).map(([name, [type]]) => ({ name, type, link: null }));
      this.size = [620, 1100];
      this.graph = {};
    }
    addInput(name, type, options) { this.inputs.push({ name, type, link: null, ...options }); }
    removeInput(index) {
      assert.equal(this.inputs[index].link, null, "never remove a connected input");
      this.inputs.splice(index, 1);
      this.onConnectionsChange(1, index, false);
    }
    computeSize() { return [620, 1000 + this.inputs.length * 20]; }
    setSize(size) { this.size = size; }
    setDirtyCanvas() {}
    connect(name, link) {
      const index = this.inputs.findIndex(input => input.name === name);
      assert.notEqual(index, -1, `${name} is visible before connecting`);
      this.inputs[index].link = link;
      this.onConnectionsChange(1, index, link !== null);
    }
  }
  context.installDynamicMediaInputs(Node, { input: { optional: schema } });
  const node = new Node();
  node.onNodeCreated();
  await Promise.resolve();
  return node;
}

test("four independent videos reveal typed sockets without changing existing graph names", async () => {
  const node = await setup();
  assert.deepEqual(node.inputs.map(input => input.name), ["images", "images_b", "videos", "videos_b"]);
  for (const [index, name] of ["videos", "videos_b", "videos_3", "videos_4"].entries()) {
    node.connect(name, index + 1);
    await Promise.resolve();
  }
  assert.equal(node.inputs.find(input => input.name === "videos_5").type, "VIDEO");
  assert.equal(node.inputs.filter(input => input.link !== null).length, 4);
  assert.equal(node.inputs[2].name, "videos");
  assert.equal(node.inputs[3].name, "videos_b");
});

test("disconnecting a middle socket preserves later links and removes only unused trailing slots", async () => {
  const node = await setup();
  for (const [index, name] of ["images", "images_b", "images_3", "images_4"].entries()) {
    node.connect(name, index + 1);
    await Promise.resolve();
  }
  node.connect("images_b", null);
  await Promise.resolve();
  assert.equal(node.inputs.find(input => input.name === "images_4").link, 4);
  node.connect("images_4", null);
  node.connect("images_3", null);
  await Promise.resolve();
  assert.deepEqual(node.inputs.map(input => input.name), ["images", "images_b", "videos", "videos_b"]);
});

test("restoring a saved workflow keeps fourth and sparse sockets and creates the next spare", async () => {
  const node = await setup();
  node.inputs.push({ name: "videos_4", type: "VIDEO", link: 19 });
  node.onConfigure({});
  await Promise.resolve();
  assert.equal(node.inputs.find(input => input.name === "videos_4").link, 19);
  assert.equal(node.inputs.find(input => input.name === "videos_5").link, null);
  assert.equal(node.inputs.find(input => input.name === "videos_3").type, "VIDEO");
});

test("a duplicate connection callback is idempotent and growth stops at twenty sockets", async () => {
  const node = await setup();
  for (let index = 1; index <= 20; index++) {
    const name = index === 1 ? "videos" : index === 2 ? "videos_b" : `videos_${index}`;
    node.connect(name, index);
    node.onConnectionsChange(1, index, true);
    await Promise.resolve();
  }
  assert.equal(node.inputs.filter(input => input.type === "VIDEO").length, 20);
  assert.equal(node.inputs.find(input => input.name === "videos_21"), undefined);
});
