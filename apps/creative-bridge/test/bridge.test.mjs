import test from 'node:test';
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { createBridge } from '../src/bridge.js';

async function setup(t, config = {}) {
  const upstreamCalls = [];
  const server = createServer();
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const origin = `http://127.0.0.1:${server.address().port}`;
  const request = async (url, options) => {
    upstreamCalls.push({ url, options });
    const value = url.endsWith('/oauth/register') ? { client_id: 'test-client' }
      : url.endsWith('/oauth/token') ? { access_token: 'fake-access', refresh_token: 'fake-refresh', expires_in: 3600 }
      : url.endsWith('/api/uploads/proxy') ? { path: 'chat/owner/a.png', url: '/api/uploads/chat/owner/a.png?sig=fake' }
      : url.includes('/preview') ? { data: { draftPlanId: 'draft', status: 'needs_confirmation' } }
      : { data: [{ id: 'study-1', name: 'Creative review' }] };
    return new Response(JSON.stringify(value), { status: 200 });
  };
  server.on('request', createBridge({ publicUrl: `${origin}/integrations/creative`, allowedOrigins: ['https://app.example', 'null'], request, ...config }));
  t.after(() => new Promise(resolve => { server.close(resolve); server.closeAllConnections(); }));
  const call = (path, options = {}) => fetch(`${origin}/integrations/creative${path}`, { redirect: 'manual', ...options });
  return { origin, call, upstreamCalls };
}
async function authorize(env) {
  const created = await env.call('/sessions', { method: 'POST', headers: { Origin: 'https://app.example' } });
  const session = await created.json();
  const start = await fetch(session.connectUrl, { redirect: 'manual' });
  const params = new URL(start.headers.get('location')).searchParams;
  const cookie = start.headers.get('set-cookie').split(';')[0];
  const callback = `/callback?state=${params.get('state')}&code=code`;
  assert.equal((await env.call(callback, { headers: { Cookie: cookie } })).status, 200);
  return { headers: { Origin: 'https://app.example', Authorization: `Bearer ${session.session}` }, callback, cookie };
}
test('OAuth is cookie-bound, uses PKCE and never returns Minds tokens to the adapter', async t => {
  const env = await setup(t);
  const created = await env.call('/sessions', { method: 'POST', headers: { Origin: 'https://app.example' } });
  const session = await created.json();
  assert.ok(!JSON.stringify(session).includes('fake-access'));
  const start = await fetch(session.connectUrl, { redirect: 'manual' });
  const params = new URL(start.headers.get('location')).searchParams;
  assert.equal(params.get('code_challenge_method'), 'S256');
  assert.equal(params.get('scope'), 'openid flows:read flows:write');
  assert.equal((await fetch(session.connectUrl, { redirect: 'manual' })).status, 400);
  const callback = `/callback?state=${params.get('state')}&code=code`;
  assert.equal((await env.call(callback)).status, 400);
  const cookie = start.headers.get('set-cookie').split(';')[0];
  assert.equal((await env.call(callback, { headers: { Cookie: cookie } })).status, 200);
  assert.equal((await env.call(callback, { headers: { Cookie: cookie } })).status, 400);
  const response = await env.call('/session', { headers: { Origin: 'https://app.example', Authorization: `Bearer ${session.session}` } });
  assert.deepEqual(await response.json(), { connected: true });
  const exchange = env.upstreamCalls.find(call => call.url.endsWith('/oauth/token'));
  assert.equal(exchange.options.body.get('code_verifier').length, 43);
});
test('rejects unknown origins, stolen cross-origin sessions and disconnected access', async t => {
  const env = await setup(t);
  assert.equal((await env.call('/sessions', { method: 'POST', headers: { Origin: 'https://evil.example' } })).status, 403);
  assert.equal((await env.call('/sessions', { method: 'POST' })).status, 403);
  const auth = await authorize(env);
  assert.equal((await env.call('/studies', { headers: { ...auth.headers, Origin: 'null' } })).status, 403);
  assert.equal((await env.call('/studies', { headers: auth.headers })).status, 200);
  await env.call('/session', { method: 'DELETE', headers: auth.headers });
  assert.equal((await env.call('/studies', { headers: auth.headers })).status, 401);
});
test('uploads PNG bytes as owner-scoped material and previews with an idempotency key', async t => {
  const env = await setup(t); const { headers } = await authorize(env);
  const upload = await env.call('/upload', { method: 'POST', headers: { ...headers, 'Content-Type': 'image/png' }, body: Buffer.from([137,80,78,71,13,10,26,10,0]) });
  assert.equal(upload.status, 200);
  const source = { kind: 'image', label: 'Frame', url: (await upload.json()).url };
  const preview = await env.call('/preview', { method: 'POST', headers: { ...headers, 'Content-Type': 'application/json', 'Idempotency-Key': 'event-1' }, body: JSON.stringify({ studyId: 'study-1', request: 'Evaluate clarity', source, run: true }) });
  assert.equal(preview.status, 200);
  const request = env.upstreamCalls.find(call => call.url.endsWith('/preview'));
  assert.equal(request.options.headers['Idempotency-Key'], 'event-1');
  assert.equal(JSON.parse(request.options.body).run, undefined);
  assert.ok(!env.upstreamCalls.some(call => call.url.endsWith('/execute') || call.url.endsWith('/confirm')));
  assert.equal((await env.call('/upload', { method: 'POST', headers: { ...headers, 'Content-Type': 'image/png' }, body: 'not png' })).status, 400);
});
test('expires sessions and bounds unauthenticated connection allocation', async t => {
  let time = 0; const env = await setup(t, { now: () => time, capacity: 1 });
  const session = await (await env.call('/sessions', { method: 'POST', headers: { Origin: 'https://app.example' } })).json();
  assert.equal((await env.call('/sessions', { method: 'POST', headers: { Origin: 'https://app.example' } })).status, 429);
  time = 3600001;
  assert.equal((await env.call('/session', { headers: { Origin: 'https://app.example', Authorization: `Bearer ${session.session}` } })).status, 401);
});
