# Figma desktop setup

Use Figma's official desktop app signed in as developers@getminds.ai. The web editor does not expose the local Development plugin creation route used by this pilot.

1. Extract `minds-figma-development.tgz` from Downloads.
2. Open a test design in Figma desktop. Choose Plugins → Development → New plugin, then a plugin with custom UI. Name it Minds Creative Review and save its generated files.
3. Preserve the real `id` from Figma's generated manifest. Copy `code.js` and `ui.html` from this bundle into that plugin folder, and merge the provided manifest fields while retaining that `id`.
4. Share only the plugin ID with the developer maintaining this integration. Gateway access for Figma's sandbox must be enabled before its Connect Minds test; the deployed pilot currently permits only Canva and Adobe Express.
5. Run the development plugin in a test file. Test OAuth, selecting one node, PNG export, consent before upload, draft creation, reconnect/disconnect opening its exact saved draft in Minds, confirming and completing a new run, returning only that run’s findings, and inserting the resulting text.

Do not publish to Community until those checks pass. The manifest intentionally has no fabricated ID.

Official setup: https://developers.figma.com/docs/plugins/plugin-quickstart-guide/
