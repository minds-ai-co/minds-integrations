import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import Icon from '@minds-ai-co/ui/components/display/Icon.vue';
import en from '@minds-ai-co/locales/en.json';
import FigmaStudyApp from './FigmaStudyApp.vue';
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
document.querySelector('main').classList.add('figma-native');
createApp(FigmaStudyApp, { gatewayUrl: CREATIVE_GATEWAY_URL, host }).component('Icon', Icon).use(createI18n({ legacy: false, locale: 'en', messages: { en } })).mount(document.querySelector('main'));
