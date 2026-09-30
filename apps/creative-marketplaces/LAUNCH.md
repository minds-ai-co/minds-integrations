# Creative marketplace integrations

Owner: developers@getminds.ai. Audit and build date: 2026-09-30.

These are development bundles, not published or host-accepted apps. The shared gateway is not deployed at the build's default URL. Do not submit a bundle until its gateway and its host-specific acceptance tests work.

## Existing integrations checked

The inventory was checked against origin/main at 259b70e and the current Zapier API, rather than starting duplicate registrations.

| Integration | Existing implementation / release state |
| --- | --- |
| Zapier | Existing Minds app 246865, owned by developers@getminds.ai. 1.0.0 is private with one Zap user. This change extends that app with 1.1.0. |
| Canva | Existing architecture/workflow document; no executable app before this change. |
| Adobe Express, Figma, GenStudio | No existing app packages or registrations found in this repository. |
| Slack | Existing OAuth, research agent, worker and marketplace preparation; separate open security-documentation PR. |
| Shopify | Existing purchase-barrier app and separate privacy/release worktree. |
| VS Code | Existing packaged research extension. |
| Google Workspace / Looker Studio | Existing add-on and connector packages with review preparation. |
| Power Platform | Existing OAuth connector, five bounded operations and certification preparation. |
| Make | Existing prototype. |
| Atlassian / HubSpot | Existing workflow specifications. |

No existing Slack or Shopify worktree was modified.

## Workflow implemented

1. Connect a Minds account through a browser consent flow. OAuth tokens remain in the gateway; the panel keeps an opaque session capability in memory only.
2. Select an existing Study with an Audience. The first 100 Studies are available in the development panel.
3. Explicitly select the material: Canva export-dialog PDF (multi-page safe), one selected Figma node as PNG, the current approved Adobe Express page as PNG, or one chosen GenStudio email experience's copy.
4. Review the selection and approve sending it to Minds. PNGs use the authenticated owned-upload endpoint. Export URLs use the canonical research preview source importer, which copies readable material into Minds storage.
5. Draft a plan through the canonical Study research-plan preview endpoint, with a stable idempotency key for retries. Changed Study/request/material gets a new key. This does not confirm or execute research.
6. Open the Study in Minds to review the plan/cost and run it. Load aggregate findings back into the panel. Canva and Figma can explicitly add findings as text to the design.

GenStudio reviews text fields; it does not render or review the visual layout. It supports the email channel in this first package. It does not certify legal, regulatory or medical compliance.

## Build and local gateway

From the repository root:

```sh
npm ci
npm run build --workspace minds-creative-marketplaces
npm run check
npm start --workspace minds-creative-bridge
```

Bundles land in `apps/creative-marketplaces/dist/{canva,figma,express,genstudio}`. Import the Figma manifest from the **built** directory. Upload the built Canva JavaScript to its Developer Portal; enable the Design Editor intent and declare its required export, content-write and external-link capabilities. Express uses manifest version 2. GenStudio's App Builder extension configuration is in `apps/adobe-genstudio`.

The build defaults to `https://getminds.ai/integrations/creative`; this is a planned gateway path, not a currently working service. Override it through the non-secret `CREATIVE_GATEWAY_URL` build environment variable. The Figma generated network allowlist follows that origin.

Gateway settings:

| Variable | Purpose |
| --- | --- |
| CREATIVE_PUBLIC_URL | External callback base, including any reverse-proxy path. Local default is http://127.0.0.1:8788. |
| CREATIVE_ALLOWED_ORIGINS | Comma-separated exact panel origins; no wildcards. Local default is http://localhost:3000. Figma's sandbox needs the literal `null` origin; allow it deliberately after testing. |
| MINDS_OAUTH_CLIENT_ID | Optional existing public OAuth client ID. Otherwise register via Minds DCR. This is an identifier, not a client secret. |
| HOST / PORT | Local listening address and port. |

Public OAuth uses PKCE, one-use state and a browser-bound HttpOnly cookie. The production callback must be HTTPS and allowed by Minds' redirect policy. Current allowed first-party choices include the getminds.ai apex and staging.getminds.ai, but not a new arbitrary creative subdomain. Canva/Adobe origins are not allowed directly by current Minds REST CORS; the gateway provides explicit origin-scoped CORS instead.

The gateway is a **single-process pilot**. Session capabilities expire after one hour. Tokens are kept in memory, refresh rotations are serialized and disconnect removes access and attempts revocation. Restart requires reconnecting. Before public distribution, deploy behind TLS with ingress rate limiting, configure host origins, redact all query strings and authorization headers from proxy logs, verify provider identity requirements and replace in-memory session storage with a shared encrypted store if running multiple processes. The opaque sandbox origin is not proof of a particular Figma plugin identity.

## Acceptance and submission gates

For each host: connect/cancel/revoke OAuth; export/cancel; verify no upload before approval; verify correct source in the saved draft; check retry deduplication; confirm/run in Minds; reload findings; test expired sessions and provider export permissions. Do this in the actual host, not just a mocked browser. Capture real screenshots only after it passes. Never label mock outputs as completed research.

| Platform | Remaining gates and publication route |
| --- | --- |
| Canva | Signup hits the provider's browser challenge on the tower. Complete developers@ registration, create the developer app, deploy the gateway, configure capabilities/network access and manual authentication, then host-test. Localize UI/listing and supply screenshots, privacy/support/reviewer instructions. Submit from Developer Portal. Canva rejects export-only apps; the findings-return workflow must work and be demonstrated. |
| Figma | Signup attempts reached submission but no successful registration/login was confirmed. Complete developers@ registration in a normal browser; create the plugin to obtain its real ID. Add that ID to the manifest before updating the listing. Import the built manifest, host-test and publish through Community review. |
| Adobe Express | Adobe signup reached step 2: account-holder name, birth month/year and country are required and have not been supplied. Complete Adobe ID registration under developers@, register the add-on, host-test and submit its bundle in the add-on distribution portal. Respect export approval restrictions. |
| GenStudio | Reuse the same Adobe ID. An Adobe organization with App Builder/GenStudio entitlement and a Developer Console project/workspace is required; account creation alone is insufficient. Deploy via App Builder, register the extension, host-test and package for Adobe Exchange review. |
| Zapier | Existing registration is reused. On 2026-09-30, promoting 1.0.0 passed all returned checks except **S001: needs 3 users with live Zaps; currently 1**. Two additional genuine users must enable Zaps. Do not fabricate usage or create duplicate users to pass the requirement. Then re-run promotion and complete the review form for the version being submitted. |

The connected Gmail tool could search Alexander's mailbox, but rejected direct access to developers@ because a different delegated subject needs trusted-gateway authentication. Provider email verification may therefore need the owner to use that mailbox directly. No mailbox permission was changed.

References: [Canva exports](https://www.canva.dev/docs/apps/exporting-designs/), [Canva release](https://www.canva.dev/docs/apps/releasing-apps/), [Figma manifest](https://developers.figma.com/docs/plugins/manifest/), [Figma publishing](https://developers.figma.com/docs/plugins/publishing/), [Express renditions](https://developer.adobe.com/express/add-ons/docs/guides/learn/how-to/create-renditions), [Express manifest](https://developer.adobe.com/express/add-ons/docs/references/manifest/), [GenStudio guide](https://experienceleague.adobe.com/en/docs/genstudio-for-performance-marketing/ext-guide/home), [Adobe's validation-extension reference](https://github.com/adobe/genstudio-extensibility-examples/tree/main/genstudio-create-validation), [Zapier checks](https://docs.zapier.com/platform/publish/integration-checks-reference).
