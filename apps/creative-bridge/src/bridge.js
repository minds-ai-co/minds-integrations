import { createHash, randomBytes } from 'node:crypto';
import { importCanvaPdf } from './canva-export.js';
import { MINDS_ORIGIN, previewBody, studyPath } from '@minds/creative-review';

const random = () => randomBytes(32).toString('base64url');
const digest = value => createHash('sha256').update(value).digest('base64url');
const fail = (status, message) => Object.assign(new Error(message), { status });
const json = (res, status, value) => { res.writeHead(status, { 'Content-Type': 'application/json' }).end(JSON.stringify(value)); };
async function bytes(req, max) {
  const chunks = []; let length = 0;
  for await (const chunk of req) {
    length += chunk.length;
    if (length > max) throw fail(413, 'Selected material is too large.');
    chunks.push(chunk);
  }
  return Buffer.concat(chunks);
}

/** Ephemeral OAuth gateway. Restart disconnects clients; there is no token file. */
export function createBridge({ publicUrl, allowedOrigins, clientId, request = fetch, now = Date.now, capacity = 1000, previewConcurrency = 8 }) {
  const base = new URL(publicUrl);
  if (base.search || base.hash || base.username || base.password || !(base.protocol === 'https:' || (base.protocol === 'http:' && ['localhost', '127.0.0.1'].includes(base.hostname)))) throw new Error('Invalid public gateway URL');
  if (!Array.isArray(allowedOrigins) || !allowedOrigins.length || allowedOrigins.includes('*')) throw new Error('Configure exact adapter origins');
  const prefix = base.pathname.replace(/\/$/, '');
  const callback = `${publicUrl.replace(/\/$/, '')}/callback`;
  const sessions = new Map(), tickets = new Map(), states = new Map();
  const expiry = 60 * 60 * 1000;
  let registered = clientId;
  let registering;
  let pendingPreviews = 0;
  function prune() {
    for (const map of [sessions, tickets, states]) for (const [key, value] of map) if (value.expiresAt <= now()) map.delete(key);
  }
  async function upstream(path, options = {}) {
    const response = await request(`${MINDS_ORIGIN}${path}`, { ...options, redirect: 'error', signal: AbortSignal.timeout(85000) });
    if (!response.ok) {
      // Do not pass provider errors through: they can contain URLs/tokens/material.
      throw fail(response.status === 401 ? 401 : response.status === 429 ? 429 : 502,
        response.status === 401 ? 'Reconnect your Minds account.' : response.status === 429 ? 'Minds is busy. Try again shortly.' : 'Minds could not complete this request.');
    }
    return response.json();
  }
  async function register() {
    if (registered) return registered;
    if (!registering) registering = upstream('/oauth/register', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({
      client_name: 'Minds Creative Review', redirect_uris: [callback], grant_types: ['authorization_code', 'refresh_token'], response_types: ['code'], token_endpoint_auth_method: 'none',
    }) }).then(value => {
      if (!value.client_id) throw fail(503, 'Minds connection is unavailable.');
      registered = value.client_id; return registered;
    }).finally(() => { registering = null; });
    return registering;
  }
  async function exchange(fields) {
    const token = await upstream('/oauth/token', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams(fields) });
    if (!token.access_token) throw fail(502, 'Minds connection is unavailable.');
    return { accessToken: token.access_token, refreshToken: token.refresh_token, tokenExpiresAt: now() + (Number(token.expires_in) || 3600) * 1000 };
  }
  async function access(session) {
    if (!session.accessToken) throw fail(401, 'Connect your Minds account first.');
    if (session.tokenExpiresAt > now() + 60000) return session.accessToken;
    if (!session.refreshToken) throw fail(401, 'Reconnect your Minds account.');
    // One rotation per session even when panel requests arrive together.
    if (!session.refreshing) session.refreshing = exchange({ grant_type: 'refresh_token', refresh_token: session.refreshToken, client_id: registered }).then(value => {
      const refreshToken = value.refreshToken || session.refreshToken;
      Object.assign(session, value, { refreshToken });
    }).finally(() => { session.refreshing = null; });
    await session.refreshing;
    return session.accessToken;
  }
  const cookiePath = prefix || '/';
  const cookieName = 'minds_creative_oauth';
  const cookieFlags = `${base.protocol === 'https:' ? 'Secure; ' : ''}HttpOnly; SameSite=Lax; Path=${cookiePath}; Max-Age=600`;
  return async (req, res) => {
    res.setHeader('Cache-Control', 'no-store');
    res.setHeader('Referrer-Policy', 'no-referrer');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('Content-Security-Policy', "default-src 'none'; frame-ancestors 'none'");
    try {
      prune();
      const url = new URL(req.url || '/', publicUrl);
      if (prefix && !url.pathname.startsWith(`${prefix}/`)) throw fail(404, 'Not found.');
      const path = url.pathname.slice(prefix.length);
      const origin = req.headers.origin;
      if (origin) {
        if (!allowedOrigins.includes(origin)) throw fail(403, 'This app origin is not enabled.');
        res.setHeader('Access-Control-Allow-Origin', origin);
        res.setHeader('Vary', 'Origin');
        res.setHeader('Access-Control-Allow-Headers', 'Authorization, Content-Type, Idempotency-Key, X-Creative-Name');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
      }
      if (req.method === 'OPTIONS') { res.writeHead(204).end(); return; }
      if (path === '/health' && req.method === 'GET') { json(res, 200, { status: 'ok' }); return; }
      if (path === '/sessions' && req.method === 'POST') {
        if (!origin) throw fail(403, 'Open this from an enabled creative app.');
        if (sessions.size >= capacity) throw fail(429, 'Too many connections. Try again later.');
        const capability = random(), ticket = random();
        const key = digest(capability);
        sessions.set(key, { expiresAt: now() + expiry, origin, previews: new Map() });
        tickets.set(digest(ticket), { key, expiresAt: now() + 600000 });
        json(res, 201, { session: capability, connectUrl: `${publicUrl.replace(/\/$/, '')}/connect?ticket=${ticket}` }); return;
      }
      if (path === '/connect' && req.method === 'GET') {
        const ticketKey = digest(url.searchParams.get('ticket') || '');
        const ticket = tickets.get(ticketKey); tickets.delete(ticketKey);
        if (!ticket || !sessions.has(ticket.key)) throw fail(400, 'Connection link expired. Reconnect from your app.');
        const id = await register();
        const state = random(), verifier = random(), cookie = random();
        states.set(digest(state), { key: ticket.key, verifier, cookie: digest(cookie), expiresAt: now() + 600000 });
        res.setHeader('Set-Cookie', `${cookieName}=${cookie}; ${cookieFlags}`);
        const params = new URLSearchParams({ response_type: 'code', client_id: id, redirect_uri: callback,
          scope: 'openid flows:read flows:write', state, code_challenge: digest(verifier), code_challenge_method: 'S256', resource: `${MINDS_ORIGIN}/mcp` });
        res.writeHead(302, { Location: `${MINDS_ORIGIN}/oauth/authorize?${params}` }).end(); return;
      }
      if (path === '/callback' && req.method === 'GET') {
        const stateKey = digest(url.searchParams.get('state') || '');
        const state = states.get(stateKey);
        const cookie = req.headers.cookie?.split(';').map(value => value.trim()).find(value => value.startsWith(`${cookieName}=`))?.slice(cookieName.length + 1) || '';
        if (!state || state.cookie !== digest(cookie)) throw fail(400, 'Invalid or expired authorization.');
        states.delete(stateKey);
        if (url.searchParams.has('error') || !url.searchParams.get('code')) throw fail(400, 'Minds connection was not approved.');
        const session = sessions.get(state.key);
        if (!session) throw fail(400, 'Connection expired.');
        const token = await exchange({ grant_type: 'authorization_code', code: url.searchParams.get('code'), client_id: registered,
          redirect_uri: callback, code_verifier: state.verifier, resource: `${MINDS_ORIGIN}/mcp` });
        // Disconnect during exchange must not resurrect a removed session.
        if (!sessions.has(state.key)) throw fail(400, 'Connection was disconnected.');
        Object.assign(session, token);
        res.setHeader('Set-Cookie', `${cookieName}=; ${cookieFlags.replace('Max-Age=600', 'Max-Age=0')}`);
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' }).end('Minds connected. Return to your creative app and select Refresh Studies.'); return;
      }
      const raw = req.headers.authorization?.match(/^Bearer ([A-Za-z0-9_-]{43})$/)?.[1];
      const key = digest(raw || ''); const session = sessions.get(key);
      if (!session) throw fail(401, 'Reconnect your Minds account.');
      if (origin !== session.origin) throw fail(403, 'Connection belongs to another app origin.');
      if (path === '/session' && req.method === 'GET') { json(res, 200, { connected: !!session.accessToken }); return; }
      if (path === '/session' && req.method === 'DELETE') {
        sessions.delete(key);
        for (const map of [tickets, states]) for (const [entryKey, value] of map) if (value.key === key) map.delete(entryKey);
        if (session.accessToken) await upstream('/oauth/revoke', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams({ token: session.refreshToken || session.accessToken, client_id: registered }) }).catch(() => undefined);
        json(res, 200, { connected: false }); return;
      }
      const headers = { Authorization: `Bearer ${await access(session)}` };
      if (path === '/studies' && req.method === 'GET') {
        json(res, 200, await upstream('/api/v1/studies?limit=100&offset=0', { headers })); return;
      }
      if (path === '/summary' && req.method === 'GET') {
        json(res, 200, await upstream(studyPath(url.searchParams.get('studyId'), '/summary'), { headers })); return;
      }
      if (path === '/run' && req.method === 'GET') {
        const studyId = url.searchParams.get('studyId');
        const draftPlanId = url.searchParams.get('draftPlanId');
        if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(draftPlanId || '')) throw fail(400, 'Choose a saved research draft.');
        // Loading proves draft ownership and resolves its durable run identity.
        // This preview mode reads only; the gateway still has no execution endpoint.
        const preview = await upstream(studyPath(studyId, '/research-plans/preview'), {
          method: 'POST', headers: { ...headers, 'Content-Type': 'application/json' },
          body: JSON.stringify({ loadLatest: true, draftPlanId }),
        });
        const draft = preview.data;
        if (draft?.draftPlanId !== draftPlanId) throw fail(502, 'Invalid saved draft.');
        if (draft.draftStatus !== 'confirmed') { json(res, 200, { data: { status: 'not_started', draftPlanId, runId: draftPlanId } }); return; }
        const runId = draft.runId || draftPlanId;
        if (!/^[0-9a-f-]{36}$/i.test(runId)) throw fail(502, 'Invalid research run.');
        const result = await upstream(studyPath(studyId, `/research-runs/${encodeURIComponent(runId)}`), { headers });
        if (result.data?.runId !== runId) throw fail(502, 'Invalid research run.');
        json(res, 200, { data: { ...result.data, draftPlanId } }); return;
      }
      if (path === '/upload' && req.method === 'POST') {
        if (req.headers['content-type'] !== 'image/png') throw fail(400, 'Export your selected artwork as PNG.');
        const data = await bytes(req, 25 * 1024 * 1024);
        if (!data.subarray(0, 8).equals(Buffer.from([137,80,78,71,13,10,26,10]))) throw fail(400, 'Selected artwork is not a PNG.');
        const name = decodeURIComponent(req.headers['x-creative-name'] || 'creative.png').replace(/[^\p{L}\p{N} ._-]/gu, '_').slice(0, 180) || 'creative.png';
        const form = new FormData(); form.append('folder', 'chat'); form.append('file', new Blob([data], { type: 'image/png' }), name);
        json(res, 200, await upstream('/api/uploads/proxy', { method: 'POST', headers, body: form })); return;
      }
      if (path === '/preview' && req.method === 'GET') {
        const job = session.previews.get(url.searchParams.get('requestId'));
        if (!job || job.studyId !== url.searchParams.get('studyId')) throw fail(404, 'Draft request not found. Retry from your app.');
        if (job.error) throw job.error;
        json(res, job.result ? 200 : 202, job.result || { pending: true }); return;
      }
      if (path === '/preview' && req.method === 'POST') {
        const key = req.headers['idempotency-key'];
        if (typeof key !== 'string' || !/^[\w-]{1,128}$/.test(key)) throw fail(400, 'Missing preview request identifier.');
        const input = JSON.parse((await bytes(req, 1024 * 1024)).toString('utf8'));
        let body, target;
        try { body = previewBody(input); target = studyPath(input.studyId, '/research-plans/preview'); }
        catch { throw fail(400, 'Choose a Study, a supported language and readable material, then describe what you want to learn.'); }
        const fingerprint = JSON.stringify({ target, body });
        let job = session.previews.get(key);
        if (job && job.fingerprint !== fingerprint) throw fail(409, 'Use a new request identifier for changed material.');
        if (job?.error) { session.previews.delete(key); throw job.error; }
        if (!job) {
          if (pendingPreviews >= previewConcurrency) throw fail(429, 'Minds is busy. Try again shortly.');
          if (session.previews.size >= 20) throw fail(429, 'Reconnect after completing your draft requests.');
          job = { studyId: input.studyId, fingerprint };
          session.previews.set(key, job);
          // Planning continues independently of the platform's short HTTP ingress timeout.
          const pending = job;
          pendingPreviews++;
          void importCanvaPdf(body, { request, upload: form => upstream('/api/uploads/proxy', { method: 'POST', headers, body: form }) })
            .then(prepared => upstream(target, { method: 'POST', headers: { ...headers, 'Content-Type': 'application/json', 'Idempotency-Key': key },
              body: JSON.stringify(prepared) })).then(result => { pending.result = result; }, error => { pending.error = error; }).finally(() => { pendingPreviews--; });
        }
        if (job.error) throw job.error;
        json(res, job.result ? 200 : 202, job.result || { pending: true }); return;
      }
      throw fail(404, 'Not found.');
    } catch (error) {
      const status = error.status || (error instanceof SyntaxError || error instanceof URIError ? 400 : 500);
      json(res, status, { message: error instanceof SyntaxError || error instanceof URIError ? 'Invalid request.' : status < 500 ? error.message : 'Creative review is temporarily unavailable.' });
    }
  };
}
