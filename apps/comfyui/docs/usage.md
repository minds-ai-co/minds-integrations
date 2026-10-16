# Minds creative tests for ComfyUI

Compare image, video and concept alternatives with your Minds Audiences, then pass selected creatives to the next nodes in your workflow. The first release uses the existing Minds Study API and its current model routing. It does not select or deploy a Mosaic checkpoint.

## Install

Clone `https://github.com/minds-ai-co/ComfyUI-Minds` into your ComfyUI `custom_nodes/ComfyUI-Minds` directory. Install `requirements.txt` with **the same Python interpreter ComfyUI uses**, then restart ComfyUI. The package uses ComfyUI's existing PyTorch installation.

Provide `MINDS_API_KEY` in the ComfyUI server process's environment using your credential manager. Create or manage that key in Minds. Never put the key in a workflow widget, URL, screenshot or shared JSON file. Credentials stay on the machine running ComfyUI; this release is intended for your own ComfyUI server, not a shared service with unrelated users.

In Browse Templates, look for **ComfyUI-Minds**. Import a template, select your source files, and enter the existing Audience IDs you want to test. **Minds · Find Audiences** reads the available IDs and readiness; its offset input pages through more than 100 Audiences. The API enforces access, readiness, plan and usage limits.

For the included illustrative demos, copy the files from `example_workflows/assets` into ComfyUI's `input` folder before opening a template. Replace them with your own ads, thumbnails, packaging images or videos when testing actual creatives. For the two-Audience example, enter both IDs on Prepare and one matching ID on each selection branch.

## Review and run

1. Connect generated `IMAGE` batches to **Image Candidates**, or native `VIDEO` objects to **Video Candidate**. Give every candidate an exact, distinct label. Combine candidates to compare separate videos, original and revised creatives, or mixed media.
2. In **Prepare Creative Test**, choose existing Audience IDs, write one preference question and supply viewing context. Set the Study language. A fresh request ID is created when you add the node; keep it when retrying. Use **New test request** when the content, question or Audiences change.
3. Queue the graph once to prepare the draft. The Run node refuses to execute until you have reviewed it. Open **Review draft** on **Run Reviewed Test**, read the exact question, alternatives and Audiences, and select **Approve this draft**.
4. Queue again. The adapter runs that reviewed revision and polls its durable run. Queuing the same workflow after a timeout or restart resumes the saved run. A changed draft invalidates the previous approval.
5. Read the preference results JSON. Connect **Select Creatives** to both result outputs from the Run node. With multiple Audiences, supply one Audience ID on each selector branch. **Selected Images** returns an IMAGE batch. **Selected Video** passes each selected VIDEO, including its audio, to downstream video nodes.

Equal preference shares remain ties, including ties at the shortlist boundary. Ties can therefore return more than `top_k` creatives. Different Audiences remain separate; the adapter does not pool overlapping memberships or silently choose one Audience.

## Hosted files and scripts

**Hosted Assets / Concepts** accepts a JSON array. Each record is either:

```json
[
  {"label": "Video A", "url": "https://your-host.example/video-a.mp4", "mimeType": "video/mp4"},
  {"label": "Video B", "url": "https://your-host.example/video-b.mp4", "mimeType": "video/mp4"}
]
```

or an authored text concept:

```json
[
  {"label": "Demonstration", "text": "Show the product being used in one continuous shot."},
  {"label": "Story", "text": "A customer explains the problem and demonstrates the solution."}
]
```

Hosted files are imported into durable Minds account storage by the API. Private-network destinations are refused there. Text concepts test the supplied words; they are not a substitute for testing a finished video. Hosted assets remain references in the custom creative output; native media selectors require the original generated IMAGE/VIDEO objects.

## Limits and meaning

Compare 2–20 candidates per question. Locally encoded files use the existing 50 MB multipart API limit; hosted imports use the API's 100 MB limit. The complete question, context and creative references must fit the existing 2,000-character fixed-question limit. No content is silently shortened. A VIDEO is sent as an MP4 with its audio; the original native object is retained for downstream selection.

Shares are calculated from the exact categorical distribution returned by the API, retaining fractional expected counts. Missing zero-count alternatives remain in the ranking. No confidence interval is invented. Results estimate preference among the supplied alternatives; they are not measured clicks, conversions or sales. Partial, failed, cancelled, incompatible or media-incomplete results never select winners.

Retry receipts under ComfyUI's user directory (`minds/receipts`) contain only account-scoped identifiers, input hashes and run references. They contain no API keys, signed download URLs or answer bodies. Retain them to resume interrupted requests. Exported workflow JSON contains your question, asset references, Audience IDs and approval fingerprint; review these before sharing it.

For headless Comfy API use, run Prepare first, inspect `review_json`, and provide its exact `approval` value as the Run node's `reviewed_draft` only after approval. Supply a UUID `request_id` in API-format graphs. No UI widget contains a credential. Normal API usage accounting provides the usage signal for these Studies.
