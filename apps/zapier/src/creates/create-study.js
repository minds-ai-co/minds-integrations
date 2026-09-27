const { request, toZapierRecord, unwrapData } = require("../client");
const { studyOutputFields, studySample } = require("../study-fields");

const splitIds = (value) => {
  const values = Array.isArray(value) ? value : String(value || "").split(",");
  return [...new Set(values.map((id) => String(id).trim()).filter(Boolean))];
};

const perform = async (z, bundle) => {
  const body = { name: bundle.inputData.name };
  const audienceIds = splitIds(bundle.inputData.audienceIds);
  if (audienceIds.length) body.audienceIds = audienceIds;
  if (typeof bundle.inputData.isLinkSharingEnabled === "boolean") {
    body.isLinkSharingEnabled = bundle.inputData.isLinkSharingEnabled;
  }
  const payload = await request(z, { method: "POST", path: "/studies", body });
  return toZapierRecord(unwrapData(payload));
};

module.exports = {
  key: "create_study",
  noun: "Study",
  display: {
    label: "Create Study",
    description: "Creates a Minds Study and optionally attaches existing Audiences. Does not run research.",
  },
  operation: {
    perform,
    inputFields: [
      {
        key: "name",
        label: "Study Name",
        type: "string",
        required: true,
        helpText: "Name shown for the Study in Minds.",
      },
      {
        key: "audienceIds",
        label: "Audiences",
        type: "string",
        required: false,
        list: true,
        dynamic: "audience_list.id.name",
        helpText: "Optional existing Minds Audiences whose Minds answer this Study.",
      },
      {
        key: "isLinkSharingEnabled",
        label: "Enable Link Sharing",
        type: "boolean",
        required: false,
        default: "false",
        helpText:
          "If yes, anyone with the link can view the Study and its attached Audiences and Minds.",
      },
    ],
    sample: studySample,
    outputFields: studyOutputFields,
  },
};
