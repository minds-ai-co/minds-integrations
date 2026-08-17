const { request } = require("./client");

module.exports = {
  type: "custom",
  fields: [
    {
      key: "apiKey",
      label: "Minds API Key",
      type: "password",
      required: true,
      helpText:
        "Create or copy a key from [Minds API settings](https://getminds.ai/?settings=api).",
    },
    {
      key: "label",
      label: "Connection name",
      type: "string",
      required: true,
      default: "Workspace",
      helpText:
        "A private label for this connection. It does not change your [Minds account](https://getminds.ai/?settings=api).",
    },
  ],
  test: async (z) => {
    await request(z, {
      method: "GET",
      path: "/panels",
      params: { limit: 1, offset: 0 },
    });
    return { id: "minds-account", name: "Minds" };
  },
  connectionLabel: "Minds {{bundle.authData.label}}",
};
