import { requestExport, addElementAtPoint } from '@canva/design';
import { requestOpenExternalUrl } from '@canva/platform';
import { prepareDesignEditor } from '@canva/intents/design';
import { mountPanel, styles } from './panel.js';

declare const CREATIVE_GATEWAY_URL: string;
prepareDesignEditor({
  render: async () => {
    const style = document.createElement('style'); style.textContent = styles; document.head.append(style);
    const root = document.createElement('main'); document.body.append(root);
    mountPanel({ root, gatewayUrl: CREATIVE_GATEWAY_URL, hostName: 'Canva',
      openUrl: async (url: string) => { await requestOpenExternalUrl({ url }); },
      exportMaterial: async () => {
        // PDF preserves multi-page exports. PNG multi-page exports are ZIPs.
        const exported = await requestExport({ acceptedFileTypes: ['pdf_standard'] });
        if (exported.status !== 'completed') return null;
        if (exported.exportBlobs.length !== 1) throw new Error('Export one design at a time.');
        return { kind: 'document', label: exported.title || 'Canva design', url: exported.exportBlobs[0].url, mimeType: 'application/pdf' };
      },
      importFindings: async (text: string) => {
        await addElementAtPoint({ type: 'text', children: [text] });
      },
    });
  },
});
