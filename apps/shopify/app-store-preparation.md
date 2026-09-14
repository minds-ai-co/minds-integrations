# Shopify App Store preparation

Draft only, 14 September 2026. Nothing in this file has been submitted or
published. The proposed workflow must exist and pass live QA before its copy
is used. Developer legal entity: **Minds AI Labs, Inc.**

## Proposed listing copy

**App name:** Minds Product Research

**Subtitle:** Explore product ideas with AI-powered research

**Description:**

Explore how different audiences might respond to your products and positioning.
Select products from your catalog, choose a target audience, and build a research
study around your questions. Review the study before running it, then compare
responses and read the findings in Shopify admin.

Minds uses AI-powered respondents for synthetic research. Use the findings to
develop hypotheses and plan further validation with real customers.

**Feature drafts:**

- Use selected catalog products as research material.
- Choose an audience relevant to your product questions.
- Review questions and research cost before starting a study.
- Read study progress and results in Shopify admin.

Pricing fields remain unset until Shopify plans and entitlements are approved.
No free tier, trial duration, performance claim or launch date is implied.
List only languages with a tested end-to-end app experience.

## Assets to capture from the finished app

1. Embedded product picker showing selected demo products.
2. Audience selection and the Study preview/confirmation screen.
3. Results showing the synthetic-research label and useful findings.
4. A step-by-step onboarding and workflow screencast with English narration or
   subtitles, suitable for a reviewer using a fresh installation.

Reuse canonical Minds brand assets from `minds-ui`. Capture the actual app,
not speculative mockups; omit browser chrome, private merchant data, pricing
overlays, testimonials and performance statistics. Check current upload sizes
and category choices in the submission form before exporting final media.

## Submission gates

| Gate | Evidence needed | Current state |
| --- | --- | --- |
| Partner organization | Selected legal entity registered and visible to the CLI | Pending browser registration |
| Development app/store | Verified identifiers and successful test installation | Pending organization |
| Listing app | Separate production credentials and public distribution selected | Not created |
| Workflow | Fresh merchant completes install, account link, product selection, confirmed Study and results | Not implemented |
| Privacy/lifecycle | Signed requests processed, invalid signatures rejected, deletion verified after uninstall | Not implemented |
| Billing | Accurate plan disclosure and tested Shopify entitlements/charges where applicable | Undecided |
| Public documents | Reachable setup, support, privacy and terms URLs matching actual behavior | Shopify-specific content pending |
| Support | Monitored contact channel and recovery instructions tested | Contact/channel confirmation pending |
| Review materials | Real screenshots, screencast and repeatable test instructions | Capture pending |
| Reviewer access | Dedicated test access delivered through Shopify's submission fields | Not created |
| Publication | Required checks complete and final release explicitly approved | Not authorized by this preparation |

Treat the full [Shopify App Store requirements](https://shopify.dev/docs/apps/launch/shopify-app-store/app-store-requirements)
as the submission authority. This table is the Minds work plan, not a replacement
for Shopify's review checklist. Choose a regular app category matching product
research; no checkout or sales-channel functionality is proposed. Verify the
proposed name is available and consistent across the listing and App Home.

The eventual listing needs public distribution and full visibility for discovery.
[Shopify listing visibility](https://shopify.dev/docs/apps/launch/distribution/visibility).
Shopify currently documents a one-time USD 19 App Store registration fee per
Partner account and an associated-developer-account declaration. Review the
actual form, company details and payment method before registering; no payment
has been made here.
[Registration requirements](https://shopify.dev/docs/apps/launch/distribution/revenue-share).

Publish the setup/privacy material in `minds-content`, with reviewed descriptions
of imported product data, AI processing, account linkage, retention and deletion.
Do not invent processor lists or legal terms in this adapter repository.

## Reviewer test script to complete before submission

1. Start with a fresh test store and a dedicated Minds test workspace. Provide
   access securely in Shopify's review form, never in this document or a PR.
2. Install the listing app and confirm its embedded home loads without requiring
   access to a private staging network.
3. Complete account linking, select sample catalog products, choose an Audience
   and inspect the proposed Study and disclosed cost.
4. Confirm the Study, wait for completion and open the results. Confirm the
   product snapshot and synthetic-research explanation are visible.
5. Repeat submission and verify no duplicate Study/charge. Exercise empty
   catalogs, insufficient permissions, cancellation and provider failure.
6. Verify another shop cannot open the first shop's linked Study. Uninstall,
   exercise signed privacy deliveries, confirm deletion and reinstall.

Record the deployed revision, app version, store and test results. No results
are pre-filled: an accepted manifest or green unit test is not review evidence
for a workflow that has not run.
