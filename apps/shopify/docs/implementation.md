# Shopify product research development preview

Refs minds-ai-co/webapp#6326. Backend and merchant UI live in the webapp; native extension configuration lives here. [Technical ownership and operations](https://github.com/minds-ai-co/webapp/blob/main/docs/shopify-integration.md) are documented in the webapp. The [public Shopify guide](https://getminds.ai/guide/integration-shopify) and its nine language versions live in `minds-content`.

The native product-details action opens the app using Shopify's `app:` protocol with the selected product GID. It does not request research execution. The embedded webapp reads the product server-side, links each verified staff account to its consenting Minds user, previews four questions and response usage, and confirms through the existing Study execution service.

## Build and configuration

Install root dependencies, then run `npm run build --workspace minds-shopify-integration`. Generated extension locales come from the pinned `@minds-ai-co/locales` package and are not separately maintained source. Type checking and product-link tests are included in root checks.

Copy `shopify.app.development.toml.example` to ignored `shopify.app.toml`; set its application URL to the reachable backend URL. The development app is Minds Research Dev; only `read_products` is requested. Configure backend `NUXT_SHOPIFY_FOUNDATION_ENABLED`, `NUXT_SHOPIFY_DEVELOPMENT_SHOP`, `NUXT_SHOPIFY_CLIENT_ID`, and `NUXT_SHOPIFY_CLIENT_SECRET` through the canonical environment workflow. Secrets belong in the vault/deployment environment, never this manifest. Apply the companion Prisma migrations before enabling the backend.

Run the native Shopify CLI config validation and build before installing in `minds-research-development.myshopify.com`. The example uses the deployed development-app ingress at `https://getminds.ai/shopify`. Keep the backend restricted to the configured development store. The staging host is behind Cloudflare Access and is not merchant ingress; do not disable Access globally. No app version is deployed by repository CI.

## Verified release record

On 2026-09-14, native version `purchase-barriers-ae36f88` was released from this repository and installed in the configured development store. CLI checks verified exactly `read_products` and demo-product access, and the temporary development preview was cleaned so the store uses the released version.

On 2026-09-15, the webapp documentation/directory release reached production as `e46e57420dab976090ea85ab9eb6070ebec3f97c`. [Production deployment](https://github.com/minds-ai-co/webapp/actions/runs/34950259935) passed all gates; [staging deployment](https://github.com/minds-ai-co/webapp/actions/runs/34948146190) also passed the Audience reference E2E. The latter does not test Shopify account linking or a Shopify-originated Study. All nine public guides were deployed and verified. Recheck live state before each subsequent release.

The repository-wide `validate` job still needs GitHub Packages Actions access to the pinned locales package. The existing infrastructure bypass did not fix that permission. The separately scoped Slack checks do not validate the Shopify extension.

## Acceptance capture

Record the real installed app at desktop and mobile widths: product action → selected product and images → saved Audience → four questions and reviewed usage → explicit Run study → queued/progress → original respondent excerpts. Also capture first-time Minds consent, cancelled consent, insufficient allowance, a changed Audience, and retrying confirmation without a duplicate run. Use demo products and a dedicated development Minds account. Never capture session tokens, credentials, or customer data. Chromium checks of the actual Vue page/composable passed at desktop and mobile widths with mocked Shopify/backend responses. Deployment and native installation have been verified separately; the real installed-browser acceptance run and capture still require Shopify and Minds sign-in in the dedicated capture profile. Mocked page checks do not establish an installed-app Study.

## Release boundary

The [App Store submission pack](submission/submission.md) contains draft listing fields, reviewer instructions, media shot lists and the explicit public-release gates. It is preparation material, not a submitted or approved listing.

This is restricted to the server-configured development store and labelled as a development preview. It has no public App Store listing or Shopify billing approval. Uninstall verifies the signed raw body and removes Shopify links/challenges and connection-scoped snapshot references; canonical Studies remain in the consenting Minds account. Full privacy topic handling, retention review, billing approval, public distribution/onboarding configuration, and App Store submission are separate public-release work. Do not publish marketing claiming availability until those gates and installed-store QA are complete.

API references: https://shopify.dev/docs/api/admin-extensions/latest and https://shopify.dev/docs/apps/build/webhooks/verify-deliveries.
