# Minds for Make

Source of truth for the Minds custom app in Make. Every JSON file maps to a
section of a Make app component, and `scripts/deploy.mjs` pushes them through
the Make SDK Apps API.

The app uses the canonical Minds Study API (`https://getminds.ai/api/v1/studies`,
`/audiences`, `/auth/me`). The deprecated `/api/v1/panels` aliases are not used.

| Module | Type | API |
| --- | --- | --- |
| Watch new studies (`watchNewStudies`) | Polling trigger | `GET /studies` |
| Create a study (`createStudy`) | Action | `POST /studies` |
| Get a study (`getStudy`) | Action | `GET /studies/{studyId}` |
| Search studies (`searchStudies`) | Search | `GET /studies`, filtered by name |
| Get a study summary (`getStudySummary`) | Action | `GET /studies/{studyId}/summary` |
| Preview a research plan (`previewResearchPlan`) | Action | `POST /studies/{studyId}/research-plans/preview` |
| Make an API call (`makeApiCall`) | Universal | any path under `https://getminds.ai/api` |

RPCs `listAudiences` and `listStudies` feed the Audience and Study dropdowns.

The app deliberately has no deletion, confirmation or execution module. Preview
a research plan saves a draft and returns its review URL; a person confirms the
exact draft in Minds before research runs.

`GET /studies` is ordered by last update, so Watch new studies is an
`unordered` date trigger keyed on `createdAt`: Make reads every page (100 per
request) and emits only Studies created after the last run.

## Layout

- `app.json`: app name, label, description and theme.
- `base.json`: base URL, Bearer authorization, error handling, log sanitization.
- `connection/`: API-key connection, verified against `GET /auth/me`.
- `rpcs/`: dynamic dropdown sources.
- `modules/manifest.json`: module names, types, labels and descriptions;
  `modules/<name>/` holds the `api`, `parameters`, `expect`, `interface`,
  `samples` (and `epoch`) sections.
- `docs.md`: the user documentation shown in Make.
- `assets/logo-512.png`: black mark on transparency; Make renders it white on the `#000000` theme.

## Development

```bash
node --test apps/make/contract.test.mjs
MINDS_API_KEY=... node apps/make/scripts/live-smoke.mjs --write
MAKE_API_TOKEN=... MAKE_ZONE=eu1.make.com node apps/make/scripts/deploy.mjs
```

The contract tests execute every communication section with a small IML
evaluator (`scripts/runner.mjs`) against a fake Minds API, and check Make's
review rules (labels, limits, pagination, universal module, logo). The live
smoke test runs the same sections against production; `--write` creates a
throwaway Study, previews a plan on it and deletes the Study. Use a test
account's key. Make remains the authority on IML; test changed modules in a
real scenario after deploying.
