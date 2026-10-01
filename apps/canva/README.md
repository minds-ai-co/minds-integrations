# Minds for Canva

## Product workflow

1. The user explicitly selects a design or page to test.
2. Canva exports the selected design/pages as a PDF only after the user initiates the action.
3. Minds creates a non-executing Study research plan for the creative.
4. The user reviews and confirms the plan before a durable run.
5. Aggregate findings can be added back into Canva as text.

## Publication gate

Do not submit a link-only app. The production package needs a Canva App SDK UI,
a Minds OAuth connection, declared external network access, a working export
flow, localized listing copy, screenshots, support, privacy, and reviewer test
instructions. The web client must never receive a reusable Minds API key.
## Development package

The executable adapter is now in `apps/creative-marketplaces/src/canva.ts`, sharing the review panel and OAuth gateway with the other creative apps. Build with `npm run build --workspace minds-creative-marketplaces`. See [launch status and gates](../creative-marketplaces/LAUNCH.md). The existing architecture and submission requirements below still apply; this is not a published app.
