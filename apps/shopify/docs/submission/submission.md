# Minds Research: Shopify submission pack

Prepared 2026-09-15. Refs minds-ai-co/webapp#6326. **Preparation complete for the materials below; the app is not ready to submit.** This pack describes the released development pilot and identifies the work required for public distribution. It does not enable distribution or certify review acceptance.

## Contents

- [Listing copy](listing.en.json): structured, paste-ready English draft.
- [Reviewer walkthrough](reviewer-guide.md): setup, core workflow and expected results.
- [Release gates](release-readiness.md): engineering and dashboard acceptance checklist.
- [Public launch plan](public-launch-plan.md): store billing, installation boundaries and the remaining acceptance matrix.
- [Retention review](retention-review.md): tracked data copies, the confirmed template-copy gap and remaining provider-retention evidence.
- [Capture plan](capture-plan.md): real screenshots, reviewer video and integration-page clip.
- [1200×1200 app icon](assets/minds-research-icon-1200.png): inspected PNG exported from the canonical Minds mark; [source provenance](assets/icon-provenance.json).

## Dashboard values

| Field | Prepared value / action |
| --- | --- |
| Organization | Minds AI Labs, Inc. (owner-provided company name) |
| Proposed public app name | Minds Research; check availability and align the eventual public app configuration |
| Existing development app | Minds Research Dev; app ID 423384678401, organization 235606776 |
| App URL | https://getminds.ai/shopify |
| Embedded | Yes |
| Current scope | `read_products` |
| Current API version | `2026-07` |
| Primary listing language | English |
| Website / setup guide | https://getminds.ai/guide/integration-shopify |
| Contact candidate | developers@getminds.ai; existing setup identity, verify monitored support/review routing before submission |
| Emergency contact | Enter monitored email and phone privately in the dashboard; never in this repository |
| Privacy policy | Select the approved public policy after the Shopify data/retention review below; do not assert a generic policy covers the unfinished flow |
| Pricing | Pending Shopify billing and entitlement implementation; no price or free-plan promise is approved by this pack |
| Category | Select the current dashboard category matching synthetic product research; verify available taxonomy before saving |
| Protected customer data | No customer/order scopes in the pilot; reassess against the final data inventory before opting out |
| Reviewer credentials | Create dedicated review access after onboarding works; supply privately in Shopify's reviewer fields |

The nine public guides are already published: [en](https://getminds.ai/guide/integration-shopify), [de](https://getminds.ai/guide/de/integration-shopify), [es](https://getminds.ai/guide/es/integration-shopify), [fr](https://getminds.ai/guide/fr/integration-shopify), [tr](https://getminds.ai/guide/tr/integration-shopify), [ar](https://getminds.ai/guide/ar/integration-shopify), [zh](https://getminds.ai/guide/zh/integration-shopify), [ja](https://getminds.ai/guide/ja/integration-shopify), [ko](https://getminds.ai/guide/ko/integration-shopify). They accurately describe restricted access and remain noindex. The four research questions are currently English; translated documentation does not establish fully localized research behavior.

## Submission sequence

1. Close every blocking row in [release readiness](release-readiness.md), attaching actual evidence.
2. Configure the public distribution app and billing; reconcile final identity, URLs, privacy policy, support contacts and scopes with this pack.
3. Complete the reviewer walkthrough on a fresh eligible store, then capture actual UI using [the shot list](capture-plan.md).
4. Paste the listing draft, upload verified media, and privately provide working review credentials and emergency contact details.
5. Run Shopify's submission checks, resolve failures, and submit only the finished app. Track review correspondence in the monitored developer mailbox.
6. After Shopify approval and public availability, update the webapp directory and all nine guides from pilot wording to the verified install path; remove noindex only through the content release workflow.

Shopify requires a primary-language listing, emergency contact, a 1200×1200 PNG/JPEG icon and successful automated checks before submission. Its guide warns against submitting incomplete apps. [Submission guide](https://shopify.dev/docs/apps/launch/app-store-review/submit-app-for-review).
