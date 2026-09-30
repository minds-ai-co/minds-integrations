# Creative marketplace integrations

Owner: developers@getminds.ai. Audit and build date: 2026-09-30.

These are development bundles, not public marketplace releases. The shared gateway is live at https://getminds.ai/integrations/creative. Adobe accepted the private Express package; Canva's uploaded bundle renders in its editor. Full OAuth/export/research acceptance is still pending. Do not submit until the host-specific acceptance tests pass.

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

The build defaults to the live pilot gateway at `https://getminds.ai/integrations/creative`. Override it through the non-secret `CREATIVE_GATEWAY_URL` build environment variable. The Figma generated network allowlist follows that origin.

Gateway settings:

| Variable | Purpose |
| --- | --- |
| CREATIVE_PUBLIC_URL | External callback base, including any reverse-proxy path. Local default is http://127.0.0.1:8788. |
| CREATIVE_ALLOWED_ORIGINS | Comma-separated exact panel origins; no wildcards. Local default is http://localhost:3000. Figma's sandbox needs the literal `null` origin; allow it deliberately after testing. |
| MINDS_OAUTH_CLIENT_ID | Optional existing public OAuth client ID. Otherwise register via Minds DCR. This is an identifier, not a client secret. |
| HOST / PORT | Local listening address and port. |

Public OAuth uses PKCE, one-use state and a browser-bound HttpOnly cookie. The production callback must be HTTPS and allowed by Minds' redirect policy. Current allowed first-party choices include the getminds.ai apex and staging.getminds.ai, but not a new arbitrary creative subdomain. Canva/Adobe origins are not allowed directly by current Minds REST CORS; the gateway provides explicit origin-scoped CORS instead.

The gateway is a **single-process pilot**. Session capabilities expire after one hour. Tokens are kept in memory, refresh rotations are serialized and disconnect removes access and attempts revocation. Restart requires reconnecting. The pilot runs behind TLS with exact Canva/Express origins, edge rate limiting and a bounded Node ingress. The proxy does not log requests and forwards only the creative OAuth cookie. Before public distribution, verify provider identity requirements and replace in-memory session storage with a shared encrypted store if running multiple processes. The opaque sandbox origin is not proof of a particular Figma plugin identity.

## Live pilot deployment

- DigitalOcean app: `b0873cdc-59e6-4902-a321-1fb69b9e8c11`, Frankfurt, one basic-xxs instance. Origin: `https://minds-creative-review-yd7cf.ondigitalocean.app`.
- App deployment `0c8c440c-ac76-4c1e-84b9-443fd052aa97` is active at source commit `bb2caf6`. Automatic deployment is disabled.
- Cloudflare Worker `minds-creative-review-proxy`, version `6a10dbca-472f-4566-b0b9-6c1bf0d11df6`, serves only `getminds.ai/integrations/creative/*`. Deployment specs are in `apps/creative-bridge/deploy`.
- Public checks: health 200, unknown origin 403, Canva-origin session creation 201, PKCE authorization redirect 302 with browser-bound HttpOnly cookie, disconnect 200. Docker smoke and seven gateway/ingress/proxy tests pass.
- Figma's opaque origin and GenStudio origins are not enabled yet. Production research has not been executed through these new host panels.

## Acceptance and submission gates

For each host: connect/cancel/revoke OAuth; export/cancel; verify no upload before approval; verify correct source in the saved draft; check retry deduplication; confirm/run in Minds; reload findings; test expired sessions and provider export permissions. Do this in the actual host, not just a mocked browser. Capture real screenshots only after it passes. Never label mock outputs as completed research.

