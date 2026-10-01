# Creative marketplace integrations

Owner: developers@getminds.ai. Initial audit: 2026-09-30. Current candidate update: 2026-10-01.

Detailed architecture, API contracts, security, acceptance, troubleshooting and maintenance: [OPERATIONS.md](OPERATIONS.md). Cross-repository documentation work is tracked in [webapp #7983](https://github.com/minds-ai-co/webapp/issues/7983) and [minds-content #378](https://github.com/minds-ai-co/minds-content/issues/378). The content repository owns five extensive nine-locale setup guides, sanitized real screenshots and their provenance. The webapp registry records these pilots as documentation-only Coming next entries; the existing Figma account connection and Zapier registration remain separate and unchanged in identity.

These are development bundles, not public marketplace releases. The shared gateway is live at https://getminds.ai/integrations/creative. Adobe accepted the private Express package; Canva's uploaded bundle renders in its editor. Live OAuth, export, consent, durable source, draft creation and existing-summary return pass. Saved-draft confirmation/run and the remaining host/provider acceptance gates are pending. Do not submit until the host-specific acceptance tests pass.

## Current candidate receipts — 2026-10-01

- Gateway source `09bbb52b14a40811eacfadbebade96be853ff0fd` is active, including bounded asynchronous preparation, exact-draft completed-run retrieval and Canva PDF owned import.
- Canva’s current uploaded bundle passed native PDF export, consent, owned upload, draft creation and navigation to that exact draft. No new research execution is claimed yet.
- Adobe Express private 0.1.10 and public 0.1.11 validated and saved after fixing expired-session reconnection. Native PNG-to-draft acceptance was on private 0.1.8; fresh 0.1.10 production acceptance is pending. The public candidate has not been submitted for review.
- Zapier 1.2.0 is privately uploaded; the public three-genuine-user eligibility requirement remains unmet.
- Figma’s current built development handoff is `minds-figma-complete-workflow-v2.tgz`; genuine Desktop plugin registration and sandbox verification remain required.
- The paired webapp PR #8006 is still awaiting final hosted acceptance and production release. All 45 customer guides from minds-content PR #386 are verified live.
- Sanitized native pre-execution screenshots and public guide verification are in [qa/creative-preview-2026-10-01](qa/creative-preview-2026-10-01/README.md).

## Existing integrations checked (initial inventory)

The inventory was checked against origin/main at 259b70e and the current Zapier API, rather than starting duplicate registrations.

| Integration | Existing implementation / release state |
| --- | --- |
| Zapier | Existing Minds app 246865, owned by developers@getminds.ai. 1.0.0 is private with one Zap user. The current privately uploaded candidate is 1.2.0. |
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

## Current branch workflow (deployment and native execution QA pending)

1. Connect a Minds account through a browser consent flow. OAuth tokens remain in the gateway; the panel keeps an opaque session capability in memory only.
2. Select an existing Study with an Audience. The first 100 Studies are available in the development panel.
3. Explicitly select the material: Canva export-dialog PDF (multi-page safe), one selected Figma node as PNG, the current approved Adobe Express page as PNG, or one chosen GenStudio email experience's copy.
4. Review the selection and approve sending it to Minds. PNGs use the authenticated owned-upload endpoint. Canva PDF exports use a restricted vendor-download helper and the same authenticated owned-upload endpoint; readable external sources otherwise use the canonical source importer.
5. Draft a plan through the canonical Study research-plan preview endpoint, with a stable idempotency key for retries. Changed Study/request/material gets a new key. This does not confirm or execute research.
6. Open the exact saved draft in Minds using its Study and draft IDs. The paired webapp handoff shows the instrument and current allowance, resolves missing inputs, saves reviewed revisions and requires explicit confirmation before running. Follow durable status and open the existing Study results.
7. Return to the panel and load the saved draft’s own completed run findings. Partial, failed or mismatched runs cannot supply findings. Canva and Figma can explicitly insert the resulting text; Express and GenStudio display it in the panel. This branch behavior still requires deployment and actual new-run acceptance in each host.
8. Zapier 1.2.0 returns the exact draft review link and adds Get Completed Research Results; map the same Study and draft IDs to that search. The existing aggregate-summary search remains separate.

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
- App deployment `75f3aecd-4d32-412b-a443-16cd40587741` is active at source commit `09bbb52b14a40811eacfadbebade96be853ff0fd` (verified 2026-10-01). Automatic deployment is disabled.
- Cloudflare Worker `minds-creative-review-proxy`, version `f61ffefb-f121-4c29-836e-9a6c3a523359`, serves only `getminds.ai/integrations/creative/*`. Deployment specs are in `apps/creative-bridge/deploy`.
- Public checks: health 200, unknown origin 403, Canva-origin session creation 201, PKCE authorization redirect 302 with browser-bound HttpOnly cookie, disconnect 200. Docker smoke and seven gateway/ingress/proxy tests pass.
- Figma's opaque origin and GenStudio origins are not enabled yet. Production research has not been executed through these new host panels. Demo login is verified and its credential is stored only in the encrypted vault.

### Initial demo acceptance evidence — 2026-09-30 (historical)

The user supplied a demo login, which was saved encrypted and used through the native Minds browser sign-in. A separate private canonical QA Study with an existing Audience was created; no existing Study was modified and no research was executed. Canva copied the approved PDF into owned Minds chat storage. Adobe copied the approved PNG through the authenticated upload proxy. Both saved `needs_confirmation` drafts. Canva retry returned the same draft ID. Existing-summary return was tested separately from the new QA drafts; it is not evidence that research on those QA designs ran.

Live testing found and fixed the Adobe fetch receiver error and false loaded-state for null summaries. The latest Canva bundle passed the empty-summary guard and added an actual existing summary to the QA design. The open-Study link selects the right Study, but its UI only shows the empty Study, not the external draft. This confirmation/run gap is a public-release blocker. Latest development UI and both listing drafts state the limitation; do not describe this pilot as an end-to-end execution integration.

## Acceptance and submission gates

The detailed registration history below is retained from the initial pilot. The current candidate receipts above supersede its package versions and source-to-draft status; complete execution and public submission remain pending.

For each host: connect/cancel/revoke OAuth; export/cancel; verify no upload before approval; verify correct source in the saved draft; check retry deduplication; confirm/run in Minds; reload findings; test expired sessions and provider export permissions. Do this in the actual host, not just a mocked browser. Capture real screenshots only after it passes. Never label mock outputs as completed research.

| Platform | Remaining gates and publication route |
| --- | --- |
| Canva | Account verified as developers@getminds.ai using its forwarded Gmail verification email. Minds Review app AAHOGK2l5Z4 is registered; app.js is uploaded and saved. Design content read/write scopes are enabled. The uploaded-bundle preview renders the review panel in the actual Canva editor. Preview options must select JavaScript bundle rather than the default localhost Development URL. Hosted origin: https://app-aahogk2l5z4.canva-apps.com. The gateway and that exact CORS origin are deployed. The user-supplied demo account passed native sign-in and OAuth. Actual PDF export/cancel, no draft without consent, durable source import, draft creation and same-id retry passed. A real existing summary was loaded and added to the QA design. Disconnect passed. Saved-draft confirmation/run remains blocked by the missing Minds UI handoff. Listing text, company/support/privacy/terms links, official 512px icon and draft testing instructions are saved. The 52-string UI catalog uses Canva initIntl; its JSON and updated bundle were accepted and saved. The updated panel renders in the real editor. Actual translated-language preview, featured images, walkthrough and full acceptance remain. Listing copy explicitly marks saved-draft execution as unavailable in this development version. Submit from Developer Portal. Canva rejects export-only apps; the findings-return workflow must work and be demonstrated. |
| Figma | Account verified and signed in as developers@getminds.ai; free Starter onboarding is complete. Browser plugin manager has no Development/New plugin route. Create the plugin in the official desktop app to obtain its real ID. Add that ID to the manifest before updating the listing. Import the built manifest, host-test and publish through Community review. |
| Adobe Express | Adobe ID is signed in under developers@getminds.ai; Adobe Express developer mode is enabled. Developer Console organization 4371705 and project 4566206088345767436 (Minds Creative Review) are created. The Express add-on Minds Creative Review is registered with hosting origin https://wj4173926.wxp.adobe-addons.com; its public listing draft is saved (Draft/Saved verified), separately from Developer Console. That exact gateway CORS origin is deployed. Private package 0.1.0 passed Adobe validation; it exposed a fetch receiver error during live connection. Replacement private version 0.1.3 passed validation and actual OAuth, Study loading, PNG export/upload, durable source and draft creation. It loaded a real existing summary and disconnected. Public listing package 0.1.5 uses a separate version because Adobe rejects a version already used by the private package. Private installation and current-page PNG export passed in the real Adobe Express editor; export alone did not upload material. Official Minds icons, description, support, privacy and terms have been added to the draft; real screenshots and AI/monetization/trader details remain. The source now guards empty summaries and accurately states that external-draft confirmation/execution is unavailable. Implement that handoff and finish the remaining acceptance gates before submission. Respect export approval restrictions. |
| GenStudio | Reuse the same Adobe ID. The new Adobe organization has Runtime disabled (aria-disabled=true) in Add to Project. An organization with App Builder/GenStudio entitlement and a project/workspace is required; the empty Minds Creative Review project does not grant those entitlements. Deploy via App Builder, register the extension, host-test and package for Adobe Exchange review. |
| Zapier | Existing registration is reused. On 2026-09-30, promoting 1.0.0 passed all returned checks except **S001: needs 3 users with live Zaps; currently 1**. Two additional genuine users must enable Zaps. Do not fabricate usage or create duplicate users to pass the requirement. Then re-run promotion and complete the review form for the version being submitted. |

Canva and Figma verification emails addressed to developers@getminds.ai were found forwarded into Alexander's Gmail using an in:anywhere search, then consumed privately to complete both accounts. No mailbox permission was changed; direct delegated access to developers@ was unnecessary.

References: [Canva exports](https://www.canva.dev/docs/apps/exporting-designs/), [Canva release](https://www.canva.dev/docs/apps/releasing-apps/), [Figma manifest](https://developers.figma.com/docs/plugins/manifest/), [Figma publishing](https://developers.figma.com/docs/plugins/publishing/), [Figma desktop setup](https://developers.figma.com/docs/plugins/plugin-quickstart-guide/), [Express renditions](https://developer.adobe.com/express/add-ons/docs/guides/learn/how-to/create-renditions), [Express manifest](https://developer.adobe.com/express/add-ons/docs/references/manifest/), [GenStudio guide](https://experienceleague.adobe.com/en/docs/genstudio-for-performance-marketing/ext-guide/home), [Adobe's validation-extension reference](https://github.com/adobe/genstudio-extensibility-examples/tree/main/genstudio-create-validation), [Zapier checks](https://docs.zapier.com/platform/publish/integration-checks-reference).

### 2026-10-01 connection expiry recovery

Native Canva rechecking exposed a 401 from revoking an already expired gateway session, which prevented a fresh connection. The client now treats only that expired-session response as successful disconnection; other revocation failures remain visible. Reconnecting clears selected material, Study, consent and saved draft so another account cannot reuse them. Ten client/panel regressions and the complete repository check passed. Canva accepted the rebuilt bundle and its fresh native connection, PDF transfer, saved draft and exact owned review link passed. The fresh fixture is recorded privately until complete production run acceptance. Adobe validated private 0.1.10 and public 0.1.11 with the same fix.
