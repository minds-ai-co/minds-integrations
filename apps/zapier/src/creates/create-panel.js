const { request, toZapierRecord, unwrapData } = require("../client");

const perform = async (z, bundle) => {
  const body = { name: bundle.inputData.name };
  if (bundle.inputData.groupIds) {
    body.groupIds = bundle.inputData.groupIds
      .split(",")
      .map((value) => value.trim())
      .filter(Boolean);
  }
  if (typeof bundle.inputData.isLinkSharingEnabled === "boolean") {
    body.isLinkSharingEnabled = bundle.inputData.isLinkSharingEnabled;
  }
  const payload = await request(z, { method: "POST", path: "/panels", body });
  return toZapierRecord(unwrapData(payload));
};

module.exports = {
  key: "create_panel",
  noun: "Panel",
  display: {
    label: "Create Panel",
    description: "Creates a Minds Panel and optionally attaches existing Groups.",
  },
  operation: {
    perform,
    inputFields: [
      { key: "name", label: "Panel name", type: "string", required: true },
      {
        key: "groupIds",
        label: "Group IDs",
        type: "string",
        required: false,
        helpText: "Optional comma-separated Minds Group IDs.",
      },
      {
        key: "isLinkSharingEnabled",
        label: "Enable link sharing",
        type: "boolean",
        required: false,
        default: "false",
      },
    ],
    sample: {
      id: "b5b75a31-7210-4f1d-a5fb-90f82f90559a",
      name: "New positioning review",
    },
  },
};
