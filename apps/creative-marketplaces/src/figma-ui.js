import { mountPanel } from './panel.js';
import { randomRequestId } from '@minds/creative-review';
import { isFigmaHostReply } from './figma-host.js';
const pending = new Map();
window.addEventListener('message', event => {
  if (!isFigmaHostReply(event, window)) return;
  const value = event.data?.pluginMessage; if (!value) return;
  const request = pending.get(value.requestId); if (!request) return;
  pending.delete(value.requestId); clearTimeout(request.timer);
  if (value.error) request.reject(new Error(value.error)); else request.resolve(value.result);
});
function host(type, text) {
  return new Promise((resolve, reject) => {
    const requestId = randomRequestId();
    const timer = setTimeout(() => { pending.delete(requestId); reject(new Error('The design operation timed out.')); }, 60000);
    pending.set(requestId, { resolve, reject, timer });
    parent.postMessage({ pluginMessage: { type, requestId, text } }, '*');
  });
}
mountPanel({ root: document.querySelector('main'), gatewayUrl: CREATIVE_GATEWAY_URL, hostName: 'Figma',
  openUrl: url => host('open', url),
  exportMaterial: async () => { const result = await host('export'); return { kind: 'image', label: result.label, blob: new Blob([result.bytes], { type: 'image/png' }) }; },
  importFindings: text => host('import-findings', text),
});
