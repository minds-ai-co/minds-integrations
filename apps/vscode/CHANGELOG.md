# Changelog

## Unreleased

- Call the canonical MCP tools `list_audiences` and `plan_study_questions`
  instead of the retired `list_groups` and `plan_panel_study` aliases.
- Rename `Minds: Browse Research Groups` to `Minds: Browse Audiences`
  (`minds.listAudiences`) and ask for a Study instead of a Panel.

## 0.1.0

- Add secure API-key validation and storage.
- Add API-key removal.
- Add Audience browsing.
- Add reviewable research-plan creation from explicit editor selections.
- Keep study execution and deletion outside the extension.
