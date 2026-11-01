import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { chromium } from 'playwright';

const base = new URL('../dist/express/', import.meta.url);
const server = createServer(async (req, res) => {
  try {
    const name = req.url === '/' ? 'index.html' : req.url.slice(1);
    if (!['index.html', 'app.js'].includes(name)) { res.writeHead(404).end(); return; }
    res.setHeader('Content-Type', name.endsWith('.js') ? 'application/javascript' : 'text/html');
    res.end(await readFile(new URL(name, base)));
  } catch { res.writeHead(500).end(); }
});
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
const browser = await chromium.launch({ headless: true });
try {
  const context = await browser.newContext();
  await context.route('https://express.adobe.com/static/add-on-sdk/sdk.js', route => route.fulfill({
    contentType: 'application/javascript', headers: { 'Access-Control-Allow-Origin': '*' }, body: `export default {
      ready: Promise.resolve(), constants: { Range: { currentPage: 'currentPage' }, RenditionFormat: { png: 'png' } },
      app: { currentUser: { isPremiumUser: async () => false }, document: {
        exportAllowed: async () => true, getPagesMetadata: async () => [{ hasPremiumContent: false }],
        createRenditions: async () => [{ blob: new Blob(['fixture'], { type: 'image/png' }) }]
      } }
    };`,
  }));
  await context.route('https://getminds.ai/connect', route => route.fulfill({ contentType: 'text/html', body: 'Local consent fixture' }));
  await context.route('https://getminds.ai/integrations/creative/**', route => {
    const path = new URL(route.request().url()).pathname;
    const value = path.endsWith('/sessions') ? { session: 'fixture', connectUrl: 'https://getminds.ai/connect' }
      : path.endsWith('/session') ? { connected: true }
      : path.endsWith('/studies') ? { data: [{ id: 'study-fixture', name: 'Local fixture Study' }] }
      : path.endsWith('/upload') ? { url: '/api/uploads/chat/fixture.png' } : {};
    return route.fulfill({ json: value, headers: { 'Access-Control-Allow-Origin': '*' } });
  });
  const page = await context.newPage();
  await page.addInitScript(() => {
    const fetch = window.fetch.bind(window);
    window.fetch = (url, options) => {
      if (url.endsWith('/preview')) return new Promise(resolve => {
        window.releasePreview = () => resolve(new Response(JSON.stringify({ data: { draftPlanId: 'late-fixture' } }), { headers: { 'Content-Type': 'application/json' } }));
      });
      return fetch(url, options);
    };
  });
  await page.goto(`http://127.0.0.1:${server.address().port}/`);
  await page.locator('#connect').waitFor();
  assert.equal(await page.locator('#disconnect').isDisabled(), true);
  assert.equal(await page.locator('#request').inputValue(), '');
  assert.equal(await page.locator('h1').evaluate(e => getComputedStyle(e).userSelect), 'none');
  assert.equal(await page.locator('#request').evaluate(e => getComputedStyle(e).userSelect), 'text');
  await page.locator('#connect').click(); await page.locator('#refresh:not(:disabled)').click();
  await page.waitForFunction(() => document.querySelector('#connection').textContent === 'Connected to Minds.');
  await page.locator('#study').selectOption('study-fixture');
  await page.locator('#request').fill('Review the local fixture'); await page.locator('#export').click();
  await page.locator('#consent:not(:disabled)').check(); await page.locator('#preview').click();
  await page.waitForFunction(() => typeof window.releasePreview === 'function');
  await page.locator('#cancel:not(:disabled)').click();
  assert.equal(await page.locator('#request').isEnabled(), true);
  await page.evaluate(() => window.releasePreview());
  await page.waitForFunction(() => document.querySelector('#status').textContent.includes('A draft may still finish'));
  assert.equal(await page.locator('#result').isVisible(), false);
  await page.locator('#disconnect').click();
  await page.waitForFunction(() => document.querySelector('#connection').textContent === 'Not connected.');
  assert.equal(await page.locator('#disconnect').isDisabled(), true);
  console.log('Actual Express bundle: placeholder/editing styles, connection state, cancellation, late-response isolation and disconnect passed using local SDK/API fixtures. Provider-native acceptance remains separate.');
} finally { await browser.close(); await new Promise(resolve => server.close(resolve)); }
