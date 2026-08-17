const authentication = require("./src/authentication");
const newPanel = require("./src/triggers/new-panel");
const createPanel = require("./src/creates/create-panel");
const previewResearchPlan = require("./src/creates/preview-research-plan");
const findPanel = require("./src/searches/find-panel");
const getPanelSummary = require("./src/searches/get-panel-summary");
const { addAuthorizationHeader } = require("./src/client");

module.exports = {
  version: require("./package.json").version,
  platformVersion: require("zapier-platform-core").version,
  flags: {
    cleanInputData: false,
  },
  authentication,
  beforeRequest: [addAuthorizationHeader],
  triggers: {
    [newPanel.key]: newPanel,
  },
  searches: {
    [findPanel.key]: findPanel,
    [getPanelSummary.key]: getPanelSummary,
  },
  creates: {
    [createPanel.key]: createPanel,
    [previewResearchPlan.key]: previewResearchPlan,
  },
};
