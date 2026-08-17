# Security

Report suspected vulnerabilities privately through
[Minds support](https://getminds.ai/contact). Do not open a public issue for a
security report.

Do not include API keys, authentication headers, private research material, or
personal data in the report. Include the extension version and a minimal,
sanitized reproduction when possible.

The extension stores its credential in VS Code SecretStorage and sends
authenticated requests only to `https://getminds.ai/mcp`.
