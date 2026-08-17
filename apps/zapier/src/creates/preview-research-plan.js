const { request, toZapierRecord, unwrapData } = require("../client");

const perform = async (z, bundle) => {
  const body = {
    request: bundle.inputData.request,
    studyLocale: bundle.inputData.studyLocale || "en",
  };
  if (bundle.inputData.sourceContent) {
    body.source = {
      kind: "prompt",
      label: bundle.inputData.sourceLabel || "Zapier input",
      content: bundle.inputData.sourceContent,
    };
  }
  const payload = await request(z, {
    method: "POST",
    path: `/panels/${encodeURIComponent(bundle.inputData.panelId)}/research-plans/preview`,
    body,
  });
  return toZapierRecord(unwrapData(payload), `${bundle.inputData.panelId}-plan`);
};

module.exports = {
  key: "preview_research_plan",
  noun: "Research Plan",
  display: {
    label: "Preview Research Plan",
    description: "Creates or revises a reviewable study plan without running the study.",
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
      { key: "request", label: "Research request", type: "text", required: true },
      {
        key: "studyLocale",
        label: "Study locale",
        type: "string",
        required: false,
        default: "en",
        helpText: "BCP 47 language code for the plan and eventual study output.",
      },
      { key: "sourceLabel", label: "Source label", type: "string", required: false },
      {
        key: "sourceContent",
        label: "Source content",
        type: "text",
        required: false,
        helpText: "Optional exact material respondents should review.",
      },
    ],
    sample: {
      id: "75e10cab-cf1a-4dd2-8470-c71b8c450d90",
      status: "draft",
    },
  },
};
