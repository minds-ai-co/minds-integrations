import test from 'node:test';
import assert from 'node:assert/strict';
import { nativeStudyRoute } from '../src/native-study.js';
const studyId = '11111111-1111-4111-8111-111111111111';
const audienceId = '33333333-3333-4333-8333-333333333333';
const draftPlanId = '22222222-2222-4222-8222-222222222222';
function route(path, body, options = {}) {
  const calls = [];
  const result = nativeStudyRoute({ path, req: { method: 'POST', headers: { 'idempotency-key': 'stable-request' } },
    url: new URL(`https://getminds.ai${path}`), headers: { Authorization: 'Bearer test-upstream' },
    bytes: async () => Buffer.from(typeof body === 'string' ? body : JSON.stringify(body)),
    upstream: async (url, request) => { calls.push({ url, request }); return { data: { id: studyId } }; }, ...options });
  return { result, calls };
}
test('Study creation is private, idempotent and cannot execute research', async () => {
  const { result, calls } = route('/study', { name: '  Selected frame  ', audienceIds: [audienceId] });
  await result;
  assert.equal(calls.length, 1); assert.equal(calls[0].url, '/api/v1/studies');
  assert.equal(calls[0].request.headers['Idempotency-Key'], 'stable-request');
  assert.deepEqual(JSON.parse(calls[0].request.body), { name: 'Selected frame', audienceIds: [audienceId], isLinkSharingEnabled: false });
});
test('execution forwards only the exact accepted draft revision and Audiences', async () => {
  const input = { studyId, draftPlanId, revision: 2, confirmation: { accepted: true, advancedMethodOptIn: false }, audienceIds: [audienceId] };
  const { result, calls } = route('/confirm', input); await result;
  assert.equal(calls[0].url, `/api/v1/studies/${studyId}/research-runs`);
  const { studyId: omitted, ...expected } = input;
  assert.deepEqual(JSON.parse(calls[0].request.body), expected);
});
for (const [path, body] of [
  ['/study', { name: 'Frame', audienceIds: [audienceId], run: true }],
  ['/study', { name: 'Frame', audienceIds: [audienceId, audienceId] }],
  ['/study', '{'],
  ['/confirm', { studyId, draftPlanId, revision: 2, confirmation: { accepted: false }, audienceIds: [audienceId] }],
  ['/confirm', { studyId: '../other', draftPlanId, revision: 2, confirmation: { accepted: true }, audienceIds: [audienceId] }],
  ['/figma-feedback', { studyId, runId: draftPlanId, frameUrl: 'https://www.figma.com/design/Key', feedback: 'summary', action: 'publish', accessToken: 'caller-supplied' }],
]) {
  test(`invalid ${path} input cannot reach any upstream operation (${JSON.stringify(body)})`, async () => {
    const { result, calls } = route(path, body);
    await assert.rejects(result, error => error.status === 400);
    assert.equal(calls.length, 0);
  });
}
test('comment delivery uses the canonical service and passes its exact run/frame/hash selection', async () => {
  const input = { studyId, runId: draftPlanId, frameUrl: 'https://www.figma.com/design/Key?node-id=4-8', expectedNodeId: '4:8', feedback: 'summary', action: 'publish', previewHash: 'a'.repeat(64), commentKeys: ['b'.repeat(64)] };
  const { result, calls } = route('/figma-feedback', input); await result;
  assert.equal(calls[0].url, '/api/v1/integrations/figma/comments');
  assert.deepEqual(JSON.parse(calls[0].request.body), input);
});

test('individual Minds use canonical atomic Audience configuration and retain the Study replay key', async () => {
  const { result, calls } = route('/study', { name: 'Selected frame', audienceIds: [], mindIds: [audienceId] });
  await result;
  assert.deepEqual(JSON.parse(calls[0].request.body), { name: 'Selected frame', audienceIds: [], isLinkSharingEnabled: false, audienceConfigs: [{ name: 'Selected frame', mindIds: [audienceId] }] });
  assert.equal(calls[0].request.headers['Idempotency-Key'], 'stable-request');
});

test('Mind search is encoded on its fixed read route without accepting caller URLs', async () => {
  const { result, calls } = route('/minds', null, { req: { method: 'GET' }, url: new URL('https://getminds.ai/minds?offset=100&search=Design%20%26%20parents') });
  await result;
  assert.equal(calls[0].url, '/api/v1/minds?limit=100&offset=100&search=Design+%26+parents');
});
