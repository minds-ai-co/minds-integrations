# Google Workspace Marketplace — Store Listing (canonical copy)

Console: APIs & Services → Google Workspace Marketplace SDK → Store Listing
Project: Open Claw (`gen-lang-client-0496060373`) · App Id `656513180615`
Script: `1ryZd1ilSxAdQgos0fX9Ivb1kwy7pXNAMVXvbc0RAMZyi0WLpKO-exKNm`

> The console draft CANNOT be saved until a Screenshot is uploaded. Everything
> typed into the form is lost on reload until then. This file is the source of
> truth — re-enter from here if the draft is ever empty again.

## App Details — English

**Application Name**

    Minds

(Plain "Minds", not "Minds AI" per brand policy, and without "for Google Sheets"
to avoid a Google-trademark rejection in the app title. `createAddonMenu()` uses
the published name, so the in-product menu renders as Extensions → Minds.)

**Short Description** (86 chars)

    Ask your Minds groups questions from a spreadsheet and get answers in the next column.

**Detailed Description**

    Minds brings AI research panels into your spreadsheet.

    Write your questions down a column, select those rows, and ask a Minds Group. Every answer is written back to the column right next to your questions, so you can run and compare a whole question set without leaving Sheets.

    What you can do
    - Ask any existing Minds Group a question straight from a selected range
    - Run up to 25 questions in a single pass
    - Keep questions and answers side by side for analysis, charting and sharing
    - Confirm before each run, including a warning when output cells would be overwritten

    How to get started
    1. Choose Extensions > Minds > Set Minds API key and paste a key from your Minds account
    2. Type your questions into a column
    3. Select those rows and choose Extensions > Minds > Ask a Group from selected rows
    4. Enter the ID of the Group you want to ask

    Your API key is stored in your own Apps Script user properties. It is not shared with other people who open the same spreadsheet, and the add-on only reads the spreadsheet you are working in.

    A Minds account and API key are required. Create one at getminds.ai.

## Pricing / Category

| Field    | Value                             |
|----------|-----------------------------------|
| Pricing  | Free of charge with paid features |
| Category | Marketing and Analytics           |

Rationale: the add-on itself is free; running questions consumes Minds plan
allowance (`askGroupFromSelection` warns "may consume plan allowance").

## Graphic Assets

All generated from `webapp/public/images/app-icon.png` (1024x1024) and
`logo-full.png` (311x51), sRGB TrueColor PNG24, in this directory:

| Slot                          | File                             |
|-------------------------------|----------------------------------|
| Application Icon 32x32 *      | `minds-icon-32.png`              |
| Application Icon 48x48        | `minds-icon-48.png`              |
| Application Icon 96x96        | `minds-icon-96.png`              |
| Application Icon 128x128      | `minds-icon-128.png`             |
| Application Card Banner 220x140 | `minds-card-banner-220x140.png` |
| Screenshot *                  | **MISSING — blocks Save Draft**  |

Regenerate with the commands in `regenerate-assets.sh`.

## Support Links

All verified live (2026-08-21). Note `/contact` and `/support` do NOT exist —
they silently redirect to the homepage.

| Field                | URL                                      |
|----------------------|------------------------------------------|
| Terms of Service URL | https://getminds.ai/legal/terms          |
| Privacy Policy URL   | https://getminds.ai/legal/dataprivacy    |
| Setup URL            | https://getminds.ai/api                  |
| Admin Config URL     | (empty)                                  |
| Support URL          | https://getminds.ai/legal/imprint        |
| Help URL             | https://getminds.ai/faq/overview         |
| Report Issue URL     | (empty)                                  |

**Post Install Tip**

    Open Extensions > Minds > Set Minds API key to connect your account, then select your question rows and choose Ask a Group from selected rows.

## Distribution

- All Regions: checked

## Remaining gates (user-only)

1. **Screenshot** — needs the add-on run end-to-end in Sheets. The OAuth grant
   is no longer a blocker (see "Authorization bug" below); what remains is a
   Minds API key entered through the add-on's own prompt plus a real Group ID.
2. **SUBMIT FOR REVIEW** — includes the EEA Trader Status legal declaration.
3. **App Visibility = Public** — irreversible once saved. Currently the OAuth
   consent screen is still in Testing ("The user type is testing but app is not
   unlisted"), which must be published before a public listing can go live.

## Authorization bug — root cause and fix (2026-08-21)

Clicking through "Authorization required" failed with:

    Error 400: invalid_request
    AccessControlService.AuthorizeAccess; Cannot parse app_script_properties

Root cause: the manifest's `urlFetchWhitelist` entry was `https://getminds.ai/mcp`.
Google requires each whitelist entry to be an HTTPS **prefix ending in `/`**;
without the trailing slash the add-on properties blob fails to parse, and the
OAuth request is rejected before the consent screen ever renders. It is NOT a
permissions or scope problem.

Fix: `"urlFetchWhitelist": ["https://getminds.ai/"]`.

Do NOT "fix" this by writing `https://getminds.ai/mcp/` — prefix matching would
then fail for the actual endpoint `https://getminds.ai/mcp`, breaking UrlFetch
at runtime. The domain root is both valid and correct.

Verified: after the change the add-on runs and reaches its own
"Minds Group / Enter an existing Group ID" prompt.

Related, still unconfigured (needed before public launch, not for the test):
Authorized domains on the Open Claw OAuth consent screen is empty — `getminds.ai`
should be registered there, along with home page / privacy / ToS links.

## Async answers fix (2026-08-21)

`ask_group` only STARTS a panel — it returns "Question submitted to the panel"
and nothing else. The original `askGroupFromSelection` wrote that acknowledgement
straight into the sheet, so column B filled with submission receipts, never
answers. The listing copy above ("Every answer is written back...") would have
been false as shipped.

`get_panel_status` is the retrieval half. Verified shape on a live panel:

    structuredContent.recentResults[0] = {
      question, status: "completed", totalMinds, answeredCount,
      answeredMinds: [...],
      outputData: {
        type: "qualitative",
        groups: [{ group, groupId, value: "Resistance to change",
                   answers: [], distribution: {...}, alignmentScore, displayMindCount }],
        summary: "**Performer resistance slows AI adoption** — ..."
      }
    }

`askGroupFromSelection` now:
1. submits every question first (Minds answer in parallel), collecting `panelId`
   from `structuredContent.panelId`, falling back to the `flowId=` link;
2. polls `get_panel_status` every 5s, resolving rows from `recentResults` /
   `failedQuestions`;
3. writes `outputData.groups[].value` (falling back to `summary`); rows still
   running get a live panel link rather than a silent blank.

Polling stops at 4.5 min because Apps Script caps menu-driven executions at 6
minutes — results always get written back instead of the run dying mid-batch.

Per-Spark answers are also available (`outputData.groups[].answers`,
`answeredMinds`) if the sheet should show each Mind separately rather than the
group aggregate. Not implemented.

NOTE: the public MCP surface (getminds.ai/mcp) exposes 18 tools and none are
Spark-level — there is no `ask_spark` / `list_sparks` / `chat_with_spark`.
Targeting an individual Spark would need a new tool exposed in webapp first.

## Current blocker (2026-08-21)

`ask_group` returns `Error asking group: Unauthorized`. The key stored in the
add-on's user properties does not own group `9d726c01-da25-45ce-bc61-1572811b5ffc`.
The key in `webapp/.env.local` DOES own it (verified twice against the live MCP:
100 groups listed, ask_group accepted, get_panel_status returned answers).
Resolve by storing that key, or by using a Group ID from whichever account the
stored key belongs to.
