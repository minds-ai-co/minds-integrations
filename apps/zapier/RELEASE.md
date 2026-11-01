# Releasing Minds for Zapier

2026-11-01: private 1.3.0 is uploaded and fixes the live 1.2.0 pending-preparation failure. Preview Request Identifier is now required: map a stable source-event ID, retain it on retries, and use a new ID for a new intended plan. The action observes the same accepted operation within a bounded runtime, then asks Zapier to retry if preparation is still pending. Native cloud verification passed replay, pending deferral and retrieval of its saved draft, plus exclusion of unconfirmed results. Never migrate existing Zaps automatically across this required-input change.

Current validation: 26 checks passed, zero errors or publishing warnings, and two general warnings (D004: map the draft ID from Preview; D027: SDK 19.3.0 is recommended while this package uses 19.1.0). See the [1 November acceptance record](../creative-marketplaces/qa/recovery-2026-11-01/acceptance.json).

Fresh 1.2.0 cloud checks passed authentication, New Study, Find Study, saved-preview replay, unconfirmed-results exclusion and empty-summary behavior. The first preview call exposed HTTP 202 handling and is the regression addressed by 1.3.0. The Zap editor login currently requires a human challenge. Version 1.0.0 has one user; 1.1.0 and 1.2.0 each have zero. These observations do not establish a completed research run or three-user publication eligibility.

Historical 2026-10-01 update: existing integration 246865 had private version 1.2.0 uploaded, including material previews, stable retry identifiers, an exact-draft review URL and Get Completed Research Results. Its earlier editor acceptance awaited the paired webapp release; current blockers are recorded above. Version 1.0.0 remains private with one Zap user. Its public promotion was attempted; the returned checks passed except S001 (at least three users with live Zaps). The deploy key already exists in the vault; do not create a duplicate. See [creative launch record](../creative-marketplaces/LAUNCH.md).

The package uses `zapier-platform-core` / `zapier-platform-cli` 19.1.0. Zapier runs 19.x on Node.js 22. Older smoke evidence does not establish full native editor acceptance.

Registered on 2026-09-27 as integration 246865 (`.zapierapprc`) under the Minds-owned Zapier account developers@getminds.ai (password and deploy key in pass under `agents/zapier/getminds/`). Its email domain matches the homepage `getminds.ai`, which Zapier requires of an Admin before publishing (check M005). Zapier requires the first pushed version to be 0.0.x or 1.0.0, so the first release is 1.0.0.

## 1. Existing account and deploy-key ownership

The Minds company account, registration and deploy key already exist. Reuse them; the setup history below is not an instruction to register another app or issue another deploy key.

1. Sign in at <https://developer.zapier.com> with the Minds account. Complete the developer profile and accept the Zapier Developer Terms / Platform Agreement when prompted (<https://zapier.com/developer-platform/tos>). Publishing is blocked until they are accepted (check U001).
2. Create a deploy key at <https://developer.zapier.com/partner-settings/deploy-keys/>. Store it in the team vault; do not paste it into chat, tickets or the repository. It replaces an interactive CLI login, including for SSO accounts and CI.

   Alternative without a deploy key: run `npx zapier-platform login` in a terminal and enter email, password and 2FA code. It writes the key to `~/.zapierrc`. `npx zapier-platform login --sso` asks only for the deploy key.

Everything below runs without a browser.

## 2. Register, push and test privately (commands)

Run from `apps/zapier`, with the deploy key in the environment (`ZAPIER_DEPLOY_KEY` takes precedence over `~/.zapierrc`):

```bash
cd apps/zapier
npm install
npm test
npx zapier-platform validate

# Optional: live check of every operation with a Minds test-account API key.
MINDS_API_KEY=... npm run smoke -- --write

export ZAPIER_DEPLOY_KEY=...   # load from the vault, never type it into history

npx zapier-platform register "Minds" \
  --desc "Minds is a synthetic market research platform where AI personas of your customers answer research questions in minutes." \
  --url https://getminds.ai \
  --audience private \
  --role employee \
  --category marketing \
  --no-subscribe

npx zapier-platform push
npx zapier-platform versions
```

`register` writes `.zapierapprc` (integration ID and key, not secret). Commit it so later pushes from any machine target the same integration.

Private testing:

1. Open <https://zapier.com/app/editor>, add a step, search for "Minds" (it appears with a Private tag), connect with a Minds API key and test each trigger, action and search.
2. Invite testers by email, or share an invite link:

   ```bash
   npx zapier-platform users:add colleague@getminds.ai 1.3.0 -f
   npx zapier-platform users:links
   ```

   Email invites are capped at 200 users. The invite link cannot be revoked.
3. Later versions: bump `version` in `package.json`, then `npx zapier-platform push`. Have each owner review compatibility, select the version, map any new required inputs and test their Zap before activation. Do not bulk-migrate existing Zaps across the new 1.3.0 identifier requirement.

For pilot acceptance, map the source event ID into Preview Request Identifier and confirm that its saved plan opens in Minds with the intended Study and material. Research is reviewed and explicitly run in Minds. Test Get Completed Research Results later with the same Study and draft IDs after completion; an immediate lookup of an unconfirmed draft correctly finds nothing. Keep pending draft IDs in the workflow's own records when using a separate scheduled result lookup. No completion or user count may be fabricated to pass publication checks.

## 3. Going public (Zapier App Directory)

Publishing is gated by real usage and a human review:

- **At least 3 users with a live Zap** that uses the integration (check S001), a live Zap for **every** visible trigger, action and search (S002), and a successful run of each (T001). Build these Zaps during private testing and keep them on. Zapier does not say whether the 3 users may be Minds employees.
- A logo: upload `assets/logo-256.png` (256x256 PNG with transparency, check M004) in the developer platform under Integration Home → Settings.
- A non-expiring Minds reviewer account for `integration-testing@zapier.com` with every feature the integration uses enabled (including paid features). Zapier support must be able to reset its password.
- Submit in the developer platform: Integration Home → **Publish** → complete the form → **Submit for Review**. `npx zapier-platform promote 1.0.0` runs the same checks and returns the form URL. Review takes about a week; the integration stays private meanwhile.
- After approval the integration is listed with a **Beta** tag for 90 days, then becomes public automatically. It can leave Beta early after one Zapier signup through a Zapier embed.

Building and publishing an integration is free, and the free Zapier plan is enough to build the test Zaps (two-step Zaps, 15-minute polling).

## Operating limits to keep in mind

- Each action, search and polling call must finish within 30 seconds. An earlier preview took about four seconds, but research interpretation can exceed that. Verify the current preview action in the real editor; do not treat old timing as a guarantee or auto-confirm research to work around this platform limit.
- New Study returns the newest 100 Studies; Zapier deduplicates by Study `id`, so each Study fires once.

References: [CLI reference](https://docs.zapier.com/platform/reference/cli-docs), [publishing requirements](https://docs.zapier.com/platform/publish/integration-publishing-requirements), [integration checks](https://docs.zapier.com/platform/publish/integration-checks-reference), [public integration process](https://docs.zapier.com/platform/publish/public-integration), [sharing](https://docs.zapier.com/platform/manage/sharing), [operating constraints](https://docs.zapier.com/platform/build/operating-constraints).
