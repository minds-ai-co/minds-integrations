import test from 'node:test';
import assert from 'node:assert/strict';
import { proxy } from '../deploy/proxy.mjs';

const env = { ALLOWED_ORIGINS: 'https://app.example', UPSTREAM_ORIGIN: 'https://pilot.ondigitalocean.app', RATE_LIMITER: { limit: async () => ({ success: true }) } };
test('Figma opaque origin forwards the capability but strips ambient login cookies', async () => {
  const figma = { ...env, ALLOWED_ORIGINS: `${env.ALLOWED_ORIGINS},null` };
  const request = new Request('https://getminds.ai/integrations/creative/studies', { headers: {
    Origin: 'null', Authorization: `Bearer ${'b'.repeat(43)}`, Cookie: 'app_login=private',
  } });
  const response = await proxy(request, figma, async (_url, options) => {
    assert.equal(options.headers.get('origin'), 'null');
    assert.equal(options.headers.get('authorization'), `Bearer ${'b'.repeat(43)}`);
    assert.equal(options.headers.get('cookie'), null);
    return new Response('{}', { headers: { 'Access-Control-Allow-Origin': 'null' } });
  });
  assert.equal(response.headers.get('access-control-allow-origin'), 'null');
  assert.equal(response.headers.get('access-control-allow-credentials'), null);
  assert.equal((await proxy(request, env, () => { throw Error('Must remain disabled without opt-in'); })).status, 403);
});
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

test('native Study endpoints pass the same isolated proxy boundary', async () => {
  const figma = { ...env, ALLOWED_ORIGINS: `${env.ALLOWED_ORIGINS},null` };
  for (const path of ['audiences', 'minds', 'study', 'draft', 'confirm', 'figma-feedback']) {
    const request = new Request(`https://getminds.ai/integrations/creative/${path}`, { headers: { Origin: 'null', Authorization: `Bearer ${'b'.repeat(43)}`, Cookie: 'app_login=private' } });
    let called = false;
    const response = await proxy(request, figma, async (url, options) => {
      called = true; assert.equal(url.pathname, `/integrations/creative/${path}`);
      assert.equal(options.headers.get('cookie'), null);
      return new Response('{}');
    });
    assert.equal(response.status, 200); assert.equal(called, true);
  }
}
);
