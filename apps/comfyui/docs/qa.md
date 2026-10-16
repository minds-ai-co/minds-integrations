# ComfyUI 0.2.0 verification

Verified on 2026-10-16 with ComfyUI 0.41.0, frontend 1.55.17, Python 3.13 and CPU PyTorch 2.14.1. These are integration smoke tests with illustrative media and a small five-Mind Audience, rather than model-accuracy benchmarks.

- All seven workflow templates load in the real browser with exactly one Minds research node and valid native links.
- Live image research: ordinary node inputs → draft dialog → explicit approval → completed research → embedded response widget → original winning IMAGE reaches SaveImage. API distribution: Ad A 4, Ad B 1 (80% / 20%).
- Live video research: the same flow for two native VIDEO objects with audio → original winning VIDEO reaches SaveVideo. API distribution: Video A 3, Video B 2 (60% / 40%).
- The actual response widget displays completed research, five Minds, one Audience and the API preference distribution. Browser page errors: zero. Browser requests carrying an Authorization header: zero.
- Retrying the saved test request resumes its existing Study/run. New-input and changed-revision rejection, account isolation, partial/media-incomplete results, label/content matching and tie handling are covered by the package tests.
- 45 Python tests and five JavaScript interaction tests pass. Ruff lint/format checks pass. Python 3.10 and 3.13 package checks run in source-repository CI.

The browser harness keeps detailed private results in its output directory, outside the repository. Screenshots mask the account's Audience UUID. ComfyUI execution history stores the same result UI payload that renders the response widget.

To repeat the live checks, start an authenticated local ComfyUI server with the pack installed, install the widget-build development dependencies, and provide a JSON file containing a small ready Audience's `id` and `mindCount`:

```sh
node scripts/test_browser.mjs http://127.0.0.1:8197 /path/to/qa-audience.json /tmp/minds-comfy-single-node
```

This opt-in harness runs real research and consumes the account's existing usage. It persists request IDs in its output state file, so retries reuse the same runs. It asserts native media saving and actual iframe contents, and captures image/video workflows. No Minds key is supplied to the harness or browser.

Comfy Cloud execution, Comfy Registry installation and native Partner Node listing are not covered by these checks. Registry publication is tracked separately and needs publisher authentication.
