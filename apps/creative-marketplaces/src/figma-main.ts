import { mindsExternalLink } from './figma-host.js';

figma.showUI(__html__, { width: 380, height: 680, themeColors: true });
interface SavedFigmaStudy {
  studyId: string; draftPlanId: string; revision: number; question: string; audienceIds: string[];
  material: { frameUrl: string; nodeId: string; label: string };
}
const uuid = (value: unknown): value is string => typeof value === 'string' && /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(value);
function isSavedStudy(value: unknown): value is SavedFigmaStudy {
  if (!value || typeof value !== 'object') return false;
  const state = value as Record<string, unknown>;
  if (Object.keys(state).some(key => !['studyId', 'draftPlanId', 'revision', 'question', 'audienceIds', 'material'].includes(key))
    || !uuid(state.studyId) || !uuid(state.draftPlanId) || !Number.isSafeInteger(state.revision) || Number(state.revision) < 1
    || typeof state.question !== 'string' || state.question.length > 20000
    || !Array.isArray(state.audienceIds) || !state.audienceIds.length || state.audienceIds.length > 100 || !state.audienceIds.every(uuid)
    || !state.material || typeof state.material !== 'object') return false;
  const material = state.material as Record<string, unknown>;
  return Object.keys(material).every(key => ['frameUrl', 'nodeId', 'label'].includes(key))
    && typeof material.frameUrl === 'string' && material.frameUrl.length <= 2000
    && /^https:\/\/www\.figma\.com\/(design|file)\/[A-Za-z0-9]+(?:\/[^?#\s]*)?\?node-id=[0-9]+-[0-9]+$/.test(material.frameUrl)
    && typeof material.nodeId === 'string' && /^[0-9]+:[0-9]+$/.test(material.nodeId)
    && typeof material.label === 'string' && material.label.length <= 500;
}
const resumePointer = 'minds-study-resume';
figma.ui.onmessage = async (message: { type: string; requestId: string; text?: string }) => {
  if (!message || !['export', 'import-findings', 'open', 'get-state', 'save-state', 'clear-state'].includes(message.type)) return;
  try {
    if (message.type === 'get-state') {
      const key = figma.root.getPluginData(resumePointer);
      const state: unknown = key ? await figma.clientStorage.getAsync(key) : null;
      figma.ui.postMessage({ requestId: message.requestId, result: isSavedStudy(state) ? state : null });
    } else if (message.type === 'save-state') {
      if (!message.text || message.text.length > 32768) throw new Error('Invalid saved research state.');
      const state: unknown = JSON.parse(message.text);
      if (!isSavedStudy(state)) throw new Error('Invalid saved research state.');
      // The file holds only a lookup identifier; OAuth/session credentials and uploads are never persisted.
      const key = `minds-study:${state.studyId}`;
      figma.root.setPluginData(resumePointer, '');
      await figma.clientStorage.setAsync(key, state);
      figma.root.setPluginData(resumePointer, key);
      figma.ui.postMessage({ requestId: message.requestId, result: true });
    } else if (message.type === 'clear-state') {
      // Copies may share a pointer. Clearing this file must not remove another file's private resume record.
      figma.root.setPluginData(resumePointer, '');
      figma.ui.postMessage({ requestId: message.requestId, result: true });
    } else if (message.type === 'export') {
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
