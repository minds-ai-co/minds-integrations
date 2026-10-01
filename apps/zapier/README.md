# Minds for Zapier

Use Minds Studies in automation workflows while keeping a human review step before any research runs.

The integration uses the canonical Minds Study API (`/api/v1/studies`). The legacy `/api/v1/panels` routes are deprecated aliases and are not used.

| Type | Key | What it does |
| --- | --- | --- |
| Trigger | `new_study` | Fires when a new Study appears in the Minds account. |
| Trigger (hidden) | `audience_list` | Feeds the Audience dropdown of Create Study. |
| Action | `create_study` | Creates a Study and optionally attaches existing Audiences. |
| Action | `preview_research_plan` | Drafts a reviewable research plan. Nothing runs until someone confirms it in Minds. |
| Search | `find_study` | Finds a Study by ID or exact name. Also offered as Find or Create Study. |
| Search | `get_research_results` | Returns only the exact saved draft’s completed durable run, artifacts and calculations; unfinished or partial runs find nothing. |
| Search | `get_study_summary` | Returns the saved aggregate summary; finds nothing until one exists. |

Preview Research Plan returns both the saved draft ID and its review URL. Map the same Study and draft IDs into Get Completed Research Results after a person opens that URL and explicitly confirms the reviewed revision in Minds. The aggregate-summary search is a separate operation and does not establish completion of the imported source event.

Version 1.2.0 is uploaded privately to the existing app 246865. Marketplace publication still requires three genuine users with live Zaps and provider review; see [the current candidate receipts](../creative-marketplaces/LAUNCH.md).

The integration deliberately does not expose Study deletion or study execution. A user reviews and confirms consequential research work in Minds.

## Authentication

Create an API key in Minds and enter it as a password-protected Zapier connection field. Requests are sent only to `https://getminds.ai/api/v1` with Bearer authentication. The connection test calls `GET /auth/me`.

## Development

Use Node.js 22 or newer (Zapier runs the integration on Node.js 22), then run:

```bash
npm install
npm test --workspace minds-zapier-integration
npm run validate --workspace minds-zapier-integration
```

Live smoke test against production (read-only unless `--write`, which creates a throwaway Study, previews a plan on it and deletes it; use a test account's key):

```bash
cd apps/zapier
MINDS_API_KEY=... npm run smoke -- --write
```

Registering, pushing and publishing are described in [RELEASE.md](RELEASE.md).

Product documentation: [Minds API documentation](https://getminds.ai/docs/api)

Support: [Minds contact](https://getminds.ai/contact)
