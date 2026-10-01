const authentication = require("./src/authentication");
const newStudy = require("./src/triggers/new-study");
const audienceList = require("./src/triggers/audience-list");
const createStudy = require("./src/creates/create-study");
const previewResearchPlan = require("./src/creates/preview-research-plan");
const findStudy = require("./src/searches/find-study");
const getStudySummary = require("./src/searches/get-study-summary");
const getResearchResults = require("./src/searches/get-research-results");
const { addAuthorizationHeader, handleErrors } = require("./src/client");

module.exports = {
  version: require("./package.json").version,
  platformVersion: require("zapier-platform-core").version,
  flags: {
    cleanInputData: false,
  },
  authentication,
  beforeRequest: [addAuthorizationHeader],
  afterResponse: [handleErrors],
  triggers: {
    [newStudy.key]: newStudy,
    [audienceList.key]: audienceList,
  },
  searches: {
    [findStudy.key]: findStudy,
    [getStudySummary.key]: getStudySummary,
    [getResearchResults.key]: getResearchResults,
  },
  creates: {
    [createStudy.key]: createStudy,
    [previewResearchPlan.key]: previewResearchPlan,
  },
  searchOrCreates: {
    [findStudy.key]: {
      key: findStudy.key,
      display: {
        label: "Find or Create Study",
        description: "Finds a Study by exact name, or creates it if none exists.",
      },
      search: findStudy.key,
      create: createStudy.key,
    },
  },
};
