import { chromium } from 'playwright';
import { readFile, mkdir } from 'node:fs/promises';
import assert from 'node:assert/strict';
import { resolve } from 'node:path';
const html = await readFile(new URL('../dist/figma/ui.html', import.meta.url), 'utf8');
const studyId = '11111111-1111-4111-8111-111111111111';
const draftId = '22222222-2222-4222-8222-222222222222';
const audienceId = '33333333-3333-4333-8333-333333333333';
const mindId = '44444444-4444-4444-8444-444444444444';
const browser = await chromium.launch({ headless: true });
const directory = resolve(process.env.FIGMA_BROWSER_ARTIFACT_DIR || '/tmp/minds-figma-browser-test');
await mkdir(directory, { recursive: true });
try {
  for (const selection of ['Mind', 'Audience']) {
    const page = await browser.newPage({ viewport: { width: 440, height: 950 }, deviceScaleFactor: 2 });
    const errors = [], calls = []; let confirmed = false;
    page.on('pageerror', error => errors.push(error.message));
    await page.route('https://www.figma.com/**', async route => {
      if (route.request().url().endsWith('/panel')) return route.fulfill({ contentType: 'text/html', body: html });
      await route.fulfill({ contentType: 'text/html', body: `<!doctype html><title>Figma plugin browser fixture</title><style>body{margin:0}iframe{width:400px;height:900px;border:0}</style><iframe title="Minds plugin" sandbox="allow-scripts" src="https://www.figma.com/__minds-browser-test__/panel"></iframe><script>window.addEventListener('message',event=>{const m=event.data.pluginMessage;if(!m)return;const result=m.type==='export'?{nodeId:'4:8',nodeType:'FRAME',label:'Browser test design',bytes:[137,80,78,71]}:m.type==='get-state'?null:true;event.source.postMessage({pluginMessage:{requestId:m.requestId,result}},'*')});</script>` });
    });
    await page.route('https://getminds.ai/integrations/creative/**', async route => {
      const request = route.request(), url = new URL(request.url());
      const body = request.headers()['content-type']?.includes('application/json') ? request.postDataJSON() : undefined;
      calls.push({ path: url.pathname, body });
      if (url.pathname.endsWith('/confirm')) confirmed = true;
      const data = url.pathname.endsWith('/sessions') ? { session: 'browser-test-only', connectUrl: 'https://getminds.ai/connect' }
        : url.pathname.endsWith('/session') ? { connected: true }
        : url.pathname.endsWith('/minds') ? { data: [{ id: mindId, name: 'Test Mind', discipline: 'Design reviewer', profileImageUrl: null }], pagination: { total: 1 } }
        : url.pathname.endsWith('/audiences') ? { data: [{ id: audienceId, name: 'Test Audience', mindCount: 20 }], pagination: { total: 1 } }
        : url.pathname.endsWith('/study') ? { data: { id: studyId, audiences: [{ id: audienceId }] } }
        : url.pathname.endsWith('/upload') ? { url: '/api/uploads/chat/owner/test.png' }
        : url.pathname.endsWith('/preview') ? { data: { draftPlanId: draftId, revision: 1, plan: { modules: [{ questions: [{ text: 'Is the design clear?' }] }], confirmation: { missingInputs: [] } } } }
        : url.pathname.endsWith('/confirm') ? { data: { runId: draftId, status: 'queued' } }
        : url.pathname.endsWith('/run') ? { data: { runId: draftId, draftPlanId: draftId, status: confirmed ? 'completed' : 'not_started', artifacts: confirmed ? [{ kind: 'responses', outputData: { summary: 'Browser fixture answer.' } }] : [] } }
        : body?.action === 'preview' ? { data: { previewHash: 'a'.repeat(64), comments: [{ key: 'b'.repeat(64) }] } }
        : { data: { status: 'completed' } };
      await route.fulfill({ contentType: 'application/json', headers: { 'Access-Control-Allow-Origin': '*' }, body: JSON.stringify(data) });
    });
    await page.goto('https://www.figma.com/__minds-browser-test__/host');
    const panel = page.frameLocator('iframe');
    await panel.getByRole('button', { name: 'Connect Minds', exact: true }).click();
    await panel.getByRole('button', { name: 'Select Minds', exact: true }).click();
    if (selection === 'Mind') {
      const row = panel.getByRole('button', { name: 'Test Mind', exact: true });
      await row.click(); assert.equal(await row.getAttribute('aria-pressed'), 'true');
    } else {
      await panel.getByText('Test Audience', { exact: true }).click();
    }
    await panel.getByRole('textbox', { name: 'Message', exact: true }).fill('Is the design clear?');
    await panel.getByRole('button', { name: 'Send message', exact: true }).waitFor({ state: 'visible' });
    const panelFrame = page.frames().find(frame => frame.url().endsWith('/panel'));
    await panelFrame.waitForFunction(() => { const button = document.querySelector('button[aria-label="Send message"]'); return button && Number(getComputedStyle(button).opacity) > .99 && button.getBoundingClientRect().width >= 40; });
    const textbox = await panel.getByRole('textbox', { name: 'Message', exact: true }).boundingBox();
    assert.ok(textbox.height < 60, 'Shared composer keeps its one-line input height');
    await panel.locator('section[aria-label="Minds Study"]').screenshot({ path: resolve(directory, `${selection.toLowerCase()}-selection-browser-fixture.png`) });
    await panel.getByRole('button', { name: 'Send message', exact: true }).click();
    await panel.getByRole('status').filter({ hasText: 'Paste this board' }).waitFor();
    assert.notEqual(await panel.locator('details').getAttribute('open'), null);
    assert.ok(!calls.some(call => call.path.endsWith('/study') || call.path.endsWith('/upload')));
    await panel.locator('details input[type="text"]').fill('https://www.figma.com/design/BrowserTestKey/QA');
    await panel.getByRole('button', { name: 'Send message', exact: true }).click();
    await panel.getByRole('region', { name: 'Confirm research' }).waitFor();
    assert.ok(!calls.some(call => call.path.endsWith('/confirm') || call.path.endsWith('/figma-feedback')));
    const creation = calls.find(call => call.path.endsWith('/study')).body;
    assert.deepEqual(creation.audienceIds, selection === 'Mind' ? [] : [audienceId]);
    assert.deepEqual(creation.mindIds || [], selection === 'Mind' ? [mindId] : []);
    await panel.locator('input[type="checkbox"]').check();
    await panel.getByRole('button', { name: 'Confirm and run research', exact: true }).click();
    await panel.getByRole('status').filter({ hasText: 'Comments published in Figma.' }).waitFor();
    const publication = calls.find(call => call.body?.action === 'publish').body;
    assert.equal(publication.expectedNodeId, '4:8'); assert.equal(publication.runId, draftId);
    assert.deepEqual(errors, []);
    console.log(`${selection} selection passed in Chromium: actual generated UI, explicit confirmation, completed-result delivery contract. API/provider responses are fixtures.`);
    await page.close();
  }
} finally { await browser.close(); }
