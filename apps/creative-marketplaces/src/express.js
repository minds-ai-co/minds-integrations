import { mountMindsControls } from './minds-ui.js';
import addOnUISdk from 'https://express.adobe.com/static/add-on-sdk/sdk.js';
import { mountPanel } from './panel.js';
await addOnUISdk.ready;
mountPanel({ mountControls: mountMindsControls, root: document.querySelector('main'), gatewayUrl: CREATIVE_GATEWAY_URL, hostName: 'Adobe Express',
  openUrl: async url => { window.open(url, '_blank', 'noopener,noreferrer'); },
  exportMaterial: async () => {
    if (!await addOnUISdk.app.document.exportAllowed()) throw new Error('This design needs approval before it can be sent to Minds.');
    const renditions = await addOnUISdk.app.document.createRenditions({ range: addOnUISdk.constants.Range.currentPage, format: addOnUISdk.constants.RenditionFormat.png });
    if (renditions.length !== 1) throw new Error('Select one page to review.');
    return { kind: 'image', label: 'Adobe Express page', blob: renditions[0].blob };
  },
});
