# Creative marketplace integration engineering and operations

Owner: Minds developer account. Verified implementation and native acceptance record: 2026-09-30. Source of truth for provider status: [LAUNCH.md](LAUNCH.md). Local desktop handoff: [FIGMA-DESKTOP.md](FIGMA-DESKTOP.md).

## Supported boundary and release state

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

## Data flow

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
    Note over Host,Minds: Native saved-draft confirmation/execution handoff pending
    Host->>Bridge: Read a previously generated Study summary
    Bridge->>Minds: Canonical summary read
    Minds-->>Host: Existing aggregate findings through gateway
```

Canva uses a vendor export URL that the canonical preview importer copies into owned Minds storage. Figma and Express use an explicit authenticated PNG upload. GenStudio sends exact selected text as a prompt source. A PNG preview stays local until consent and the draft action; the separate host export is not a Minds upload.

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
| `POST /preview` | Save research draft | JSON maximum 1 MiB; valid Study/source/language; required Idempotency-Key |
| `GET /summary` | Read generated summary | Study selected by query; empty summary is not findings |

The bridge forwards Study operations to `/api/v1/studies`, `/api/v1/studies/{id}/research-plans/preview` and `/api/v1/studies/{id}/summary`. Owned image import uses `/api/uploads/proxy` with the `chat` folder. It exposes no execute, confirm, arbitrary URL proxy, provider token or arbitrary upstream method endpoint.

The client validates request text up to 20,000 characters, material labels up to 500, the nine supported Study language codes, and source kinds. Exact text requires nonempty prompt content. Other sources require readable HTTPS without embedded credentials, or a recognized Minds-owned upload path. These input checks do not replace server ownership and import checks.

Idempotency keys are at most 128 letters, digits, underscores or hyphens. The panel fingerprints Study and preview input and reuses the key for unchanged retries in the current panel lifetime. Reloading loses that memory. Selecting new material resets both consent and retry identity. Zapier's optional stable source-event key is a separate caller-controlled retry mechanism.

## OAuth and credential ownership

Minds owns browser sign-in and OAuth consent. The gateway uses public-client PKCE and optional Dynamic Client Registration, registering/reusing one client per process. Wire scopes are `openid flows:read flows:write`; the legacy scope spelling does not rename the canonical Study domain. The resource is the Minds MCP origin. Do not invent broader scopes or call the gateway anonymous research execution.

Connection tickets, state and browser-cookie bindings are one-use. The cookie is HttpOnly, Secure on HTTPS, SameSite=Lax, scoped to the creative path and expires after ten minutes. State must match the same browser. A callback cancelled in Minds must not connect the panel. A disconnect during token exchange must not resurrect a removed session.

Only opaque capabilities enter panels, in memory. Access and refresh tokens remain in the gateway process. Refresh rotation is serialized per session; a refresh that omits a new refresh token retains the existing one. Disconnect removes local access even if upstream revocation fails. Removing access is distinct from deleting material previously imported into a Study.

Account passwords, deploy keys and provider API credentials remain with the encrypted vault or the native credential owner. Read the shared credential instructions before operations; use runtime injection. Reviewer credentials, browser storage, cookies and private claim URLs are excluded from source, logs, screenshots, reports and handoff archives.

## Pilot runtime limits

The current gateway is a single process with in-memory token/session storage, a one-hour session lifetime and a 1,000-session capacity. Restart disconnects panels. Do not increase instance count without implementing and validating shared encrypted session ownership, refresh serialization and revoke semantics.

Allowed origins are exactly the registered Canva and Express host origins in the deployment files. No wildcards are used. Figma's literal opaque `null` origin and GenStudio hosts remain disabled. Allowing `null` cannot prove a plugin's identity, so origin expansion is a security/design acceptance gate rather than an incidental CORS fix.

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
