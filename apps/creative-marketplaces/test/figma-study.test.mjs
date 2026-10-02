import test from 'node:test';
import assert from 'node:assert/strict';
import { createFigmaStudy } from '../src/figma-study.js';

const studyId = '11111111-1111-4111-8111-111111111111';
const draftId = '22222222-2222-4222-8222-222222222222';
const audienceId = '33333333-3333-4333-8333-333333333333';
const make = (t, config = {}) => {
  const calls = []; const opened = []; let confirmed = !!config.completed; const original = globalThis.fetch;
  globalThis.fetch = async (url, options = {}) => {
    const body = typeof options.body === 'string' ? JSON.parse(options.body) : undefined;
    calls.push({ url, options, body });
    if (url.endsWith('/confirm')) confirmed = true;
    const value = url.endsWith('/sessions') ? { session: 'test-capability', connectUrl: 'https://getminds.ai/connect' }
      : url.endsWith('/session') ? { connected: true }
      : url.includes('/minds?') ? { data: [{ id: '44444444-4444-4444-8444-444444444444', name: 'Browser test Mind' }], pagination: { total: config.total || 1 } }
      : url.includes('/audiences?') ? { data: [{ id: audienceId, name: 'Parents', mindCount: 20 }], pagination: { total: config.total || 1 } }
      : url.endsWith('/study') ? { data: { id: studyId, audiences: [{ id: audienceId }] } }
      : url.endsWith('/upload') ? { url: '/api/uploads/chat/owner/design.png' }
      : (url.endsWith('/preview') || url.includes('/draft?')) ? { data: { draftPlanId: draftId, revision: 2, plan: { modules: [{ questions: [{ text: 'Is the offer clear?' }] }], confirmation: { missingInputs: [] } } } }
      : url.endsWith('/confirm') ? { data: { runId: draftId, status: 'queued' } }
      : url.includes('/run?') && !confirmed ? { data: { draftPlanId: draftId, runId: draftId, status: 'not_started' } }
      : url.includes('/run?') ? { data: { runId: draftId, draftPlanId: draftId, status: config.runStatus || 'completed', artifacts: [{ kind: 'responses', outputData: { title: 'Clarity', summary: 'The offer is clear.' } }] } }
      : body?.action === 'preview' ? { data: { previewHash: 'a'.repeat(64), comments: [{ key: 'b'.repeat(64) }] } }
      : { data: { status: 'completed' } };
    return new Response(JSON.stringify(value), { status: 200, headers: { 'Content-Type': 'application/json' } });
  };
  t.after(() => { globalThis.fetch = original; });
  const flow = createFigmaStudy({ gatewayUrl: 'https://getminds.ai/integrations/creative', host: async (type, text) => {
    if (type === 'get-state') return config.saved || null;
    if (type === 'save-state' || type === 'clear-state') return true;
    if (type === 'open') { opened.push(text); return true; }
    assert.equal(type, 'export');
    return { nodeId: config.nodeId || '4:8', nodeType: 'FRAME', label: 'Coffee campaign', bytes: [137, 80, 78, 71] };
  } });
  return { flow, calls, opened };
};

test('select Audience and question creates a private Study; research and board writes wait for explicit inline confirmation', async t => {
  const { flow, calls, opened } = make(t);
  await flow.connect();
  flow.toggleAudience(flow.state.audiences[0]);
  flow.changeQuestion('Is the offer clear?');
  flow.changeBoardUrl('https://www.figma.com/design/FileKey12345/QA?node-id=0-1');
  await flow.prepare();
  assert.equal(flow.state.draft.revision, 2);
  assert.deepEqual(calls.find(call => call.url.endsWith('/study')).body.audienceIds, [audienceId]);
  assert.ok(!calls.some(call => call.url.endsWith('/confirm') || call.url.endsWith('/figma-feedback')));
  await flow.run();
  assert.ok(!calls.some(call => call.url.endsWith('/confirm')));
  flow.state.accepted = true;
  await flow.run();
  assert.deepEqual(calls.find(call => call.url.endsWith('/confirm')).body, { studyId, draftPlanId: draftId, revision: 2,
    confirmation: { accepted: true, advancedMethodOptIn: false }, audienceIds: [audienceId] });
  const published = calls.find(call => call.body?.action === 'publish');
  assert.equal(published.body.frameUrl, 'https://www.figma.com/design/FileKey12345/QA?node-id=4-8');
  assert.equal(published.body.expectedNodeId, '4:8');
  assert.equal(published.body.runId, draftId);
  assert.deepEqual(published.body.commentKeys, ['b'.repeat(64)]);
  assert.equal(flow.state.status, 'Comments published in Figma.');
  assert.equal(opened.length, 1); // One-time OAuth only; no external Study or review page.
});
test('changed question or Audience invalidates confirmation; invalid board links cannot create Studies', async t => {
  const { flow, calls } = make(t);
  await flow.connect(); flow.toggleAudience(flow.state.audiences[0]); flow.changeQuestion('Question');
  flow.changeBoardUrl('https://example.com/design/FileKey12345'); await flow.prepare();
  assert.ok(!calls.some(call => call.url.endsWith('/study')));
  flow.changeBoardUrl('https://www.figma.com/design/FileKey12345/QA'); await flow.prepare();
  flow.state.accepted = true; flow.changeQuestion('Different question');
  assert.equal(flow.state.draft, null); assert.equal(flow.state.accepted, false);
  await flow.run(); assert.ok(!calls.some(call => call.url.endsWith('/confirm')));
});

