# Minds integrations

Official integrations for [Minds](https://getminds.ai), the synthetic market
research platform.

This repository keeps platform adapters thin. Product behavior lives in the
Minds API and MCP server. Shared transport behavior lives in
`packages/mcp-client`. Each marketplace package exposes a useful native
workflow without creating a second research contract.

## Current packages

| Surface | Workflow | State |
| --- | --- | --- |
| Shopify | Product purchase-barrier Studies | Restricted development pilot deployed; installed-browser acceptance pending |
| VS Code | Plan research from selected text, inspect Groups | Buildable alpha |
| Google Workspace | Prepare one exact Study from Sheets rows; import only its confirmed, completed answers | Hosted repair and native consent/key/draft/unconfirmed-result checks passed 1 Nov; completed import covered by automated tests, not a new paid native run |
| Looker Studio | Read Panel analytics into a report data source | Review package in progress |
| Microsoft Power Platform | Curated REST connector for Panel workflows (OAuth 2.0 with PKCE) | Validated package, OAuth client and certification gates pending |
| Zapier | Trigger on Studies, create/find Studies, preview plans and retrieve exact completed results | Private 1.3.0 uploaded with safe pending-preparation retries; native cloud checks passed; full editor acceptance and 3 genuine users still required |
| Make | Watch, create, get and search Studies, preview research plans for review, read summaries | App minds-0q4qep v1.0.0 published on eu1.make.com (developers@getminds.ai); public app review requested 2026-10-01 |
| Canva | Export design, review and confirm research, return and insert exact-run findings | Version 2 requires five review fixes; version 3 is a native draft awaiting exact feedback; historical native acceptance is separate |
| Figma | Selected-node creative review and findings import | Community approved 7 Oct and OAuth approved 8 Oct; complete native workflow acceptance remains pending |
| Adobe Express | Approved current-page creative review and completed findings | Public 0.1.12 passed Adobe package verification and was resubmitted 1 Nov; public approval pending; historical native workflow acceptance belongs to private 0.1.10 |
| Slack | Minds research agent in Slack | Production restored and permanent database-pool recovery deployed 1 Nov; health and regression checks pass; live client thread round trip not repeated |
| ComfyUI | Minds synthetic research in ComfyUI | 0.2.0 active; 0.2.1–0.2.3 flagged; six informational findings investigated and manual review followed up |
| Adobe GenStudio | Selected email experience copy review | Development validation extension; Adobe entitlement/deployment and review pending |
| Atlassian Forge | Review Jira or Confluence content | Architecture gate |
| HubSpot | Research CRM segments and attach summaries | Pilot gate |

The existing Microsoft MCP package, GitHub Action, Raycast contribution, and
MCP registry artifacts stay in their canonical repositories. They are linked
here but are not duplicated.

## Safety model

- Authenticated requests are pinned to `https://getminds.ai`.
- API keys are stored only in the host platform's secret or user-property
  facility.
- Planning is the default for multi-question research.
- A consequential run must be explicitly confirmed in the host UI.
- No integration can mint or revoke the credential authenticating itself.

## Development

```bash
npm install
npm run check
npm run build
```

Canonical MCP documentation: <https://getminds.ai/mcp/setup>

## Message comparison with purchase and resume

[Run the guided message-comparison workflow](docs/message-comparison.md) to prepare
a private Study over an existing Audience, review and confirm its questions, and
retrieve the results. If the account needs additional access, the workflow can start
buyer-approved hosted Checkout and continue the same research after access activates.
The runnable example preserves the draft, purchase and run across restarts.
