# Minds Power Platform connector

The connector exposes a bounded set of production REST operations for Power
Automate, Power Apps, Logic Apps, and Copilot Studio. The default research
operation is a non-executing plan preview.

The committed Swagger 2.0 definition is generated from the canonical live
OpenAPI document. It includes five bounded operations: list, create, and read a
Panel, preview a non-executing research plan, and read a persisted Panel
summary. Destructive deletion and study execution are intentionally excluded.

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
rejects authorization requests without S256 PKCE. `/api/v1/panels*` accepts these OAuth access tokens in
the same way as `minds_` API keys.

`clientId` stays empty in source control until the dedicated Minds OAuth client
for this connector exists. Microsoft also receives the client ID through
Partner Center, together with the client secret if Partner Center requires one
(Minds issues a secret at registration but does not check it). The secret is stored in `pass` at
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
- the certified connector's redirect URI, added once Microsoft assigns it

Minds does not yet allow these redirect URIs in dynamic client registration;
see the webapp prerequisite in the pull request that introduced OAuth.

## Validate

Refresh and validate the package before a Microsoft submission:

```bash
node connectors/power-platform/scripts/sync-openapi.mjs
node connectors/power-platform/scripts/validate.mjs
node --test connectors/power-platform/scripts/*.test.mjs
```

`validate.mjs` checks the bounded operation set, the OAuth settings (endpoints,
PKCE templates, scopes, per-connector redirect mode, no client secret), and the
certification metadata. Before a submission, run it with `--submission`; that
mode also fails while `clientId` is empty or a placeholder.

## Certification checklist

1. Register the dedicated Minds OAuth client and set `clientId`.
2. Import the connector into a Power Platform environment, add its redirect URI
   to the Minds OAuth client, and run each of the five operations at least ten
   times in Power Automate without runtime or schema errors.
3. Add the connector to a solution, run Solution Checker, and export it with a
   test flow.
4. Provide a 100 to 230 pixel PNG icon on the `#FFDD00` brand background and an
   `intro.md`.
5. Complete Partner Center publisher verification and enroll in the Microsoft
   365 and Copilot program.
6. Submit a "Connectors & Agents in Microsoft Copilot Studio" offer with the
   package SAS URI, client ID, and client secret, then add the certified
   redirect URI to the Minds OAuth client.

Certification must not proceed with placeholder OAuth values or without the
required live operation evidence.
