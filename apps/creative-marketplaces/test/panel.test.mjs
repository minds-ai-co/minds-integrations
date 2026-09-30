import test from 'node:test';
import assert from 'node:assert/strict';
import { JSDOM } from 'jsdom';
import { mountPanel } from '../src/panel.js';

test('the panel sends only explicitly selected and approved material; retries reuse request identity', async t => {
  const dom = new JSDOM('<main></main>');
  const original = { document: globalThis.document, Option: globalThis.Option, fetch: globalThis.fetch };
  globalThis.document = dom.window.document; globalThis.Option = dom.window.Option;
  const calls = [], opened = [], imported = [];
  globalThis.fetch = async (url, options) => {
    calls.push({ url, options });
    const value = url.endsWith('/sessions') ? { session: 'session', connectUrl: 'https://getminds.ai/connect' }
      : url.endsWith('/session') ? { connected: true }
      : url.endsWith('/studies') ? { data: [{ id: 'study-1', name: 'Creative study' }] }
      : url.endsWith('/preview') ? { data: { status: 'needs_confirmation' } }
      : { data: { findings: 'A clear message' } };
    return new Response(JSON.stringify(value), { status: 200 });
  };
  t.after(() => { Object.assign(globalThis, original); dom.window.close(); });
  let exportCount = 0;
  mountPanel({ root: document.querySelector('main'), gatewayUrl: 'https://getminds.ai/integrations/creative', hostName: 'Test',
    exportMaterial: async () => { exportCount++; return { kind: 'document', label: 'Selected PDF', url: 'https://assets.example/design.pdf' }; },
    openUrl: async url => opened.push(url), importFindings: async text => imported.push(text),
  });
  const el = id => document.querySelector(`#${id}`);
  async function click(id) { el(id).click(); for (let n = 0; n < 20 && el(id).disabled; n++) await new Promise(resolve => setImmediate(resolve)); assert.equal(el(id).disabled, false); }
  assert.equal(exportCount, 0); assert.equal(calls.length, 0);
  await click('connect'); await click('refresh');
  el('study').value = 'study-1'; el('request').value = 'Evaluate the design';
  await click('export'); assert.equal(exportCount, 1);
  await click('preview'); assert.ok(!calls.some(call => call.url.endsWith('/preview')));
  el('consent').checked = true;
  await click('preview'); await click('preview');
  let previews = calls.filter(call => call.url.endsWith('/preview'));
  assert.equal(previews.length, 2);
  assert.equal(previews[0].options.headers['Idempotency-Key'], previews[1].options.headers['Idempotency-Key']);
  assert.equal(JSON.parse(previews[0].options.body).source.url, 'https://assets.example/design.pdf');
  el('request').value = 'Evaluate purchase intent'; await click('preview');
  previews = calls.filter(call => call.url.endsWith('/preview'));
  assert.notEqual(previews[0].options.headers['Idempotency-Key'], previews[2].options.headers['Idempotency-Key']);
  await click('open'); assert.equal(opened.at(-1), 'https://getminds.ai/?studyId=study-1');
  await click('summary'); await click('import'); assert.ok(imported[0].includes('A clear message'));
  assert.ok(!calls.some(call => /execute|confirm/.test(call.url)));
});
