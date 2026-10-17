import { build } from "esbuild";
import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const root = new URL("../../web/", import.meta.url);
const source = "https://getminds.ai/_widgets/response.html";
const expected = "53492c6e399e0964d4efe0240acfb74c61d253ca6e1e49711ddb6c7cfdd82b0c";
const chunks = {
  "sphere-graph-scene.24bc559152f3.js": "24bc559152f39f1f3abc8c8b2823f12be5ba87a1ff87a859cbda972fe7879807",
  "study-pdf-preview.340791b6c8b1.js": "340791b6c8b115ee6e0400803d5863ffdf670a40b174f6f17756f3d5a3183325",
};
async function publishedResponse() {
  const response = await fetch(source, { redirect: "error", signal: AbortSignal.timeout(30000) });
  if (!response.ok) throw new Error(`Response widget download failed: ${response.status}`);
  return response.text();
}
// A reviewed canonical build can precede its webapp production promotion.
// Both sources must match the exact pinned artifact digest below.
const html = process.argv[2] ? await readFile(process.argv[2], "utf8") : await publishedResponse();
if (createHash("sha256").update(html).digest("hex") !== expected) {
  throw new Error("Published response widget changed; review and explicitly pin its new digest before rebuilding.");
}
if (!html.includes("<!-- __WIDGET_CONFIG__ -->")) throw new Error("Missing widget config boundary");
const config = { type: "response", finalResults: true, apiBase: "https://getminds.ai" };
await mkdir(root, { recursive: true });
await mkdir(new URL("chunks/", root), { recursive: true });
let localHtml = html;
for (const [name, digest] of Object.entries(chunks)) {
  let content;
  if (process.argv[2]) content = await readFile(resolve(dirname(process.argv[2]), "chunks", name));
  else {
    const response = await fetch(new URL(`/_widgets/chunks/${name}`, source), { redirect: "error" });
    if (!response.ok) throw new Error(`Widget asset download failed: ${response.status}`);
    content = Buffer.from(await response.arrayBuffer());
  }
  if (createHash("sha256").update(content).digest("hex") !== digest) throw new Error("Widget asset digest changed");
  // ComfyUI imports every .js extension at startup; lazy iframe-only assets
  // use .mjs so they never execute in the parent graph's JavaScript context.
  const localName = name.replace(/\.js$/, ".mjs");
  await writeFile(new URL(`chunks/${localName}`, root), content);
  localHtml = localHtml.replaceAll(`__MINDS_WIDGET_ORIGIN__/_widgets/chunks/${name}`, `./chunks/${localName}`);
}
await writeFile(new URL("response.html", root), localHtml
  .replaceAll("__MINDS_WIDGET_ORIGIN__", "https://getminds.ai")
  .replace("<!-- __WIDGET_CONFIG__ -->", `<script>window.__WIDGET_CONFIG__=${JSON.stringify(config)};</script>`));
const built = await build({ metafile: true, entryPoints: [fileURLToPath(new URL("bridge.js", import.meta.url))], bundle: true,
  format: "esm", platform: "browser", minify: true, legalComments: "eof",
  outfile: fileURLToPath(new URL("app-bridge.js", root)) });

// Preserve the license notices for every third-party package included in the host bundle.
const packages = new Set(Object.keys(built.metafile.inputs).flatMap(input => {
  const segment = input.split("node_modules/").at(-1);
  if (segment === input) return [];
  const parts = segment.split("/");
  return [parts.slice(0, parts[0].startsWith("@") ? 2 : 1).join("/")];
}));
const notices = [];
for (const name of [...packages].sort()) {
  const directory = new URL(`node_modules/${name}/`, import.meta.url);
  const metadata = JSON.parse(await readFile(new URL("package.json", directory), "utf8"));
  let license;
  for (const file of ["LICENSE", "LICENSE.md", "LICENSE.txt"]) {
    try { license = await readFile(new URL(file, directory), "utf8"); break; }
    catch (error) { if (error.code !== "ENOENT") throw error; }
  }
  if (!license) throw new Error(`Missing bundled dependency license: ${name}`);
  notices.push(`${name}@${metadata.version}\n${license}`);
}
await writeFile(new URL("bridge-licenses.txt", root), notices.join("\n\n---\n\n"));
