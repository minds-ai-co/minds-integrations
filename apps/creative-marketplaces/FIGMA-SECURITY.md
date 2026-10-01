# Figma sandbox authorization review — 1 October 2026

## Observed host and scope

The official Figma Desktop app on Alexander's MacBook generated plugin ID `1687580744489834770` and opened the production integration bundle in a dedicated blank QA design. A temporary, non-secret native panel diagnostic reported `window.origin` as the literal string `null`. The diagnostic was removed and the original built HTML restored. Native connection currently fails while production denies that origin.

The tracked deployment opts into that exact string on both the edge proxy and Node gateway. It does **not** assert that `null` identifies Figma: other sandboxed documents can use the same origin. This change is suitable for this public OAuth application's capability model, not for an API authenticated by ambient cookies or an origin-only trust check.

## Authorization boundary

- Session allocation is unauthenticated and bounded by edge/Node rate limits, 1,000 sessions and one-hour expiry. Allocation gives no Minds account access.
- Each session gets a cryptographically random 256-bit bearer capability, stored only in its owning panel's memory and hashed in the gateway. Session responses contain no Minds access or refresh tokens.
- Each browser connection uses a separate one-use ticket, OAuth PKCE, a one-use state and a matching HttpOnly SameSite cookie. Existing Minds login cookies are never forwarded to the gateway. Consent is explicit in the authenticated Minds browser.
- Authenticated calls require the capability **and** its matching stored origin. This origin check keeps named Canva/Express sessions separate, but cannot distinguish two opaque-origin documents. Independent opaque sessions are isolated by their capabilities and separate preview maps.
- The edge forwards only bridge headers and the dedicated creative OAuth cookie. CORS never permits credentials. Panel fetches omit cookies and refuse redirects.
- Minds enforces Study/source/draft ownership with the authenticated user's token. The fixed gateway has no arbitrary proxy, confirmation or execution endpoint. Research still requires review and explicit confirmation in Minds.
- The UI accepts host messages only from its parent or top frame with the exact official `https://www.figma.com` origin and matches outstanding random request IDs. Native Desktop replies were verified to come from the top-frame relay rather than the immediate UI wrapper. Capabilities and OAuth tokens are not sent through host messages. The main plugin permits only HTTPS links on getminds.ai.
- Disconnect deletes the session and its OAuth tickets/states, then attempts upstream revocation. Refresh rotations are serialized. Restart disconnects all panels.

## Residual risks and operational decision

Any opaque-origin document can allocate its own connection and ask a person to approve the same public OAuth client. Origin admission is not an endorsement of that document, plugin attestation, or protection from OAuth consent phishing. The native plugin's genuine ID and Community provider review identify the distributed software; the OAuth screen identifies the connected Minds application. A stolen capability from another opaque document would carry that session's access, as any stolen bearer credential would. Never persist capabilities, expose them in logs/screenshots, or forward them to a parent frame.

Explicit consent, no ambient authorization, high-entropy isolated capabilities and upstream ownership remain the security boundary. This review accepts the literal opaque origin for the existing single-instance gateway within the user's authorized integration launch. Public release still requires native OAuth/material/exact-run acceptance and provider review; it is not declared complete by this configuration change. GenStudio remains disabled.

## Verification

Gateway and edge regressions cover missing capabilities despite login cookies, pre-consent access rejection, incorrect callback cookies, cross-origin access denial, two independent opaque sessions unable to read each other's preview, disconnect isolation, stripped ambient cookies, absence of credentialed CORS, and disabled execution routes. Existing PKCE, replay, expiry, rate-limit, token refresh, source import and exact-draft tests remain required. On production, verify named Canva/Express origins still work and other named origins remain rejected, then complete native Figma acceptance.

Rollback removes `null` from both tracked allowlists and redeploys. Existing named host origins remain configured. Restarting the single Node instance requires reconnecting all panels.
