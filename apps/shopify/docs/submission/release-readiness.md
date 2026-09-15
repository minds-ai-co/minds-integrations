# Public release gates

Status recorded 2026-09-15. A deployed pilot is not a public-distribution acceptance result.

| Gate | Current evidence | Required completion evidence |
| --- | --- | --- |
| Backend deployment | Webapp production release `e46e57420dab976090ea85ab9eb6070ebec3f97c`; [deployment passed](https://github.com/minds-ai-co/webapp/actions/runs/34950259935) | Recheck health and deployed SHA for the final public release |
| Native installation | Released version `purchase-barriers-ae36f88`; development-store installation and `read_products` product access verified | Repeat fresh install, uninstall and reinstall with the final public app identity |
| Installed workflow | Real Vue UI checked with mocked responses; installed Shopify-to-Study browser run still missing | Complete reviewer steps with real linked identity, queued Study, completed answers and no duplicate run |
| Multi-store onboarding | `webapp/server/domain/shopify/context.ts` enforces one configured development shop | Public install/token lifecycle and tenant authorization; two independent stores and two staff members; no cross-store or cross-account access |
| Privacy webhooks | Three signed durable endpoints and cleanup worker in webapp PR #6350; native compliance configuration validated | Deploy backend first, release subscriptions, and verify real provider receipts and completed fulfillment |
| Data retention | PR #6350 retains detached provenance, isolates new image imports and retries tracked Study/storage/queue/AI cleanup; legacy shared assets remain pending | Complete review of legacy copies, copied research, historical queue events, provider logs/backups and audit retention before claiming complete erasure |
| Billing | Existing Minds response allowance; four questions × ready Audience members | Approved Shopify billing model with entitlement mapping; successful approval, cancellation, upgrades/downgrades, insufficient allowance and reinstall tests; no double billing |
| Public distribution | Existing app is a restricted development pilot | Confirm appropriate app identity and public distribution configuration in Shopify; preserve pilot credentials and restrictions until the public release is ready |
| Listing and support | English draft and nine published guides | Final pricing, privacy link, monitored support and private emergency contacts; accurately declared supported languages |
| Media | Storyboard prepared; real authenticated recording unavailable | Three distinct real screenshots, reviewer video and guide clip/poster; inspect every final file |
| Repository CI | Root `validate` fails during dependency installation; scoped Slack CI is separate | Grant this repository Actions Read access to the pinned locales package, then rerun Shopify typecheck/test/build successfully |
| Shopify review | Not submitted or approved | All current automated checks pass and Shopify accepts the submitted app |

## Implementation handoff

- **Webapp:** generalize the verified Shopify session/connection boundary for approved public stores, preserving per-staff Minds consent and server-owned authorization. Do not simply remove the allowlist. Cover install, expired/revoked tokens, failed consent, deleted products and changed Audience membership.
- **Webapp + native config:** add `customers/data_request`, `customers/redact`, and `shop/redact` subscriptions and handlers. Authenticate the raw body, enqueue idempotent work where needed, and retain safe completion evidence. These topics are required even when an app does not collect personal data; invalid HMAC receives 401, successful receipt 2xx. Shopify specifies fulfillment within 30 days, subject to legal retention exceptions. [Privacy compliance](https://shopify.dev/docs/apps/build/compliance/privacy-law-compliance).
- **Billing:** use Shopify App Pricing as the default design candidate for a new public app; determine plans and account/store entitlement ownership before implementation. Existing Minds billing does not prove a Shopify exemption. Verify the applicable rules and any exemption with Shopify before using an external charge flow. [Billing documentation](https://shopify.dev/docs/apps/launch/billing), [App Store requirements](https://shopify.dev/docs/apps/launch/shopify-app-store/app-store-requirements).
- **Privacy/content:** review final processor/data flows, AI-provider disclosures, retention, deletion and support handling against the approved policy. Publish changes in `minds-content`; maintain accurate limitations across all nine guides.
- **CI owner:** in the locales package's Manage Actions access, grant `minds-integrations` Read, then rerun CI. [Package settings](https://github.com/orgs/minds-ai-co/packages/npm/locales/settings). The known 403 is infrastructure evidence, not a passing Shopify check.

## Acceptance record to fill after testing

Record tested webapp SHA, native version, timestamp, anonymized scenario, expected/actual result, Study identifier in private QA storage, and sanitized artifact location. Never commit credentials, staff/customer identifiers, browser storage or provider payloads. Mark each result passed, failed or not run; never infer an installed workflow pass from health checks or mocked UI tests.
