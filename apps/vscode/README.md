# Minds Research for VS Code

Turn selected product copy, requirements, or a concept brief into a reviewable
Minds study plan without leaving VS Code.

The extension does not execute a multi-question study. It calls
`plan_panel_study`, shows the draft in a new editor, and leaves execution for an
explicitly confirmed workflow in Minds.

## Commands

- `Minds: Set API Key`
- `Minds: Browse Research Groups`
- `Minds: Plan Research for Selected Text`

Create a key in [Minds settings](https://getminds.ai/settings/api-keys). The key
is stored in VS Code SecretStorage and sent only to `https://getminds.ai/mcp`.
