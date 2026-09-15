# Shopify media production plan

Actual capture is pending Shopify and Minds sign-in in the dedicated capture profile. No mock screenshot or synthetic video is a release artifact. Follow Company Knowledge's `skills/minds-webapp-capture/SKILL.md` and the content repository's `docs/integration-media.md`.

## Website clip: approximately 30–45 seconds after editing

| Shot | Target duration | Real action | Caption |
| --- | --- | --- | --- |
| Product action | 4 seconds | Open Minds from the demo product's action menu | Start with a product |
| Product context | 5 seconds | Show selected title, image and price context | Review the product context |
| Audience | 5 seconds | Choose a saved Audience with ready Minds | Choose your research Audience |
| Review | 7 seconds | Show all four questions and response usage | Review questions and usage |
| Confirm | 4 seconds | Click Run study and show accepted/queued state | Start the Study when ready |
| Findings | 10 seconds | Show completed respondent excerpts and continuation link | Explore synthetic feedback in Minds |

Record the full workflow first. Trim genuine waiting intervals only, record cuts in the manifest, and make the transition to completed findings clear. Do not speed up or fabricate a result to imply guaranteed turnaround. Keep account consent in the longer review video; never record password entry.

For the integration-page clip, use the existing content preset: 1920×1080, light mode, scale 1; fixed crop x=424, y=230, width=1152, height=648. Confirm the real app fits this frame before recording. Master: 30 fps. Delivery: 1280×720, 24 fps, H.264 CRF 26, veryslow, no audio, faststart. Use the shared cursor overlay and stable, loaded UI states.

Publish only after inspection:

- `minds-content/public/images/videos/integrations/shopify/purchase-barriers.v1.mp4`
- Matching `purchase-barriers.v1.webp` poster.
- Register actual duration in `utils/guide-videos.ts` and its page map; add `coverVideo`, image and translated image alt text to all nine guide files.
- Disclose the silent English UI recording in each guide. Run content contracts and browser checks after embedding, then use the canonical content deployment workflow.

## App Store images and review video

Prepare three distinct 1600×900 desktop screenshots showing real app UI: selected product; Audience/questions/usage review; completed excerpts. Suggested alt text respectively: “Selected product context in Minds Research”, “Audience and four research questions before confirmation”, and “Synthetic respondent excerpts from a completed product Study”. Exclude browser chrome, identifying account details and claims about conversion gains. Shopify recommends 3–6 desktop screenshots. [Listing best practices](https://shopify.dev/docs/apps/launch/shopify-app-store/best-practices).

Record a separate full reviewer video showing install/open, Minds consent, product selection, Audience, usage, confirmation and completed findings. Keep enough context to establish the embedded Shopify flow. The website crop is not a substitute for this review evidence. Determine any dashboard upload limits at submission time.

The [prepared app icon](assets/minds-research-icon-1200.png) is a 1200×1200 PNG exported from the canonical Minds UI brand asset on a white background. Its geometry is preserved and [provenance](assets/icon-provenance.json) records the source revision/hash. This is an app-icon export, not a replacement brand source. It contains no Shopify logo or approval badge.

For each real screenshot/video, save a sidecar manifest with timestamp, tested app/version, viewport, crop, actual duration, cuts, and readiness checks. Inspect poster and representative first/middle/last frames. Retain raw captures privately under `~/Downloads/minds-webapp-captures`; publish only sanitized delivery assets.
