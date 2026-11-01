import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createHash, randomUUID } from 'node:crypto';
import test from 'node:test';
import vm from 'node:vm';

const source = readFileSync(new URL('./Code.js', import.meta.url), 'utf8');
const owner = '11111111-1111-4111-8111-111111111111';
const audience = '22222222-2222-4222-8222-222222222222';
const study = '33333333-3333-4333-8333-333333333333';
const draft = '44444444-4444-4444-8444-444444444444';
const run = '55555555-5555-4555-8555-555555555555';
const plain = value => JSON.parse(JSON.stringify(value));
function fixture() {
  const f = { rows: [['First question?'], [''], ['Second question?']], output: [['Old first'], ['Old blank'], ['Old second']],
    props: new Map([['MINDS_API_KEY', 'fixture-key']]), calls: [], alerts: [], dialogs: [], writes: [], menu: [],
    owner, ready: true, status: 'completed', draftStatus: 'confirmed', revision: 1, locked: false, confirm: 'YES' };
  const sheet = { getParent: () => ({ getId: () => 'fixture-book' }), getSheetId: () => 7 };
  const output = { getDisplayValues: () => f.output.map(row => [...row]), setValues: value => { f.writes.push(plain(value)); f.output = plain(value); } };
  const range = { getNumRows: () => f.rows.length, getNumColumns: () => 1, getDisplayValues: () => f.rows.map(row => [...row]),
    getSheet: () => sheet, getRow: () => 2, getColumn: () => 1, getA1Notation: () => 'A2:A4', offset: () => output };
  const plan = () => ({ modules: [{ questions: f.rows.flatMap((row, index) => row[0].trim() ? [{ id: `row-${index + 1}`, text: row[0].trim(), response: { type: 'qualitative' } }] : []) }] });
  f.plan = plan;
  const ui = { Button: { OK: 'OK', YES: 'YES', NO: 'NO', CANCEL: 'CANCEL' }, ButtonSet: { OK: 'OK', OK_CANCEL: 'OK_CANCEL', YES_NO: 'YES_NO', YES_NO_CANCEL: 'YES_NO_CANCEL' },
    prompt: () => ({ getSelectedButton: () => f.cancelPrompt ? 'CANCEL' : 'OK', getResponseText: () => audience }),
    alert: (...args) => { assert.equal(f.locked, false, 'a suspended UI alert must not hold the data lock'); f.alerts.push(args); f.onAlert?.(args); return f.confirm; },
    showModalDialog: content => f.dialogs.push(content.html),
    createAddonMenu: () => ({ addItem(label, handler) { f.menu.push({ label, handler }); return this; }, addSeparator() { return this; }, addToUi() {} }),
  };
  const sandbox = { console,
    ScriptApp: { AuthMode: { FULL: 'FULL' }, requireAllScopes: mode => { assert.equal(mode, 'FULL'); f.onAuthorize?.(); } },
    SpreadsheetApp: { getUi: () => ui, getActiveRange: () => range },
    PropertiesService: { getUserProperties: () => ({ getProperty: key => f.props.get(key) ?? null, setProperty: (key, value) => f.props.set(key, value), deleteProperty: key => f.props.delete(key) }) },
    Utilities: { getUuid: randomUUID, DigestAlgorithm: { SHA_256: 'SHA256' }, Charset: { UTF_8: 'utf8' }, computeDigest: (_algorithm, value) => [...createHash('sha256').update(value).digest()] },
    LockService: { getUserLock: () => ({ tryLock() { if (f.locked) return false; f.locked = true; return true; }, releaseLock() { f.locked = false; } }) },
    HtmlService: { createHtmlOutput: html => ({ html, setWidth() { return this; }, setHeight() { return this; } }) },
    UrlFetchApp: { fetch(url, options) {
      const path = url.replace('https://getminds.ai/api/v1', ''); const body = options.payload ? JSON.parse(options.payload) : undefined;
      const call = { path, options, body }; f.calls.push(call);
      let value, status = 200;
      if (f.onRequest) { const result = f.onRequest(call); if (result) { value = result.value; status = result.status ?? 200; } }
      if (value === undefined) {
        if (path === '/auth/me') value = { id: f.owner };
        else if (path === '/studies') { value = { data: { id: study } }; status = 201; }
        else if (path.endsWith('/preview')) value = { data: { draftPlanId: draft, revision: f.revision, draftStatus: f.draftStatus, runId: run, plan: plan() } };
        else if (path.includes('/research-runs/')) value = { data: { studyId: study, runId: run, status: f.status, ready: f.ready, plan: plan(), executionPlan: plan(),
          artifacts: [{ kind: 'responses', questionIndex: 1, outputData: { summary: f.secondAnswer ?? 'Second answer' } }, { kind: 'responses', questionIndex: 0, outputData: { summary: 'First answer' } }] } };
        else throw Error('Unexpected API route');
      }
      return { getResponseCode: () => status, getContentText: () => JSON.stringify(value) };
    } },
  };
  vm.createContext(sandbox); vm.runInContext(source, sandbox); f.app = sandbox; return f;
}
function prepare(f) { f.app.askAudienceFromSelection(); assert.equal(f.dialogs.length > 0, true, JSON.stringify(f.alerts)); }
function lastAlert(f) { return f.alerts.at(-1).join(' '); }

