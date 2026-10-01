# Shared Minds UI in creative integrations

Canva, Figma, Adobe Express and Adobe GenStudio mount the Button component from `@minds-ai-co/ui`. The build consumes the package widget styles, theme, Tailwind preset and fonts. It does not copy shared component implementations into this repository. Host-specific layout and export/message handlers remain in each adapter.

The package compiler bundles Vue single-file components and includes font data URLs. Figma embeds JavaScript and CSS in its plugin HTML because the plugin's opaque origin cannot fetch relative assets. Canva injects the same CSS into its host container. Express and GenStudio use the same compiled styles in their panel pages.

## Build and verification

Install workspace dependencies with the existing GitHub Packages credential injected at runtime. Run `npm run check` from the repository root. The creative panel tests rebuild before running. The bundle test executes the actual generated Figma HTML, checks shared Button styles and self-contained fonts, and detects startup exceptions.

## Figma native comments

After an exact research run completes, “Review Figma comments” opens the Minds feedback review page with its Study ID, run ID and original exported frame ID. The action does not post comments automatically. The user connects their Figma account with comment permissions, supplies the frame link, reviews the proposed comments, and explicitly selects which comments to publish.

The webapp owns OAuth credentials, research authorization, heatmap projection and delivery receipts. The plugin does not receive the Figma OAuth token. Native comments identify the connected Figma account as author; the body identifies Minds AI feedback and links to its research. Image reactions require genuine saved heatmap coordinates. Frame summaries are identified separately.

This adapter requires the companion webapp change for the review route. The code is not evidence of a production release or marketplace approval. Existing provider submissions must remain intact while updated bundles are reviewed.

## Other integration surfaces

This migration covers the four shared creative panels. Provider-rendered Slack Block Kit, Zapier and Make interfaces use their platform controls. The repository also contains other custom interfaces; these require their own package compatibility audit before claiming every integration has migrated.
