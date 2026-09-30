# Releasing Minds for Zapier

2026-09-30 update: reused integration 246865 and pushed private 1.1.0 with creative-URL previews and retry identifiers. Version 1.0.0 remains private with one Zap user. Its public promotion was attempted; the returned checks passed except S001 (at least three users with live Zaps). The deploy key already exists in the vault; do not create a duplicate. See [creative launch record](../creative-marketplaces/LAUNCH.md).

The code is ready: `npm test`, `zapier-platform validate` (28 of 28 integration checks, no publishing warnings) and the live smoke test pass on `zapier-platform-core` / `zapier-platform-cli` 19.1.0, the current release. Zapier runs 19.x on Node.js 22.

Registered on 2026-09-27 as integration 246865 (`.zapierapprc`) under the Minds-owned Zapier account developers@getminds.ai (password and deploy key in pass under `agents/zapier/getminds/`). Its email domain matches the homepage `getminds.ai`, which Zapier requires of an Admin before publishing (check M005). Zapier requires the first pushed version to be 0.0.x or 1.0.0, so the first release is 1.0.0.

## 1. Human steps in the browser (about 5 minutes)

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
   npx zapier-platform users:add colleague@getminds.ai 1.0.0 -f
   npx zapier-platform users:links
   ```

   Email invites are capped at 200 users. The invite link cannot be revoked.
3. Later versions: bump `version` in `package.json`, then `npx zapier-platform push`, and move users with `npx zapier-platform migrate 1.0.0 1.1.0 100`.

## 3. Going public (Zapier App Directory)

Publishing is gated by real usage and a human review:

- **At least 3 users with a live Zap** that uses the integration (check S001), a live Zap for **every** visible trigger, action and search (S002), and a successful run of each (T001). Build these Zaps during private testing and keep them on. Zapier does not say whether the 3 users may be Minds employees.
- A logo: upload `assets/logo-256.png` (256x256 PNG with transparency, check M004) in the developer platform under Integration Home → Settings.
- A non-expiring Minds reviewer account for `integration-testing@zapier.com` with every feature the integration uses enabled (including paid features). Zapier support must be able to reset its password.
- Submit in the developer platform: Integration Home → **Publish** → complete the form → **Submit for Review**. `npx zapier-platform promote 1.0.0` runs the same checks and returns the form URL. Review takes about a week; the integration stays private meanwhile.
- After approval the integration is listed with a **Beta** tag for 90 days, then becomes public automatically. It can leave Beta early after one Zapier signup through a Zapier embed.

Building and publishing an integration is free, and the free Zapier plan is enough to build the test Zaps (two-step Zaps, 15-minute polling).

## Operating limits to keep in mind

- Each action, search and polling call must finish within 30 seconds. Preview Research Plan took about 4 seconds in the live smoke test; very large requests may approach the limit.
- New Study returns the newest 100 Studies; Zapier deduplicates by Study `id`, so each Study fires once.

References: [CLI reference](https://docs.zapier.com/platform/reference/cli-docs), [publishing requirements](https://docs.zapier.com/platform/publish/integration-publishing-requirements), [integration checks](https://docs.zapier.com/platform/publish/integration-checks-reference), [public integration process](https://docs.zapier.com/platform/publish/public-integration), [sharing](https://docs.zapier.com/platform/manage/sharing), [operating constraints](https://docs.zapier.com/platform/build/operating-constraints).
