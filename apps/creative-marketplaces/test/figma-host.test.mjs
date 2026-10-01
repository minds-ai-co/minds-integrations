import test from 'node:test';
import assert from 'node:assert/strict';
import { isFigmaHostReply, mindsExternalLink } from '../src/figma-host.js';

test('Figma accepts its native top-frame relay and rejects foreign message sources', () => {
  const frames = { parent: {}, top: {} };
  for (const source of [frames.parent, frames.top]) {
    assert.equal(isFigmaHostReply({ source, origin: 'https://www.figma.com' }, frames), true);
    for (const origin of ['null', '', 'https://evil.example', 'https://www.figma.com.evil.example']) {
      assert.equal(isFigmaHostReply({ source, origin }, frames), false);
    }
  }
  assert.equal(isFigmaHostReply({ source: {}, origin: 'https://www.figma.com' }, frames), false);
});

test('Figma main opens only exact Minds HTTPS links without a browser URL constructor', () => {
  for (const link of ['https://getminds.ai', 'https://getminds.ai/', 'https://getminds.ai/integrations/creative/connect?ticket=test', 'https://getminds.ai/?studyId=test&draftPlanId=test']) {
    assert.equal(mindsExternalLink(link), link);
  }
  for (const link of [undefined, '', 'http://getminds.ai', 'https://getminds.ai.evil.example/', 'https://getminds.ai@evil.example/', 'https://user@getminds.ai/', 'https://getminds.ai:443/', 'https://getminds.ai\\@evil.example/', 'https://getminds.ai/\n', 'https://getminds.ai/\u0000', 'javascript:alert(1)']) {
    assert.throws(() => mindsExternalLink(link), /Unsupported Minds link/);
  }
});
