# Shopify public launch implementation plan

Prepared 2026-09-15 for [webapp issue #6326](https://github.com/minds-ai-co/webapp/issues/6326). This is the remaining implementation plan, not an acceptance record or a claim that the app is publicly available. Use [release-readiness.md](release-readiness.md) for observed status.

## Merchant workflow

Install Minds from Shopify, connect a Minds account with explicit consent, and choose a Shopify plan. Open a product and select **Test purchase barriers**. Choose an Audience, review the imported product and four questions, see the response allowance required, and explicitly start the Study. Return to completed answers and supporting respondent excerpts. Product copy is never changed automatically.

Keep the connection per Shopify staff member. A store subscription funds research for that store; linking another Minds account must not transfer a store's research history or silently grant access to another person's Audiences.

## Billing design to implement

Use Shopify App Pricing as the proposed public billing path. Plans live in the Partner Dashboard, and the app verifies the merchant's current contract through the Partner API. Do not infer entitlement from the welcome URL or create a second subscription through the legacy Billing API. [Shopify App Pricing](https://shopify.dev/docs/apps/launch/billing/shopify-app-pricing).

The launch price, currency, included responses, trial and overage policy remain unset. Do not create paid plans from this document. A limited free launch remains an alternative if selected by the owner.

Persist a Shopify billing account keyed by verified app and shop identity, with the provider contract reference, validated plan mapping, current billing cycle and last verification time. Query `activeSubscription` using the organization-owned Partner API client, and bind the returned shop to the independently verified installation. The existing app client secret and merchant session token are not Partner API credentials. [Active subscription API](https://shopify.dev/docs/api/partner/latest/active-subscription).

The current webapp resolves response allowance against a Minds user or Team. Shopify funding therefore needs a durable integration with canonical metering, rather than an HTTP-only plan override:

1. Persist the Study's funding account and billing period when its execution is accepted. Carry that identity through the canonical creation, reservation, worker, retry and refund paths.
2. Reserve the four-question cost atomically against the store allowance. Repeated confirmation, two concurrent staff requests and retrying workers must not charge twice or overspend the shared allowance.
3. Keep existing Minds subscriptions and usage intact. Shopify-funded Studies must not consume a second allowance or write Shopify identifiers into Stripe-specific columns.
4. Refresh provider state before new paid execution and reconcile periodically. Unavailable or ambiguous provider state must not grant new paid access. Preserve the contract's cancellation and pending-change semantics instead of treating every update as an immediate reset.
5. Authorize findings separately from billing. Subscription ownership alone must never grant access to a linked person's independent Minds Studies or Audiences.

## Public installation boundary

Keep the development-shop restriction enabled until the following implementation and tests pass. Model the verified installation separately from per-staff Minds links, retain uninstall/reinstall generations, and reject expired or revoked Shopify sessions. Use verified shop identity for catalog reads, connections, billing and Study provenance; never trust a query-string shop or product reference alone.

On uninstall, revoke access and detach retained research provenance. Privacy cleanup must remain independently callable after access is disabled. An old uninstall/redaction event must not delete a newly installed generation's unrelated research. Review the existing pending-redaction reinstall block before allowing general public installations.

## Required acceptance matrix

| Scenario | Passing evidence |
| --- | --- |
| Two stores and two staff members per store | Cross-store product, connection, allowance and findings requests rejected; each staff member explicitly links their own authorized Minds account |
| Fresh install and reinstall | App opens from Shopify; expired/revoked sessions fail; uninstall revokes access; delayed old events do not erase a new generation |
| Plan approval and return | Provider-confirmed contract controls access; a forged welcome URL grants nothing |
| Cancellation, freeze and plan changes | No new paid access beyond the valid contract; cycle and pending-change handling verified against provider state |
| Allowance exhaustion and concurrency | Insufficient allowance blocks before execution; two simultaneous confirmations cannot overspend or double charge |
| Existing Minds subscriber | Shopify-funded execution does not charge or consume the user's separate Minds allowance |
| Product or Audience changes | Deleted products and lost Audience access fail clearly; confirmation uses the reviewed snapshot and authorized ready respondents |
| Real privacy delivery | Shopify-originated requests accepted and minimized; duplicates deduplicated; populated-shop deletion completed with retry evidence |
| Retained copies | Copied Studies/templates, historical queue events, logs, backups and legal retention reconciled with the published privacy policy |
| Installed Study | Real product action produces the reviewed four-question Study, assigned images, completed answers and respondent excerpts |

## Repository and release sequence

- **webapp:** installation and billing models, canonical metering integration, privacy lifecycle and authorization tests. Ship additive schema changes through staging and verified production workflows.
- **minds-ui:** any new UI messages in all nine locales (`ar de en es fr ja ko tr zh`), package release, then exact consumer version bumps.
- **minds-integrations:** native extension/configuration, reviewer instructions, listing drafts and sanitized acceptance records. Release native configuration only after its backend routes are live.
- **minds-content:** update the nine integration guides from actual released behavior; add the real walkthrough clip and poster only after capture and inspection.

After the installed workflow passes, record the real Shopify-to-Minds journey, inspect the video and three distinct screenshots, and register the clip's actual duration. Do not replace the missing walkthrough with mocked results. Complete listing, pricing, support and registration fields in the authenticated Partner Dashboard, run Shopify's checks, then submit. Record submission and approval separately.
