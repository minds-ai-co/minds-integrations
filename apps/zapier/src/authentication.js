const { API_KEY_SETTINGS_URL, request } = require("./client");

// /auth/me answers with the bare user object ({ id }), not a { data } envelope.
const test = async (z) => {
  const payload = await request(z, { method: "GET", path: "/auth/me" });
  const user = payload && payload.data && payload.data.id ? payload.data : payload;
  if (!user || !user.id) throw new Error("Minds returned an unexpected response.");
  return user;
};

// /auth/me reports only the user ID; its prefix keeps several Minds
// connections distinguishable in Zapier.
const connectionLabel = (_z, bundle) => {
  const id = bundle.inputData && bundle.inputData.id;
  return id ? `Minds user ${String(id).slice(0, 8)}` : "Minds";
};

module.exports = {
  type: "custom",
  fields: [
    {
      key: "apiKey",
      label: "API Key",
      type: "password",
      required: true,
      helpText: `Create a key in [Minds API settings](${API_KEY_SETTINGS_URL}). It starts with \`minds_\`.`,
    },
  ],
  test,
  connectionLabel,
};
