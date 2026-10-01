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
      : url.endsWith('/preview') ? { data: { status: 'needs_confirmation', draftPlanId: 'draft-a' } }
      : url.includes('/run?') ? { data: { status: 'completed', draftPlanId: 'draft-a', runId: 'draft-a', artifacts: [{ kind: 'responses', outputData: { title: 'Clarity', summary: 'A clear message' } }] } }
      : { data: { summary: 'A clear message' } };
    return new Response(JSON.stringify(value), { status: 200, headers: { 'Content-Type': 'application/json' } });
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
  await click('open'); assert.equal(opened.at(-1), 'https://getminds.ai/?studyId=study-1&draftPlanId=draft-a');
  await click('summary'); await click('import'); assert.ok(imported[0].includes('A clear message'));
  globalThis.fetch = async () => new Response(JSON.stringify({ data: { draftPlanId: 'draft-a', runId: 'draft-a', status: 'running', artifacts: [] } }), { status: 200, headers: { 'Content-Type': 'application/json' } });
  await click('summary');
  assert.equal(el('import').hidden, true);
  assert.match(el('status').textContent, /Findings are not ready/);
  globalThis.fetch = async () => new Response(JSON.stringify({ data: { draftPlanId: 'older-draft', runId: 'older-run', status: 'completed', artifacts: [{ kind: 'responses', outputData: { summary: 'Old findings' } }] } }), { status: 200, headers: { 'Content-Type': 'application/json' } });
  await click('summary'); assert.equal(el('import').hidden, true);
  assert.match(el('status').textContent, /do not match/);
  el('request').dispatchEvent(new dom.window.Event('input'));
  await click('open'); assert.match(el('status').textContent, /Draft a research plan first/);
  assert.ok(!calls.some(call => call.url.includes('/summary?')));
  assert.ok(!calls.some(call => /execute|confirm/.test(call.url)));
  globalThis.fetch = async (url, options) => new Response(JSON.stringify(options.method === 'DELETE' ? { message: 'Reconnect your Minds account.' } : { session: 'fresh', connectUrl: 'https://getminds.ai/connect' }), { status: options.method === 'DELETE' ? 401 : 200, headers: { 'Content-Type': 'application/json' } });
  el('consent').checked = true;
  await click('connect');
  assert.equal(opened.at(-1), 'https://getminds.ai/connect');
  assert.equal(el('study').value, ''); assert.equal(el('consent').checked, false);
  assert.equal(el('material').textContent, 'No material selected.');
  await click('open'); assert.match(el('status').textContent, /Draft a research plan first/);

});

test('translated UI stays plain text and dynamic selection uses translated placeholders', async t => {
  const dom = new JSDOM('<main></main>');
  const original = { document: globalThis.document, Option: globalThis.Option };
  globalThis.document = dom.window.document; globalThis.Option = dom.window.Option;
  t.after(() => { Object.assign(globalThis, original); dom.window.close(); });
  const hostile = '<img src=x onerror="bad()">';
  mountPanel({ root: document.querySelector('main'), gatewayUrl: 'https://getminds.ai/integrations/creative', hostName: 'Test',
    formatMessage: (message, values) => message.defaultMessage.includes('{material}') ? `${values.host}: ${values.material}` : hostile,
    exportMaterial: async () => ({ kind: 'document', label: 'Selected PDF', url: 'https://assets.example/design.pdf' }), openUrl: async () => {},
  });
  assert.equal(document.querySelector('h1').textContent, hostile);
  assert.equal(document.querySelector('#request').placeholder, hostile);
  assert.equal(document.querySelectorAll('img').length, 1);
  const button = document.querySelector('#export'); button.click();
  for (let n = 0; n < 20 && button.disabled; n++) await new Promise(resolve => setImmediate(resolve));
  assert.equal(document.querySelector('#material').textContent, 'Test: Selected PDF');
});
