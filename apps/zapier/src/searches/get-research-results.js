const { request, toZapierRecord, unwrapData } = require("../client");
const { studyIdField } = require("../study-fields");

const perform = async (z, bundle) => {
  const { studyId, draftPlanId } = bundle.inputData;
  const preview = unwrapData(await request(z, {
    method: "POST", path: `/studies/${encodeURIComponent(studyId)}/research-plans/preview`,
    body: { loadLatest: true, draftPlanId },
  }));
  if (preview.draftPlanId !== draftPlanId) throw new Error("Minds returned a different research draft.");
  if (preview.draftStatus !== "confirmed") return [];
  const runId = preview.runId || draftPlanId;
  const response = await request(z, {
    method: "GET", path: `/studies/${encodeURIComponent(studyId)}/research-runs/${encodeURIComponent(runId)}`,
    skipThrowForStatus: true,
  });
  if (response.status === 404) return [];
  response.throwForStatus();
  const run = unwrapData(response.data);
  if (run.runId !== runId) throw new Error("Minds returned a different research run.");
  // Queued, partial, failed and cancelled runs are never reported as complete.
  if (run.status !== "completed") return [];
  return [toZapierRecord({ ...run, studyId, draftPlanId,
    reviewUrl: `https://getminds.ai/?${new URLSearchParams({ studyId, draftPlanId })}` }, runId)];
};

module.exports = {
  key: "get_research_results",
  noun: "Research Results",
  display: { label: "Get Completed Research Results", description: "Finds results for an exact saved research draft after someone confirms and runs it in Minds. Finds nothing while it is incomplete." },
  operation: {
    perform,
    inputFields: [studyIdField(), { key: "draftPlanId", label: "Draft Plan ID", type: "string", required: true,
      helpText: "Map the Draft Plan ID from Preview Research Plan. Review and run that draft using its Review and Run in Minds link first." }],
    sample: { id: "75e10cab-cf1a-4dd2-8470-c71b8c450d90", runId: "75e10cab-cf1a-4dd2-8470-c71b8c450d90", draftPlanId: "75e10cab-cf1a-4dd2-8470-c71b8c450d90", studyId: "943f9d7c-aab6-4a78-ab67-a7827e1358c9", status: "completed", artifacts: [], calculations: [] },
    outputFields: [{ key: "id", label: "Run ID" }, { key: "runId", label: "Run ID" }, { key: "draftPlanId", label: "Draft Plan ID" }, { key: "studyId", label: "Study ID" }, { key: "status", label: "Run Status" }, { key: "reviewUrl", label: "View in Minds" }],
  },
};
