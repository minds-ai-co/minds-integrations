import { reactive } from 'vue';
import { CreativeReviewClient, randomRequestId, formatRunFindings } from '@minds/creative-review';

const unwrap = result => result.data || result;
/** App-owned orchestration; research, quota and comment delivery rules remain in Minds. */
export function createFigmaStudy({ gatewayUrl, host, wait = ms => new Promise(resolve => setTimeout(resolve, ms)), now = Date.now }) {
  const client = new CreativeReviewClient(gatewayUrl);
  const state = reactive({ connected: false, busy: false, question: '', audienceIds: [], audiences: [], mindIds: [], minds: [], executionAudienceIds: [], pickerOpen: false,
    boardUrl: '', material: null, draft: null, studyId: '', run: null, status: '', findings: '', accepted: false, advanced: false });
  let requestId = randomRequestId();
  let fingerprint = '';
  let restoringBoard = false;
  async function persist() { if (state.draft && state.material) await host('save-state', JSON.stringify({ studyId: state.studyId, draftPlanId: state.draft.draftPlanId, revision: state.draft.revision, question: state.question, audienceIds: state.executionAudienceIds, material: { frameUrl: state.material.frameUrl, nodeId: state.material.nodeId, label: state.material.label } })); }
  async function restoreDraft() {
    const saved = await host('get-state');
    if (!saved) return;
    const draft = unwrap(await client.draft(saved.studyId, saved.draftPlanId));
    if (draft.draftPlanId !== saved.draftPlanId || draft.revision !== saved.revision) throw new Error('The saved research revision changed. Start a new question.');
    restoringBoard = true;
    Object.assign(state, { studyId: saved.studyId, draft, question: saved.question, audienceIds: saved.audienceIds, executionAudienceIds: saved.audienceIds, material: saved.material, boardUrl: '', accepted: false, advanced: false });
  }
  async function operation(fn) {
    if (state.busy) return;
    state.busy = true; state.status = '';
    try { await fn(); } catch (error) { state.status = error.message || 'Unable to complete this action.'; }
    finally { state.busy = false; }
  }
  async function audiences() {
    const items = []; let offset = 0;
    for (;;) {
      const result = await client.audiences(offset);
      if (!Array.isArray(result.data)) throw new Error('Minds returned an unexpected Audience list.');
      items.push(...result.data); offset += result.data.length;
      if (offset >= (result.pagination?.total ?? offset)) break;
      if (!result.data.length) throw new Error('Unable to load the remaining Audiences.');
    }
    state.audiences = items.map(item => ({ ...item, imageUrl: item.imageUrl || null, canSelect: item.mindCount > 0 }));
  }
  async function minds() {
    const items = []; let offset = 0;
    for (;;) {
      const result = await client.minds(offset);
      if (!Array.isArray(result.data)) throw new Error('Minds returned an unexpected Mind list.');
      items.push(...result.data); offset += result.data.length;
      if (offset >= (result.pagination?.total ?? offset)) break;
      if (!result.data.length) throw new Error('Unable to load the remaining Minds.');
    }
    state.minds = items;
  }
  async function loadParticipants() { await Promise.all([audiences(), minds()]); }
  function toggleMind(item) {
    if (state.busy || state.run) return;
    state.mindIds = state.mindIds.includes(item.id) ? state.mindIds.filter(id => id !== item.id) : [...state.mindIds, item.id];
    invalidate();
  }
  function invalidate() {
    state.draft = state.run = null; state.accepted = state.advanced = false; state.findings = '';
    state.studyId = ''; state.executionAudienceIds = []; fingerprint = ''; restoringBoard = false; requestId = randomRequestId();
  }
  function changeQuestion(value) { if (state.busy || state.run) return; if (value !== state.question) { state.question = value; invalidate(); } }
  function changeBoardUrl(value) { if (state.busy || state.run) return; if (state.draft && restoringBoard) { state.boardUrl = value; return; } if (value !== state.boardUrl) { state.boardUrl = value; invalidate(); } }
  async function selectMaterial() { return operation(async () => { const selected = await host('export'); if (selected.nodeType !== 'FRAME') throw new Error('Select one Figma frame.'); invalidate(); state.material = { label: selected.label, nodeId: selected.nodeId, bytes: new Uint8Array(selected.bytes) }; }); }
  function toggleAudience(item) {
    if (state.busy || state.run || !item.canSelect) return;
    const selected = state.audienceIds.includes(item.id);
    state.audienceIds = selected ? state.audienceIds.filter(id => id !== item.id) : [...state.audienceIds, item.id];
    invalidate();
  }
  async function connect() { return operation(async () => {
    const link = await client.connect(true); await host('open', link);
    state.status = 'Approve the Minds connection in your browser.';
    const deadline = now() + 90000;
    while (now() < deadline) {
      if ((await client.status()).connected) { state.connected = true; await loadParticipants(); await restoreDraft(); state.status = ''; return; }
      await wait(1500);
    }
    throw new Error('Connection is still waiting. Select Refresh connection after approving Minds.');
  }); }
  async function refresh() { return operation(async () => { state.connected = (await client.status()).connected; if (state.connected) { await loadParticipants(); if (!state.draft) await restoreDraft(); state.status = ''; } }); }
  async function prepare() { return operation(async () => {
    if (!state.connected) throw new Error('Connect Minds first.');
    if (!state.question.trim() || state.question.length > 20000 || (!state.audienceIds.length && !state.mindIds.length)) throw new Error('Describe what you want to learn and select Minds or Audiences.');
    const exported = await host('export');
    if (exported.nodeType !== 'FRAME') throw new Error('Select one Figma frame to receive comments.');
    const board = new URL(state.boardUrl);
    if (!['www.figma.com', 'figma.com'].includes(board.hostname) || board.protocol !== 'https:' || board.username || board.password
      || !/^\/(design|file)\/[A-Za-z0-9]+(?:\/|$)/.test(board.pathname)) throw new Error('Connect this board with its Figma link first.');
    const frameUrl = `https://www.figma.com${board.pathname}?node-id=${encodeURIComponent(exported.nodeId.replace(':', '-'))}`;
    // A changed export cannot reuse an earlier source/draft, even when the prompt is unchanged.
    const bytes = new Uint8Array(exported.bytes);
    const next = JSON.stringify([state.question, state.audienceIds, state.mindIds, frameUrl]);
    const sameBytes = state.material?.bytes?.length === bytes.length && bytes.every((value, index) => state.material.bytes[index] === value);
    if (fingerprint !== next || !sameBytes) { requestId = randomRequestId(); fingerprint = next; state.studyId = ''; state.draft = null; }
    state.material = { label: exported.label, nodeId: exported.nodeId, bytes, frameUrl, url: sameBytes ? state.material?.url : undefined };
    if (!state.studyId) {
      const study = unwrap(await client.createStudy(exported.label, state.audienceIds, requestId, state.mindIds));
      state.executionAudienceIds = state.mindIds.length ? study.audiences?.map(audience => audience.id) : [...state.audienceIds];
      if (!state.executionAudienceIds?.length) throw new Error('Minds did not return the selected research participants.');
      state.studyId = study.id;
    }
    if (!state.studyId) throw new Error('Minds did not return the new Study.');
    if (!state.material.url) state.material.url = (await client.upload(new Blob([bytes], { type: 'image/png' }), `${exported.label}.png`)).url;
    state.draft = unwrap(await client.preview(state.studyId, { request: state.question, studyLocale: 'en',
      source: { kind: 'image', label: exported.label, url: state.material.url, mimeType: 'image/png' } }, requestId));
    if (!state.draft.draftPlanId || !state.draft.revision) throw new Error('Minds did not return the saved research revision.');
    state.accepted = state.advanced = false; await persist();
  }); }
  async function postAnswers() {
    const input = { studyId: state.studyId, runId: state.run.runId, frameUrl: state.material.frameUrl,
      expectedNodeId: state.material.nodeId, feedback: 'summary' };
    const preview = unwrap(await client.figmaFeedback({ ...input, action: 'preview' }));
    if (!preview.comments?.length || preview.comments.length > 20) throw new Error('This feedback requires reviewing a smaller set of comments.');
    const receipt = unwrap(await client.figmaFeedback({ ...input, action: 'publish', previewHash: preview.previewHash,
      commentKeys: preview.comments.map(comment => comment.key) }));
    state.status = receipt.status === 'completed' ? 'Comments published in Figma.' : 'Some comments need attention. Check Figma before retrying delivery.';
  }
  async function run() { return operation(async () => {
    if (!state.draft || !state.accepted || !state.material) throw new Error('Review the research and confirm running it and posting answers to this frame.');
    const board = new URL(state.boardUrl);
    const savedBoard = new URL(state.material.frameUrl);
    if (board.protocol !== 'https:' || board.username || board.password || !['www.figma.com', 'figma.com'].includes(board.hostname) || !/^\/(design|file)\/[A-Za-z0-9]+(?:\/|$)/.test(board.pathname) || board.pathname.split('/')[2] !== savedBoard.pathname.split('/')[2]) throw new Error('Connect the original board before resuming this research.');
    if (state.draft.plan?.confirmation?.missingInputs?.length) throw new Error('This research still has missing inputs. Update the question first.');
    if (state.draft.plan?.modules?.some(module => module.method?.optIn?.required) && !state.advanced) throw new Error('Confirm the proposed advanced research method first.');
    const selected = await host('export');
    if (selected.nodeType !== 'FRAME' || selected.nodeId !== state.material.nodeId) throw new Error('Select the original frame before resuming this research.');
    const prior = unwrap(await client.run(state.studyId, state.draft.draftPlanId));
    if (prior.draftPlanId !== state.draft.draftPlanId) throw new Error('This run does not match the saved draft.');
    if (prior.status === 'not_started') await client.confirm(state.studyId, state.draft, state.executionAudienceIds, state.advanced);
    const deadline = now() + 10 * 60 * 1000;
    while (now() < deadline) {
      const result = unwrap(await client.run(state.studyId, state.draft.draftPlanId));
      if (result.draftPlanId !== state.draft.draftPlanId) throw new Error('Findings do not match this saved research.');
      state.run = result; state.status = result.status;
      if (result.status === 'completed') {
        state.findings = formatRunFindings(result) || '';
        if (!state.findings) throw new Error('This run has incomplete findings; comments were not posted.');
        await postAnswers(); return;
      }
      if (['failed', 'cancelled', 'partial', 'plan_limited'].includes(result.status)) throw new Error(`Research ${result.status}; comments were not posted.`);
      await wait(3000);
    }
    throw new Error('Research is still running. Check progress to resume this same run.');
  }); }
  async function retryComments() { return operation(async () => { if (state.run?.status !== 'completed' || !state.accepted) throw new Error('Complete this research first.'); await postAnswers(); }); }
  async function reset() { if (state.busy) return; await host('clear-state'); invalidate(); state.question = ''; state.material = null; state.status = ''; }
  async function disconnect() { return operation(async () => { await client.disconnect(); state.connected = false; state.accepted = state.advanced = false; state.status = 'Disconnected from Minds.'; }); }
  async function connectComments() { await host('open', 'https://getminds.ai/api/integrations/figma/authorize?purpose=figma-comments'); }
  return { state, changeQuestion, changeBoardUrl, selectMaterial, toggleAudience, toggleMind, connect, refresh, prepare, run, retryComments, connectComments, disconnect, reset };
}
