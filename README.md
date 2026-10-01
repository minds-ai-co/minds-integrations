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
| Google Workspace | Ask a Group from Sheets rows and write results back | Review package in progress |
| Looker Studio | Read Panel analytics into a report data source | Review package in progress |
| Microsoft Power Platform | Curated REST connector for Panel workflows (OAuth 2.0 with PKCE) | Validated package, OAuth client and certification gates pending |
| Zapier | Trigger on Studies, create and find Studies, preview text/creative plans, and retrieve summaries | App 246865; private releases; public promotion needs 3 users with live Zaps |
| Make | Watch, create, get and search Studies, preview research plans for review, read summaries | App minds-0q4qep v1.0.0 published on eu1.make.com (developers@getminds.ai); public app review requested 2026-10-01 |
| Canva | Export design, review and confirm research, return and insert exact-run findings | Complete native production workflow verified; public marketplace review pending |
| Figma | Selected-node creative review and findings import | Development plugin; registration, host testing and review pending |
| Adobe Express | Approved current-page creative review and completed findings | Private 0.1.10 complete native production workflow verified; public 0.1.11 draft validated, review pending |
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
