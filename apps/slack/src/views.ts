import type { Block, KnownBlock, ModalView } from '@slack/types';
import type { RequestInput } from './store.js';

export const plain = (text: string) => ({type: 'plain_text' as const, text: text.slice(0, 2900), emoji: false});
export const escapeSlack = (text: string): string => text.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');
export function resultBlocks(text: string, url?: string): (KnownBlock | Block)[] {
  return [
    {type: 'section', text: plain(text.slice(0, 2900))},
    {type: 'context', elements: [plain('Synthetic-Audience research. Responses are AI-generated, not recruited-human responses.')]},
    ...(url ? [{type: 'actions' as const, elements: [
      {type: 'button' as const, text: plain('Open Study'), url, action_id: 'open_study'},
      {type: 'button' as const, text: plain('Ask a follow-up'), action_id: 'followup'},
    ]}] : []),
  ];
}
export function researchModal(id: string, input: RequestInput, preferred?: {id: string; name: string}): ModalView {
  const read = input.intent === 'read';
  const followup = input.intent === 'followup';
  return {type: 'modal', callback_id: 'research_submit', private_metadata: id,
    title: plain(read ? 'Read Study findings' : 'Ask Minds'), submit: plain(read ? 'Share findings' : 'Run question'), close: plain('Cancel'),
    blocks: [
      ...(!followup ? [{type: 'input' as const, block_id: 'target', label: plain(read ? 'Study' : 'Audience'),
        element: {type: 'external_select' as const, action_id: 'target', min_query_length: 0, ...(preferred ? {initial_option: {text: plain(preferred.name.slice(0, 75)), value: preferred.id}} : {}), placeholder: plain(read ? 'Choose a Study' : 'Choose an Audience')}}] : []),
      ...(!read ? [{type: 'input' as const, block_id: 'question', label: plain('Question and stimulus'),
        element: {type: 'plain_text_input' as const, action_id: 'question', multiline: true, max_length: 3000,
          ...(input.question ? {initial_value: input.question.slice(0, 3000)} : {})},
        hint: plain('Ask one question. Include the proposal or text to test. Private Slack attachments are not passed to respondents.')}] : []),
      {type: 'input', block_id: 'sharing', label: plain('Result visibility'), element: {type: 'checkboxes', action_id: 'sharing', options: [
        {text: plain('Share these findings with everyone who can read the originating channel or thread.'), value: 'approved'},
      ]}},
      {type: 'context', elements: [plain(read ? 'Reads existing findings without launching new research. The Study link retains Minds access controls.' : 'Runs real synthetic-Audience research using your Minds account and credits. Minds may refine the question; requests needing a multi-question plan continue in Minds.')]},
    ]};
}
