# Minds for Zapier

Use Minds Panels in automation workflows while preserving a review step before any study runs.

The initial integration provides:

- a polling trigger for new Panels;
- actions to create a Panel and preview a research plan;
- searches to retrieve a Panel or its persisted aggregate summary.

The integration deliberately does not expose Panel deletion or study execution. A user reviews and confirms consequential research work in Minds.

## Authentication

Create an API key in Minds and enter it as a password-protected Zapier connection field. Requests are sent only to `https://getminds.ai/api/v1` with Bearer authentication.

## Development

Use Node.js 22, then run:

```bash
npm install
npm test --workspace minds-zapier-integration
npm run validate --workspace minds-zapier-integration
```

Register and push the integration only from a Minds-owned Zapier account. Keep the integration private until authentication, all five operations, error handling, and a complete workflow pass end-to-end testing.

Product documentation: [Minds API documentation](https://getminds.ai/api)

Support: [Minds contact](https://getminds.ai/contact)
