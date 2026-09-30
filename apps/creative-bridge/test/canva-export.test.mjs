import test from 'node:test';
import assert from 'node:assert/strict';
import { importCanvaPdf } from '../src/canva-export.js';
const body = { request: 'Review', source: { kind: 'document', label: 'Coffee design', mimeType: 'application/pdf', url: 'https://export-download.canva.com/qa.pdf?signature=test' } };
test('approved Canva PDF is uploaded as an owned document without exposing Minds credentials to Canva', async () => {
  const prepared = await importCanvaPdf(body, {
    request: async (url, options) => { assert.equal(options.headers, undefined); assert.equal(options.redirect, 'error'); return new Response('%PDF-test', { headers: { 'Content-Type': 'application/pdf' } }); },
    upload: async form => { assert.equal(form.get('folder'), 'chat'); assert.equal(form.get('file').type, 'application/pdf'); assert.equal(form.get('file').name, 'Coffee design.pdf'); return { url: '/api/uploads/chat/owner/coffee.pdf?sig=test' }; },
  });
  assert.equal(prepared.source.label, body.source.label);
  assert.equal(prepared.source.url, '/api/uploads/chat/owner/coffee.pdf?sig=test');
  assert.equal(body.source.url, 'https://export-download.canva.com/qa.pdf?signature=test');
});
test('other sources use canonical import and invalid vendor bodies cannot become uploaded findings', async () => {
  const untouched = { ...body, source: { ...body.source, url: 'https://other.example/doc.pdf' } };
  assert.equal(await importCanvaPdf(untouched, { request: () => assert.fail(), upload: () => assert.fail() }), untouched);
  await assert.rejects(importCanvaPdf(body, { request: async () => new Response('<html>error</html>'), upload: () => assert.fail() }));
  await assert.rejects(importCanvaPdf({ ...body, source: { ...body.source, url: 'https://user:secret@export-download.canva.com/qa.pdf' } }, { request: () => assert.fail(), upload: () => assert.fail() }));
});
