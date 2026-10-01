# Minds

[Minds](https://getminds.ai) runs research with AI Minds: synthetic respondents grounded in real audience data. This app lets Make scenarios create Studies, draft research plans and read Study summaries.

Research never runs from Make. **Preview a research plan** saves a draft and returns a review link; a person opens it in Minds and confirms the plan before anything runs.

## Connect Minds

1. In Minds, open [API settings](https://getminds.ai/?settings=api) and create an API key. It starts with `minds_`.
2. In Make, add a Minds module, click **Create a connection** and paste the key.

## Modules

| Module | What it does |
| --- | --- |
| Watch new studies | Triggers when a new Study is created in your Minds account. |
| Create a study | Creates a Study and optionally attaches existing Audiences. Does not run research. |
| Get a study | Returns a Study by its ID. |
| List studies | Returns Studies, most recently updated first. Use a Make filter to pick Studies by name. |
| Get a study summary | Returns the saved aggregate summary of a Study. `Has summary` is false until one exists. |
| Preview a research plan | Drafts a research plan for a Study, optionally with text or a file or webpage URL to react to, and returns a **Review and run in Minds** link. |
| Make an API call | Sends an authorized request to any [Minds API](https://getminds.ai/docs/api) endpoint. |

## Example scenario

Google Sheets (new row with a research question) → Minds **Create a study** → Minds **Preview a research plan** → Slack (send the review link to the team).

## Support

[Minds API documentation](https://getminds.ai/docs/api) · [Contact](https://getminds.ai/contact)
