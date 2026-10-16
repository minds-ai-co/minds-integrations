// Opt-in live E2E: run against your own authenticated ComfyUI server and a small ready Audience.
// The Minds key is supplied to the ComfyUI server, never to this browser or workflow.
import assert from "node:assert/strict";
import { randomUUID } from "node:crypto";
import { readFile, writeFile, readdir } from "node:fs/promises";
import { chromium } from "./widget-build/node_modules/playwright/index.mjs";

const [base = "http://127.0.0.1:8197", audienceFile, output = "/tmp/minds-comfy-single-node"] = process.argv.slice(2);
if (!audienceFile) throw new Error("Pass a JSON file with a ready Audience id and mindCount; live research consumes usage.");
const audience = JSON.parse(await readFile(audienceFile, "utf8"));
assert.match(audience.id, /^[0-9a-f-]{36}$/);
const root = new URL("../example_workflows/", import.meta.url);
const browser = await chromium.launch({ headless: true, args: ["--no-sandbox"] });
const page = await browser.newPage({ viewport: { width: 1900, height: 1400 } });
const errors = [];
const authenticatedBrowserCalls = [];
page.on("pageerror", error => errors.push(error.message));
page.on("request", request => {
  if (request.headers().authorization) authenticatedBrowserCalls.push(request.url());
});
const receipts = [];
let state = {};
try { state = JSON.parse(await readFile(`${output}-state.json`, "utf8")); } catch (error) { if (error.code !== "ENOENT") throw error; }
try {
  await page.goto(base, { waitUntil: "domcontentloaded" });
  await page.waitForFunction(() => Boolean(window.comfyAPI?.app?.app?.graph), null, { timeout: 60000 });
  await page.waitForTimeout(1500);
  await page.keyboard.press("Escape");
  for (const file of (await readdir(root)).filter(file => file.endsWith(".json"))) {
    const graph = JSON.parse(await readFile(new URL(file, root), "utf8"));
    const probe = await page.evaluate(async graph => {
      const { app } = await import("/scripts/app.js");
      await app.loadGraphData(graph);
      const nodes = app.graph._nodes;
      const minds = nodes.filter(node => node.type === "MindsPreference");
      return { missing: nodes.filter(node => node.has_errors).map(node => node.type), minds: minds.length,
        requestId: minds[0].widgets.find(widget => widget.name === "request_id").value };
    }, graph);
    assert.deepEqual(probe.missing, []); assert.equal(probe.minds, 1); assert.ok(probe.requestId);
    console.log(JSON.stringify({ template: file, valid: true, mindsNodes: probe.minds }));
  }
  for (const file of ["01-ad-selection.json", "07-native-video-selection.json"]) {
    const graph = JSON.parse(await readFile(new URL(file, root), "utf8"));
    const node = graph.nodes.find(node => node.type === "MindsPreference");
    node.widgets_values[0] = audience.id;
    state[file] ||= randomUUID();
    node.widgets_values[8] = state[file];
    await writeFile(`${output}-state.json`, JSON.stringify(state));
    const requestId = await page.evaluate(async graph => {
      const { app } = await import("/scripts/app.js");
      await app.loadGraphData(graph);
      app.canvas.ds.scale = 0.85; app.canvas.ds.offset = [75, 55]; app.canvas.setDirty(true, true);
      const node = app.graph._nodes.find(node => node.type === "MindsPreference");
      const requestId = node.widgets.find(widget => widget.name === "request_id").value;
      await app.queuePrompt(0, 1);
      return requestId;
    }, graph);
    await page.getByRole("button", { name: "Approve this draft", exact: true }).waitFor({ timeout: 180000 });
    const dialog = await page.locator("dialog pre").innerText();
    assert.ok(JSON.parse(node.widgets_values[3]).every(label => dialog.includes(label)));
    await page.getByRole("button", { name: "Approve this draft", exact: true }).click();
    await page.evaluate(async () => { const { app } = await import("/scripts/app.js"); await app.queuePrompt(0, 1); });
    const frame = page.frameLocator('iframe[title="Minds response"]');
    await frame.getByText("Research completed", { exact: true }).waitFor({ timeout: 1000000 });
    const body = await frame.locator("body").innerText();
    assert.ok(JSON.parse(node.widgets_values[3]).every(label => body.includes(label))); assert.match(body, /%/);
    assert.match(body, new RegExp(`${audience.mindCount} Minds consulted`));
    const historyResponse = await page.request.get(`${base}/history`);
    const history = await historyResponse.json();
    const completed = Object.values(history).findLast(item => item.status?.completed
      && item.prompt?.[2]?.[String(node.id)]?.inputs.request_id === requestId
      && item.outputs?.[String(node.id)]?.minds_response);
    assert.ok(completed, "Completed ComfyUI history includes the actual response result");
    const save = graph.nodes.find(node => node.type.startsWith("Save"));
    assert.ok(Object.keys(completed.outputs[String(save.id)] || {}).length, "Selected original media reached native Save node");
    const result = completed.outputs[String(node.id)].minds_response[0];
    receipts.push({ template: file, studyId: result.studyId, runId: result.runId,
      audienceCount: result.outputData.audiences.length, mindCount: audience.mindCount, completed: true,
      originalMediaSaved: true, responseRendered: true });
    await page.evaluate(async () => {
      const { app } = await import("/scripts/app.js");
      const node = app.graph._nodes.find(node => node.type === "MindsPreference");
      // Mask the account's Audience UUID in shareable captures, without changing the tested graph.
      const field = node.widgets.find(widget => widget.name === "audience_ids").inputEl;
      if (field) field.style.filter = "blur(5px)";
    });
    await page.screenshot({ path: `${output}-${file.replace(".json", ".png")}` });
    // Keep private result snapshots outside the source/distribution repositories.
    await writeFile(`${output}-${file}`, JSON.stringify(completed.outputs), { mode: 0o600 });
    console.log(JSON.stringify(receipts.at(-1)));
  }
  assert.deepEqual(errors, []); assert.deepEqual(authenticatedBrowserCalls, []);
  await writeFile(`${output}-receipt.json`, JSON.stringify({ receipts, browserErrors: errors,
    browserAuthorizationRequests: authenticatedBrowserCalls.length }, null, 2));
} finally { await browser.close(); }
