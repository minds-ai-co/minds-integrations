# Shopify development setup

Verified against Shopify CLI 4.8.0 on 14 September 2026. The Partner organization,
development app and demo store now exist. Reuse them; the creation commands below
are reference instructions, not steps to repeat.

## Resume from the current account state

The account is `developers@getminds.ai`; the selected business is Minds AI Labs,
Inc., United States / Delaware. CLI authorization is verified. Browser sessions
and CLI sessions are separate. Do not copy cookies or OAuth token files between
them. Credentials stay in the encrypted vault or their native credential owner.

### Verified development resources

| Resource | Value |
| --- | --- |
| Organization | Minds AI Labs, Inc. (`235606776`) |
| Development app | Minds Research Dev |
| Client ID (public identifier) | `b8499982b1a038cc211e4c195c376c1d` |
| Test store | `minds-research-development.myshopify.com` |
| Test configuration | Basic, United States, demo data enabled |
| Client ID vault reference | `agents/shopify/development/client-id` |
| Client secret vault reference | `agents/shopify/development/client-secret` |

[Dev Dashboard](https://dev.shopify.com/dashboard/235606776) ·
[Test store admin](https://admin.shopify.com/store/minds-research-development)

The tower's local scaffold is under
`~/.local/share/agent-integrations/shopify-onboarding/development/minds-research-dev`.
Its proposed scopes were narrowed from the generated `write_products` default
to `read_products`, and its API version was aligned to `2026-07`. These local
changes have not been deployed. The registered app still uses Shopify's default
App Home; no merchant research experience is installed or operational.

Recheck access before subsequent writes:

```bash
shopify organization list --json
```

Verify the organization name and access role in the Dev Dashboard. Use the
actual returned numeric ID below; do not infer it from the company name. If
the list is still empty, check the active account and organization membership.

## Create or reuse development resources

From the repository root, assign the non-secret organization ID and a dedicated
local work directory:

```bash
SHOPIFY_ORGANIZATION_ID='<verified numeric organization ID>'
SHOPIFY_WORKDIR="$PWD/apps/shopify/development"
shopify store list --organization-id "$SHOPIFY_ORGANIZATION_ID" --type dev --json
```

Check the Dev Dashboard's app list and the store list before creating anything.
Reuse a matching development resource on retries. `--name` on `app init` creates
a new app; it is not an idempotent lookup.

If no development app exists and the work directory is absent:

```bash
shopify app init --name 'Minds Research Dev' \
  --organization-id "$SHOPIFY_ORGANIZATION_ID" \
  --template none --path "$SHOPIFY_WORKDIR"
```

This creates a configuration-only scaffold. It does not build an embedded home
or make the finished product an extension-only app. The App Home runtime will
be implemented in the webapp. Do not install/deploy the generated default home
as if it were the research experience.

If the app already exists and a local scaffold needs to be recreated, use its
non-secret client ID instead of creating a duplicate:

```bash
SHOPIFY_CLIENT_ID='<existing development app client ID>'
shopify app init --client-id "$SHOPIFY_CLIENT_ID" \
  --template none --path "$SHOPIFY_WORKDIR"
```

If a suitable dev store does not already exist:

```bash
shopify store create dev --name 'Minds Research Development' \
  --organization-id "$SHOPIFY_ORGANIZATION_ID" \
  --plan basic --country US --demo-data --json
```

Record the created app/client ID, organization ID and store domain as non-secret
setup metadata. Review the results before rerunning any creation command.
[Shopify dev stores](https://shopify.dev/docs/apps/build/stores/development-stores).

## Connect the backend when it is ready

Use `shopify.app.toml.example` as a settings proposal, not an active manifest.
Its client ID is synthetic; its reserved host and proposed webhook routes must
be replaced only after the real development app and endpoints exist. Keep the
production registration separate. Choose public distribution for the eventual
App Store app; custom distribution is not the listing path.

The intended configuration is embedded, Shopify-managed installation,
`read_products`, server-mediated Admin API access and API version `2026-07`.
The empty redirect list matches the proposed token-exchange flow; add only
callbacks actually implemented if the auth design changes. Review lifecycle
and privacy endpoints before registering subscriptions.
[Shopify app configuration](https://shopify.dev/docs/apps/build/cli-for-apps/app-configuration).

Store the development client secret in the approved vault; the browser must
never receive it. Wire the real development values to the existing backend:

| Setting | Purpose |
| --- | --- |
| `SHOPIFY_CLIENT_ID` | Development app identity, matched to App Bridge |
| `SHOPIFY_CLIENT_SECRET` | Server-only signature verification and token exchange |
| `SHOPIFY_FOUNDATION_ENABLED` | Leave false until isolated development configuration is ready |

Never use `shopify app env show` or verbose CLI logging in shared agent output.
Do not put secrets in TOML, PRs, command arguments or setup notes. Apply hosted
environment changes through the repository's canonical deployment workflow.

Once the active development configuration is complete:

```bash
shopify app config validate --path "$SHOPIFY_WORKDIR" --json
```

The CLI also resolves the registered app/organization. Validation passed with
`valid: true` and no issues for the development scaffold after its local scope/API
changes. It also passed for an isolated copy of `shopify.app.toml.example` with
the real development client ID substituted. The checked-in example remains
synthetic and inactive. Validation does not prove endpoint reachability,
installation success, authorization boundaries or App Store eligibility. Review
the diff before any configuration deployment. This preparation does not run `app dev`, `app deploy`,
`app release`, a webapp build, or a production deployment.

## First live checks

1. Install in the dedicated test store and open the embedded App Home.
2. Confirm the correct shop and a staff member's product-read authorization.
3. Confirm an unsigned or wrong-app request cannot use `/shopify/session`.
4. Link a test Minds workspace; verify another shop cannot use that binding.
5. Import selected demo products and preview a Study without launching it.
6. Confirm once, wait for results and verify retrying cannot duplicate the run.
7. Exercise lifecycle/privacy deliveries, uninstall, deletion and reinstall.

Steps involving the App Home, binding, research and webhooks are pending their
implementation; the current backend foundation alone cannot pass them.
