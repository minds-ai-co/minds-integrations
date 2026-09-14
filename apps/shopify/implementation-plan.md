# Shopify product research: implementation plan

Prepared 14 September 2026. This is implementation preparation, not a released
integration. Track the backend in [webapp issue #6301](https://github.com/minds-ai-co/webapp/issues/6301)
and [draft PR #6303](https://github.com/minds-ai-co/webapp/pull/6303).

## Current state

- Alexander selected **Minds AI Labs, Inc.**, United States / Delaware, as owner.
- The company developer account exists. Alexander successfully signed in and
  approved Shopify CLI access. The last CLI organization query returned no
  organizations. Registration and all live app/store identifiers remain pending.
- The backend draft verifies Shopify identity and online product-read permission
  through `POST /shopify/session`. It is disabled by default and does not grant
  Minds workspace access, store credentials, import products, or create Studies.
- [Setup instructions](setup.md) and an inactive configuration example are ready.
  [Listing copy and review preparation](app-store-preparation.md) remain drafts.

## First merchant workflow

1. Install the app and open its embedded home in Shopify admin.
2. Link a Minds workspace through a secure account-linking flow.
3. Select catalog products and a research objective, such as comparing product
   descriptions or exploring positioning. Preview the exact product material
   that will be included; exclude unrelated catalog data.
4. Choose an Audience and review the Study questions, research cost and limits.
5. Explicitly confirm the Study. Show progress, retryable errors and the result
   inside Shopify, with a link to the full Study in Minds.

Use existing Mind, Audience and Study contracts. Product descriptions are
untrusted research inputs, not instructions to the agent or permission to run
tools. Label responses as synthetic research. Do not imply that respondents are
actual store customers or that results guarantee sales.

The first release requests `read_products`. Customer records, orders, checkout
modifications and catalog writes are outside this increment. A merchant can use
product research without importing personal customer data.

## Ownership and proposed routes

| Owner | Responsibility |
| --- | --- |
| `minds-integrations/apps/shopify` | Shopify configuration, setup, submission materials and platform-specific contracts |
| `webapp` | Embedded Nuxt App Home, installation/account binding, catalog access, billing entitlement checks and existing Study execution |
| `minds-ui` | Shared UI components and all nine locale files when new strings are added |
| `minds-content` | Published setup guide, support and Shopify-specific privacy explanation |

Use a Nuxt App Home at `/shopify`; this avoids introducing another research
backend or a React application purely for packaging. The exact hosting URL is
pending. The example's `.invalid` host is intentionally unusable.

Keep Shopify protocol routes outside `/api` so Shopify bearer tokens do not
enter Minds' unrelated authentication middleware. Proposed webhook paths are
`/shopify/webhooks/lifecycle` and `/shopify/webhooks/compliance`; neither exists
yet. Internal research calls still use the canonical Minds service layer.

## Ordered implementation increments

### 1. Installation and workspace binding

Build on the existing signature/claim checks. Authenticate every browser request
with a current App Bridge token. Bind the Shopify shop ID to a Minds workspace
only after explicit authorization by a permitted Minds user; matching an email
address or knowing a shop domain must never grant access.

Use a short-lived, single-use account-link state bound to the verified shop and
initiating staff member. Complete Minds sign-in in a top-level flow and return
to the embedded app. Verify workspace membership again server-side. Support
denial, expiration, replay rejection, reconnect and unlink. Do not depend on
third-party cookies working inside the Shopify iframe.

Persist installation state separately from product entities. Before adding
offline access, define encrypted credential storage, refresh coordination,
key rotation, revocation and log redaction. Online calls must continue to respect
the active staff member's permissions. Background work needs an installation-
scoped authorization design; an online token must not be reused indefinitely.

Acceptance: two shops cannot access each other's workspaces, catalog or Studies;
replayed link requests fail; removed staff and revoked installations lose access.

### 2. Catalog-to-Study flow

Fetch the selected products through the GraphQL Admin API with bounded
pagination, timeouts and rate-limit handling. Snapshot only the product fields
actually used by the Study, with shop/product IDs and import time for provenance.
Recheck the selected IDs against the authenticated shop. Handle deleted products,
missing images, empty catalogs and stale selections.

Use the existing planning and confirmation contract. Freeze the confirmed input
and make submission idempotent so repeated clicks cannot launch duplicate paid
research. Display Study progress and failures through existing job mechanisms.
Persist a shop-scoped Study reference rather than a second results format.

Acceptance: the selected product material reaches the intended Study; an
unconfirmed preview never launches research; duplicate submission is harmless.

### 3. Installation lifecycle and privacy

Verify webhook HMAC against the exact raw request bytes before JSON parsing.
Reject invalid signatures with 401. Durably record accepted deliveries and
deduplicate processing before acknowledging them; retries must not duplicate
deletion work. Uninstall disables access and scheduled work immediately.

Implement all three mandatory privacy topics even for this catalog-only scope.
Process customer requests against the data actually held; never fetch additional
customer data just to answer a request. Shop deletion must cover imported
snapshots, derived shop-linked research data, files and credentials, with a
documented retention/backup policy. Keep handlers usable after tokens are revoked.
Shopify sends `shop/redact` 48 hours after uninstall and requires requested
actions within 30 days, subject to applicable retention obligations.
[Shopify privacy requirements](https://shopify.dev/docs/apps/build/compliance/privacy-law-compliance).

Acceptance: signed deliveries work, invalid HMAC fails, duplicate delivery is
safe, and deletion still completes after uninstall and credential revocation.

### 4. Billing, merchant UI and operational readiness

Use Shopify App Pricing if it supports the chosen model. Define Shopify plans,
usage limits, trial behavior and existing Minds-account entitlements before
enabling paid research. Do not send merchants to external checkout to unlock
the app. Prices are undecided; existing Minds prices are not automatically
Shopify plans. Exercise cancellation, declined authorization, upgrades and
usage limits in test mode.
[Shopify billing guidance](https://shopify.dev/docs/apps/launch/billing).

Add App Bridge initialization and an embedded navigation experience. Configure
frame policy for Shopify admin and the validated shop, without allowing arbitrary
framing. Make loading, empty, permission-denied, billing and failure states usable
on desktop and mobile. Keep secrets and operational diagnostics out of the UI.

Monitor installation failures, provider failures, research failures, webhook
processing and deletion completion with redacted metadata. Add operator recovery
instructions and a tested rollback/disable path before launch.

### 5. Review and release

Run the [review preparation](app-store-preparation.md) against the implemented
build, produce real captures, publish the required content in `minds-content`,
and configure public distribution for the eventual listing app. Keep the
development app separate from the listing app and its production credentials.

Successful local tests or Shopify configuration validation do not prove an
installation or an App Store listing. Require recorded live install/reinstall,
workflow, billing and deletion evidence. Production promotion and submission
remain separate explicit release actions.
