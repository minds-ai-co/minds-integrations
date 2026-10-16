# Comfy distribution

Suggested listing name: **Minds — Audience Creative Tests**.

Description: Compare image and video creative alternatives with your Minds Audiences inside ComfyUI. Prepare and review an exact preference question, run it through the Minds API, and pass selected candidates to the next production step. Includes per-Audience rankings, tie-preserving selection, and reusable example workflows.

Requirements: a Minds account and API key, existing Audiences with ready Minds, and the account allowances required for the requested Study. The node pack calls the existing Minds API; it does not claim native Partner Node billing, Router inclusion or a separately qualified Mosaic release.

The custom node's canonical source is `apps/comfyui` in minds-integrations. The public `minds-ai-co/ComfyUI-Minds` repository is a distribution mirror containing only this package, its license, examples, tests and documentation. Distribution assets must be built from a reviewed source commit.

Registry publication requires a verified Comfy publisher and a Registry publishing key (different from a Comfy model API key). `PublisherId` is the requested identity and must match the publisher actually registered. A GitHub repository or release does not establish a Registry listing. Verify the Registry version after publishing and record its URL.

The separate native Partner Node / Router proposal is: **audience preference evaluation following media generation**. Proposed integration inputs are creative assets, Audience, authored preference question and viewing context; outputs are per-Audience preference shares and ranked candidate identities. Comfy provider acceptance and any commercial terms remain external onboarding steps. No message to Comfy is sent by the package or its release workflow.

Official references:

- https://docs.comfy.org/registry/publishing
- https://docs.comfy.org/registry/specifications
- https://docs.comfy.org/registry/standards
- https://docs.comfy.org/custom-nodes/workflow_templates
