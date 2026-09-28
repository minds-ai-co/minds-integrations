# Minds Market Research

Minds is a synthetic market research platform. Its Minds are simulated
respondents built from real audience data. Use this connector to create Studies, attach
Audiences, preview research plans, and read Study summaries from your flows,
apps, and agents.

## Publisher: Minds

## Prerequisites

You need a Minds account. Sign up at [getminds.ai](https://getminds.ai). The
connector acts on the Studies, Audiences, and Minds that your account can
access.

## Supported Operations

### List Studies

List the Studies you own, newest first, with their Audiences and Minds. Use
`limit` and `offset` to page through the results.

### Create a Study

Create a Study with a name. You can attach existing Audiences by ID, or create
new Audiences from existing Minds in the same step.

### Get a Study

Read one Study with its Audiences, Minds, and messages.

### Preview a Study research plan

Describe what you want to learn and receive a proposed research plan: the
objective, the questions, and the response formats. The preview does not run
the research and does not contact any respondents. Revise a draft by sending
its draft plan ID, revision, and a refinement.

### Get a Study summary

Read the persisted summary of a Study, with its revision, message coverage, and
whether newer messages are not yet covered.

## Obtaining Credentials

The connector uses OAuth 2.0 with PKCE. When you create a connection, you sign
in with your Minds account on getminds.ai and approve access. No API key or
client secret is needed.

The connector requests these scopes:

- `flows:read`: read your Studies, their messages, and summaries.
- `flows:write`: create Studies and preview research plans.
- `sparks:read`: read the Minds and Audiences attached to your Studies.

## Getting Started

1. Create a connection and sign in with your Minds account.
2. Add **List Studies** to a flow to see your existing Studies, or **Create a
   Study** to start a new one. Pass Audience IDs to attach an audience.
3. Add **Preview a Study research plan** with the Study ID and a research
   request, for example: "Which of two packaging designs do eco-conscious
   shoppers prefer, and why?"
4. Add **Get a Study summary** to read the summary once the Study has results.

## Known Issues and Limitations

- The connector does not run research or delete Studies. Run confirmed plans and
  delete Studies in the Minds app.
- **Get a Study summary** returns an empty `summary` until the Study has enough
  results and a summary has been generated in the Minds app.
- Access tokens expire after one hour and are refreshed automatically.

## Frequently Asked Questions

### Does previewing a research plan use any respondents?

No. The preview only proposes a plan. Nothing is sent to respondents until you
confirm and run the plan in the Minds app.

### Where can I get help?

Contact [Minds Support](https://getminds.ai/contact).

## Deployment Instructions

Use the [Power Platform connector CLI](https://learn.microsoft.com/connectors/custom-connectors/paconn-cli)
or import `apiDefinition.swagger.json` and `apiProperties.json` as a custom
connector. The Minds OAuth client accepts only registered redirect URIs, so
contact Minds Support to register the redirect URI shown on the connector's
Security tab before you create a connection.
