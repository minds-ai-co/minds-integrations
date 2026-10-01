import { createApp, h } from 'vue';
import Button from '@minds-ai-co/ui/components/button/Button.vue';

/** The shared package owns controls and their visual variants; hosts own business actions. */
export function mountMindsControls(root) {
  for (const original of root.querySelectorAll('button')) {
    const target = document.createElement('span');
    target.className = 'minds-control';
    const attrs = Object.fromEntries([...original.attributes].map(attribute => [attribute.name, attribute.name === 'hidden' ? true : attribute.value]));
    const label = original.textContent;
    original.replaceWith(target);
    createApp({ render: () => h(Button, { ...attrs, variant: attrs.id === 'preview' ? 'primary' : 'secondary', size: 'xs', radius: 'compact', wrapLabel: true }, () => label) }).mount(target);
  }
}
