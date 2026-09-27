// Output fields shared by every operation that returns a Study.
const studyOutputFields = [
  { key: "id", label: "Study ID" },
  { key: "name", label: "Study Name" },
  { key: "studyMode", label: "Study Mode" },
  { key: "createdAt", label: "Created At", type: "datetime" },
  { key: "updatedAt", label: "Updated At", type: "datetime" },
  { key: "messageCount", label: "Message Count", type: "integer" },
  { key: "isLinkSharingEnabled", label: "Link Sharing Enabled", type: "boolean" },
  { key: "isPublic", label: "Public", type: "boolean" },
  { key: "publicShareId", label: "Public Share ID" },
  { key: "audiences[]id", label: "Audience IDs" },
  { key: "audiences[]name", label: "Audience Names" },
];

const studySample = {
  id: "943f9d7c-aab6-4a78-ab67-a7827e1358c9",
  name: "Homepage positioning review",
  studyMode: "study",
  createdAt: "2026-09-20T09:12:44.000Z",
  updatedAt: "2026-09-21T14:03:10.000Z",
  messageCount: 7,
  isPublic: false,
  isLinkSharingEnabled: false,
  publicShareId: null,
  audiences: [
    {
      id: "07227280-435f-42fa-9949-3def1b6e17b0",
      name: "German online shoppers",
    },
  ],
};

const studyIdField = (overrides = {}) => ({
  key: "studyId",
  label: "Study",
  type: "string",
  required: true,
  dynamic: "new_study.id.name",
  helpText: "Choose a Study or map a Study ID from an earlier step.",
  ...overrides,
});

module.exports = { studyIdField, studyOutputFields, studySample };
