import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { validateConnector } from "./validate.mjs";

const load = async (name) => JSON.parse(await readFile(new URL(`../${name}`, import.meta.url), "utf8"));
const committed = async () => ({ swagger: await load("apiDefinition.swagger.json"), properties: await load("apiProperties.json") });
const oauth = (properties) => properties.properties.connectionParameters.token.oAuthSettings;

test("committed package validates with Minds OAuth", async () => {
  const { swagger, properties } = await committed();
  assert.equal(validateConnector(swagger, properties), 5);
});

test("submission mode requires a real client ID", async () => {
  const { swagger, properties } = await committed();
  oauth(properties).clientId = "";
  assert.throws(() => validateConnector(swagger, properties, { submission: true }), /client ID/);
  oauth(properties).clientId = "REPLACE_WITH_CLIENT_ID";
  assert.throws(() => validateConnector(swagger, properties, { submission: true }), /client ID/);
  oauth(properties).clientId = "chatgpt_0123456789abcdef0123456789abcdef";
  assert.equal(validateConnector(swagger, properties, { submission: true }), 5);
});

test("rejects the retired API key connection", async () => {
  const { swagger, properties } = await committed();
  properties.properties.connectionParameters = { apiKey: { type: "securestring" } };
  assert.throws(() => validateConnector(swagger, properties), /OAuth token/);
});

test("requires PKCE on authorization and token requests", async () => {
  const { swagger, properties } = await committed();
  const custom = oauth(properties).customParameters;
  const authorize = custom.authorizationUrlQueryStringTemplate.value;
  custom.authorizationUrlQueryStringTemplate.value = authorize.replace("&code_challenge={CodeChallenge}&code_challenge_method=S256", "");
  assert.throws(() => validateConnector(swagger, properties), /code_challenge/);
  custom.authorizationUrlQueryStringTemplate.value = authorize;
  custom.tokenBodyTemplate.value = custom.tokenBodyTemplate.value.replace("&code_verifier={CodeVerifier}", "");
  assert.throws(() => validateConnector(swagger, properties), /code_verifier/);
});

test("rejects secrets, global redirects and scope drift", async () => {
  let { swagger, properties } = await committed();
  oauth(properties).clientSecret = "not-a-real-secret";
  assert.throws(() => validateConnector(swagger, properties), /client secret/);

  ({ swagger, properties } = await committed());
  oauth(properties).redirectMode = "Global";
  assert.throws(() => validateConnector(swagger, properties), /per-connector redirect/);

  ({ swagger, properties } = await committed());
  oauth(properties).scopes = ["flows:read"];
  assert.throws(() => validateConnector(swagger, properties), /scopes drifted/);

  ({ swagger, properties } = await committed());
  swagger.paths["/panels"].get.security = [{ apiKey: [] }];
  assert.throws(() => validateConnector(swagger, properties), /OAuth scopes/);
});
