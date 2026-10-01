import { register, attach } from '@adobe/uix-guest';
import { ValidationExtensionService, type AppMetadata, type Experience } from '@adobe/genstudio-extensibility-sdk';
import { mountPanel } from './panel.js';

declare const CREATIVE_GATEWAY_URL: string;
const extensionId = 'minds:creative-review';
const metadata = (id: string): AppMetadata => ({ id, extensionId, label: 'Minds audience review',
  iconDataUri: 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><text x="2" y="20" font-size="22">M</text></svg>'),
  supportedChannels: [{ id: 'email', name: 'Email' }], options: { validation: { singleExperienceViewMode: true } },
});
const root = document.querySelector('main')!;
if (location.hash !== '#/review') {
  const connection = await register({ id: extensionId, methods: { validationExtension: {
    getApps: async (id: string) => [{ url: '#/review', metadata: metadata(id) }],
    getToggles: async (id: string) => [{ metadata: metadata(id), onClick: async () => { ValidationExtensionService.open(connection, id); } }],
  } } });
  root.textContent = 'Minds audience review is available in the validation panel.';
} else {
  const connection = await attach({ id: extensionId });
  mountPanel({ root, gatewayUrl: CREATIVE_GATEWAY_URL, hostName: 'Adobe GenStudio',
    openUrl: async (url: string) => { window.open(url, '_blank', 'noopener,noreferrer'); },
    exportMaterial: async () => {
      const experiences: Experience[] = await ValidationExtensionService.getExperiences(connection);
      if (!experiences.length) throw new Error('Generate an email experience first.');
      // Never silently export every variant: require an explicit experience choice.
      const chooser = document.createElement('select'); chooser.setAttribute('aria-label', 'Experience to review');
      experiences.forEach((item, index) => chooser.append(new Option(item.id, String(index))));
      const dialog = document.createElement('dialog');
      const title = document.createElement('p'); title.textContent = 'Choose the experience whose copy you want to review.';
      const confirm = document.createElement('button'); confirm.textContent = 'Select experience';
      const cancel = document.createElement('button'); cancel.textContent = 'Cancel';
      dialog.append(title, chooser, confirm, cancel); document.body.append(dialog);
      const selected = await new Promise<Experience | null>(resolve => {
        confirm.onclick = () => { resolve(experiences[Number(chooser.value)]); dialog.close(); };
        cancel.onclick = () => { resolve(null); dialog.close(); };
        dialog.oncancel = () => resolve(null); dialog.showModal();
      });
      dialog.remove(); if (!selected) return null;
      const content = Object.values(selected.experienceFields).map(field => `${field.fieldName}: ${field.fieldValue}`).join('\n\n');
      if (!content.trim()) throw new Error('The selected experience has no copy to review.');
      return { kind: 'prompt', label: `GenStudio experience ${selected.id}`.slice(0, 500), content };
    },
  });
}
