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
async function authorize(env, origin = 'https://app.example') {
  const created = await env.call('/sessions', { method: 'POST', headers: { Origin: origin } });
  const session = await created.json();
  const start = await fetch(session.connectUrl, { redirect: 'manual' });
  const params = new URL(start.headers.get('location')).searchParams;
  const cookie = start.headers.get('set-cookie').split(';')[0];
  const callback = `/callback?state=${params.get('state')}&code=code`;
  assert.equal((await env.call(callback, { headers: { Cookie: cookie } })).status, 200);
  return { headers: { Origin: origin, Authorization: `Bearer ${session.session}` }, callback, cookie };
}
test('opaque Figma origins require independent capabilities and browser-approved OAuth', async t => {
  const env = await setup(t);
  const created = await env.call('/sessions', { method: 'POST', headers: { Origin: 'null' } });
  assert.equal(created.headers.get('access-control-allow-origin'), 'null');
  assert.equal(created.headers.get('access-control-allow-credentials'), null);
  const session = await created.json();
  const headers = { Origin: 'null', Authorization: `Bearer ${session.session}` };
  assert.equal((await env.call('/studies', { headers })).status, 401);
  assert.equal((await env.call('/studies', { headers: { Origin: 'null', Cookie: 'app_login=existing' } })).status, 401);
  const start = await fetch(session.connectUrl, { redirect: 'manual' });
  const state = new URL(start.headers.get('location')).searchParams.get('state');
  assert.equal((await env.call(`/callback?state=${state}&code=code`, { headers: { Cookie: `minds_creative_oauth=${'x'.repeat(43)}` } })).status, 400);
  assert.equal((await env.call(`/callback?state=${state}&code=code`, { headers: { Cookie: start.headers.get('set-cookie').split(';')[0] } })).status, 200);
  assert.equal((await env.call('/studies', { headers })).status, 200);
  assert.equal((await env.call('/studies', { headers: { ...headers, Origin: 'https://app.example' } })).status, 403);
  const preview = { method: 'POST', headers: { ...headers, 'Content-Type': 'application/json', 'Idempotency-Key': 'figma-preview' }, body: JSON.stringify({ studyId: 'study-1', request: 'Review', source: { kind: 'prompt', label: 'Copy', content: 'Coffee' } }) };
  assert.equal((await env.call('/preview', preview)).status, 202);
  const second = await authorize(env, 'null');
  assert.equal((await env.call('/preview?studyId=study-1&requestId=figma-preview', { headers: second.headers })).status, 404);
  assert.equal((await env.call('/execute', { method: 'POST', headers })).status, 404);
  assert.equal((await env.call('/session', { method: 'DELETE', headers })).status, 200);
  assert.equal((await env.call('/studies', { headers })).status, 401);
  assert.equal((await env.call('/studies', { headers: second.headers })).status, 200);
});
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
  assert.equal(preview.status, 202);
  assert.equal((await env.call('/preview?studyId=study-1&requestId=event-1', { headers })).status, 200);
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

test('run retrieval resolves an owned draft and never exposes an execute gateway', async t => {
  const draftPlanId = '75e10cab-cf1a-4dd2-8470-c71b8c450d90';
  const runId = '943f9d7c-aab6-4a78-ab67-a7827e1358c9';
  let confirmed = false;
  const calls = [];
  const env = await setup(t, { request: async (url, options) => {
    calls.push({ url, options });
    const value = url.endsWith('/oauth/register') ? { client_id: 'test' }
      : url.endsWith('/oauth/token') ? { access_token: 'fake-access', expires_in: 3600 }
      : url.endsWith('/preview') ? { data: { draftPlanId, draftStatus: confirmed ? 'confirmed' : 'draft', runId } }
      : { data: { runId, status: 'completed', artifacts: [] } };
    return new Response(JSON.stringify(value));
  } });
  const { headers } = await authorize(env);
  const path = `/run?studyId=study-1&draftPlanId=${draftPlanId}`;
  assert.equal((await (await env.call(path, { headers })).json()).data.status, 'not_started');
  assert.ok(!calls.some(call => call.url.includes('/research-runs/')));
  confirmed = true;
  const result = await (await env.call(path, { headers })).json();
  assert.equal(result.data.draftPlanId, draftPlanId);
  assert.equal(result.data.runId, runId);
  const read = calls.find(call => call.url.includes('/research-runs/'));
  assert.equal(read.url, `https://getminds.ai/api/v1/studies/study-1/research-runs/${runId}`);
  assert.equal(read.options.headers.Authorization, 'Bearer fake-access');
  assert.deepEqual(JSON.parse(calls.find(call => call.url.endsWith('/preview')).options.body), { loadLatest: true, draftPlanId });
  assert.equal((await env.call('/run?studyId=study-1&draftPlanId=bad', { headers })).status, 400);
  assert.equal((await env.call(path, { headers: { ...headers, Origin: 'null' } })).status, 403);
  assert.equal((await env.call('/execute', { method: 'POST', headers })).status, 404);
  assert.equal((await env.call('/run', { method: 'POST', headers })).status, 404);
});

