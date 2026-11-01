// Use Adobe's entitlement/upgrade APIs before exporting any premium artwork.
// Preview-only renditions must never be uploaded to Minds as research material.
export async function exportExpressPage(sdk) {
  const { app, constants } = sdk;
  const range = constants.Range.currentPage;
  const upgrade = async () => {
    const result = await app.showModalDialog({
      variant: 'error', title: 'Adobe Express Premium required',
      description: 'This page contains Adobe Express Premium content. Replace those assets or upgrade Adobe Express before sending the page to Minds. A Minds subscription does not include Adobe Express Premium.',
      buttonLabels: { secondary: 'Upgrade Adobe Express' },
    });
    if (result.buttonType !== constants.ButtonType.secondary) return false;
    if (!await app.startPremiumUpgradeIfFreeUser()) return false;
    return app.currentUser.isPremiumUser();
  };
  const approved = async () => {
    if (!await app.document.exportAllowed()) throw new Error('This design needs approval before it can be sent to Minds.');
  };
  await approved();
  const pages = await app.document.getPagesMetadata({ range });
  if (!Array.isArray(pages)) throw new Error('Unable to check this page’s export permissions. Try again.');
  if (pages.some(page => page.hasPremiumContent) && !await app.currentUser.isPremiumUser()) {
    if (!await upgrade()) return null;
  }
  const render = () => app.document.createRenditions({ range, format: constants.RenditionFormat.png });
  let renditions;
  try {
    await approved(); renditions = await render();
  } catch (error) {
    // Content or entitlement can change between the preflight and rendition.
    if (!error?.message?.includes('USER_NOT_ENTITLED_TO_PREMIUM_CONTENT')) throw error;
    if (!await upgrade()) return null;
    await approved(); renditions = await render(); // One bounded retry; never bypass entitlement.
  }
  if (renditions.length !== 1) throw new Error('Select one page to review.');
  return { kind: 'image', label: 'Adobe Express page', blob: renditions[0].blob };
}
