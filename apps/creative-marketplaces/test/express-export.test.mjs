import { test } from 'node:test';
import assert from 'node:assert/strict';
import { exportExpressPage } from '../src/express-export.js';

function fixture({ premiumContent = false, premiumUser = false, chooseUpgrade = false, upgradeSucceeds = false, approval = true } = {}) {
  const calls = [];
  const blob = new Blob(['fixture'], { type: 'image/png' });
  const sdk = { constants: { Range: { currentPage: 'currentPage' }, RenditionFormat: { png: 'png' }, ButtonType: { secondary: 'secondary' } },
    app: {
      currentUser: { async isPremiumUser() { return premiumUser; } },
      async showModalDialog(input) { calls.push(['dialog', input]); return { buttonType: chooseUpgrade ? 'secondary' : 'cancel' }; },
      async startPremiumUpgradeIfFreeUser() { calls.push(['upgrade']); premiumUser = upgradeSucceeds; return upgradeSucceeds; },
      document: {
        async exportAllowed() { calls.push(['approval']); return approval; },
        async getPagesMetadata(input) { calls.push(['metadata', input]); return [{ hasPremiumContent: premiumContent }]; },
        async createRenditions(input) { calls.push(['render', input]); return [{ blob }]; },
      },
    } };
  return { sdk, calls, blob };
}
test('free content exports only the approved current page without an upgrade', async () => {
  const f = fixture(); const material = await exportExpressPage(f.sdk);
  assert.equal(material.blob, f.blob);
  assert.deepEqual(f.calls.filter(([name]) => name === 'render'), [['render', { range: 'currentPage', format: 'png' }]]);
  assert.equal(f.calls.some(([name]) => name === 'dialog' || name === 'upgrade'), false);
});
test('unapproved artwork cannot be exported or trigger an upgrade', async () => {
  const f = fixture({ approval: false, premiumContent: true });
  await assert.rejects(exportExpressPage(f.sdk), /needs approval/);
  assert.deepEqual(f.calls, [['approval']]);
});
for (const chooseUpgrade of [false, true]) test(`premium content is never exported when upgrade ${chooseUpgrade ? 'fails or is cancelled' : 'is declined'}`, async () => {
  const f = fixture({ premiumContent: true, chooseUpgrade });
  assert.equal(await exportExpressPage(f.sdk), null);
  assert.equal(f.calls.some(([name]) => name === 'render'), false);
  assert.match(f.calls.find(([name]) => name === 'dialog')[1].description, /Minds subscription does not include/);
});
test('successful native upgrade rechecks entitlement before exporting', async () => {
  const f = fixture({ premiumContent: true, chooseUpgrade: true, upgradeSucceeds: true });
  assert.equal((await exportExpressPage(f.sdk)).blob, f.blob);
  assert.equal(f.calls.filter(([name]) => name === 'upgrade').length, 1);
});
test('entitlement changes during rendering get only one native upgrade and bounded retry', async () => {
  const f = fixture({ chooseUpgrade: true, upgradeSucceeds: true }); let renders = 0;
  f.sdk.app.document.createRenditions = async () => { renders++; throw Error('USER_NOT_ENTITLED_TO_PREMIUM_CONTENT'); };
  await assert.rejects(exportExpressPage(f.sdk), /USER_NOT_ENTITLED/);
  assert.equal(renders, 2); assert.equal(f.calls.filter(([name]) => name === 'upgrade').length, 1);
});
