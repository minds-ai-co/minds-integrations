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
  if (bundle.inputData.sourceUrl) {
    if (bundle.inputData.sourceContent) throw new Error("Use either a material URL or exact text, then include any additional context in the Research Request.");
    const url = new URL(bundle.inputData.sourceUrl);
    if (url.protocol !== "https:" || url.username || url.password) throw new Error("Material URL must be a readable HTTPS URL without embedded credentials.");
    const kind = bundle.inputData.sourceKind || "image";
    if (!["image", "video", "document", "website"].includes(kind)) throw new Error("Choose a supported material type.");
    body.source = { kind, label: bundle.inputData.sourceLabel || "Zapier creative", url: bundle.inputData.sourceUrl };
  } else if (bundle.inputData.sourceContent) {
    body.source = {
      kind: "prompt",
      label: bundle.inputData.sourceLabel || "Zapier input",
      content: bundle.inputData.sourceContent,
    };
  }
  const headers = {};
  if (bundle.inputData.idempotencyKey) {
    if (!/^[\w-]{1,128}$/.test(bundle.inputData.idempotencyKey)) throw new Error("Use an idempotency key of up to 128 letters, digits, underscores or hyphens.");
    headers["Idempotency-Key"] = bundle.inputData.idempotencyKey;
  }
  const payload = await request(z, {
    method: "POST",
    path: `/studies/${encodeURIComponent(bundle.inputData.studyId)}/research-plans/preview`,
    body,
    headers,
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
        key: "sourceUrl",
        label: "Material URL",
        type: "string",
        required: false,
        helpText: "A readable HTTPS image, video, PDF or webpage URL. Minds imports the material when drafting the plan. Use this or Material to Review text, rather than both. Links requiring sign-in cannot be imported.",
      },
      {
        key: "sourceKind",
        label: "Material Type",
        type: "string",
        required: false,
        choices: { image: "Image", video: "Video", document: "Document / PDF", website: "Webpage" },
        helpText: "Type of the linked material. Defaults to Image when a URL is supplied.",
      },
      {
        key: "idempotencyKey",
        label: "Preview Request Identifier",
        type: "string",
        required: false,
        helpText: "Optional stable ID from the source event. Reuse it for retries of the same Study, request and material; use a new ID when those change.",
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
