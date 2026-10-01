// Minimal executor for the Make communication JSON in this directory.
//
// It evaluates the subset of Make's IML that these components use and runs
// requests the way Make does (base inheritance, conditional request arrays,
// temp, iterate with condition, limit, offset pagination, request-less
// output). Contract tests run it against a fake fetch; live-smoke.mjs runs it
// against production. Make itself remains the authority on IML semantics.
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

export const appRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
export const readJson = (path) => JSON.parse(readFileSync(join(appRoot, path), "utf8"));

const isEmpty = (value) =>
  value === undefined || value === null || value === "" || (Array.isArray(value) && value.length === 0);

const helpers = {
  ifempty: (value, fallback) => (isEmpty(value) ? fallback : value),
  __if: (condition, whenTrue, whenFalse) => (condition ? whenTrue : whenFalse),
  lower: (value) => (value === undefined || value === null ? value : String(value).toLowerCase()),
  contains: (text, search) => String(text ?? "").includes(String(search ?? "")),
  encodeURL: (value) => encodeURIComponent(String(value ?? "")),
  substring: (text, start, end) => String(text ?? "").substring(start, end),
  toCollection: (items, key, value) =>
    Object.fromEntries((items || []).map((entry) => [entry[key], entry[value]])),
  emptyarray: [],
};

const evaluate = (expression, context) => {
  const source = expression.replace(/\bif\(/g, "__if(");
  // eslint-disable-next-line no-new-func
  return new Function("ctx", `with (ctx) { return (${source}); }`)(new Proxy({ ...helpers, ...context }, {
    has: () => true,
    get: (target, key) => (key === Symbol.unscopables ? undefined : target[key]),
  }));
};

export const iml = (template, context) => {
  if (typeof template === "string") {
    const whole = template.match(/^\{\{([\s\S]*)\}\}$/);
    if (whole && !whole[1].includes("{{")) return evaluate(whole[1], context);
    return template.replace(/\{\{([\s\S]*?)\}\}/g, (_match, expression) => {
      const value = evaluate(expression, context);
      return value === undefined || value === null ? "" : String(value);
    });
  }
  if (Array.isArray(template)) return template.map((entry) => iml(entry, context));
  if (template && typeof template === "object") {
    let out = {};
    for (const [key, value] of Object.entries(template)) {
      if (key === "{{...}}") out = { ...out, ...iml(value, context) };
      else out[key] = iml(value, context);
    }
    return out;
  }
  return template;
};

const omitEmpty = (object) =>
  Object.fromEntries(Object.entries(object || {}).filter(([, value]) => !isEmpty(value)));

export class MakeModuleError extends Error {
  constructor(message, statusCode, type) {
    super(message);
    this.statusCode = statusCode;
    this.type = type;
  }
}

const errorFor = (base, statusCode, body) => {
  const config = base.response.error;
  const specific = config[String(statusCode)];
  const context = { statusCode, body };
  return new MakeModuleError(iml((specific && specific.message) || config.message, context), statusCode,
    (specific && specific.type) || "RuntimeError");
};

/**
 * Runs one component's communication. `kind` is "module" or "rpc" or
 * "connection". Returns { output, requests } where output is a bundle (action)
 * or an array of bundles (search, trigger, RPC).
 */
export async function runCommunication(api, { parameters = {}, connection = {}, fetch, base = readJson("base.json"), useBase = true }) {
  const steps = Array.isArray(api) ? api : [api];
  const temp = {};
  const requests = [];
  let output;
  for (const step of steps) {
    const context = () => ({ parameters, connection, temp });
    if (step.condition !== undefined && !iml(step.condition, context())) continue;
    if (!step.url) {
      output = iml(step.response.output, context());
      continue;
    }
    const iterateSpec = step.response && step.response.iterate;
    const limit = step.response && step.response.limit !== undefined ? Number(iml(step.response.limit, context())) || Infinity : Infinity;
    const collected = [];
    let page = 1;
    let done = false;
    while (!done) {
      const pageContext = { ...context(), pagination: { page } };
      const url = iml(step.url, pageContext);
      // Make collapses the duplicate slash of "https://host/api/" + "/v1/...".
      const absolute = (/^https?:/.test(url) ? url : `${useBase ? base.baseUrl : ""}${url}`).replace(/([^:])\/{2,}/g, "$1/");
      const qs = { ...omitEmpty(iml(step.qs || {}, pageContext)), ...(page > 1 ? iml(step.pagination.qs, pageContext) : {}) };
      const headers = { ...(useBase ? iml(base.headers, pageContext) : {}), ...omitEmpty(iml(step.headers || {}, pageContext)) };
      const method = iml(step.method || "GET", pageContext);
      const query = new URLSearchParams(Object.entries(qs).map(([key, value]) => [key, String(value)])).toString();
      const request = { method, url: query ? `${absolute}?${query}` : absolute, headers };
      if (step.body !== undefined && method !== "GET") {
        const body = iml(step.body, pageContext);
        request.body = step.type === "json" || typeof body === "object" ? JSON.stringify(body) : body;
        if (step.type === "json") request.headers["Content-Type"] = "application/json";
      }
      requests.push(request);
      const response = await fetch(request.url, request);
      const text = await response.text();
      let body;
      try { body = text ? JSON.parse(text) : undefined; } catch { body = text; }
      const responseContext = { ...pageContext, body, statusCode: response.status, headers: Object.fromEntries(response.headers || []) };
      if (response.status >= 400) throw errorFor(base, response.status, body);
      if (step.response && step.response.temp) Object.assign(temp, iml(step.response.temp, responseContext));
      if (!iterateSpec) {
        if (step.response && step.response.output !== undefined) output = iml(step.response.output, responseContext);
        break;
      }
      const container = typeof iterateSpec === "string" ? iterateSpec : iterateSpec.container;
      for (const item of iml(container, responseContext) || []) {
        const itemContext = { ...responseContext, item };
        if (typeof iterateSpec === "object" && iterateSpec.condition && !iml(iterateSpec.condition, itemContext)) continue;
        if (collected.length < limit) collected.push(iml(step.response.output, itemContext));
      }
      page += 1;
      done = collected.length >= limit || !step.pagination || !iml(step.pagination.condition, { ...responseContext, pagination: { page } });
    }
    if (iterateSpec) output = collected;
  }
  return { output, requests };
}
