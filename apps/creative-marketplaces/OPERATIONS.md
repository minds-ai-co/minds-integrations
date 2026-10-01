# Creative marketplace integration engineering and operations

Owner: Minds developer account. Updated implementation and native acceptance record: 2026-10-01. Source of truth for provider status: [LAUNCH.md](LAUNCH.md). Local desktop handoff: [FIGMA-DESKTOP.md](FIGMA-DESKTOP.md).

## Complete-workflow implementation (release in progress)

The current branch adds the missing saved-draft review and completed-run return. The paired [webapp PR #8006](https://github.com/minds-ai-co/webapp/pull/8006) loads the exact creator-owned draft, shows material, Audience, questions and allowance, accepts revision-safe refinements, requires explicit confirmation and follows the durable run. Its detailed [customer workflow](https://github.com/minds-ai-co/webapp/blob/feature/7998-creative-complete-workflow/docs/integrations/creative-customer-workflow.md) includes failure recovery and capture requirements.

Creative panels now retain both Study and draft IDs, open their exact `reviewUrl`, and read the draft's own run through authenticated `GET /run?studyId=…&draftPlanId=…`. The gateway first reads the creator-owned draft through canonical preview `loadLatest`, resolves its confirmed run ID, then reads the canonical run status. It remains read-only: confirmation and execution happen in Minds. Findings require completed response artifacts with real summaries or key findings; partial, failed, missing or mismatched runs do not enable insertion. Changing source, request, language or Study resets consent, draft identity and results. All input controls are disabled during operations to prevent selection races.

Zapier source version 1.2.0 adds `reviewUrl` to Preview Research Plan and a Get Completed Research Results search taking the same Study and draft IDs. It returns run artifacts/calculations only after that exact run completes. The legacy aggregate-summary search remains available separately. Zapier 1.2.0 has been uploaded privately. Express private 0.1.8 passed native source-to-draft acceptance; its public 0.1.9 package was validated and saved as a listing draft. These are private candidates, with complete-run acceptance and marketplace review still pending.

Code validation passed: the full integration repository `npm run check`, 30 focused creative/Zapier tests, bundle build and Zapier validation. Zapier's D004 general warning records that the draft ID is mapped from the preview output rather than selected from a dynamic dropdown; there is no draft-list API. Public publishing still needs genuine-user eligibility. Native full execution acceptance, current package upload and gateway/edge deployment must be verified separately before the release record changes to shipped.

The initial pilot acceptance is retained below as historical evidence. Current native candidate receipts are appended with dates. Existing-summary tests do not establish acceptance of the new run-specific workflow.

## Initial pilot boundary — historical acceptance of 2026-09-30

The four native creative adapters share material selection, transfer consent, Minds authorization, Study draft preview and existing-summary retrieval. They do not execute research. The current Minds navigation handoff does not expose their external saved drafts for confirmation or execution, so public release remains blocked. A successful source import, preview or existing-summary read must not be described as a completed run on newly selected artwork.

| Adapter | Input | Findings output | Actual host acceptance |
| --- | --- | --- | --- |
| Canva | User-selected standard PDF export; multi-page safe | Display summary; explicit native text insertion | OAuth, export/cancel, consent, owned source, draft, same-ID retry, existing summary/import, disconnect passed |
| Figma Creative Review plugin | Exactly one selected node as PNG | Display summary; native text node | Build passed; desktop registration, genuine ID and host QA pending |
| Adobe Express | Export-approved current page as PNG | Display existing summary; no design write-back | Private 0.1.3 installed; OAuth, export, consent/upload, draft, existing summary, disconnect passed |
| Adobe GenStudio | Exact named fields from one chosen email experience | Display existing summary; no host write-back | Build passed; entitled organization, registration and host QA pending |
| Existing Zapier extension | Exact text or readable HTTPS image/video/document/webpage | Separate Get Study Summary search | Existing app reused; private 1.1.0 pushed; validation passed; no user migration |

Existing Minds Figma connected-account OAuth is a different integration from the new plugin. Never replace that registration, status slot or guide with the plugin. Existing Slack, Shopify, VS Code, Workspace, Looker Studio and Power Platform packages are separate workstreams; this change does not re-register them.

## Code ownership and dependency map

| Path | Responsibility |
| --- | --- |
| `packages/creative-review/src/index.js` | Gateway client, validated research input, canonical Study paths |
| `apps/creative-marketplaces/src/panel.js` | Shared panel state, explicit selection and consent, draft and findings UI |
| `apps/creative-marketplaces/src/messages.js` | Stable message descriptors for the shared panel |
| `apps/creative-marketplaces/src/canva.ts` | Canva export, navigation, internationalization and text insertion |
| `apps/creative-marketplaces/src/figma-main.ts` | Figma selection/export, validated external links and text insertion |
| `apps/creative-marketplaces/src/figma-ui.js` | Figma UI-to-main request bridge |
| `apps/creative-marketplaces/src/express.js` | Express exportAllowed and current-page PNG rendition |
| `apps/creative-marketplaces/src/genstudio.ts` | Host registration/attachment and explicit email-experience copy choice |
| `apps/creative-bridge/src/bridge.js` | PKCE, session ownership, refresh, authenticated upstream operations |
| `apps/creative-bridge/src/ingress.js` | Request/concurrency bounds independent of the edge |
| `apps/creative-bridge/deploy/` | Scoped Worker proxy and single-instance deployment definitions |
| `apps/zapier/src/creates/preview-research-plan.js` | Existing Zapier action extended with material URL/type and retry ID |

Webapp owns the Settings registry and canonical research APIs. Minds Content owns the integration directory projection, nine-locale guides and sanitized screenshot artifacts. Provider bundles and the gateway remain in this repository. Link those records instead of creating a second provider or credential source.

## Current candidate data flow

```mermaid
sequenceDiagram
    participant Host as Creative host panel
    participant Bridge as Creative gateway
    participant Browser as Native authorization browser
    participant Minds as Minds canonical API
    Host->>Bridge: Create origin-bound session
    Bridge-->>Host: Opaque capability and one-use connection URL
    Host->>Browser: Open connection URL
    Browser->>Minds: OAuth consent with PKCE
    Minds->>Bridge: Browser-bound callback
    Bridge->>Minds: Exchange code; retain tokens in memory
    Host->>Bridge: Refresh Studies using capability
    Bridge->>Minds: List accessible Studies
    Host->>Host: Select material; inspect; approve transfer
    Host->>Bridge: Upload PNG where applicable
    Bridge->>Minds: Authenticated owned upload
    Host->>Bridge: Preview with Study, source and retry ID
    Bridge->>Minds: Canonical research-plan preview
    Minds-->>Host: Saved needs_confirmation draft through gateway
    Host->>Browser: Open exact saved draft review URL
    Browser->>Minds: Review, refine and explicitly confirm saved revision
    Minds-->>Browser: Durable run status and Study results
    Host->>Bridge: Read completed run for the same Study and draft
    Bridge->>Minds: Resolve creator-owned confirmed draft and canonical run
    Minds-->>Host: Completed run findings through gateway
    Note over Host,Minds: New run acceptance awaits paired webapp deployment
```

Canva exports a PDF from its native dialog. After approval, the gateway downloads only the exact permitted Canva export host, verifies the PDF signature and size, and imports it through the authenticated owned-upload endpoint before saving the draft. Figma and Express use an explicit authenticated PNG upload. GenStudio sends exact selected text as a prompt source. A PNG preview stays local until consent and the draft action; the separate host export is not a Minds upload.

## Gateway contract

Base URL for the live private pilot: `https://getminds.ai/integrations/creative`. All panel calls omit cookies, reject redirects and use the in-memory capability as authorization. Never paste a live capability or a connect URL into examples.

| Method and suffix | Purpose | Authorization and constraints |
| --- | --- | --- |
| `GET /health` | Public liveness | No credentials; does not create upstream work |
| `POST /sessions` | Create panel session | Exact allowed Origin; returns short-lived capability and one-use connect URL |
| `GET /connect` | Start native OAuth | Consume connection ticket once; set browser-binding cookie; PKCE authorization redirect |
| `GET /callback` | Complete authorization | One-use state and matching browser cookie; cancelled/expired request rejected |
| `GET /session` | Panel connection status | Session capability and matching Origin |
| `DELETE /session` | Disconnect | Remove session/tickets/states; attempt upstream revocation |
| `GET /studies` | Accessible Study list | First 100, offset zero; no panel pagination in this version |
| `POST /upload` | Import selected PNG | `image/png`, valid PNG signature, maximum 25 MiB; authenticated upload proxy |
| `POST /preview` | Prepare and poll a saved research draft | JSON maximum 1 MiB; valid Study/source/language; required Idempotency-Key. Pending preparation returns 202; identical retries retrieve the same job/result |
| `GET /run` | Read the saved draft’s completed findings | Exact Study and draft IDs; creator ownership, confirmed matching run and complete responses required |
| `GET /summary` | Read generated summary | Study selected by query; empty summary is not findings |

The bridge forwards Study operations to `/api/v1/studies`, `/api/v1/studies/{id}/research-plans/preview` and `/api/v1/studies/{id}/summary`; exact-draft findings use canonical `/api/v1/studies/{id}/research-runs/{runId}` after ownership and identity verification. Owned image import uses `/api/uploads/proxy` with the `chat` folder. It exposes no execute, confirm, arbitrary URL proxy, provider token or arbitrary upstream method endpoint.

The client validates request text up to 20,000 characters, material labels up to 500, the nine supported Study language codes, and source kinds. Exact text requires nonempty prompt content. Other sources require readable HTTPS without embedded credentials, or a recognized Minds-owned upload path. These input checks do not replace server ownership and import checks.

Idempotency keys are at most 128 letters, digits, underscores or hyphens. The panel fingerprints Study and preview input and reuses the key for unchanged retries in the current panel lifetime. Reloading loses that memory. Selecting new material resets both consent and retry identity. Zapier's optional stable source-event key is a separate caller-controlled retry mechanism.

## OAuth and credential ownership

Minds owns browser sign-in and OAuth consent. The gateway uses public-client PKCE and optional Dynamic Client Registration, registering/reusing one client per process. Wire scopes are `openid flows:read flows:write`; the legacy scope spelling does not rename the canonical Study domain. The resource is the Minds MCP origin. Do not invent broader scopes or call the gateway anonymous research execution.

Connection tickets, state and browser-cookie bindings are one-use. The cookie is HttpOnly, Secure on HTTPS, SameSite=Lax, scoped to the creative path and expires after ten minutes. State must match the same browser. A callback cancelled in Minds must not connect the panel. A disconnect during token exchange must not resurrect a removed session.

Only opaque capabilities enter panels, in memory. Access and refresh tokens remain in the gateway process. Refresh rotation is serialized per session; a refresh that omits a new refresh token retains the existing one. Disconnect removes local access even if upstream revocation fails. Removing access is distinct from deleting material previously imported into a Study.

Account passwords, deploy keys and provider API credentials remain with the encrypted vault or the native credential owner. Read the shared credential instructions before operations; use runtime injection. Reviewer credentials, browser storage, cookies and private claim URLs are excluded from source, logs, screenshots, reports and handoff archives.

## Pilot runtime limits

The current gateway is a single process with in-memory token/session storage, a one-hour session lifetime and a 1,000-session capacity. Restart disconnects panels. Do not increase instance count without implementing and validating shared encrypted session ownership, refresh serialization and revoke semantics.

Allowed origins are the registered Canva and Express host origins plus the literal opaque `null` origin verified in the native Figma Desktop plugin. No wildcards or credentialed CORS are used. The deliberate Figma design review and required isolation tests are documented in [FIGMA-SECURITY.md](FIGMA-SECURITY.md). An opaque origin is not provider identity; account authorization comes from the session capability and explicit browser-bound OAuth. GenStudio hosts remain disabled.

The Node ingress bounds upstream work to 300 requests/minute and eight concurrent handlers. The edge Worker has its own per-IP limiter. Request logging is disabled. The proxy forwards only explicit bridge headers and its own creative OAuth cookie; ordinary Minds login cookies must not reach the gateway. Paths outside the fixed creative route and its endpoint allowlist are not forwarded.

Upstream failures use bounded generic messages so provider errors do not echo tokens, material URLs or private payloads. A healthy endpoint proves liveness, not account connection, successful source import or host acceptance.

## Build, packaging and local verification

From the integration repository root, with Node 22 or later:

```sh
npm ci
npm run build --workspace minds-creative-marketplaces
npm run check
npm start --workspace minds-creative-bridge
```

Build output is `apps/creative-marketplaces/dist/{canva,figma,express,genstudio}`. Default bundle configuration points to the live private gateway. `CREATIVE_GATEWAY_URL` is a non-secret build URL; it must be HTTPS without credentials, query or fragment. It is not a feature switch. Gateway configuration is documented in [LAUNCH.md](LAUNCH.md), with local loopback defaults for development.

Canva receives `app.js` and `messages_en.json`. The 52 stable descriptors include defaults and descriptions; the current non-React adapter uses Canva's `initIntl` formatter. Figma imports the built manifest with a genuine desktop-issued ID. Express uploads a ZIP with its manifest at the root. GenStudio uses the extension definitions in `apps/adobe-genstudio` and requires an entitled host before deployment.

The source fixes two live issues: browser fetch retains its required receiver in Express; null/empty summaries do not become findings or enable import. Any host screenshot or listing text must also use accurate draft-execution language. An older private Express 0.1.3 install predates the final copy, while the saved public 0.1.5 draft contains the corrected limitation.

## Native acceptance procedure

Use a dedicated private QA Study with an existing Audience and anonymized artwork. No new research was executed in the 2026-09-30 creative tests. Existing-summary retrieval was tested separately using previously generated findings; never conflate it with QA-draft execution.

1. Record host, installed package, source revision, gateway revision and timestamp, without credentials or private payloads.
2. Test OAuth approve/cancel, return/refresh, revoked and expired access, and disconnect.
3. Export/select only the intended material; test cancellation, empty/multiple selection, and provider export restrictions.
4. Verify that selection alone does not upload. Try preview without consent and require refusal.
5. Approve transfer and inspect the canonical saved source kind, MIME type and ownership in the authenticated native app, without publishing identifiers or access URLs.
6. Retry unchanged input and verify draft identity. Change input and verify a new request identity.
7. Verify the supported confirmation, estimated-cost and execution handoff once implemented. A correct Study navigation target alone does not pass.
8. Generate and load actual findings for that test run. Test absent summaries and, where supported, explicit native text insertion.
9. Capture sanitized controls and results only after readiness; preserve a provenance manifest and visually inspect crops.
10. Disconnect and verify access removal. Record retained-source deletion separately if requested.

Current pass/fail evidence and provider-specific remaining gates are in [LAUNCH.md](LAUNCH.md). Compilation, mocked tests, validation, public health and saved listing drafts are separate evidence classes.

## Incident handling and rollback

| Observation | Response |
| --- | --- |
| Health fails | Check the existing provider deployment and canonical workflow; do not create a parallel ingress. |
| Origin returns 403 | Compare the exact real host origin against the reviewed allowlist; never use `*` as a repair. |
| Session returns 401 | Reconnect natively; do not recover tokens from browser storage. |
| PNG rejected | Verify PNG type/signature and size; do not disguise unsupported files with a changed extension. |
| Preview succeeds but no draft appears in UI | Known public-release blocker; preserve accurate copy and do not invent a run button. |
| Summary is null | Generate a summary in Minds or choose a completed Study; do not stringify metadata as findings. |
| Refresh/revoke fails | Remove local session access and investigate generic upstream errors without logging secrets. |
| Provider version update is rejected | Use a new package version; private and public version histories can share uniqueness constraints. |

For an urgent pilot rollback, disable only this scoped creative route or restore its last verified Worker/gateway revision through the documented provider workflow. Do not alter unrelated Minds routes, shared Tailscale services, existing connected accounts or other integrations. With in-memory sessions, replacing the gateway requires users to reconnect. Since imported research sources persist in Minds, infrastructure rollback is not data deletion.

The current deployment has automatic deploy disabled. A source or documentation push alone does not update the gateway. Verify the active revision and public route before claiming a deployment. Webapp changes follow its staging workflow, and production promotion remains owner-approved.

## Public release checklist

All creative hosts need the supported confirmation/cost/execution handoff, actual research acceptance, accurate reviewer access, a completed OAuth/security review and a repeatable screenshot walkthrough. Canva needs its review assets, localized previews and release process. Figma needs desktop registration, genuine ID, host identity policy and Community review. Express needs accurate declarations, reviewer instructions and the exact submitted version. GenStudio needs entitlement, deployment, registration and host review first.

Zapier needs genuine private users with live Zaps and checks for the exact promoted version. The observed S001 gate is not solved by creating a duplicate Minds app or fabricated users. Retain the existing integration ID and coordinate migrations rather than silently moving current users.

## Documentation, screenshots and maintenance

The webapp registry adds `canva`, `figma_plugin`, `adobe_express` and `adobe_genstudio` as Coming next, and extends existing `zapier` with an explicit authored guide. Planned cards open documentation only, retain Coming soon and remain excluded from Connected filtering. This does not activate any provider connection.

Minds Content owns `/guide/integration-canva`, `/guide/integration-figma-plugin`, `/guide/integration-adobe-express`, `/guide/integration-adobe-genstudio` and `/guide/integration-zapier`, in all nine locales. They remain noindex while private/planned. `docsPath` prevents generated guides from overwriting the authored source. Sync its directory from a committed webapp registry revision so provenance is reproducible.

Screenshots and their provenance live in `minds-content/public/images/integrations/creative/`. Use real native hosts and explicit crops, exclude browser chrome, credentials, private summaries and asset access URLs, and describe the installed version. Figma/GenStudio have no working native screenshot because their host tests remain blocked. Do not generate fake screenshots to fill that gap.

Whenever code, provider state or release availability changes, update the native test record, canonical engineering guide, English public guide and all localized siblings together. Re-run registry, mounted UI, directory, localization, internal-link and content contracts before changing availability. Public release status requires provider-side verification, not an optimistic roadmap entry.

## Native QA ingress timeout repair

The 2026-09-30 Canva current-bundle acceptance found HTTP 504 HTML on long draft preparation. The bridge now acknowledges planning with HTTP 202 and keeps at most 20 preview jobs in each one-hour session. The panel polls the same authenticated preview route with Study and request identity. Identical retries share the pending/result job; changed input with the same key is rejected, other sessions cannot read it, and upstream failures permit a canonical idempotent retry. Gateway restart still clears sessions and requires reconnecting. The canonical draft remains durable in Minds; this is not a new execution queue.

Full repository checks and all four bundle builds passed. Native package re-upload and gateway deployment verification are required for this repair. HTML upstream errors produce a safe retry instruction without displaying provider page content.

Live native retesting acknowledged POST preparation with 202, but pending GET polling returned 504 through the deployed route. The client now polls by replaying its identical POST and idempotency key every two seconds. The session job deduplicates these without another upstream planning request. Direct session and unknown-job reads passed; this change does not claim a diagnosed provider-wide outage. Native complete-run acceptance remains required.

Native diagnosis then confirmed: the current Canva PDF exported and downloaded as a valid 15,365-byte PDF, while the direct remote-source preview path failed. A native text-only plan saved successfully and the updated Express PNG adapter saved draft `989b59e4-6c49-40c4-a06d-7a0516270c56` in the owned QA Study. The gateway's approved Canva-PDF job now fetches only the exact HTTPS export-download.canva.com host without credentials or redirects, bounds bytes at 25 MB, checks the PDF signature, and uses the existing owner-authenticated Minds upload API before canonical preview. Other vendor sources keep canonical import. Full repository checks passed; deployment and native PDF acceptance remain pending.

## Native Canva PDF acceptance — 2026-10-01

The existing gateway deployment `75f3aecd-4d32-412b-a443-16cd40587741` is ACTIVE at source `09bbb52b14a40811eacfadbebade96be853ff0fd`; its health route returned HTTP 200. Native Canva acceptance passed OAuth, owned QA Study selection, current coffee-design PDF export, explicit transfer consent, canonical draft creation and the provider-confirmed external navigation. An authenticated read of the exact saved draft returned HTTP 200, document source under owner-authenticated `/api/uploads/chat/`, draft status and exactly one intended headline question. No research execution was triggered. The Minds review-screen release and completed-run return remain pending.

The updated Figma development handoff is `minds-figma-complete-workflow-v2.tgz`, containing the current built plugin and matching Desktop instructions. It retains the requirement for a genuine generated plugin ID and verified sandbox access; delivery is not registration or public approval.

## Adobe Express saved public candidate — 2026-10-01

The existing registered Express add-on accepted and validated package 0.1.9, and its public listing draft was saved with matching asynchronous preparation and exact-draft findings copy. The corresponding native private acceptance used 0.1.8. Release notes explicitly retain the pending Minds frontend release and complete-run acceptance. No public review submission or approval is claimed.
