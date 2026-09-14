# Shopify product research development preview

Refs minds-ai-co/webapp#6326. Backend and merchant UI: companion webapp PR targeting staging.

The native product-details action opens the app using Shopify's `app:` protocol with the selected product GID. It does not request research execution. The embedded webapp reads the product server-side, links each verified staff account to its consenting Minds user, previews four questions and response usage, and confirms through the existing Study execution service.

## Build and configuration

Install root dependencies, then run `npm run build --workspace minds-shopify-integration`. Generated extension locales come from the pinned `@minds-ai-co/locales` package and are not separately maintained source. Type checking and product-link tests are included in root checks.

Copy `shopify.app.development.toml.example` to ignored `shopify.app.toml`; set its application URL to the reachable backend URL. The development app is Minds Research Dev; only `read_products` is requested. Configure backend `SHOPIFY_FOUNDATION_ENABLED`, `SHOPIFY_DEVELOPMENT_SHOP`, `SHOPIFY_CLIENT_ID`, and `SHOPIFY_CLIENT_SECRET` through the canonical environment workflow. Secrets belong in the vault/deployment environment, never this manifest. Apply the companion Prisma migrations before enabling the backend.

Run the native Shopify CLI config validation and build before installing in `minds-research-development.myshopify.com`. The example staging host is behind Cloudflare Access: it is not evidence of a publicly reachable Shopify embed or webhook. Resolve development ingress before an installation test; do not disable Access globally. No app version is deployed by repository CI.

## Acceptance capture

Record the real installed app at desktop and mobile widths: product action → selected product and images → saved Audience → four questions and reviewed usage → explicit Run study → queued/progress → original respondent excerpts. Also capture first-time Minds consent, cancelled consent, insufficient allowance, a changed Audience, and retrying confirmation without a duplicate run. Use demo products and a dedicated development Minds account. Never capture session tokens, credentials, or customer data. These live Shopify captures are pending deployment and installation.

## Release boundary

This is restricted to the server-configured development store and labelled as a development preview. It has no public App Store listing or Shopify billing approval. Uninstall verifies the signed raw body and removes Shopify links/challenges and connection-scoped snapshot references; canonical Studies remain in the consenting Minds account. Full privacy topic handling, retention review, billing approval, production configuration, and App Store submission are separate public-release work. Do not publish marketing claiming availability until those gates and installed-store QA are complete.

API references: https://shopify.dev/docs/api/admin-extensions/latest and https://shopify.dev/docs/apps/build/webhooks/verify-deliveries.
