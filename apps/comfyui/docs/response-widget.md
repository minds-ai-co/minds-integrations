# Embedded Minds response widget

The node embeds the existing Minds MCP response UI, built from the shared `@minds-ai-co/ui` response surface. It does not implement a second response design or copy Vue component source.

`web/response.html` is the canonical MCP response artifact built from webapp revision `3a948e4915` with published `@minds-ai-co/ui@1.0.0-staging.192`. Its original HTML SHA-256 is `53492c6e399e0964d4efe0240acfb74c61d253ca6e1e49711ddb6c7cfdd82b0c`. The build inserts the read-only host configuration and serves the two content-pinned optional UI chunks locally. The chunks use `.mjs` so ComfyUI does not auto-import iframe-only modules into its parent graph.

Reproduce it from this package directory:

```sh
npm ci --prefix scripts/widget-build
node scripts/widget-build/build.mjs /path/to/webapp/widgets/dist/response.html
```

Build the source artifact with the webapp's canonical `pnpm run build:widgets` command and the exact package lock above. With no file argument, the builder downloads the published widget; it refuses an older production artifact until that webapp revision is promoted. Both input modes verify the HTML and chunk digests. Updating its hash requires reviewing the new response widget before regenerating the artifact. The host bridge is bundled from the pinned official `@modelcontextprotocol/ext-apps` SDK, with its dependency lockfile. End users do not need Node.js or a frontend build.

The node projects the confirmed run's signed `questionAttachments` into the existing `questionStimuli` contract, matching creative labels by their explicit asset IDs. Those materials render through the same shared Study result and A/B comparison components used by MCP.

A sandboxed iframe is created for each completed result. The official MCP Apps `AppBridge` sends the validated run artifact's actual `outputData` through `sendToolInput` and `sendToolResult`. A fresh iframe respects the widget's immutable completed-result identity when a later test completes. Removing a node or starting a new test closes its bridge and clears the previous frame. Result payloads are not added to serialized workflow widgets.

The host reports the iframe's actual CSS width and height through MCP Apps `containerDimensions`, including resize updates. This keeps the shared response widget's internal scroll viewport within the node, including when the ComfyUI canvas is zoomed. Resize tracking is removed with the frame.

Run `node scripts/test_response_layout.mjs` after installing the widget-build dependencies to check the real pinned HTML at short, tall, narrow and zoomed sizes. It uses real mouse-wheel events to reach the final action row at each size, with illustrative results and no research API calls. A native ComfyUI replay of the completed Coca-Cola test also verified scrolling to the footer without changing the graph zoom or position. An optional second argument replays a private completed ComfyUI output JSON; keep those snapshots outside the repository.

The browser receives no API key. The bridge exposes no server tools, resource proxy or authenticated requests. Its only host action opens links on the exact `https://getminds.ai` origin. The iframe has scripts and external popups enabled, without same-origin access to ComfyUI. If initialization fails, a link opens the Study in Minds; the graph's JSON/native outputs remain available.

The public Minds page disallows direct cross-origin framing. Serving the pinned build locally lets ComfyUI host the same interface without changing the webapp's framing policy or deploying a new endpoint.
