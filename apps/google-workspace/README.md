# Minds for Google Sheets

Select up to 25 unique open-ended questions in the first column of a range
(at most 250 selected rows). Blank rows keep their positions. The add-on uses
the canonical Minds REST API and the key in Apps Script user properties.

1. **Set Minds API key** verifies the key against `/api/v1/auth/me` before saving.
2. **Prepare research from selected rows** asks for an existing Audience ID,
   then creates one private Study and an exact fixed-question draft. It does
   not start research. Request identities are saved before network mutations;
   uncertain creation and pending preparation reuse the same keys on retry.
3. Open the exact draft link in Minds. Review the Audience, questions and usage,
   explicitly confirm the revision, and start research there. Sheets does not
   confirm or execute a plan. Fixed rows are imported as qualitative questions;
   scales, choice options, branching and other methods use the full Minds UI.
4. When the run completes, select the original range and choose **Load completed
   answers**. The add-on verifies the account, unchanged rows, saved revision,
   run identity, immutable execution questions and completed response artifacts.
   It writes summaries by question index into the adjacent output column after
   explicit overwrite confirmation. Blank question rows produce blank cells.
5. Pending, partial, failed, cancelled or incomplete research leaves existing
   cells unchanged. Retry Load after checking the run in Minds. Status messages
   are shown in the UI, never substituted for answers.

An unchanged selection resumes its saved plan. When prompted, choose No to
prepare a new private Study instead. This replaces local tracking for that
selection without deleting or cancelling existing research. Changing questions
or Audience also prepares a new plan after confirmation. If a draft is edited
in Minds, prepare a new sheet plan so its question-to-row contract can be
reviewed again; stale revisions cannot write results into the old rows.

Only compact account/draft/request identifiers and source checksums are saved
with the range binding. The API key stays in its separate user property;
question text, findings and credentials are not saved in job metadata or logs.
Removing the key does not revoke it in Minds or delete Studies. A different
Minds account cannot import another account's saved sheet plan.

Generated formula-looking text is escaped as literal cell content. The source,
saved job and output checksum are rechecked after overwrite confirmation,
because Apps Script alert dialogs suspend execution and release locks.

Run `node --test apps/google-workspace/Code.test.mjs` from the repository root.
The deterministic Apps Script harness covers one-Study planning, uncertain
retries, pending preparation, exact completed results, account/source/revision
drift, overwrite conflicts, blank rows, formula handling and incomplete runs.
It does not establish native Apps Script deployment or Google review acceptance.

Public help: https://getminds.ai/guide/google-sheets. The public guide and any
installed Apps Script deployment must be updated together before announcing
general availability. Workspace Marketplace still requires an owned Cloud
project, Apps Script deployment, provider OAuth review when required, listing
assets, reviewer access and Marketplace approval.
