const { request, toZapierRecord, unwrapData } = require("../client");

const perform = async (z) => {
  const payload = await request(z, {
    method: "GET",
    path: "/panels",
    params: { limit: 100, offset: 0 },
  });
  const panels = unwrapData(payload);
  if (!Array.isArray(panels)) throw new Error("Minds returned an invalid panel list.");
  return panels.map((panel) => toZapierRecord(panel));
};

module.exports = {
  key: "new_panel",
  noun: "Panel",
  display: {
    label: "New Panel",
    description: "Triggers when a Panel appears in your Minds account.",
  },
  operation: {
    perform,
    sample: {
      id: "b5b75a31-7210-4f1d-a5fb-90f82f90559a",
      name: "New positioning review",
    },
    outputFields: [
      { key: "id", label: "Panel ID" },
      { key: "name", label: "Panel name" },
      { key: "createdAt", label: "Created at" },
      { key: "updatedAt", label: "Updated at" },
    ],
  },
};
