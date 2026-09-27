const { pageParams, request, toZapierRecord, unwrapData } = require("../client");

// Hidden trigger that feeds the Audience dropdown of Create Study.
const perform = async (z, bundle) => {
  const payload = await request(z, {
    method: "GET",
    path: "/audiences",
    params: pageParams(bundle),
  });
  const audiences = unwrapData(payload);
  if (!Array.isArray(audiences)) throw new Error("Minds returned an invalid Audience list.");
  return audiences.map(({ id, name, mindCount, createdAt, updatedAt }) =>
    toZapierRecord({ id, name, mindCount, createdAt, updatedAt }),
  );
};

module.exports = {
  key: "audience_list",
  noun: "Audience",
  display: {
    label: "List Audiences",
    description: "Lists Audiences for dropdowns.",
    hidden: true,
  },
  operation: {
    perform,
    canPaginate: true,
    sample: {
      id: "07227280-435f-42fa-9949-3def1b6e17b0",
      name: "German online shoppers",
      mindCount: 25,
      createdAt: "2026-09-20T09:12:44.000Z",
      updatedAt: "2026-09-21T14:03:10.000Z",
    },
    outputFields: [
      { key: "id", label: "Audience ID" },
      { key: "name", label: "Audience Name" },
      { key: "mindCount", label: "Mind Count", type: "integer" },
    ],
  },
};
