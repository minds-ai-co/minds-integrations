import test from 'node:test';
import assert from 'node:assert/strict';
import { previewBody, studyPath, CreativeReviewClient, reviewUrl, formatRunFindings } from '../src/index.js';
test('exports only the selected source and never a run instruction', () => {
  const body = previewBody({ request: 'Evaluate clarity', source: { kind: 'document', label: 'Selected design', url: 'https://assets.example/design.pdf' }, run: true });
  assert.deepEqual(Object.keys(body), ['request', 'studyLocale', 'source']);
  assert.equal(body.source.url, 'https://assets.example/design.pdf');
  assert.equal(studyPath('a/b', '/summary'), '/api/v1/studies/a%2Fb/summary');
});

test('review links preserve the exact draft identity and findings require complete matching evidence', () => {
  assert.equal(reviewUrl('study/a', 'draft&b'), 'https://getminds.ai/?studyId=study%2Fa&draftPlanId=draft%26b');
  const artifacts = [{ kind: 'responses', outputData: { title: 'Clarity', keyFinding: 'Clear headline', summary: 'The message was understood.' } }];
  assert.match(formatRunFindings({ status: 'completed', artifacts }), /The message was understood/);
  for (const status of ['queued', 'running', 'partial', 'failed', 'cancelled', 'plan_limited']) assert.equal(formatRunFindings({ status, artifacts }), null);
  assert.equal(formatRunFindings({ status: 'completed', artifacts: [{ kind: 'responses', outputData: { title: 'No summary yet' } }] }), null);
  assert.equal(formatRunFindings({ status: 'completed', artifacts: [{ ...artifacts[0], responseCoverage: { missing: 2 } }] }), null);
});
test('requires readable sources and supports signed owner-scoped uploads', () => {
  for (const url of ['http://assets.example/a.png', 'https://user:pass@assets.example/a.png', '//assets.example/a.png', '/private/file.png']) {
    assert.throws(() => previewBody({ request: 'Review', source: { kind: 'image', label: 'Frame', url } }));
  }
  assert.equal(previewBody({ request: 'Review', source: { kind: 'image', label: 'Frame', url: '/api/uploads/chat/owner/frame.png?sig=signature' } }).source.kind, 'image');
  assert.throws(() => previewBody({ request: 'Review', studyLocale: 'xx', source: { kind: 'prompt', label: 'Copy', content: 'Words' } }));
});
test('the browser uses an ephemeral gateway session with credentials omitted', async () => {
  const calls = [];
  const client = new CreativeReviewClient('https://getminds.ai/integrations/creative', async (url, options) => {
    calls.push({ url, options });
    return new Response(JSON.stringify(url.endsWith('/sessions') ? { session: 'ephemeral', connectUrl: 'https://getminds.ai/connect' } : { connected: true }), { status: 200 });
  });
  await client.connect(); await client.status(); await client.disconnect();
  assert.equal(calls[1].options.headers.Authorization, 'Bearer ephemeral');
  assert.equal(calls[1].options.credentials, 'omit');
  assert.equal(client.session, null);
});

test('default fetch preserves the browser receiver required by Adobe Express', async t => {
  const original = globalThis.fetch;
  t.after(() => { globalThis.fetch = original; });
  globalThis.fetch = function () {
    assert.equal(this, globalThis);
    return Promise.resolve(new Response(JSON.stringify({ connected: false }), { status: 200 }));
  };
  const client = new CreativeReviewClient('https://getminds.ai/integrations/creative');
  assert.deepEqual(await client.status(), { connected: false });
});