| Platform | Remaining gates and publication route |
| --- | --- |
| Canva | Account verified as developers@getminds.ai using its forwarded Gmail verification email. Minds Review app AAHOGK2l5Z4 is registered; app.js is uploaded and saved. Design content read/write scopes are enabled. The uploaded-bundle preview renders the review panel in the actual Canva editor (render smoke check only; OAuth/research acceptance remains pending). Preview options must select JavaScript bundle rather than the default localhost Development URL. Hosted origin: https://app-aahogk2l5z4.canva-apps.com. The gateway and that exact CORS origin are deployed. The live Connect Minds flow reaches Minds sign-in; its stored developers@ password was rejected, so an account-owner sign-in is pending. Then complete OAuth/export/research acceptance. Listing text, company/support/privacy/terms links, official 512px icon and draft testing instructions are saved. The 51-string UI catalog uses Canva initIntl; its JSON and updated bundle were accepted and saved. The updated panel renders in the real editor. Actual translated-language preview, featured images, walkthrough and full acceptance remain. Submit from Developer Portal. Canva rejects export-only apps; the findings-return workflow must work and be demonstrated. |
| Figma | Account verified and signed in as developers@getminds.ai; free Starter onboarding is complete. Browser plugin manager has no Development/New plugin route. Create the plugin in the official desktop app to obtain its real ID. Add that ID to the manifest before updating the listing. Import the built manifest, host-test and publish through Community review. |
| Adobe Express | Adobe ID is signed in under developers@getminds.ai; Adobe Express developer mode is enabled. Developer Console organization 4371705 and project 4566206088345767436 (Minds Creative Review) are created. The Express add-on Minds Creative Review is registered with hosting origin https://wj4173926.wxp.adobe-addons.com; its public listing draft is saved (Draft/Saved verified), separately from Developer Console. That exact gateway CORS origin is deployed. Private package 0.1.0 passed Adobe validation and a private link was created. Public listing package 0.1.2 uses a separate version because Adobe rejects a version already used by the private package. Private installation and current-page PNG export passed in the real Adobe Express editor; export alone did not upload material. Official Minds icons, description, support, privacy and terms have been added to the draft; real screenshots and AI/monetization/trader details remain. OAuth, saved Study source and findings acceptance remain pending before submission. Respect export approval restrictions. |
| GenStudio | Reuse the same Adobe ID. The new Adobe organization has Runtime disabled (aria-disabled=true) in Add to Project. An organization with App Builder/GenStudio entitlement and a project/workspace is required; the empty Minds Creative Review project does not grant those entitlements. Deploy via App Builder, register the extension, host-test and package for Adobe Exchange review. |
| Zapier | Existing registration is reused. On 2026-09-30, promoting 1.0.0 passed all returned checks except **S001: needs 3 users with live Zaps; currently 1**. Two additional genuine users must enable Zaps. Do not fabricate usage or create duplicate users to pass the requirement. Then re-run promotion and complete the review form for the version being submitted. |

Canva and Figma verification emails addressed to developers@getminds.ai were found forwarded into Alexander's Gmail using an in:anywhere search, then consumed privately to complete both accounts. No mailbox permission was changed; direct delegated access to developers@ was unnecessary.

References: [Canva exports](https://www.canva.dev/docs/apps/exporting-designs/), [Canva release](https://www.canva.dev/docs/apps/releasing-apps/), [Figma manifest](https://developers.figma.com/docs/plugins/manifest/), [Figma publishing](https://developers.figma.com/docs/plugins/publishing/), [Figma desktop setup](https://developers.figma.com/docs/plugins/plugin-quickstart-guide/), [Express renditions](https://developer.adobe.com/express/add-ons/docs/guides/learn/how-to/create-renditions), [Express manifest](https://developer.adobe.com/express/add-ons/docs/references/manifest/), [GenStudio guide](https://experienceleague.adobe.com/en/docs/genstudio-for-performance-marketing/ext-guide/home), [Adobe's validation-extension reference](https://github.com/adobe/genstudio-extensibility-examples/tree/main/genstudio-create-validation), [Zapier checks](https://docs.zapier.com/platform/publish/integration-checks-reference).
