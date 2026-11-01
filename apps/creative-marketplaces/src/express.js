import { mountMindsControls } from './minds-ui.js';
import addOnUISdk from 'https://express.adobe.com/static/add-on-sdk/sdk.js';
import { mountPanel } from './panel.js';
import { exportExpressPage } from './express-export.js';
await addOnUISdk.ready;
mountPanel({ mountControls: mountMindsControls, root: document.querySelector('main'), gatewayUrl: CREATIVE_GATEWAY_URL, hostName: 'Adobe Express',
  openUrl: async url => { window.open(url, '_blank', 'noopener,noreferrer'); },
  exportMaterial: () => exportExpressPage(addOnUISdk),
});
