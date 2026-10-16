import { build } from "esbuild";
import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const root = new URL("../../web/", import.meta.url);
const source = "https://getminds.ai/_widgets/response.html";
const expected = "7e519f650c845e212b46165ca8c1fd2b39eac000c5bb2a9edf17e0178d690f29";
const response = await fetch(source, { redirect: "error", signal: AbortSignal.timeout(30000) });
if (!response.ok) throw new Error(`Response widget download failed: ${response.status}`);
const html = await response.text();
if (createHash("sha256").update(html).digest("hex") !== expected) {
  throw new Error("Published response widget changed; review and explicitly pin its new digest before rebuilding.");
}
if (!html.includes("<!-- __WIDGET_CONFIG__ -->")) throw new Error("Missing widget config boundary");
const config = { type: "response", finalResults: true, apiBase: "https://getminds.ai" };
await mkdir(root, { recursive: true });
await writeFile(new URL("response.html", root), html
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