test('slow drafts acknowledge immediately, stay session-bound and deduplicate retries', async t => {
  let finish;
  const waiting = new Promise(resolve => { finish = resolve; });
  let plans = 0;
  const env = await setup(t, { previewConcurrency: 1, request: async url => {
    if (url.endsWith('/preview')) { plans++; await waiting; }
    const value = url.endsWith('/oauth/register') ? { client_id: 'test' } : url.endsWith('/oauth/token') ? { access_token: 'fake-access', expires_in: 3600 } : { data: { draftPlanId: 'owned-draft' } };
    return new Response(JSON.stringify(value));
  } });
  const { headers } = await authorize(env);
  const options = { method: 'POST', headers: { ...headers, 'Content-Type': 'application/json', 'Idempotency-Key': 'slow-event' }, body: JSON.stringify({ studyId: 'study-1', request: 'Review', source: { kind: 'prompt', label: 'Copy', content: 'Coffee' } }) };
  assert.equal((await env.call('/preview', options)).status, 202);
  assert.equal((await env.call('/preview', options)).status, 202);
  assert.equal(plans, 1);
  assert.equal((await env.call('/preview', { ...options, headers: { ...options.headers, 'Idempotency-Key': 'another-event' } })).status, 429);
  const poll = '/preview?studyId=study-1&requestId=slow-event';
  assert.equal((await env.call(poll, { headers })).status, 202);
  assert.equal((await env.call(poll.replace('study-1', 'study-2'), { headers })).status, 404);
  const other = await authorize(env);
  assert.equal((await env.call(poll, { headers: other.headers })).status, 404);
  assert.equal((await env.call('/preview', { ...options, body: options.body.replace('Coffee', 'Tea') })).status, 409);
  finish();
  await new Promise(resolve => setImmediate(resolve));
  assert.equal((await (await env.call(poll, { headers })).json()).data.draftPlanId, 'owned-draft');
});

test('failed preparation is surfaced once and only a later explicit retry starts another attempt', async t => {
  let plans = 0;
  const env = await setup(t, { request: async url => {
    if (url.endsWith('/preview')) { plans++; throw new Error('private provider diagnostic'); }
    return new Response(JSON.stringify(url.endsWith('/oauth/register') ? { client_id: 'test' } : { access_token: 'fake-access', expires_in: 3600 }));
  } });
  const { headers } = await authorize(env);
  const options = { method: 'POST', headers: { ...headers, 'Content-Type': 'application/json', 'Idempotency-Key': 'failed-event' }, body: JSON.stringify({ studyId: 'study-1', request: 'Review', source: { kind: 'prompt', label: 'Copy', content: 'Coffee' } }) };
  assert.equal((await env.call('/preview', options)).status, 202);
  const failed = await env.call('/preview', options);
  assert.equal(failed.status, 500);
  assert.equal((await failed.json()).message, 'Creative review is temporarily unavailable.');
  assert.equal(plans, 1);
  assert.equal((await env.call('/preview', options)).status, 202);
  assert.equal(plans, 2);
});
