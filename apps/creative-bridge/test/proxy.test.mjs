import test from 'node:test';
import assert from 'node:assert/strict';
import { proxy } from '../deploy/proxy.mjs';

const env = { ALLOWED_ORIGINS: 'https://app.example', UPSTREAM_ORIGIN: 'https://pilot.ondigitalocean.app', RATE_LIMITER: { limit: async () => ({ success: true }) } };
test('proxy strips Minds login cookies and unrelated headers while preserving callback and redirect', async () => {
  const request = new Request('https://getminds.ai/integrations/creative/callback?code=private-code', { headers: {
    cookie: `app_login=private; minds_creative_oauth=${'a'.repeat(43)}; other=private`, 'x-private-header': 'private',
  } });
  const response = await proxy(request, env, async (url, options) => {
    assert.equal(url.hostname, 'pilot.ondigitalocean.app');
    assert.equal(url.searchParams.get('code'), 'private-code');
    assert.equal(options.headers.get('cookie'), `minds_creative_oauth=${'a'.repeat(43)}`);
    assert.equal(options.headers.get('x-private-header'), null);
    assert.equal(options.redirect, 'manual');
    return new Response(null, { status: 302, headers: { Location: 'https://getminds.ai/oauth/authorize' } });
  });
  assert.equal(response.status, 302);
});
test('proxy bounds its route, rejects other origins and rate-limits before upstream work', async () => {
  const fetch = () => { throw Error('Upstream must not be called'); };
  assert.equal((await proxy(new Request('https://getminds.ai/api/private'), env, fetch)).status, 404);
  assert.equal((await proxy(new Request('https://getminds.ai/integrations/creative/session', { headers: { Origin: 'https://evil.example' } }), env, fetch)).status, 403);
  const response = await proxy(new Request('https://getminds.ai/integrations/creative/sessions', { headers: { Origin: 'https://app.example' } }), { ...env, RATE_LIMITER: { limit: async () => ({ success: false }) } }, fetch);
  assert.equal(response.status, 429);
  assert.equal(response.headers.get('access-control-allow-origin'), 'https://app.example');
});
