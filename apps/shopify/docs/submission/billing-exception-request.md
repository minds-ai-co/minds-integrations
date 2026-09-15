# Off-platform billing exception request (draft)

Draft for a Shopify Partner Support case from the Minds AI Labs, Inc. Partner organization (235606776). App Store requirement 1.2 prohibits off-platform billing "unless you've been notified otherwise by Shopify". Send this from the Partner Dashboard support flow, then record the case reference and Shopify's written answer in private release records. Do not submit the app on an assumed exception.

---

**Subject:** Off-platform billing exception request: Minds Research (free connector for an existing SaaS platform)

Hello Shopify Partner Support,

We are preparing to submit **Minds Research** (development app "Minds Research Dev", Partner organization Minds AI Labs, Inc., ID 235606776) to the Shopify App Store, and we're requesting confirmation that we may list it under the off-platform billing exception to requirement 1.2.

**What Minds is.** Minds (https://getminds.ai) is a standalone synthetic research platform. Customers use it to run Studies with AI-powered research respondents ("Minds"). Most of our customers are not Shopify merchants and pay us directly through our own subscriptions, independent of Shopify.

**What the Shopify app does.** The app is a free connector. From a product's details page in the Shopify admin, a merchant can start a purchase-barrier Study in their existing Minds account: we read the product's title, description, images, variants and prices (`read_products` scope only), show four research questions and the expected response usage, and run the Study only after explicit confirmation. Results stay in Minds. The app never changes product data, and it requests no customer or order scopes.

**How billing would work.**

- The Shopify app is free to install and never charges merchants through Shopify or otherwise.
- Research runs against the response allowance of the merchant's own linked Minds account (or Team), under the plan they already hold with Minds. No Shopify-specific plan or upsell is presented inside the app.
- A merchant without available allowance is told so before anything runs, with a link to manage their Minds plan.

We consider this a connector to an independent platform, similar to other SaaS integrations whose customers pay the platform directly. If Shopify prefers that research purchased from within the app go through Shopify App Pricing, please tell us and we'll implement plans on that basis before submission.

Could you confirm whether this model is acceptable for the App Store, and whether anything should be noted in the listing or the review instructions?

Thank you,
Minds AI Labs, Inc.
support@getminds.ai
