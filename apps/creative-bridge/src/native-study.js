const uuid = value => typeof value === 'string' && /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(value);
const invalid = message => Object.assign(new Error(message), { status: 400 });
const object = value => value && typeof value === 'object' && !Array.isArray(value);
function fields(input, allowed) {
  if (!object(input) || Object.keys(input).some(key => !allowed.includes(key))) throw invalid('Invalid native research request.');
}
const ids = value => Array.isArray(value) && value.length > 0 && value.length <= 100 && value.every(uuid) && new Set(value).size === value.length;

/** Fixed authenticated upstream routes; no adapter-supplied URLs or credentials. */
export async function nativeStudyRoute({ path, req, url, headers, bytes, upstream }) {
  if (['/audiences', '/minds'].includes(path) && req.method === 'GET') {
    const offset = Number(url.searchParams.get('offset') || 0);
    if (!Number.isSafeInteger(offset) || offset < 0) throw invalid('Invalid Audience offset.');
    const search = path === '/minds' ? url.searchParams.get('search') || '' : '';
    if (search.length > 500) throw invalid('Search is too long.');
    const query = new URLSearchParams({ limit: '100', offset: String(offset), ...(search ? { search } : {}) });
    return { value: await upstream(`/api/v1${path}?${query}`, { headers }) };
  }
  if (path === '/draft' && req.method === 'GET') {
    const studyId = url.searchParams.get('studyId'), draftPlanId = url.searchParams.get('draftPlanId');
    if (!uuid(studyId) || !uuid(draftPlanId)) throw invalid('Choose the saved research draft.');
    return { value: await upstream(`/api/v1/studies/${studyId}/research-plans/preview`, { method: 'POST', headers: { ...headers, 'Content-Type': 'application/json' }, body: JSON.stringify({ loadLatest: true, draftPlanId }) }) };
  }
  if (!['/study', '/confirm', '/figma-feedback'].includes(path) || req.method !== 'POST') return null;
  let input;
  try { input = JSON.parse((await bytes(req, 1024 * 1024)).toString('utf8')); }
  catch (error) { if (error.status) throw error; throw invalid('Invalid native research request.'); }
  const jsonHeaders = { ...headers, 'Content-Type': 'application/json' };
  if (path === '/study') {
    fields(input, ['name', 'audienceIds', 'mindIds']);
    const key = req.headers['idempotency-key'];
    if (typeof input.name !== 'string' || !input.name.trim() || input.name.length > 500 || !(ids(input.audienceIds) || (Array.isArray(input.audienceIds) && !input.audienceIds.length && ids(input.mindIds)))
      || (input.mindIds !== undefined && !ids(input.mindIds))
      || typeof key !== 'string' || !/^[\w-]{1,128}$/.test(key)) throw invalid('Choose Audiences and name the research request.');
    return { value: await upstream('/api/v1/studies', { method: 'POST', headers: { ...jsonHeaders, 'Idempotency-Key': key },
      body: JSON.stringify({ name: input.name.trim(), audienceIds: input.audienceIds, isLinkSharingEnabled: false, ...(input.mindIds ? { audienceConfigs: [{ name: input.name.trim(), mindIds: input.mindIds }] } : {}) }) }) };
  }
  if (path === '/confirm') {
    fields(input, ['studyId', 'draftPlanId', 'revision', 'confirmation', 'audienceIds']);
    fields(input.confirmation, ['accepted', 'advancedMethodOptIn']);
    if (!uuid(input.studyId) || !uuid(input.draftPlanId) || !Number.isSafeInteger(input.revision) || input.revision < 1
      || input.confirmation.accepted !== true || !ids(input.audienceIds)
      || (input.confirmation.advancedMethodOptIn !== undefined && typeof input.confirmation.advancedMethodOptIn !== 'boolean')) {
      throw invalid('Review and confirm this exact saved research revision first.');
    }
    return { value: await upstream(`/api/v1/studies/${input.studyId}/research-runs`, { method: 'POST', headers: jsonHeaders,
      body: JSON.stringify({ draftPlanId: input.draftPlanId, revision: input.revision, confirmation: input.confirmation, audienceIds: input.audienceIds }) }) };
  }
  fields(input, ['studyId', 'runId', 'frameUrl', 'expectedNodeId', 'action', 'feedback', 'messageId', 'assetKey', 'sceneId', 'previewHash', 'commentKeys']);
  if (!uuid(input.studyId) || !uuid(input.runId) || typeof input.frameUrl !== 'string' || input.frameUrl.length > 2000
    || !['preview', 'publish'].includes(input.action) || !['summary', 'heatmap'].includes(input.feedback)) throw invalid('Choose the completed run and its Figma frame.');
  // The canonical service owns provider consent, frame validation, research access,
  // preview hashes, selected comment limits and durable delivery/reconciliation.
  return { value: await upstream('/api/v1/integrations/figma/comments', { method: 'POST', headers: jsonHeaders, body: JSON.stringify(input) }) };
}
