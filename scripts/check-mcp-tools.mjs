// Fails when integration source calls an MCP tool the live Minds server does
// not expose. Source of truth: the code-generated server card, plus the public
// MCP metadata endpoint (aliases, hidden tools) when it answers 200.
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const CARD_URL = "https://getminds.ai/.well-known/mcp/server-card.json";
const PUBLIC_URL = "https://getminds.ai/api/public/mcp";
const root = new URL("..", import.meta.url).pathname;
const SKIP = new Set(["node_modules", ".git", "dist", "test", "tests", "docs"]);

function* sourceFiles(dir) {
  for (const name of readdirSync(dir)) {
    if (SKIP.has(name)) continue;
    const full = join(dir, name);
    if (statSync(full).isDirectory()) yield* sourceFiles(full);
    else if (/\.(m?[jt]s|gs)$/.test(name) && !/\.test\./.test(name)) yield full;
  }
}

const calls = [];
for (const file of [...sourceFiles(join(root, "apps")), ...sourceFiles(join(root, "packages"))]) {
  const text = readFileSync(file, "utf8");
  // Every snake_case string literal in a callTool*(...) argument head, which
  // covers ternaries and Apps Script helpers such as callTool_(session, "x").
  for (const head of text.matchAll(/callTool\w*\(([^)]{0,160})/g))
    for (const match of head[1].matchAll(/["'`]([a-z]+(?:_[a-z0-9]+)+)["'`]/g))
      calls.push({ file: relative(root, file), tool: match[1] });
}

const card = await (await fetch(CARD_URL)).json();
const advertised = new Set((card.tools || []).map((tool) => tool.name));
if (!advertised.size) throw new Error(`No tools in ${CARD_URL}`);

const callableOnly = new Set();
try {
  const response = await fetch(PUBLIC_URL);
  if (response.ok) {
    const meta = await response.json();
    for (const name of Object.keys(meta.aliases || meta.toolAliases || {})) callableOnly.add(name);
    for (const entry of meta.hiddenTools || []) callableOnly.add(typeof entry === "string" ? entry : entry?.name);
  }
} catch {
  // Optional endpoint; the server card alone is authoritative.
}

const failures = [];
for (const { file, tool } of calls) {
  if (advertised.has(tool)) console.log(`ok   ${tool}  (${file})`);
  else if (callableOnly.has(tool)) console.log(`warn ${tool}  (${file}) is an alias/hidden tool, not advertised`);
  else failures.push(`${tool}  (${file})`);
}
if (!calls.length) throw new Error("No MCP tool calls found; the scanner is out of date");
if (failures.length) {
  console.error(`Not on the live MCP surface (${CARD_URL}):\n  ${failures.join("\n  ")}`);
  process.exit(1);
}
