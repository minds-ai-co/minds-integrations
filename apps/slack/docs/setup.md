# Minds for Slack setup

This package implements an HTTP Slack app. It is not a published Slack Marketplace listing. A deployment and a dedicated Slack app registration are required before customers can install it.

## Use Minds in a conversation

1. Install the app into your workspace and invite `@minds` to the channel.
2. Mention `@minds` with the question and proposal text, or select a message and choose **Ask Minds**.
3. Choose **Connect Minds** and authorize your own Minds account. Workspace installation never gives other Slack users access to the installer's account.
4. Choose **Ask an Audience**, select an exact Audience, and review the question and stimulus. Approve sharing findings in the originating conversation, then choose **Run question**. This consumes your account's research allowance.
5. The app posts the completed synthetic responses and an **Open Study** link in the thread. The Study retains its existing Minds permissions; posting the card does not enable public link sharing.
6. Choose **Read a Study** to retrieve existing findings without launching research. **Ask a follow-up** opens a new-question form tied to your own previous Study in that thread.

One question is supported per submission. If Minds requires a multi-question plan, the app links to the Study for plan review; it does not execute a question set without review. Include the actual text to test. Private Slack files are not forwarded, and a URL alone is not a promise that its contents reached respondents. The app does not monitor channel history or respond in DMs.

When `SLACK_AGENT_API_KEY` and `SLACK_AGENT_MODEL` are configured, a Gemini agent interprets the deliberate mention, discovers accessible Audiences/Studies through read-only MCP tools, and prepares a question and exact resource selection for review. It cannot execute research or change the destination. Ambiguous matches remain in the picker. Without the agent configuration, the same native controls work as a guided workflow. Only the deliberate request and bounded resource names/IDs are sent to the configured model; channel history and research results are not sent to that model.

## Register and configure the Slack app

Create a dedicated app from `apps/slack/manifest.json` at <https://api.slack.com/apps>. Replace `https://slack.getminds.ai` with the verified HTTPS deployment origin if a different host is chosen. That hostname is a proposed deployment address, not evidence that a service exists there.

The runtime must be reachable before Slack can verify the Events request URL:

- Events and interactivity: `/slack/events`
- Slack installation entry: `/slack/install`
- Slack OAuth callback: `/slack/oauth_redirect`
- Minds connection callback: `/minds/callback`
- Health check: `/health`

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
| `SLACK_AGENT_API_KEY` | Optional Gemini API credential for natural-language request preparation |
| `SLACK_AGENT_MODEL` | Explicit Gemini model ID; required when the agent key is set |
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

The manual **Deploy Minds for Slack** workflow is the deployment path. It runs checks, builds an immutable image in the existing DigitalOcean registry, and deploys a dedicated `minds-slack` App Platform service. It refuses to update an app with a different name and runs only from `main`. No Slack service has been provisioned by adding this workflow.

Configure the `slack-production` GitHub Environment with `DIGITALOCEAN_ACCESS_TOKEN` and the secret runtime variables above. Set `SLACK_PUBLIC_URL` and `SLACK_AGENT_MODEL` as environment variables. Provision a database credential restricted to this schema, with TLS enabled, and route the chosen hostname to the App Platform ingress. For the first deployment explicitly select `bootstrap`; afterward supply the returned app ID. The workflow reports the deployed revision and verifies public HTTP health. Complete actual Slack installation/research tests separately. Do not make ad-hoc DigitalOcean app or environment changes.

## Test and verify

`npm run test --workspace @minds/slack` starts a temporary PostgreSQL 17 container bound only to loopback, runs the tests, and removes it. Docker is required. To use an existing isolated database, set `SLACK_TEST_DATABASE_URL` to a loopback URL whose database name is `slack_test`. The suite truncates only its own schema in that test database.

Automated coverage includes signed HTTP requests and stale/invalid signatures, duplicate view submissions, durable execution/restart, lease exclusion, expired mutation leases, ambiguous MCP errors, delivery retries, requester isolation, revoked Minds access, uninstallation, OAuth state/PKCE and refresh rotation. Slack and Minds HTTP calls are simulated in that suite. Shared transport tests cover actual JSON/SSE decoding, tool discovery and error redaction.

Deployment acceptance is a separate check: install the dedicated app, connect a user, select an Audience, run research, receive the threaded result and follow its authenticated Study link. Repeat in an external workspace with a second user. Record the deployment revision and sanitized evidence; do not call mocked tests a live Slack E2E.
