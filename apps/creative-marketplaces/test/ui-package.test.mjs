import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { JSDOM, VirtualConsole } from 'jsdom';

test('the actual Figma bundle renders package-owned controls with self-contained shared fonts', async () => {
  const html = readFileSync(new URL('../dist/figma/ui.html', import.meta.url), 'utf8');
  const errors = [];
  const virtualConsole = new VirtualConsole(); virtualConsole.on('jsdomError', error => errors.push(error));
  const dom = new JSDOM(html, { runScripts: 'dangerously', virtualConsole });
  try {
    assert.equal(dom.window.document.querySelector('#connect')?.tagName, 'BUTTON');
    assert.ok(dom.window.document.querySelector('textarea[placeholder="Describe what you want to learn in this Study…"]'));
    assert.ok([...dom.window.document.querySelectorAll('button')].some(button => button.textContent.trim() === 'Select Audiences'));
    assert.equal(dom.window.document.querySelector('#study'), null);
    assert.equal(dom.window.document.querySelector('#open'), null);
    assert.ok(html.includes('data:font/woff2;base64,'));
    assert.ok(html.includes('--brand-gradient'));
    assert.deepEqual(errors.map(error => error.message), []);
  } finally { dom.window.close(); }
});
