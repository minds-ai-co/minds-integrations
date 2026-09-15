# Shopify retention review — 2026-09-15

This review describes the privacy milestone in webapp PR #6350 and the remaining public-release work. It is not a legal compliance certification. No merchant payloads are included.

| Data/copy | Current handling | Remaining proof or implementation |
| --- | --- | --- |
| Shopify staff links and link challenges | Signed uninstall and shop-redaction processing delete them | Real installed-store uninstall/reinstall and delayed-event tests |
| Imported product snapshot and linked Study | Retained shop/owner provenance; snapshot cleared and associated Study deleted during shop redaction | Real populated-shop execution and deletion |
| New imported images | Dedicated research namespace; bounded recursive cleanup with retries | Live storage deletion and late-write tests |
| Study exports | Persisted owned paths and Study namespaces deleted | Live export artifacts and older path variants |
| Queued work and retained queue events | Matching jobs/events removed; active or locked jobs remain pending | Previously auto-removed jobs may leave events without a surviving ownership mapping |
| Owned AI telemetry | Attributed traces and payloads removed; durable trace manifest survives retries | Prove coverage for missing Study attribution and independently retained provider copies |
| Saved templates and reused template assets | Template asset service deliberately copies files into a new generic upload path on save and use | Preserve server-owned Shopify lineage across template, draft and resulting Study creation, or define an approved restriction; current erasure does not follow these copies |
| Independent Minds data | Preserved; no deletion based on broad text matching | Distinguish a controlled derivative from unrelated user-owned research |
| Logs and backups | Existing general privacy policy describes separate retention periods | Reconcile actual deployment/provider settings and Shopify obligations before declaring full erasure |
| Downloaded exports | Outside this application after download | Explain the boundary accurately; do not claim remote deletion of a recipient's files |

The concrete controlled-copy gap is in `server/services/study-templates/assets.ts`: `copyTemplateAssets` creates a fresh `chat/<user>/<uuid>_<filename>` on save and on use. `server/services/study-templates/store.ts` persists configuration and creates a new draft without Shopify provenance. Deleting the original research namespace does not remove these descendants. Team sharing also means a descendant may have a different owner. A path-prefix-only extension is insufficient.

The published English privacy policy currently states 90 days for server and AI interaction logs and up to 30 additional days for protected backup turnover after active deletion. These are policy statements, not verified Shopify-specific exceptions or evidence of current provider settings. Do not shorten the policy text merely to make the checklist appear complete.

Recommended next implementation: a server-owned derivative ledger, created before copying, that retains the originating Shopify research and records each controlled target/template/draft/Study and asset path. Propagate it on authorized template use; prevent new derivative creation once erasure starts; keep bounded retries and a manifest through external cleanup. Review cross-owner deletion semantics before enabling this for public stores. Client-supplied provenance alone is insufficient because it can be omitted or forged.

Acceptance requires a source Shopify Study, a saved template, a teammate's instantiated draft/Study, exported files and an active worker. Trigger deletion only for the isolated test store. Verify all tracked derivatives are handled, unrelated Studies and files survive, retries cannot resurrect deleted content, and failures remain pending. Separately document provider-log/backups behavior and any approved retention exception.

Source inspection: [template asset copies](https://github.com/minds-ai-co/webapp/blob/b28dbe2fe730cb48caba789d11db19ef1da35127/server/services/study-templates/assets.ts), [template persistence and use](https://github.com/minds-ai-co/webapp/blob/b28dbe2fe730cb48caba789d11db19ef1da35127/server/services/study-templates/store.ts), [Shopify external cleanup](https://github.com/minds-ai-co/webapp/blob/b28dbe2fe730cb48caba789d11db19ef1da35127/server/domain/shopify/erasure-copies.ts), and the [published privacy policy](https://getminds.ai/legal/dataprivacy).

Shopify requires completion within 30 days of receipt, with the stated exception for legally required retention; this does not establish that any current Minds retention practice qualifies. [Shopify privacy requirements](https://shopify.dev/docs/apps/build/compliance/privacy-law-compliance).
