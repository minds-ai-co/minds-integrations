const prefix = '/integrations/creative/';
const paths = new Set(['health', 'sessions', 'connect', 'callback', 'session', 'studies', 'summary', 'upload', 'preview']);
const headersToForward = ['origin', 'authorization', 'content-type', 'idempotency-key', 'x-creative-name'];

/** The fixed upstream receives only bridge headers and its own OAuth cookie. */
export async function proxy(request, env, upstreamFetch = fetch) {
  const url = new URL(request.url);
  const origin = request.headers.get('origin');
  const allowed = env.ALLOWED_ORIGINS.split(',');
  const reply = (status, message) => new Response(JSON.stringify({ message }), { status, headers: {
    'Content-Type': 'application/json', 'Cache-Control': 'no-store',
    ...(allowed.includes(origin) ? { 'Access-Control-Allow-Origin': origin, Vary: 'Origin' } : {}),
  } });
  if (url.hostname !== 'getminds.ai' || !url.pathname.startsWith(prefix) || !paths.has(url.pathname.slice(prefix.length))) return reply(404, 'Not found.');
  if (origin && !allowed.includes(origin)) return reply(403, 'This app origin is not enabled.');
  const rate = await env.RATE_LIMITER.limit({ key: request.headers.get('cf-connecting-ip') || 'unknown' });
  if (!rate.success) return reply(429, 'Too many requests. Try again shortly.');
  const headers = new Headers();
  for (const key of headersToForward) if (request.headers.has(key)) headers.set(key, request.headers.get(key));
  const cookie = request.headers.get('cookie')?.split(';').map(x => x.trim()).find(x => /^minds_creative_oauth=[A-Za-z0-9_-]{43}$/.test(x));
  if (cookie) headers.set('cookie', cookie);
  const target = new URL(env.UPSTREAM_ORIGIN);
  if (target.protocol !== 'https:' || !target.hostname.endsWith('.ondigitalocean.app')) return reply(503, 'Creative review is temporarily unavailable.');
  target.pathname = url.pathname; target.search = url.search;
  try {
    return await upstreamFetch(target, { method: request.method, headers,
      body: ['GET', 'HEAD'].includes(request.method) ? undefined : request.body,
      redirect: 'manual' });
  } catch { return reply(502, 'Creative review is temporarily unavailable.'); }
}
export default { fetch: (request, env) => proxy(request, env) };