const saved = { studyId, draftPlanId: draftId, revision: 2, question: 'Question', audienceIds: [audienceId],
  material: { frameUrl: 'https://www.figma.com/design/FileKey12345/QA?node-id=4-8', nodeId: '4:8', label: 'Coffee campaign' } };
test('reopening restores the exact draft, accepts a typed board link, and resumes completed research without another confirmation', async t => {
  const { flow, calls } = make(t, { saved, completed: true });
  await flow.connect();
  assert.equal(flow.state.accepted, false);
  assert.equal(flow.state.boardUrl, '');
  const link = 'https://www.figma.com/design/FileKey12345/QA';
  for (let i = 1; i <= link.length; i++) flow.changeBoardUrl(link.slice(0, i));
  assert.equal(flow.state.draft.draftPlanId, draftId);
  flow.state.accepted = true; await flow.run();
  assert.equal(flow.state.status, 'Comments published in Figma.');
  assert.ok(!calls.some(call => call.url.endsWith('/confirm') || call.url.endsWith('/study') || call.url.endsWith('/upload')));
});
test('a copied board or different selection cannot deliver the saved run to a different frame', async t => {
  const { flow, calls } = make(t, { saved, completed: true, nodeId: '7:9' });
  await flow.connect(); flow.state.accepted = true;
  flow.changeBoardUrl('https://www.figma.com/design/OtherFile/QA'); await flow.run();
  assert.match(flow.state.status, /original board/);
  flow.changeBoardUrl('https://www.figma.com/design/FileKey12345/QA'); await flow.run();
  assert.match(flow.state.status, /original frame/);
  assert.ok(!calls.some(call => call.url.endsWith('/figma-feedback') || call.url.endsWith('/confirm')));
});
for (const runStatus of ['failed', 'partial', 'cancelled', 'plan_limited']) {
  test(`${runStatus} research never posts comments`, async t => {
    const { flow, calls } = make(t, { saved, completed: true, runStatus });
    await flow.connect(); flow.changeBoardUrl('https://www.figma.com/design/FileKey12345/QA');
    flow.state.accepted = true; await flow.run();
    assert.match(flow.state.status, /comments were not posted/);
    assert.ok(!calls.some(call => call.url.endsWith('/figma-feedback') || call.url.endsWith('/confirm')));
  });
}

test('individual Minds create the research population through canonical composite Study creation', async t => {
  const { flow, calls } = make(t);
  await flow.connect(); flow.toggleMind(flow.state.minds[0]);
  flow.changeQuestion('Is the offer clear?'); flow.changeBoardUrl('https://www.figma.com/design/FileKey12345/QA');
  await flow.prepare();
  assert.deepEqual(calls.find(call => call.url.endsWith('/study')).body, { name: 'Coffee campaign', audienceIds: [], mindIds: [flow.state.minds[0].id] });
  assert.deepEqual(flow.state.executionAudienceIds, [audienceId]);
  assert.ok(!calls.some(call => call.url.endsWith('/confirm')));
  flow.state.accepted = true; await flow.run();
  assert.deepEqual(calls.find(call => call.url.endsWith('/confirm')).body.audienceIds, [audienceId]);
  assert.equal(flow.state.status, 'Comments published in Figma.');
});

test('large accounts fetch only the first page; additional pages and Mind search are explicit', async t => {
  const { flow, calls } = make(t, { total: 10000 });
  await flow.connect();
  assert.equal(calls.filter(call => call.url.includes('/minds?')).length, 1);
  assert.equal(calls.filter(call => call.url.includes('/audiences?')).length, 1);
  assert.equal(flow.state.busy, false);
  flow.toggleMind(flow.state.minds[0]);
  await flow.moreMinds();
  assert.ok(calls.some(call => call.url.includes('/minds?offset=1')));
  flow.state.mindSearch = 'Design & parents'; await flow.searchMinds();
  const search = new URL(calls.filter(call => call.url.includes('/minds?')).at(-1).url);
  assert.equal(search.searchParams.get('search'), 'Design & parents');
  assert.equal(search.searchParams.get('offset'), '0');
  assert.equal(flow.state.mindIds.length, 1);
});
test('empty and malformed board links open setup and do not upload or create a Study', async t => {
  const { flow, calls } = make(t); await flow.connect(); flow.toggleMind(flow.state.minds[0]); flow.changeQuestion('Question');
  for (const link of ['', 'not a URL', 'https://example.com/design/Other']) {
    flow.changeBoardUrl(link); await flow.prepare();
    assert.equal(flow.state.boardSetupOpen, true);
    assert.match(flow.state.status, /Paste this board/);
    assert.ok(!flow.state.status.includes('Invalid URL'));
  }
  assert.ok(!calls.some(call => call.url.endsWith('/study') || call.url.endsWith('/upload')));
});
