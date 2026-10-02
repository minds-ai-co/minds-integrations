# Shared Minds UI in creative integrations

Canva, Figma, Adobe Express and Adobe GenStudio mount the Button component from `@minds-ai-co/ui`. The build consumes the package widget styles, theme, Tailwind preset and fonts. It does not copy shared component implementations into this repository. Host-specific layout and export/message handlers remain in each adapter.

The package compiler bundles Vue single-file components and includes font data URLs. Figma embeds JavaScript and CSS in its plugin HTML because the plugin's opaque origin cannot fetch relative assets. Canva injects the same CSS into its host container. Express and GenStudio use the same compiled styles in their panel pages.

## Build and verification

Install workspace dependencies with the existing GitHub Packages credential injected at runtime. Run `npm run check` from the repository root. The creative panel tests rebuild before running. The bundle test executes the actual generated Figma HTML, checks shared Button styles and self-contained fonts, and detects startup exceptions.

## Figma native comments

The Figma candidate replaces the existing-Study picker and external review handoff with the published Minds `MessageComposer` and `StudyPlannerAudienceGrid`. Its main controls are “Describe what you want to learn in this Study…” and “Select Audiences”. Selecting a frame alone does not upload it or execute research. Sending the question creates a private Study, uploads that selected frame and previews the saved research draft. Inline confirmation starts the exact revision and authorizes posting its completed answers as native comments on that frame.

First use requires Minds OAuth and separate Figma comment authorization. Public Figma plugins cannot read `figma.fileKey`, so board setup requests the actual Figma design/file link. The exported frame supplies the node ID automatically. Reopening restores non-secret Study/draft identifiers from private per-user Figma client storage and requires the original board link and selected frame before resuming. Existing runs are read before confirmation so reconnecting does not start another paid run.

The webapp owns research authorization, provider credentials, preview hashes, frame validation and durable comment delivery. Failed, partial and mismatched research cannot post comments. Completed summaries are posted at frame level and attributed to Minds in the body, with the connected Figma account as author. These summaries do not claim individual heatmap coordinates. The separate canonical comments capability also supports verified saved heatmap reactions.

This adapter requires [webapp PR #8099](https://github.com/minds-ai-co/webapp/pull/8099), gateway and edge releases, and Figma approval of the updated comment scopes. Local builds and tests are not evidence of production delivery or marketplace approval. Native board delivery remains an acceptance gate.

## Other integration surfaces

This migration covers the four shared creative panels. Provider-rendered Slack Block Kit, Zapier and Make interfaces use their platform controls. The repository also contains other custom interfaces; these require their own package compatibility audit before claiming every integration has migrated.
