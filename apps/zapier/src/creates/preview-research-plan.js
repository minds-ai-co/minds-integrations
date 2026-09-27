const { request, toZapierRecord, unwrapData } = require("../client");
const { studyIdField } = require("../study-fields");

const STUDY_LOCALES = {
  en: "English",
  de: "German",
  es: "Spanish",
  fr: "French",
  zh: "Chinese",
  tr: "Turkish",
  ar: "Arabic",
  ja: "Japanese",
  ko: "Korean",
};

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
    path: `/studies/${encodeURIComponent(bundle.inputData.studyId)}/research-plans/preview`,
    body,
  });
  const data = unwrapData(payload);
  return toZapierRecord({ ...data, studyId: bundle.inputData.studyId }, `${bundle.inputData.studyId}-plan`);
};

module.exports = {
  key: "preview_research_plan",
  noun: "Research Plan",
  display: {
    label: "Preview Research Plan",
    description:
      "Drafts a reviewable research plan for a Study. The study does not run until someone confirms it in Minds.",
  },
  operation: {
    perform,
    inputFields: [
      studyIdField(),
      {
        key: "request",
        label: "Research Request",
        type: "text",
        required: true,
        helpText:
          "What you want to learn, in plain language. The planner turns it into questions for the Study's Minds.",
      },
      {
        key: "studyLocale",
        label: "Study Language",
        type: "string",
        required: false,
        default: "en",
        choices: STUDY_LOCALES,
        helpText: "Language of the plan and of the eventual study output.",
      },
      {
        key: "sourceContent",
        label: "Material to Review",
        type: "text",
        required: false,
        helpText:
          "Optional exact text the Minds should react to, such as ad copy or a landing page headline.",
      },
      {
        key: "sourceLabel",
        label: "Material Label",
        type: "string",
        required: false,
        helpText: "Optional short name for the material, such as \"Landing page copy\".",
      },
    ],
    sample: {
      id: "75e10cab-cf1a-4dd2-8470-c71b8c450d90",
      draftPlanId: "75e10cab-cf1a-4dd2-8470-c71b8c450d90",
      studyId: "943f9d7c-aab6-4a78-ab67-a7827e1358c9",
      revision: 1,
      draftStatus: "draft",
      planningMode: "planner",
      status: "needs_confirmation",
      nextAction: "confirm",
    },
    outputFields: [
      { key: "id", label: "Draft Plan ID" },
      { key: "draftPlanId", label: "Draft Plan ID" },
      { key: "studyId", label: "Study ID" },
      { key: "revision", label: "Revision", type: "integer" },
      { key: "status", label: "Plan Status" },
      { key: "draftStatus", label: "Draft Status" },
      { key: "nextAction", label: "Next Action" },
      { key: "plan__objective", label: "Plan Objective" },
    ],
  },
};
