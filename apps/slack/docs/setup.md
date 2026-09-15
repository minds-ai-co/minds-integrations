# Minds for Slack setup

Minds for Slack runs at https://slack.getminds.ai as a dedicated HTTP service. As of 15 September 2026, its dedicated Slack app is installed in the Getminds workspace, Events verification passes, and live mentions open the native connection controls. Native Minds consent and the callback succeeded after [webapp PR #6329](https://github.com/minds-ai-co/webapp/pull/6329) deployed to production. Audience selection works after configuring Slack's separate Options Load URL. Live research, read-only retrieval, follow-up, private Study access, refresh rotation and disconnect have passed in the QA workspace. Cross-user and external-workspace acceptance remain pending. Unlisted pilot distribution is enabled, and there is no published Slack Marketplace listing.

## Use Minds in a conversation

1. Install the app into your workspace and invite `@Minds` to the channel.
2. Mention `@Minds` with the question and proposal text, or select a message and choose **Ask Minds**.
3. Choose **Connect Minds** and authorize your own Minds account. Workspace installation never gives other Slack users access to the installer's account.
4. Choose **Ask an Audience**, select an exact Audience, and review the question and stimulus. Approve sharing findings in the originating conversation, then choose **Run question**. This consumes your account's research allowance.
5. The app posts the completed synthetic responses and an **Open Study** link in the thread. The Study retains its existing Minds permissions; posting the card does not enable public link sharing.
6. Choose **Read a Study** to retrieve existing findings without launching research. **Ask a follow-up** opens a new-question form tied to your own previous Study in that thread.

One question is supported per submission. If Minds requires a multi-question plan, the app links to the Study for plan review; it does not execute a question set without review. Include the actual text to test. Private Slack files are not forwarded, and a URL alone is not a promise that its contents reached respondents. The app does not monitor channel history or respond in DMs.

When the `SLACK_VERTEX_*` service-account settings and `SLACK_AGENT_MODEL` are configured, a Gemini agent on Google Cloud Vertex AI interprets the deliberate mention, discovers accessible Audiences/Studies through read-only MCP tools, and prepares a question and exact resource selection for review. It cannot execute research or change the destination. Ambiguous matches remain in the picker. Without the agent configuration, the same native controls work as a guided workflow. Only the deliberate request and bounded resource names/IDs are sent to the configured model; channel history and research results are not sent to that model.

## Register and configure the Slack app

Create a dedicated app from `apps/slack/manifest.json` at <https://api.slack.com/apps>. Replace `https://slack.getminds.ai` with the verified HTTPS deployment origin if a different host is chosen. The production installation entry is https://slack.getminds.ai/slack/install; unlisted pilot distribution is enabled so other workspaces can install for acceptance testing.

The runtime must be reachable before Slack can verify the Events request URL:

- Events and interactivity: `/slack/events`
- Slack installation entry: `/slack/install`
- Slack OAuth callback: `/slack/oauth_redirect`
- Minds connection callback: `/minds/callback`
- Health check: `/health`

Under **Interactivity & Shortcuts → Select Menus**, set **Options Load URL** to `https://slack.getminds.ai/slack/events` and save. This is separate from the interactivity Request URL: without it, Audience and Study pickers return no options even when Minds is connected. The manifest declares this as `settings.interactivity.message_menu_options_url`.

Scopes: `app_mentions:read` receives deliberate mentions; `chat:write` posts results; `commands` enables the message shortcut; `channels:read` and `groups:read` check that the requesting user still belongs to the destination conversation before results are delivered. There are no message-history or file-read scopes. Workspace-level installations are supported; enterprise-wide installations are rejected. Slack bot token rotation is disabled in the manifest; Minds OAuth refresh-token rotation is implemented.

Store the Slack signing secret and client secret in the deployment's secret manager. Do not reuse the internal Sarah/Sunbot app. App configuration access, installation consent and Marketplace review are separate from possessing a bot token.

## Runtime configuration

| Variable | Purpose |
| --- | --- |
| `SLACK_PUBLIC_URL` | HTTPS origin, without a path |
| `SLACK_CLIENT_ID` | Dedicated Slack app OAuth client ID |
| `SLACK_CLIENT_SECRET` | Dedicated app client secret |
| `SLACK_SIGNING_SECRET` | Slack request verification secret |
| `SLACK_STATE_SECRET` | Random installation state secret |
| `SLACK_STORAGE_KEY` | Base64-encoded 32-byte AES-GCM key; retain for restoring encrypted data |
| `SLACK_DATABASE_URL` | TLS PostgreSQL connection for a role scoped to the `minds_slack` schema |
| `SLACK_VERTEX_CREDENTIALS` | Optional dedicated Vertex service-account JSON, injected as a secret |
| `SLACK_VERTEX_PROJECT` | Google Cloud project matching that service account |
| `SLACK_VERTEX_LOCATION` | Explicit supported Vertex region, or `global`; global does not promise EU-only inference |
| `SLACK_AGENT_MODEL` | Explicit Gemini model ID; required when Vertex is configured |
| `PORT` | Listener port; defaults to 3000 |

The service uses the production Minds endpoint `https://getminds.ai/mcp`. Each user connects through Minds OAuth/PKCE; do not install a shared personal Minds API key into the service. Dynamic client registration stores the public client identifier in the encrypted store.

