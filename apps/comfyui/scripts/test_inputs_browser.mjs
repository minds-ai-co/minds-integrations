// Exercise the published LiteGraph compatibility baseline without running paid research.
// Current ComfyUI vendors this library; this is not a full current-server E2E test.
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { chromium } from "./widget-build/node_modules/playwright/index.mjs";

const graphLibrary = await readFile(new URL("./widget-build/node_modules/@comfyorg/litegraph/dist/litegraph.umd.js", import.meta.url), "utf8");
const extension = (await readFile(new URL("../web/inputs.js", import.meta.url), "utf8"))
  .replace("export function", "window.installDynamicMediaInputs = function");
const browser = await chromium.launch({ headless: true, args: ["--no-sandbox"] });
try {
  const page = await browser.newPage();
  await page.setContent("<!doctype html><html><body></body></html>");
  await page.addScriptTag({ content: graphLibrary });
  await page.addScriptTag({ content: extension });
  const result = await page.evaluate(async () => {
    const { LiteGraph, LGraph, LGraphNode } = window.litegraph.js;
    const schema = Object.fromEntries(["images", "images_b", "videos", "videos_b",
      ...Array.from({ length: 18 }, (_, i) => `images_${i + 3}`),
      ...Array.from({ length: 18 }, (_, i) => `videos_${i + 3}`)]
      .map(name => [name, [name.startsWith("images") ? "IMAGE" : "VIDEO"]]));
    class Preference extends LGraphNode {
      constructor() {
        super("Minds");
        for (const [name, [type]] of Object.entries(schema)) this.addInput(name, type);
      }
    }
    class Source extends LGraphNode {
      constructor() { super("Source"); this.addOutput("video", "VIDEO"); this.addOutput("image", "IMAGE"); }
    }
    window.installDynamicMediaInputs(Preference, { input: { optional: schema } });
    LiteGraph.registerNodeType("test/Minds", Preference);
    LiteGraph.registerNodeType("test/Source", Source);
    const graph = new LGraph();
    const node = LiteGraph.createNode("test/Minds");
    graph.add(node);
    const originals = [];
    for (const name of ["videos", "videos_b", "videos_3", "videos_4"]) {
      const source = LiteGraph.createNode("test/Source");
      graph.add(source);
      source.connect(0, node, node.inputs.findIndex(input => input.name === name));
      originals.push(source.id);
      await Promise.resolve();
    }
    const restored = new LGraph();
    restored.configure(graph.serialize());
    await Promise.resolve();
    const saved = restored.getNodeById(node.id);
    const names = ["videos", "videos_b", "videos_3", "videos_4"];
    function connections() {
      return names.map(name => {
        const index = saved.inputs.findIndex(input => input.name === name);
        const link = restored.links[saved.inputs[index].link];
        return { name, source: link?.origin_id ?? null, slot: link?.target_slot ?? null, index };
      });
    }
    const before = connections();
    saved.disconnectInput(saved.inputs.findIndex(input => input.name === "videos_b"));
    await Promise.resolve();
    const middleRemoved = connections();
    saved.disconnectInput(saved.inputs.findIndex(input => input.name === "videos_4"));
    saved.disconnectInput(saved.inputs.findIndex(input => input.name === "videos_3"));
    await Promise.resolve();
    return { originals, before, middleRemoved, remaining: saved.inputs.map(input => input.name) };
  });
  assert.deepEqual(result.before.map(input => input.source), result.originals);
  assert.ok(result.before.every(input => input.slot === input.index));
  assert.deepEqual(result.middleRemoved.map(input => input.source), [result.originals[0], null, result.originals[2], result.originals[3]]);
  assert.ok(result.middleRemoved.filter(input => input.source !== null).every(input => input.slot === input.index));
  assert.deepEqual(result.remaining, ["images", "images_b", "videos", "videos_b"]);
  console.log("ComfyUI graph library: four-video connections, save/reload and disconnection passed.");
} finally { await browser.close(); }
