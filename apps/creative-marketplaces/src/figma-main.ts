import { mindsExternalLink } from './figma-host.js';

figma.showUI(__html__, { width: 380, height: 680, themeColors: true });
figma.ui.onmessage = async (message: { type: string; requestId: string; text?: string }) => {
  if (!message || !['export', 'import-findings', 'open'].includes(message.type)) return;
  try {
    if (message.type === 'export') {
      const selection = figma.currentPage.selection;
      if (selection.length !== 1) throw new Error('Select one frame or artwork to review.');
      const node = selection[0];
      const bytes = await node.exportAsync({ format: 'PNG', constraint: { type: 'SCALE', value: 1 } });
      if (bytes.length > 25 * 1024 * 1024) throw new Error('Selected artwork is too large. Export a smaller frame.');
      figma.ui.postMessage({ requestId: message.requestId, result: { bytes, label: node.name, nodeId: node.id, nodeType: node.type } });
    } else if (message.type === 'import-findings') {
      if (!message.text || message.text.length > 100000) throw new Error('Findings are empty or too large.');
      await figma.loadFontAsync({ family: 'Inter', style: 'Regular' });
      const text = figma.createText(); text.fontName = { family: 'Inter', style: 'Regular' };
      text.characters = message.text; text.name = 'Minds research findings'; text.resize(600, text.height);
      text.x = figma.viewport.center.x; text.y = figma.viewport.center.y;
      figma.currentPage.appendChild(text); figma.currentPage.selection = [text]; figma.viewport.scrollAndZoomIntoView([text]);
      figma.ui.postMessage({ requestId: message.requestId, result: true });
    } else {
      figma.openExternal(mindsExternalLink(message.text));
      figma.ui.postMessage({ requestId: message.requestId, result: true });
    }
  } catch (error) { figma.ui.postMessage({ requestId: message.requestId, error: error instanceof Error ? error.message : 'Selection could not be exported.' }); }
};