test('selection creates one private Study and an exact fixed draft, without starting research or writing cells', () => {
  const f = fixture(); prepare(f);
  assert.equal(f.calls.filter(c => c.path === '/studies').length, 1);
  assert.deepEqual(f.calls.find(c => c.path === '/studies').body.audienceIds, [audience]);
  assert.equal(f.calls.find(c => c.path === '/studies').body.isLinkSharingEnabled, false);
  const preview = f.calls.find(c => c.path.endsWith('/preview'));
  assert.deepEqual(preview.body.questions.map(q => q.text), ['First question?', 'Second question?']);
  assert.deepEqual(preview.body.questions.map(q => q.id), ['row-1', 'row-3']);
  assert.equal(preview.options.headers['X-Minds-Study-Plan-Protocol'], '1');
  assert.equal(f.calls.some(c => /confirm|\/research-runs/.test(c.path)), false);
  assert.equal(f.writes.length, 0);
  assert.match(f.dialogs[0], new RegExp(`studyId=${study}&amp;draftPlanId=${draft}`));
  const jobs = [...f.props].filter(([key]) => key.startsWith('MINDS_SHEETS_JOB_'));
  assert.equal(jobs.length, 1); assert.doesNotMatch(jobs[0][1], /fixture-key|First question|Second question/);
});
test('cancel before preparation makes no API calls', () => {
  const f = fixture(); f.cancelPrompt = true; f.app.askAudienceFromSelection(); assert.equal(f.calls.length, 0);
});
test('a lost Study creation reply reuses the persisted idempotency key', () => {
  const f = fixture(); let first = true;
  f.onRequest = call => { if (call.path === '/studies' && first) { first = false; throw Error('fixture connection lost'); } };
  f.app.askAudienceFromSelection(); assert.equal(f.writes.length, 0);
  prepare(f);
  const creates = f.calls.filter(c => c.path === '/studies');
  assert.equal(creates.length, 2); assert.equal(creates[0].options.headers['Idempotency-Key'], creates[1].options.headers['Idempotency-Key']);
});
test('pending preparation is resumed without creating another Study or changing request identity', () => {
  const f = fixture(); let first = true;
  f.onRequest = call => { if (call.path.endsWith('/preview') && first) { first = false; return { status: 202, value: { data: { status: 'pending', accepted: true } } }; } };
  f.app.askAudienceFromSelection(); assert.match(lastAlert(f), /pending/); assert.equal(f.writes.length, 0);
  prepare(f);
  assert.equal(f.calls.filter(c => c.path === '/studies').length, 1);
  const previews = f.calls.filter(c => c.path.endsWith('/preview'));
  assert.equal(previews[0].options.headers['Idempotency-Key'], previews[1].options.headers['Idempotency-Key']);
});
test('completed artifacts map by question index, keep blank rows, and require overwrite approval', () => {
  const f = fixture(); prepare(f); f.app.loadCompletedMindsAnswers();
  assert.deepEqual(f.writes, [[['First answer'], [''], ['Second answer']]]);
  assert.match(lastAlert(f), /No new research was started/);
  assert.equal(f.calls.filter(c => c.path === '/studies').length, 1);
  assert.equal(f.calls.filter(c => c.path.includes('/research-runs/') && c.options.method !== 'get').length, 0);
});
for (const status of ['queued', 'running', 'partial', 'failed', 'cancelled', 'plan_limited']) test(`${status} research never writes submission/status text into cells`, () => {
  const f = fixture(); prepare(f); f.status = status; f.ready = false; f.app.loadCompletedMindsAnswers();
  assert.equal(f.writes.length, 0); assert.match(lastAlert(f), /Existing cells are unchanged/);
});
test('changed draft revision, input questions or Minds account cannot write results', () => {
  for (const change of [f => { f.revision = 2; }, f => { f.rows[0][0] = 'Changed?'; }, f => { f.owner = audience; }]) {
    const f = fixture(); prepare(f); change(f); f.app.loadCompletedMindsAnswers(); assert.equal(f.writes.length, 0);
  }
});
test('changed output cells during the overwrite prompt prevent delivery', () => {
  const f = fixture(); prepare(f);
  f.onAlert = args => { if (args[0] === 'Write completed Minds answers?') f.output[0][0] = 'New collaborator edit'; };
  f.app.loadCompletedMindsAnswers(); assert.equal(f.writes.length, 0); assert.match(lastAlert(f), /changed during confirmation/);
});
test('declining overwrite preserves all existing cells', () => {
  const f = fixture(); prepare(f); f.confirm = 'NO'; f.app.loadCompletedMindsAnswers(); assert.equal(f.writes.length, 0);
});
test('formula-looking generated findings are written as literal text', () => {
  const f = fixture(); prepare(f); f.secondAnswer = '=HYPERLINK("https://invalid.example","unsafe")'; f.app.loadCompletedMindsAnswers();
  assert.equal(f.writes[0][2][0], "'" + f.secondAnswer);
});
test('missing, duplicate or incomplete artifacts cannot be reported as completed answers', () => {
  for (const artifacts of [[], [{ kind: 'responses', questionIndex: 0, outputData: { summary: 'Only first' } }], [
    { kind: 'responses', questionIndex: 0, outputData: { summary: 'First' }, responseCoverage: { missing: 1 } },
    { kind: 'responses', questionIndex: 1, outputData: { summary: 'Second' } },
  ], [
    { kind: 'responses', questionIndex: 0, outputData: { summary: 'First' } },
    { kind: 'responses', questionIndex: 0, outputData: { summary: 'Duplicate first' } },
    { kind: 'responses', questionIndex: 1, outputData: { summary: 'Second' } },
  ]]) {
    const f = fixture(); prepare(f);
    f.onRequest = call => call.path.includes('/research-runs/') ? { value: { data: { studyId: study, runId: run, status: 'completed', ready: true, plan: f.plan(), artifacts } } } : undefined;
    f.app.loadCompletedMindsAnswers(); assert.equal(f.writes.length, 0); assert.match(lastAlert(f), /missing or incomplete/);
  }
});
test('an unconfirmed draft never reads a run or writes cells', () => {
  const f = fixture(); prepare(f); f.draftStatus = 'draft'; f.app.loadCompletedMindsAnswers();
  assert.equal(f.calls.some(c => c.path.includes('/research-runs/')), false);
  assert.equal(f.writes.length, 0); assert.match(lastAlert(f), /confirm and run/);
});
test('a different run cannot supply answers for this saved draft', () => {
  const f = fixture(); prepare(f);
  f.onRequest = c => c.path.includes('/research-runs/') ? { value: { data: { studyId: study, runId: draft, status: 'completed', ready: true } } } : undefined;
  f.app.loadCompletedMindsAnswers(); assert.equal(f.writes.length, 0); assert.match(lastAlert(f), /different research run/);
});
test('explicitly choosing a new plan creates a fresh identity without deleting existing research', () => {
  const f = fixture(); prepare(f); f.confirm = 'NO'; f.app.askAudienceFromSelection();
  const creates = f.calls.filter(c => c.path === '/studies'); assert.equal(creates.length, 2);
  assert.notEqual(creates[0].options.headers['Idempotency-Key'], creates[1].options.headers['Idempotency-Key']);
  assert.equal(f.calls.some(c => c.options.method === 'delete'), false);
});
test('provider error bodies and redirects are never followed or displayed', () => {
  const f = fixture(); f.onRequest = () => ({ status: 302, value: { message: 'PRIVATE_RESPONSE_SECRET' } });
  f.app.askAudienceFromSelection(); assert.doesNotMatch(lastAlert(f), /PRIVATE_RESPONSE_SECRET/);
  assert.equal(f.calls[0].options.followRedirects, false);
});
test('menu exposes separate preparation and completed-result actions', () => {
  const f = fixture(); f.app.onInstall();
  assert.ok(f.menu.some(m => m.handler === 'askAudienceFromSelection'));
  assert.ok(f.menu.some(m => m.handler === 'loadCompletedMindsAnswers'));
  assert.doesNotMatch(source, /ask_audience|tools\/call/);
});

test('partial Google consent escapes to native authorization before prompts, API calls or writes', () => {
  for (const name of ['setMindsApiKey', 'askAudienceFromSelection', 'loadCompletedMindsAnswers']) {
    const f = fixture(); const original = [...f.props];
    const authorization = new Error('Native authorization required');
    f.onAuthorize = () => { throw authorization; };
    assert.throws(() => f.app[name](), error => error === authorization);
    assert.deepEqual(f.calls, []); assert.deepEqual(f.writes, []);
    assert.deepEqual(f.alerts, []); assert.deepEqual(f.dialogs, []);
    assert.deepEqual([...f.props], original);
  }
});
