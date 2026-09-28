# Minds Power Platform connector

The connector exposes a bounded set of production REST operations for Power
Automate, Power Apps, Logic Apps, and Copilot Studio. The default research
operation is a non-executing plan preview.

The committed Swagger 2.0 definition is generated from the canonical live
OpenAPI 3.1 document (`https://getminds.ai/_openapi.json`). It includes five
bounded operations on the canonical `/api/v1/studies` endpoints: list, create,
and read a Study, preview a non-executing research plan, and read a persisted
Study summary. Destructive deletion and study execution are intentionally
excluded. The legacy `/api/v1/panels` aliases are not used: they return the
current Study shape, which no longer matched the Panel schema.

The generator adapts the canonical schemas to what the Power Platform runtime
accepts:

- nullable fields carry `x-nullable` and are never listed as `required`, because
  flows reject `null` for a required property;
- string formats (`uuid`, `uri`, `date-time`) are dropped and integers are
  declared `int32`, because the connector test console reports any other
  declaration as a schema mismatch;
- the Study summary payload, which the canonical document types only as
  `object`, is documented property by property;
- every parameter gets an `x-ms-summary` and a full-sentence description, and
  the research-plan preview exposes only the fields needed to start or revise a
  plan (request, language, main source, draft ID, revision, refinement,
  answers).

## Authentication

Users sign in with their Minds account through OAuth 2.0 authorization code
with PKCE against Minds' own authorization server
(`https://getminds.ai/.well-known/oauth-authorization-server`):

| Setting | Value |
| --- | --- |
| Identity provider | `oauth2generic` with URL and body templates |
| Authorization URL | `https://getminds.ai/oauth/authorize` |
| Token and refresh URL | `https://getminds.ai/oauth/token` |
| PKCE | S256, sent through `{CodeChallenge}` and `{CodeVerifier}` |
| Client type | Public (`token_endpoint_auth_method: none`); no secret is sent |
| Scopes | `flows:read flows:write sparks:read` |
| Redirect mode | `GlobalPerConnector` |
| Access token lifetime | 1 hour, refreshed with rotating refresh tokens |

The templates send the PKCE challenge and verifier explicitly, because Minds
rejects authorization requests without S256 PKCE. `/api/v1/studies*` accepts these OAuth access tokens in
the same way as `minds_` API keys.

`clientId` is the registered Minds OAuth client "Minds for Microsoft Power
Platform". Microsoft also receives the client ID through Partner Center,
together with the client secret if Partner Center requires one (Minds issues a
secret at registration but does not check it). The secret is stored in `pass` at
`agents/microsoft/getminds/power-platform-oauth-client-secret` and never
committed.

### Redirect URIs

Power Platform uses a per-connector redirect URI:
`https://global.consent.azure-apim.net/redirect/<api-name>`. The API name
differs between a test custom connector and the certified connector, and the
certified one is only known after the Partner Center submission. The Minds OAuth
client must therefore accept:

- `https://global.consent.azure-apim.net/redirect`
- the redirect URI shown on the Security tab of the test custom connector
  (registered: `.../redirect/minds-5fminds-20market-20research-5fe8525a0b0d439466`
  for the test connector in the developers@getminds.ai developer environment)
- the certified connector's redirect URI, added once Microsoft assigns it

The authorization endpoint compares `redirect_uri` with the URIs stored on the
client, so each new URI is added to `public.oauth_clients.redirect_uris`. The
DCR allowlist in the webapp accepts both the global and the per-connector form.

## Validate

Refresh and validate the package before a Microsoft submission:

```bash
node connectors/power-platform/scripts/sync-openapi.mjs  # or MINDS_OPENAPI_SOURCE=<file>
node connectors/power-platform/scripts/validate.mjs
node --test connectors/power-platform/scripts/*.test.mjs
```

`validate.mjs` checks the bounded operation set, the OAuth settings (endpoints,
PKCE templates, scopes, per-connector redirect mode, no client secret), the
certification string rules (summaries, parameter summaries and descriptions),
non-empty response schemas, and the certification metadata. Before a submission, run it with `--submission`; that
mode also fails while `clientId` is empty or a placeholder.

## Certification checklist

1. Register the dedicated Minds OAuth client and set `clientId`.
2. Import the connector into a Power Platform environment, add its redirect URI
   to the Minds OAuth client, and run each of the five operations at least ten
   times in Power Automate without runtime or schema errors.
3. Add the connector to a solution, run Solution Checker, and export it with a
   test flow.
4. Provide a 100 to 230 pixel PNG icon on the `#FFDD00` brand background and an
   `intro.md`. Both are in this folder: `icon.png` is 230 x 230 pixels with the
   black Minds mark (from `minds-ui` `favicon-light.svg`) at 65% of the width.
5. Complete Partner Center publisher verification and enroll in the Microsoft
   365 and Copilot program.
6. Submit a "Connectors & Agents in Microsoft Copilot Studio" offer with the
   package SAS URI, client ID, and client secret, then add the certified
   redirect URI to the Minds OAuth client.

Certification must not proceed with placeholder OAuth values or without the
required live operation evidence.
