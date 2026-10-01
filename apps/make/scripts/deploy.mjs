// Deploys this directory to a Make custom app through the Make SDK Apps API.
//
//   MAKE_API_TOKEN=... MAKE_ZONE=eu1.make.com node apps/make/scripts/deploy.mjs [--dry-run]
//
// The token needs the sdk-apps:read and sdk-apps:write scopes. Components are
// created when missing and every section is overwritten from the repository,
// so the repository stays the source of truth. Make appends a random suffix to
// a new app's name; app.json records it as makeAppName (MAKE_APP_NAME overrides).
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { appRoot, readJson } from "./runner.mjs";

const app = readJson("app.json");
const token = process.env.MAKE_API_TOKEN;
const zone = process.env.MAKE_ZONE || app.makeZone || "eu1.make.com";
const dryRun = process.argv.includes("--dry-run");
if (!token && !dryRun) throw new Error("Set MAKE_API_TOKEN.");

const version = Number(process.env.MAKE_APP_VERSION || 1);
const root = `https://${zone}/api/v2/sdk/apps`;

const call = async (method, url, body, contentType = "application/json") => {
  if (dryRun) {
    console.log(`${method} ${url.replace(`https://${zone}/api/v2`, "")}`);
    return method === "GET" ? undefined : {};
  }
  const response = await fetch(url, {
    method,
    headers: {
      Authorization: `Token ${token}`,
      Accept: "application/json",
      ...(body === undefined ? {} : { "Content-Type": contentType }),
    },
    body: body === undefined ? undefined : typeof body === "string" || body instanceof Uint8Array ? body : JSON.stringify(body),
  });
  const text = await response.text();
  if (method === "GET" && response.status === 404) return undefined;
  if (!response.ok) throw new Error(`${method} ${url} -> ${response.status} ${text.slice(0, 500)}`);
  return text ? JSON.parse(text) : {};
};

// Section bodies are sent as JSONC text, the format the Make app editor uses.
const section = (url, value) => call("PUT", url, JSON.stringify(value, null, 2), "application/jsonc");

let name = process.env.MAKE_APP_NAME || app.makeAppName;
if (!name) {
  const created = await call("POST", root, {
    name: app.name, label: app.label, description: app.description, theme: app.theme, language: app.language, countries: app.countries,
  });
  name = created?.app?.name || app.name;
  console.log(`created app ${name}; record it as makeAppName in app.json`);
} else {
  await call("PATCH", `${root}/${name}/${version}`, { label: app.label, description: app.description, theme: app.theme });
}
// Components of a published app can't be deleted, so pruning only runs while private.
const isPublic = Boolean((await call("GET", `${root}/${name}/${version}`))?.app?.public);
const appPath = `${root}/${name}/${version}`;
await section(`${appPath}/base`, readJson("base.json"));
await call("PUT", `${appPath}/icon`, readFileSync(join(appRoot, "assets/logo-512.png")), "image/png");
await call("PUT", `${appPath}/readme`, readFileSync(join(appRoot, "docs.md"), "utf8"), "text/markdown");

const connections = (await call("GET", `${root}/${name}/connections`))?.appConnections || [];
let connection = connections[0]?.name;
if (!connection) {
  connection = (await call("POST", `${root}/${name}/connections`, { type: "apikey", label: "Minds" }))?.appConnection?.name || `${name}`;
  console.log(`created connection ${connection}`);
}
await section(`${root}/connections/${connection}/api`, readJson("connection/api.json"));
await section(`${root}/connections/${connection}/parameters`, readJson("connection/parameters.json"));

const rpcs = new Set(((await call("GET", `${appPath}/rpcs`))?.appRpcs || []).map((rpc) => rpc.name));
for (const rpc of readJson("rpcs/manifest.json")) {
  if (!rpcs.has(rpc.name)) await call("POST", `${appPath}/rpcs`, { ...rpc, connection });
  await section(`${appPath}/rpcs/${rpc.name}/api`, readJson(`rpcs/${rpc.name}/api.json`));
  await section(`${appPath}/rpcs/${rpc.name}/parameters`, readJson(`rpcs/${rpc.name}/parameters.json`));
}

const modules = new Map(((await call("GET", `${appPath}/modules`))?.appModules || []).map((module) => [module.name, module]));
for (const module of readJson("modules/manifest.json")) {
  const current = modules.get(module.name);
  if (!current) {
    await call("POST", `${appPath}/modules`, { ...module, connection, moduleInitMode: "blank" });
  } else if (current.label !== module.label || current.description !== module.description) {
    await call("PATCH", `${appPath}/modules/${module.name}`, { label: module.label, description: module.description });
  }
  const sections = ["api", "parameters", "expect", "interface", "samples", ...(module.typeId === 1 ? ["epoch"] : [])];
  for (const part of sections) await section(`${appPath}/modules/${module.name}/${part}`, readJson(`modules/${module.name}/${part}.json`));
  console.log(`deployed module ${module.name}`);
}
const wanted = new Set(readJson("modules/manifest.json").map((module) => module.name));
for (const stale of [...modules.keys()].filter((module) => !wanted.has(module))) {
  if (isPublic) console.warn(`module ${stale} is no longer in the manifest; published apps keep it (deprecate it in Make)`);
  else { await call("DELETE", `${appPath}/modules/${stale}`); console.log(`deleted module ${stale}`); }
}
const wantedRpcs = new Set(readJson("rpcs/manifest.json").map((rpc) => rpc.name));
for (const stale of [...rpcs].filter((rpc) => !wantedRpcs.has(rpc))) {
  if (isPublic) console.warn(`rpc ${stale} is no longer in the manifest; published apps keep it`);
  else { await call("DELETE", `${appPath}/rpcs/${stale}`); console.log(`deleted rpc ${stale}`); }
}
// Published apps: keep every manifest module visible to other users.
if (isPublic) {
  for (const module of wanted) await call("POST", `${appPath}/modules/${module}/public`);
}
console.log(`deployed ${name} v${version} to ${zone}`);
