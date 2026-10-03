# Compare two messages with Minds

This workflow compares two supplied messages with an existing synthetic Audience.
It prepares a reviewable Study, runs only after confirmation, preserves progress,
and can continue after the buyer completes subscription or response-credit checkout.
Research uses the account's existing plan and credits. Synthetic findings support
hypothesis testing and do not replace representative research with human respondents.

## Connect and prepare

Use Node 22 or newer. Build the shared client from this repository:

```sh
npm ci --ignore-scripts --workspace @minds/mcp-client --include-workspace-root
npm run build --workspace @minds/mcp-client
```

Provide `MINDS_API_KEY` through your credential manager. Do not put credentials in
command arguments, the brief, purchase files or checkpoints. The client authenticates
only to `https://getminds.ai`, rejects redirects, and checks that the checkpoint
belongs to the same authenticated account on every operation.

Select an existing Audience with `list_audiences` in your connected assistant.
For a new target population, use `create_audience_from_brief` and wait for its
creation/training progress before starting this workflow. Review Audience size and
the current account limits first; this example does not create an Audience automatically.

Save a private `brief.json`:

```json
{
  "audienceId": "YOUR_EXISTING_AUDIENCE_ID",
  "objective": "Compare clarity and credibility for our product launch.",
  "messages": [
    "Spend less time preparing reports.",
    "Turn research into a decision your team can act on."
  ]
}
```

```sh
node examples/message-comparison.mjs prepare /private/comparison.json /private/brief.json
```

The Study is private. Read the returned exact draft review, including respondent-visible
messages and questions, evidence policy, Audience, estimated usage when supplied,
and limitations. Planning does not execute the Study. Review the plan before accepting:

```sh
node examples/message-comparison.mjs run /private/comparison.json DRAFT_ID REVISION
node examples/message-comparison.mjs poll /private/comparison.json
```

The ID and revision must match the reviewed draft. Poll returns the exact run's
progress and evidence artifacts. Only `completed` means the full run completed;
`incomplete` means partial/failed results. Present original responses and limitations
alongside the comparison. Generate the Study summary after successful completion:

```sh
node examples/message-comparison.mjs report /private/comparison.json
```

This uses the existing Study analysis service and returns its Markdown and evidence
blocks. Keep the exact run's artifacts alongside that Study-level summary. You can
also export it through the existing `export_study` tool.

## Purchase and continue

If research reports `needs_purchase`, read the current account's catalog:

```sh
node examples/message-comparison.mjs catalog /private/comparison.json
```

Show the buyer the eligible product, current price/currency, recurrence or credit
allowance, Team seat quantity when relevant, and that final tax/discounts are confirmed
on Stripe. The buyer chooses and authorizes the purchase. Existing subscribers changing
their plan use Minds billing settings. Never silently choose a price, accept legal
terms, start a trial or approve a payment on the buyer's behalf.

Save the buyer-approved selection in a private `purchase.json`, using a returned
price ID. For a credit pack:

```json
{
  "buyerApproved": true,
  "input": { "kind": "response_credits", "priceId": "price_FROM_CURRENT_CATALOG" }
}
```

For a subscription, input uses `kind: "subscription"`, the returned `priceId`,
`planType: "premium"` or `"team"`, and the buyer's explicit
`legalAcceptance: { "termsAccepted": true, "withdrawalConsent": true }`.
Also supply the explicit choice `startTrial: false` for immediate purchase, or
`startTrial: true` only for a buyer-selected eligible Individual trial. Omission
is refused before any checkout request; the existing API otherwise may offer a trial.
Team purchases require the buyer-approved `quantity` and `startTrial: false`.
Minds validates the current seat minimum. Preserve the approved input.

```sh
node examples/message-comparison.mjs checkout /private/comparison.json /private/purchase.json
```

Show the returned unmodified Stripe URL to the buyer. The saved checkout uses one
stable purchase key. Repeating the command reuses the existing session; changing the
approved purchase is refused. Checkpoints exclude the checkout URL and API credential.

After the buyer completes checkout and confirms continuing the saved research:

```sh
node examples/message-comparison.mjs resume /private/comparison.json --confirm
node examples/message-comparison.mjs poll /private/comparison.json
```

An open, processing or canceled checkout cannot start research. Checkout completion
can include a trial and is not itself proof of a paid transaction or active access.
Minds' research server checks the webhook-applied entitlements; while activation is
pending, retry the same checkpoint. A stopped run resumes in place, preserving answers
already collected. Once running, another resume does not execute it again.

If checkout expires/cancels or the server returns an uncertain failure, inspect the
existing purchase in Minds before choosing another purchase. Do not replace the saved
key to force a second checkout. A lost checkpoint requires reconciliation rather than
starting the same purchase again. Keep the private checkpoint directory outside the
repository; it contains your messages, draft and account IDs. The CLI writes atomically
with mode 0600 and uses a single-writer lock. After a crash, confirm the process stopped
before removing its `.lock` file.

## Integrate into an agent host

`MessageComparisonJourney` takes research/billing clients and a durable `save` callback.
Persist the checkpoint before returning an action to the agent. Show draft review and
buyer approval in the host UI, then pass the exact confirmed values. Serialize operations
per checkpoint. Host support for external purchase orchestration must be checked;
the standard ChatGPT research app does not expose digital purchase tools.

This example uses hosted Checkout. MPP/x402 payment of existing eligible invoices is
a separate flow and does not create a new research purchase.

Canonical guides: [MCP setup](https://getminds.ai/mcp/setup),
[agent billing and payment](https://getminds.ai/docs/api/agents),
[live API schema](https://getminds.ai/openapi.json).

## Verification

Automated tests cover purchase approval, draft confirmation, persistent retries,
account binding, pending payment, delayed access, in-place resume and incomplete results.
Passing those tests does not certify a real card payment, signed-webhook activation,
or acceptance in a particular assistant host. Record those separately before claiming
an end-to-end customer payment demonstration.
