const { request, toZapierRecord, unwrapData } = require("../client");

const perform = async (z, bundle) => {
  const payload = await request(z, {
    method: "GET",
    path: `/panels/${encodeURIComponent(bundle.inputData.panelId)}/summary`,
  });
  return toZapierRecord(unwrapData(payload), `${bundle.inputData.panelId}-summary`);
};

module.exports = {
  key: "get_panel_summary",
  noun: "Panel Summary",
  display: {
    label: "Get Panel Summary",
    description: "Gets the persisted aggregate summary for a completed Minds Panel study.",
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
      id: "b5b75a31-7210-4f1d-a5fb-90f82f90559a-summary",
      status: "complete",
    },
  },
};
