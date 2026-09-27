const { PAGE_SIZE, request, toZapierRecord, unwrapData } = require("../client");
const { studyIdField, studyOutputFields, studySample } = require("../study-fields");

const MAX_NAME_SEARCH_PAGES = 10;

const findByName = async (z, name) => {
  const wanted = name.trim().toLowerCase();
  for (let page = 0; page < MAX_NAME_SEARCH_PAGES; page += 1) {
    const payload = await request(z, {
      method: "GET",
      path: "/studies",
      params: { limit: PAGE_SIZE, offset: page * PAGE_SIZE },
    });
    const studies = unwrapData(payload);
    if (!Array.isArray(studies)) throw new Error("Minds returned an invalid Study list.");
    const match = studies.find((study) => String(study.name || "").trim().toLowerCase() === wanted);
    if (match) return match;
    if (studies.length < PAGE_SIZE) return null;
  }
  return null;
};

const perform = async (z, bundle) => {
  const { studyId, name } = bundle.inputData;
  if (studyId) {
    const response = await request(z, {
      method: "GET",
      path: `/studies/${encodeURIComponent(studyId)}`,
      skipThrowForStatus: true,
    });
    // A missing Study is an empty search result, not an error.
    if (response.status === 404) return [];
    response.throwForStatus();
    return [toZapierRecord(unwrapData(response.data))];
  }
  if (name) {
    const study = await findByName(z, name);
    return study ? [toZapierRecord(study)] : [];
  }
  throw new z.errors.Error("Enter a Study or a Study name to search for.", "InvalidInput", 400);
};

module.exports = {
  key: "find_study",
  noun: "Study",
  display: {
    label: "Find Study",
    description: "Finds a Minds Study by ID or exact name.",
  },
  operation: {
    perform,
    inputFields: [
      studyIdField({
        required: false,
        helpText: "Choose a Study or map a Study ID. Leave empty to search by name.",
      }),
      {
        key: "name",
        label: "Study Name",
        type: "string",
        required: false,
        helpText: "Exact Study name (case-insensitive). Used when no Study ID is given.",
      },
    ],
    sample: studySample,
    outputFields: studyOutputFields,
  },
};
