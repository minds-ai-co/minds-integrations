export const MINDS_ORIGIN = 'https://getminds.ai';
export const LOCALES = ['en', 'es', 'fr', 'de', 'zh', 'tr', 'ar', 'ja', 'ko'];

export function previewBody(input) {
  if (!input || typeof input.request !== 'string' || !input.request.trim() || input.request.length > 20000) {
    throw new Error('Describe what you want to learn (up to 20,000 characters).');
  }
  const studyLocale = input.studyLocale || 'en';
  if (!LOCALES.includes(studyLocale)) throw new Error('Choose a supported Study language.');
  const source = input.source;
  if (!source || !['image', 'document', 'video', 'website', 'prompt'].includes(source.kind)) throw new Error('Select material to review.');
  if (typeof source.label !== 'string' || !source.label.trim() || source.label.length > 500) throw new Error('Name the selected material (up to 500 characters).');
  const clean = { kind: source.kind, label: source.label };
  if (source.kind === 'prompt') {
    if (typeof source.content !== 'string' || !source.content.trim()) throw new Error('The selected material is empty.');
    clean.content = source.content;
  } else {
    const url = new URL(source.url, MINDS_ORIGIN);
    const owned = url.origin === MINDS_ORIGIN && /^\/api\/uploads\/(chat|file-access)\//.test(url.pathname);
    if (!owned && (url.protocol !== 'https:' || url.username || url.password || !/^https:\/\//.test(source.url))) {
      throw new Error('Use a readable HTTPS asset URL or a Minds-owned upload.');
    }
    clean.url = source.url;
  }
  if (source.mimeType) clean.mimeType = source.mimeType;
  return { request: input.request, studyLocale, source: clean };
}

export function studyPath(studyId, suffix = '') {
  if (typeof studyId !== 'string' || !studyId.trim() || studyId.length > 200) throw new Error('Choose a Study.');
  return `/api/v1/studies/${encodeURIComponent(studyId)}${suffix}`;
}

export function reviewUrl(studyId, draftPlanId) {
  studyPath(studyId);
  if (typeof draftPlanId !== 'string' || !draftPlanId.trim() || draftPlanId.length > 200) throw new Error('Save a research draft first.');
  return `${MINDS_ORIGIN}/?${new URLSearchParams({ studyId, draftPlanId })}`;
}

/** Only findings from this completed run; never substitute a whole-Study summary. */
export function formatRunFindings(run) {
  if (run?.status !== 'completed' || !Array.isArray(run.artifacts)) return null;
  const answers = run.artifacts.filter(artifact => artifact.kind === 'responses');
  if (!answers.length) return null;
  const sections = answers.map(artifact => {
    const output = artifact.outputData;
    if (!output || artifact.error || artifact.responseCoverage) return null;
    const summary = typeof output.summary === 'string' ? output.summary.trim() : '';
    const finding = typeof output.keyFinding === 'string' ? output.keyFinding.trim() : '';
    if (!summary && !finding) return null;
    return [output.formattedQuestion || output.title, finding, summary].filter(Boolean).join('\n\n');
  });
  return sections.every(Boolean) ? sections.join('\n\n—\n\n') : null;
}

// Only the gateway's short-lived session capability enters the adapter UI.
// Minds OAuth tokens remain in the gateway. Nothing is persisted in localStorage.
export class CreativeReviewClient {
  constructor(baseUrl, request = (...args) => globalThis.fetch(...args)) {
    const url = new URL(baseUrl);
    if (url.username || url.password || url.search || url.hash || !(url.protocol === 'https:' || (url.protocol === 'http:' && ['localhost', '127.0.0.1'].includes(url.hostname)))) {
      throw new Error('Use HTTPS for the integration gateway.');
    }
    this.baseUrl = baseUrl.replace(/\/$/, '');
    this.request = request;
    this.session = null;
  }
  async call(path, { body, method = 'GET', headers = {} } = {}) {
    const response = await this.request(`${this.baseUrl}${path}`, {
      method, redirect: 'error', credentials: 'omit', cache: 'no-store',
      headers: { ...(this.session ? { Authorization: `Bearer ${this.session}` } : {}), ...headers },
      body, signal: AbortSignal.timeout(90000),
    });
    if (!(response.headers.get('content-type') || '').includes('json')) throw new Error('Minds is temporarily unavailable. Retry the same draft request.');
    const value = await response.json();
    if (!response.ok) {
      const error = new Error(value.message || 'Minds request failed.');
      error.status = response.status;
      throw error;
    }
    return value;
  }
  async connect() {
    const value = await this.call('/sessions', { method: 'POST' });
    this.session = value.session;
    return value.connectUrl;
  }
  status() { return this.call('/session'); }
  studies() { return this.call('/studies'); }
  async upload(blob, name = 'creative.png') {
    return this.call('/upload', { method: 'POST', body: blob, headers: { 'Content-Type': blob.type, 'X-Creative-Name': encodeURIComponent(name) } });
  }
  async preview(studyId, input, idempotencyKey) {
    if (!idempotencyKey) throw new Error('Missing preview request identifier.');
    const body = previewBody(input);
    studyPath(studyId);
    const options = { method: 'POST', body: JSON.stringify({ studyId, ...body }), headers: { 'Content-Type': 'application/json', 'Idempotency-Key': idempotencyKey } };
    let result = await this.call('/preview', options);
    const deadline = Date.now() + 90000;
    while (result.pending) {
      if (Date.now() >= deadline) throw new Error('Draft preparation is taking longer. Retry the same request to check its saved result.');
      await new Promise(resolve => setTimeout(resolve, 2000));
      result = await this.call('/preview', options);
    }
    return result;
  }
  summary(studyId) { studyPath(studyId); return this.call(`/summary?studyId=${encodeURIComponent(studyId)}`); }
  run(studyId, draftPlanId) {
    reviewUrl(studyId, draftPlanId);
    return this.call(`/run?${new URLSearchParams({ studyId, draftPlanId })}`);
  }
  async disconnect() {
    try { await this.call('/session', { method: 'DELETE' }); }
    catch (error) { if (error.status !== 401) throw error; }
    finally { this.session = null; }
  }
}
