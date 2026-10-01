import test from 'node:test';
import assert from 'node:assert/strict';
import { boundedIngress } from '../src/ingress.js';

function response() { return { status: null, writeHead(status) { this.status = status; }, end() {} }; }
test('rate budget resets, health stays available, and concurrent work remains bounded', async () => {
  let time = 0, release;
  const handler = boundedIngress(async () => new Promise(resolve => { release = resolve; }), { now: () => time, perMinute: 2, concurrent: 1 });
  const pending = handler({ method: 'POST', url: '/sessions' }, response());
  const blocked = response(); await handler({ method: 'POST', url: '/sessions' }, blocked);
  assert.equal(blocked.status, 429);
  release(); await pending;
  const exhausted = response(); await handler({ method: 'POST', url: '/sessions' }, exhausted);
  assert.equal(exhausted.status, 429);
  const health = response(); const probe = handler({ method: 'GET', url: '/integrations/creative/health' }, health); release(); await probe;
  assert.equal(health.status, null);
  time = 60000;
  const resumed = response(); const next = handler({ method: 'POST', url: '/sessions' }, resumed); release(); await next;
  assert.equal(resumed.status, null);
});
