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
| VS Code | Plan research from selected text, inspect Audiences | Buildable alpha |
| Google Workspace | Ask an Audience from Sheets rows and write results back | Review package in progress |
| Looker Studio | Read Panel analytics into a report data source | Review package in progress |
| Microsoft Power Platform | Curated REST connector for Panel workflows (OAuth 2.0 with PKCE) | Validated package, OAuth client and certification gates pending |
| Zapier | Trigger on Studies, create and find Studies, preview plans, and retrieve summaries | Validated and live-smoked package, Zapier registration pending |
| Make | List, create, and read Panels, preview plans, and retrieve results | Source-controlled custom app prototype |
| Canva | Creative-test workflow | Architecture gate |
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
