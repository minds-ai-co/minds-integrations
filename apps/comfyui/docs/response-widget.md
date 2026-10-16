# Embedded Minds response widget

The node embeds the existing Minds MCP response UI, built from the shared `@minds-ai-co/ui` response surface. It does not implement a second response design or copy Vue component source.

`web/response.html` is a pinned deployment artifact from `https://getminds.ai/_widgets/response.html`, retrieved on 2026-10-16. Upstream SHA-256: `7e519f650c845e212b46165ca8c1fd2b39eac000c5bb2a9edf17e0178d690f29`. The build inserts a read-only response configuration and binds optional lazy assets to the fixed Minds origin. The HTML includes its existing styles and fonts. Optional remote assets and links need internet access.

Reproduce it from this package directory:

```sh
npm ci --prefix scripts/widget-build
npm run build --prefix scripts/widget-build
```

The build fails if the published artifact has changed. Updating its hash requires reviewing the new response widget before regenerating the artifact. The host bridge is bundled from the pinned official `@modelcontextprotocol/ext-apps` SDK, with its dependency lockfile. End users do not need Node.js or a frontend build.

A sandboxed iframe is created for each completed result. The official MCP Apps `AppBridge` sends the validated run artifact's actual `outputData` through `sendToolInput` and `sendToolResult`. A fresh iframe respects the widget's immutable completed-result identity when a later test completes. Removing a node or starting a new test closes its bridge and clears the previous frame. Result payloads are not added to serialized workflow widgets.

The browser receives no API key. The bridge exposes no server tools, resource proxy or authenticated requests. Its only host action opens links on the exact `https://getminds.ai` origin. The iframe has scripts and external popups enabled, without same-origin access to ComfyUI. If initialization fails, a link opens the Study in Minds; the graph's JSON/native outputs remain available.

The public Minds page disallows direct cross-origin framing. Serving the pinned build locally lets ComfyUI host the same interface without changing the webapp's framing policy or deploying a new endpoint.
