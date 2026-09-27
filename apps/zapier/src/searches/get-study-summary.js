const { request, toZapierRecord, unwrapData } = require("../client");
const { studyIdField } = require("../study-fields");

const perform = async (z, bundle) => {
  const { studyId } = bundle.inputData;
  const data = unwrapData(
    await request(z, {
      method: "GET",
      path: `/studies/${encodeURIComponent(studyId)}/summary`,
    }),
  );
  // No persisted summary yet is "not found", so Zaps can branch on it.
  if (!data || !data.summary) return [];
  return [toZapierRecord({ ...data, studyId }, `${studyId}-summary-${data.revision || 0}`)];
};

module.exports = {
  key: "get_study_summary",
  noun: "Study Summary",
  display: {
    label: "Get Study Summary",
    description:
      "Gets the saved aggregate summary of a Minds Study. Finds nothing until a summary exists in Minds.",
  },
  operation: {
    perform,
    inputFields: [studyIdField()],
    sample: {
      id: "943f9d7c-aab6-4a78-ab67-a7827e1358c9-summary-1",
      studyId: "943f9d7c-aab6-4a78-ab67-a7827e1358c9",
      revision: 1,
      isGenerating: false,
      isStale: false,
      hasEnoughContent: true,
      messageCount: 7,
      newMessageCount: 0,
      summary: {
        headline: "Most respondents found the new headline clearer than the current one.",
      },
    },
    outputFields: [
      { key: "id", label: "Summary ID" },
      { key: "studyId", label: "Study ID" },
      { key: "revision", label: "Revision", type: "integer" },
      { key: "isStale", label: "Is Stale", type: "boolean" },
      { key: "isGenerating", label: "Is Generating", type: "boolean" },
      { key: "messageCount", label: "Message Count", type: "integer" },
      { key: "newMessageCount", label: "New Messages Since Summary", type: "integer" },
    ],
  },
};
