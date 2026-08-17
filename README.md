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
| VS Code | Plan research from selected text, inspect Groups | Buildable alpha |
| Google Workspace | Ask a Group from Sheets rows and write results back | Review package in progress |
| Looker Studio | Read Panel analytics into a report data source | Review package in progress |
| Microsoft Power Platform | Curated REST connector for Panel workflows | Validated package, certification gates pending |
| Zapier | Trigger on Panels, create Panels, preview plans, and retrieve results | Validated private package, developer registration pending |
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
