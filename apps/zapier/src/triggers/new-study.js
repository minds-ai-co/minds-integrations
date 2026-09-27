const { pageParams, request, toZapierRecord, unwrapData } = require("../client");
const { studyOutputFields, studySample } = require("../study-fields");

// GET /studies is ordered by updatedAt desc; Zapier deduplicates by id, so a
// Study triggers once, when it first appears.
const perform = async (z, bundle) => {
  const payload = await request(z, {
    method: "GET",
    path: "/studies",
    params: pageParams(bundle),
  });
  const studies = unwrapData(payload);
  if (!Array.isArray(studies)) throw new Error("Minds returned an invalid Study list.");
  return studies.map((study) => toZapierRecord(study));
};

module.exports = {
  key: "new_study",
  noun: "Study",
  display: {
    label: "New Study",
    description: "Triggers when a new Study is created in your Minds account.",
  },
  operation: {
    perform,
    canPaginate: true,
    sample: studySample,
    outputFields: studyOutputFields,
  },
};
