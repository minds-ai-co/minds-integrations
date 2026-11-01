# Minds for Adobe Express: setup and review

Minds provides directional synthetic research using AI personas. It does not
measure live ad conversions or replace representative human fieldwork.

## Account and study setup

1. Create or sign into a Minds account at https://getminds.ai. Review available
   access at https://getminds.ai/pricing. Adobe Express Premium is separate from
   Minds access; neither subscription includes the other.
2. In Minds, create an Audience that describes the customers whose perspective
   you want to explore. Review its composition and grounding. Create a Study
   with that Audience, or use an existing Study you own.
3. Open the Minds add-on in Adobe Express. Choose **Connect Minds**, complete
   browser sign-in and consent, return to the add-on, then **Refresh Studies**.
   The connection label changes from waiting to connected after verification.
4. Choose the Study and enter what you want to learn. Select the Study language.

## Material, plan and execution

5. Open the Adobe Express page you want to review. Choose **Select material to
   review**. Only that current page is exported as PNG. This selection alone
   does not upload it to Minds. Export approval restrictions are respected.
6. A free Adobe Express user selecting Premium artwork receives Adobe's native
   upgrade dialog. Declining or cancelling it exports nothing. The add-on does
   not send preview-only Premium renditions to Minds.
7. Inspect the material and select the transfer-consent checkbox. Choose
   **Draft research plan** to upload the approved page and prepare a draft.
   **Cancel preparation** stops this panel's wait and prevents late results
   from replacing its state. A server-side draft may still finish; retrying
   the unchanged request retrieves the same preparation. This action does not
   start research.
8. Choose **Open Study in Minds**. Review that exact draft, its page, Audience,
   questions and expected usage. Make any needed changes and explicitly
   confirm the saved revision before starting research. The add-on does not
   automatically confirm or execute the plan.

## Findings and disconnection

9. Wait for the run to finish in Minds. Return to the add-on and choose **Load
   findings**. It loads findings only for this saved draft's completed run;
   incomplete, failed or mismatched research is not substituted with an older
   Study summary. Read the results in the panel and open the Study for detail.
   This Express version does not insert findings into the canvas.
10. Choose **Disconnect** to remove the add-on connection and clear local
    selection, consent, draft and results. The label becomes **Not connected**
    and Disconnect is disabled. This does not delete the Study in Minds or
    modify the Adobe Express design.

The question hint is placeholder text, not a prefilled research request.
Instructional labels are not selectable; entered requests and research results
remain selectable for normal editing and copying.

Public help: https://getminds.ai/guide/integration-adobe-express
Support: developers@getminds.ai. Privacy: https://getminds.ai/privacy.
Terms: https://getminds.ai/terms.

## Review evidence

The 6 October findings are addressed by the panel cancellation/state changes,
the documented Adobe Premium entitlement/upgrade APIs, and this complete
workflow guide. Deterministic tests cover cancellation with late transport
success, retry identity, disconnected controls, premium cancellation and a
bounded entitlement-race retry. Build/test success is separate from native
Adobe validation and public review approval; record those provider receipts
after uploading the candidate.
