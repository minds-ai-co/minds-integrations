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
    const value = await response.json();
    if (!response.ok) throw new Error(value.message || 'Minds request failed.');
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
  preview(studyId, input, idempotencyKey) {
    if (!idempotencyKey) throw new Error('Missing preview request identifier.');
    const body = previewBody(input);
    studyPath(studyId);
    return this.call('/preview', { method: 'POST', body: JSON.stringify({ studyId, ...body }), headers: { 'Content-Type': 'application/json', 'Idempotency-Key': idempotencyKey } });
  }
  summary(studyId) { studyPath(studyId); return this.call(`/summary?studyId=${encodeURIComponent(studyId)}`); }
  async disconnect() { try { await this.call('/session', { method: 'DELETE' }); } finally { this.session = null; } }
}
