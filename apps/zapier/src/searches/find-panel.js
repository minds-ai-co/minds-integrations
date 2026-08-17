const { request, toZapierRecord, unwrapData } = require("../client");

const perform = async (z, bundle) => {
  const payload = await request(z, {
    method: "GET",
    path: `/panels/${encodeURIComponent(bundle.inputData.panelId)}`,
  });
  return toZapierRecord(unwrapData(payload));
};

module.exports = {
  key: "find_panel",
  noun: "Panel",
  display: {
    label: "Find Panel",
    description: "Finds a Minds Panel by ID.",
  },
  operation: {
    perform,
    inputFields: [
      {
        key: "panelId",
        label: "Panel ID",
        type: "string",
        required: true,
        dynamic: "new_panel.id.name",
      },
    ],
    sample: {
      id: "b5b75a31-7210-4f1d-a5fb-90f82f90559a",
      name: "New positioning review",
    },
  },
};
