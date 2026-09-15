# Reviewer walkthrough draft

This script is prepared for internal QA and the eventual Shopify review. It has not yet been completed in the installed browser. Replace setup/access details with verified review access before submission; do not hand Shopify an incomplete test environment.

## Prerequisites

- A fresh eligible Shopify test store with a demo product, product image and price.
- A dedicated Minds review account, a saved Audience with at least one ready Mind, and enough response allowance for four questions per ready Mind plus planned retry scenarios.
- Private review credentials supplied through Shopify's reviewer form. Do not share a personal owner account or capture sign-in screens.
- Installation and billing onboarding completed with the release candidate. The current pilot only allows `minds-research-development.myshopify.com`; an arbitrary review store will currently be rejected.

## Core walkthrough and expected behavior

1. Install the app and open it from Shopify admin. Expected: an embedded app with a clear Minds connection step; no requirement to edit URLs or configuration.
2. Connect the dedicated Minds account and explicitly consent. Expected: the signed-in Shopify staff member is linked to that consenting Minds account. Cancelling does not link it.
3. Open a demo product and select the Minds product action from its actions menu. Expected: the app opens with that product selected; no Study starts yet.
4. Inspect the product context. Expected: product title, description, available images and variant/price context from this shop. The pilot snapshot includes up to three images and twenty variants.
5. Choose the prepared Audience. Expected: its ready Mind count and four research questions are visible. The topics are appeal, price hesitation, missing information and presentation improvements; questions are English in the current pilot.
6. Inspect the usage preview. Expected: four questions × ready Minds; no research execution or response use from preview alone.
7. Select Run study once. Expected: one Study is created and queued, with progress visible. Record the actual completion time; do not promise a fixed duration.
8. Wait for completion and inspect the original respondent excerpts. Expected: synthetic findings linked to the selected product and Audience, with a route to continue the Study in Minds. These are AI-powered responses, not recorded customer purchases.

## Additional QA before sending this script to Shopify

| Scenario | Expected result |
| --- | --- |
| Consent cancelled or link expired | No account linked; actionable retry; link challenge expires after ten minutes |
| Another staff member opens the app | Separate consent required; no inherited Minds identity |
| Second shop / tampered product identifier | Only the authenticated shop's permitted product and data are accessible |
| Audience changes between preview and confirmation | Stale preview rejected and refreshed before a new confirmed run |
| Not enough response allowance | Clear recovery path; no partial or duplicate charge/run |
| Double click, retry or refresh after confirmation | Same confirmation cannot create duplicate Studies |
| Deleted/unavailable product or provider failure | Recoverable message; no cross-shop fallback or blank failure screen |
| Uninstall/reinstall | Connection removed; fresh consent required; documented retention honored |
| Privacy request and redaction | Authenticated receipt and completed, auditable processing |
| Mobile admin viewport | Main workflow readable and usable with no clipped primary action |

The supplementary failure scenarios are internal acceptance checks, not requests for reviewers to use production customer data. Attach the sanitized run evidence and complete video after they pass.
