# Minds Research for VS Code

Turn product copy, requirements, or a concept brief into a reviewable Minds
research plan without leaving VS Code.

## What it does

- Browse the research Groups available in your Minds account.
- Select text in an editor and create a structured study-plan draft for an
  existing Panel.
- Open Groups and plan results as Markdown documents that you can inspect,
  compare, and save locally if you choose.

The extension never executes a multi-question study. It calls the planning
workflow, displays the resulting draft, and leaves the consequential run for an
explicitly confirmed workflow in Minds.

## Setup

1. Create an API key in [Minds API settings](https://getminds.ai/?settings=api).
2. Run `Minds: Set API Key` from the Command Palette.
3. The extension validates the key before storing it in VS Code SecretStorage.
4. Run `Minds: Browse Research Groups`, or select text and choose
   `Minds: Plan Research for Selected Text` from the editor context menu.

## Commands

| Command | Result |
| --- | --- |
| `Minds: Set API Key` | Validates and stores a Minds API key in SecretStorage. |
| `Minds: Clear API Key` | Deletes the stored key from SecretStorage. |
| `Minds: Browse Research Groups` | Opens the available Groups as Markdown. |
| `Minds: Plan Research for Selected Text` | Creates a reviewable plan draft from the explicit selection. |

## Data and security

- The API key is stored only in VS Code SecretStorage.
- Authenticated requests are sent only to `https://getminds.ai/mcp`.
- Editor content is transmitted only when you explicitly select text and run
  the planning command.
- The selected text is limited to 20,000 characters.
- The extension has no deletion or study-execution command.
- The extension contains no telemetry or advertising SDK.

See the [Minds privacy policy](https://getminds.ai/privacy) and
[Minds MCP setup documentation](https://getminds.ai/mcp/setup).

## Support

Use [Minds support](https://getminds.ai/contact) for product and account help.
For reproducible extension defects, open an issue in the
[public integration repository](https://github.com/minds-ai-co/minds-integrations/issues).