Use a dedicated PostgreSQL role and grant it only ownership/access to this application's schema. Do not use the webapp's database-owner connection as the deployment credential. Schema creation runs at startup; an operator can pre-create the schema and assign its ownership to the service role. Transport must use TLS outside the isolated local test database. The production Supabase connection uses `sslmode=verify-full&sslrootcert=/app/apps/slack/certs/supabase-ca.crt`. The bundled public root certificate comes from <https://supabase-downloads.s3-ap-southeast-1.amazonaws.com/prod/ssl/prod-ca-2021.crt> and expires on 26 April 2031. Tables enable RLS as defense in depth; the dedicated owner performs service operations and no Data API roles receive access.

Build from the repository root:

```sh
npm ci
npm run check
docker build -f apps/slack/Dockerfile -t minds-slack .
```

Run the image with the listed environment variables injected by the deployment platform. It runs as an unprivileged user. The same process serves HTTP and polls durable jobs. Only one request per Slack workspace/user may be active; PostgreSQL leases coordinate workers. The Minds API remains responsible for research execution and account limits.

The manual **Deploy Minds for Slack** workflow is the deployment path. It runs checks, builds an immutable image in the existing DigitalOcean registry, and deploys a dedicated `minds-slack` App Platform service. It refuses to update an app with a different name and runs only from `main`. The dedicated production service was provisioned through this workflow. Its App Platform ID is `8a145111-94d0-434d-b2b3-89086442d527`; use that ID for subsequent deployments. The latest verified runtime revision is `bab3cd7918b303d7123941efb66294f125748c9b` ([successful deployment](https://github.com/minds-ai-co/minds-integrations/actions/runs/34949575497)). On 15 September 2026, the canonical workflow passed all 20 Slack tests and 4 shared-client tests, type checks, dependency audit, Docker build, deployment and public health. DigitalOcean reports this revision ACTIVE, and a fresh private-QA mention received native Minds research controls.

Configure the `slack-production` GitHub Environment with `DIGITALOCEAN_ACCESS_TOKEN` and the secret runtime variables above. Set `SLACK_PUBLIC_URL` as an environment variable. To enable request preparation, supply all four Vertex/model settings: the service-account JSON as a secret, and project, location and model as environment variables. Use a dedicated account limited to Vertex inference permissions. With no Vertex configuration, guided controls remain available and no request-preparation model is called; there is no consumer Gemini API fallback. Provision a database credential restricted to this schema, with TLS enabled, and route the chosen hostname to the App Platform ingress. For the first deployment explicitly select `bootstrap`; afterward supply the returned app ID. The workflow reports the deployed revision and verifies public HTTP health. The same-workspace installation, signed event delivery and native controls have been verified live. On 14 September 2026, real Slack uninstallation and bot-token revocation each cleared all retained workspace records and jobs automatically. Reinstallation restored the encrypted installation and fresh mention controls after each test. Vertex request preparation is now configured in the running revision, using `gemini-3.6-flash` through the explicit global Vertex endpoint. On 15 September 2026, a dedicated service account with only `aiplatform.endpoints.predict` was provisioned and verified, and its configuration was stored in the encrypted vault and GitHub production environment. The actual application draft code passed live `gemini-3.6-flash` calls for new-question and Study-retrieval intents using synthetic MCP resource fixtures. The [release-check fix #20](https://github.com/minds-ai-co/minds-integrations/pull/20) is merged: Slack dependency installation, tests and image building now run independently of the unrelated Shopify locales package. Its dedicated CI job passed. The repository-wide package failure remains visible, but does not prevent a Slack release; provider checks still do not establish connected-user Slack E2E. The deployed app has no consumer Gemini API key. Native Minds connection and a 10-Mind research question now pass live acceptance, including threaded delivery and private Study access. Read-only retrieval and follow-up completed in the same Study without duplicate questions. The deployed app refreshed and rotated its tokens after controlled early local expiry; native Disconnect erased retained user records/jobs and invalidated the old access token. Cross-user/workspace acceptance remains pending; public health is not evidence of those flows. Do not make ad-hoc DigitalOcean app or environment changes.

## Test and verify

`npm run test --workspace @minds/slack` starts a temporary PostgreSQL 17 container bound only to loopback, runs the tests, and removes it. Docker is required. To use an existing isolated database, set `SLACK_TEST_DATABASE_URL` to a loopback URL whose database name is `slack_test`. The suite truncates only its own schema in that test database.

Automated coverage includes signed HTTP requests and stale/invalid signatures, duplicate view submissions, durable execution/restart, lease exclusion, expired mutation leases, ambiguous MCP errors, delivery retries, requester isolation, revoked Minds access, uninstallation, OAuth state/PKCE and refresh rotation. Slack and Minds HTTP calls are simulated in that suite. Shared transport tests cover actual JSON/SSE decoding, tool discovery and error redaction.

Deployment acceptance is a separate check: install the dedicated app, connect a user, select an Audience, run research, receive the threaded result and follow its authenticated Study link. Repeat in an external workspace with a second user. Record the deployment revision and sanitized evidence; do not call mocked tests a live Slack E2E.
