// Render the actual pinned response widget without API credentials or a research run.
import assert from "node:assert/strict";
import { createServer } from "node:http";
import { readFile, mkdir, writeFile } from "node:fs/promises";
import { chromium } from "./widget-build/node_modules/playwright/index.mjs";

const output = process.argv[2] || "/tmp/minds-comfy-response-layout";
const replay = process.argv[3] ? JSON.parse(await readFile(process.argv[3], "utf8")) : undefined;
const id = "00000000-0000-4000-8000-000000000001";
const title = "Which creative do you prefer?";
const fixture = { type: "response", mode: "study", finalResults: true, status: "completed",
  apiBase: "https://getminds.ai", studyId: id, locale: "en", question: title,
  outputData: { type: "categorical", title, keyFinding: "A leads this illustrative comparison.",
    summary: "Illustrative layout fixture. ".repeat(50) + "END OF LAYOUT FIXTURE",
    classification: { type: "categorical", options: ["A", "B"], responseForm: "single_choice" },
    audiences: [{ audience: "Example Audience", audienceId: id, value: "A",
      distribution: { A: 4, B: 1 }, answers: ["A", "A", "A", "A", "B"].map((value, index) => ({
        value, mindId: `${id.slice(0, -1)}${index + 2}`, persona: `Example respondent ${index + 1}`,
        message: "Illustrative response for layout verification." })) }] } };
const payload = replay ? Object.values(replay).find(output => output.minds_response)?.minds_response[0] : fixture;
assert.ok(payload?.outputData || payload?.recentResults?.some(result => result.outputData),
  "Replay must contain a completed Minds response");
const html = () => `<!doctype html><style>body{margin:0;background:#252525;padding:24px}
#host{width:620px;height:520px;overflow:hidden;transform-origin:top left}</style>
<div id="host"></div><script type="module">
import {mountResponse} from '/response.js';
window.dispose=mountResponse(document.querySelector('#host'),${JSON.stringify(payload)},'en');
</script>`;
const server = createServer(async (request, response) => {
  try {
    const path = new URL(request.url, "http://localhost").pathname;
    if (path === "/") { response.setHeader("Content-Type", "text/html"); response.end(html()); return; }
    if (path === "/fixtures/a.png" || path === "/fixtures/b.png") {
      response.setHeader("Content-Type", "image/png");
      const variant = path === "/fixtures/a.png" ? "a" : "b";
      response.end(await readFile(new URL(`../example_workflows/assets/minds-sample-${variant}.png`, import.meta.url)));
      return;
    }
    if (!["/response.js", "/response.html", "/app-bridge.js", "/strings.js"].includes(path)
      && !/^\/chunks\/[a-z0-9.-]+\.mjs$/.test(path)) {
      response.writeHead(404).end(); return;
    }
    response.setHeader("Content-Type", path.endsWith(".html") ? "text/html" : "text/javascript");
    response.end(await readFile(new URL(`../web${path}`, import.meta.url)));
  } catch { response.writeHead(500).end(); }
});
await new Promise(resolve => server.listen(0, "127.0.0.1", resolve));
if (!replay) payload.questionStimuli = [[
  { name: "A", url: `http://127.0.0.1:${server.address().port}/fixtures/a.png` },
  { name: "B", url: `http://127.0.0.1:${server.address().port}/fixtures/b.png` },
]];
const browser = await chromium.launch({ headless: true, args: ["--no-sandbox"] });
const page = await browser.newPage({ viewport: { width: 1000, height: 1100 } });
const errors = []; const receipts = [];
page.on("pageerror", error => errors.push(error.message));
try {
  await mkdir(output, { recursive: true });
  await page.goto(`http://127.0.0.1:${server.address().port}/`);
  const frame = page.frameLocator('iframe[title="Minds response"]');
  await frame.getByText("Research completed", { exact: true }).waitFor();
  for (const stimulus of payload.questionStimuli?.[0] || payload.recentResults?.[0]?.stimuli || []) {
    if (stimulus.mediaType) continue;
    const image = frame.locator(`img[src=${JSON.stringify(stimulus.url)}]:visible`).first();
    await image.scrollIntoViewIfNeeded();
    await image.evaluate(async element => {
      await element.decode();
      if (!element.naturalWidth) throw new Error("Question attachment did not load");
    });
  }
  for (const [width, height, zoom] of [[620, 520, 1], [360, 460, 1], [620, 780, 1], [620, 520, 0.65]]) {
    await page.locator("#host").evaluate((element, [width, height, zoom]) => {
      element.style.width = `${width}px`; element.style.height = `${height}px`;
      element.style.transform = `scale(${zoom})`;
    }, [width, height, zoom]);
    await frame.locator("html").evaluate(async (element, height) => {
      for (let tries = 0; tries < 100; tries++) {
        if (parseFloat(element.style.getPropertyValue("--widget-frame-height")) === height) return;
        await new Promise(resolve => requestAnimationFrame(resolve));
      }
      throw new Error(`Widget did not adapt to ${height}px`);
    }, height);
    const bounds = await frame.locator(".widget-content-scroll").evaluate(element => {
      element.scrollTop = element.scrollHeight;
      return { viewport: innerHeight, height: element.clientHeight, scrollHeight: element.scrollHeight,
        bottomReachable: element.scrollTop + element.clientHeight >= element.scrollHeight - 2 };
    });
    assert.ok(bounds.height <= height, `Scroll viewport exceeds node: ${JSON.stringify(bounds)}`);
    assert.ok(bounds.bottomReachable, "Final results must be reachable by scrolling");
    assert.equal(bounds.viewport, height);
    const footer = await frame.getByRole("button", { name: "Add Audience", exact: true }).boundingBox();
    const host = await page.locator("#host").boundingBox();
    assert.ok(footer && footer.y >= host.y && footer.y + footer.height <= host.y + host.height + 2,
      "The bottom action row must be visible inside the frame after scrolling");
    await page.locator("#host").screenshot({ path: `${output}/${width}x${height}-zoom-${zoom}.png` });
    receipts.push({ width, height, zoom, ...bounds });
  }
  assert.deepEqual(errors, []);
  await page.evaluate(() => window.dispose());
  assert.equal(await page.locator("iframe").count(), 0);
  await writeFile(`${output}/receipt.json`, JSON.stringify({ receipts, errors }, null, 2));
  console.log(JSON.stringify({ receipts, errors }, null, 2));
} finally { await browser.close(); await new Promise(resolve => server.close(resolve)); }
