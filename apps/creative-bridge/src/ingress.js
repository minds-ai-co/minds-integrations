/** Global backstop also protects the provider's direct public ingress. */
export function boundedIngress(handler, { now = Date.now, perMinute = 300, concurrent = 8 } = {}) {
  let started = now(), count = 0, active = 0;
  return async (req, res) => {
    if (now() - started >= 60000) { started = now(); count = 0; }
    // Health checks do not perform upstream work or create sessions.
    const health = req.method === 'GET' && req.url?.endsWith('/health');
    if (!health && (++count > perMinute || active >= concurrent)) {
      res.writeHead(429, { 'Content-Type': 'application/json', 'Cache-Control': 'no-store', 'Retry-After': '60' });
      res.end(JSON.stringify({ message: 'Too many requests. Try again shortly.' })); return;
    }
    active++;
    try { await handler(req, res); } finally { active--; }
  };
}
