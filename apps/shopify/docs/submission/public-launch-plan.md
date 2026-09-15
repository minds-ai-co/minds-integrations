# Shopify public launch implementation plan

Prepared 2026-09-15 for [webapp issue #6326](https://github.com/minds-ai-co/webapp/issues/6326). This is the remaining implementation plan, not an acceptance record or a claim that the app is publicly available. Use [release-readiness.md](release-readiness.md) for observed status.

## Merchant workflow

Install Minds from Shopify for free and connect a Minds account with explicit consent. Open a product and select **Test purchase barriers**. Choose an Audience, review the imported product and four questions, see the response allowance required, and explicitly start the Study. Return to completed answers and supporting respondent excerpts. Product copy is never changed automatically.

Keep the connection per Shopify staff member. Research is funded by the linked person's Minds account or Team; linking another Minds account must not transfer a store's research history or silently grant access to another person's Audiences.

## Billing model

Owner decision, 2026-09-15: the Shopify app is free to install. Studies consume the response allowance of the linked Minds account or Team, billed by Minds. This matches the deployed pilot, which creates each Study as the linked Minds user and applies the existing canonical metering. No Shopify plans, Partner API subscription checks or store-level allowance are needed for this model.

App Store requirement 1.2 prohibits off-platform billing "unless you've been notified otherwise by Shopify". Before submission:

1. Open a Partner Support case requesting the off-platform billing exception. Describe Minds as a standalone research platform with its own customers, where the Shopify app is a free connector and merchants pay only for their existing Minds account.
2. Record Shopify's written answer with the case reference in private release records; do not submit on an assumed exception.
3. Configure the public app as free in the Partner Dashboard, and reference the approved exception in the review instructions.
4. Keep the listing and guides accurate: free to install, a Minds account with available allowance is required, and research is billed by Minds.

In the app, insufficient allowance must block before execution with a clear link to manage the Minds plan; the Shopify app never takes payment itself.

### Fallback: Shopify App Pricing

If Shopify refuses the exception, use Shopify App Pricing. Plans live in the Partner Dashboard, and the app verifies the merchant's current contract through the Partner API (`activeSubscription`, using the organization-owned Partner API client, bound to the independently verified installation). Do not infer entitlement from the welcome URL or create a second subscription through the legacy Billing API. [Shopify App Pricing](https://shopify.dev/docs/apps/launch/billing/shopify-app-pricing), [Active subscription API](https://shopify.dev/docs/api/partner/latest/active-subscription).

That path requires a store funding account integrated with canonical metering: persist each Study's funding account and billing period through creation, reservation, worker, retry and refund paths; reserve cost atomically against the store allowance; keep Shopify identifiers out of Stripe-specific columns; refresh and reconcile provider state; and authorize findings separately from billing. The price, currency, included responses, trial and overage policy would need an owner decision.

## Public installation boundary

Keep the development-shop restriction enabled until the following implementation and tests pass. Model the verified installation separately from per-staff Minds links, retain uninstall/reinstall generations, and reject expired or revoked Shopify sessions. Use verified shop identity for catalog reads, connections and Study provenance; never trust a query-string shop or product reference alone.

On uninstall, revoke access and detach retained research provenance. Privacy cleanup must remain independently callable after access is disabled. An old uninstall/redaction event must not delete a newly installed generation's unrelated research. Review the existing pending-redaction reinstall block before allowing general public installations.

## Required acceptance matrix

| Scenario | Passing evidence |
| --- | --- |
| Two stores and two staff members per store | Cross-store product, connection and findings requests rejected; each staff member explicitly links their own authorized Minds account |
| Fresh install and reinstall | App opens from Shopify; expired/revoked sessions fail; uninstall revokes access; delayed old events do not erase a new generation |
| Billing exception | Shopify's written off-platform billing exception recorded; app configured free; no Shopify charge created |
| Allowance exhaustion and concurrency | Insufficient Minds allowance blocks before execution with a link to manage the plan; two simultaneous confirmations cannot overspend or double charge |
| Product or Audience changes | Deleted products and lost Audience access fail clearly; confirmation uses the reviewed snapshot and authorized ready respondents |
| Real privacy delivery | Shopify-originated requests accepted and minimized; duplicates deduplicated; populated-shop deletion completed with retry evidence |
| Retained copies | Copied Studies/templates, historical queue events, logs, backups and legal retention reconciled with the published privacy policy |
| Installed Study | Real product action produces the reviewed four-question Study, assigned images, completed answers and respondent excerpts |

## Repository and release sequence

- **webapp:** installation model, privacy lifecycle and authorization tests. Ship additive schema changes through staging and verified production workflows.
- **minds-ui:** any new UI messages in all nine locales (`ar de en es fr ja ko tr zh`), package release, then exact consumer version bumps.
- **minds-integrations:** native extension/configuration, reviewer instructions, listing drafts and sanitized acceptance records. Release native configuration only after its backend routes are live.
- **minds-content:** update the nine integration guides from actual released behavior; add the real walkthrough clip and poster only after capture and inspection.

After the installed workflow passes, record the real Shopify-to-Minds journey, inspect the video and three distinct screenshots, and register the clip's actual duration. Do not replace the missing walkthrough with mocked results. Complete listing, pricing, support and registration fields in the authenticated Partner Dashboard, run Shopify's checks, then submit. Record submission and approval separately.
