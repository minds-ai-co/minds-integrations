# Figma desktop setup

The native MacBook registration created plugin **1687580744489834770**, named **Minds Creative Review**, on 1 October 2026. The source manifest retains Figma's genuine ID. Registration and a rendered panel have passed; OAuth, source transfer, completed research and public Community submission must be recorded independently.

1. Build with `npm run build --workspace minds-creative-marketplaces`.
2. In the official Figma desktop app, import `apps/creative-marketplaces/dist/figma/manifest.json` through Plugins → Development → Import plugin from manifest. Use the company account that owns the existing registration when preparing publication.
3. Run Minds Creative Review in a dedicated test design. Select exactly one frame or artwork; the plugin exports that selection as PNG.
4. Connect through the browser's explicit Minds OAuth approval. Refresh Studies, choose a Study with an Audience, and approve sending the selected material.
5. Draft a research plan, open its exact saved draft in Minds, review the instrument and usage estimate, explicitly confirm, and wait for completion.
6. Return to the original plugin, load that completed run's findings, and explicitly insert them as a native Figma text node.
7. Test empty/multiple selection, cancellation, missing consent, expired/revoked sessions, disconnect and repeated preparation. Capture actual native design and panel screenshots only after acceptance.

The native sandbox uses origin `null`. Its deliberate security review is in [FIGMA-SECURITY.md](FIGMA-SECURITY.md). Deployment must apply the tracked Node and edge allowlists together. Public listing approval remains separate from development import and gateway deployment.

Remote operations use Alexander's MacBook. The Mac mini is retired. The capture helper is limited to Figma windows and does not record audio.

Official setup: https://developers.figma.com/docs/plugins/plugin-quickstart-guide/
