import { randomBytes, createHash } from 'node:crypto';
import { App, HTTPReceiver, LogLevel, type BlockAction } from '@slack/bolt';
import type { Installation, InstallURLOptions } from '@slack/oauth';
import { WebClient } from '@slack/web-api';
import { Store, type Actor, type RequestInput } from './store.js';
import { MindsAuthorization } from './oauth.js';
import { audiences, studies, mindsClient, object, string, type Choice, type ToolClient } from './minds.js';
import { plain, escapeSlack, researchModal, resultBlocks } from './views.js';
import { safeLogger } from './logging.js';
import { draftResearch } from './agent.js';
import { ResearchWorker } from './worker.js';

export interface Config { publicUrl: string; signingSecret: string; clientId: string; clientSecret: string; stateSecret: string; agent?: {apiKey: string; model: string} }
interface Selection { input: RequestInput; choices: Choice[] }
const nonce = (): string => randomBytes(24).toString('base64url');
const key = (s: string): string => createHash('sha256').update(s).digest('hex');
const scopes = ['app_mentions.read', 'chat:write', 'commands', 'channels:read', 'groups:read'];

export function createSlackApp(config: Config, store: Store, auth: MindsAuthorization,
  getClient: (actor: Actor) => Promise<ToolClient> = async actor => mindsClient(await auth.token(actor)),
  slackApiUrl?: string) {
  const installationStore = {
    async storeInstallation(installation: Installation<'v1' | 'v2', boolean>) {
      if (installation.isEnterpriseInstall || !installation.team?.id || !installation.bot?.token) throw new Error('Install Minds into an individual workspace');
      await store.put('installation', installation.team.id, {team: installation.team.id, user: ''}, installation);
    },
    async fetchInstallation(query: {teamId?: string; isEnterpriseInstall?: boolean}) {
      if (!query.teamId || query.isEnterpriseInstall) throw new Error('Workspace installation required');
      const installation = await store.get<Installation<'v1' | 'v2', boolean>>('installation', query.teamId);
      if (!installation) throw new Error('Minds is not installed in this workspace');
      return installation;
    },
    async deleteInstallation(query: {teamId?: string}) { if (query.teamId) await store.erase(query.teamId); },
  };
  const receiver = new HTTPReceiver({
    signingSecret: config.signingSecret, clientId: config.clientId, clientSecret: config.clientSecret,
    stateSecret: config.stateSecret, scopes, installationStore,
    redirectUri: `${config.publicUrl}/slack/oauth_redirect`, bodyLimit: '256kb', logLevel: LogLevel.ERROR, logger: safeLogger,
    // Paid work is persisted by view_submission before ack; modal preparation can continue after ack.
    processBeforeResponse: false,
    installerOptions: {redirectUriPath: '/slack/oauth_redirect', stateStore: {
      async generateStateParam(options: InstallURLOptions) {
        const state = nonce(); await store.put('slack-state', key(state), {team: '', user: ''}, options, 600); return state;
      },
      async verifyStateParam(_now: Date, state: string) {
        const options = await store.take<InstallURLOptions>('slack-state', key(state));
        if (!options) throw new Error('Installation state expired or used'); return options;
      },
    }},
    customRoutes: [
      {path: '/health', method: 'GET', handler: async (_req, res) => {
        try { await store.pool.query('SELECT 1'); res.writeHead(200).end('ok'); } catch { res.writeHead(503).end('unavailable'); }
      }},
      ...['/minds/connect','/minds/callback'].map(path => ({path, method: 'GET' as const, handler: auth.handle.bind(auth)})),
    ],
    processEventErrorHandler: async () => false,
  });
  const app = new App({receiver, logLevel: LogLevel.ERROR, logger: safeLogger, clientOptions: {slackApiUrl, retryConfig: {retries: 0}, timeout: 10000}});
  app.error(async () => { console.error('Slack request failed; no payload logged'); });
  async function slack(team: string): Promise<WebClient> {
    const installation = await installationStore.fetchInstallation({teamId: team});
    return new WebClient(installation.bot?.token, {slackApiUrl, retryConfig: {retries: 0}, timeout: 10000, logLevel: LogLevel.ERROR, logger: safeLogger});
  }
  async function member(client: WebClient, channel: string, user: string): Promise<void> {
    let cursor: string | undefined;
    do {
      const result = await client.conversations.members({channel, limit: 200, cursor});
      if (result.members?.includes(user)) return;
      cursor = result.response_metadata?.next_cursor;
    } while (cursor);
    throw new Error('Requester no longer has channel access');
  }
  const worker = new ResearchWorker(store, getClient, {
    async start(job) {
      const client = await slack(job.team);
      await member(client, job.channel, job.user);
      const result = await client.chat.postMessage({channel: job.channel, thread_ts: job.thread,
        text: job.intent === 'read' ? 'Retrieving the selected Study’s findings…' : 'Preparing the selected research request…',
        unfurl_links: false, unfurl_media: false});
      if (!result.ts) throw new Error('Slack did not return a message ID'); return result.ts;
    },
    async update(job, text) {
      if (!job.messageTs) throw new Error('Result has no destination message');
      const client = await slack(job.team);
      await member(client, job.channel, job.user);
      await client.chat.update({channel: job.channel, ts: job.messageTs,
        text: escapeSlack(text), blocks: resultBlocks(text, job.studyUrl)});
    },
  });
  async function menu(input: RequestInput): Promise<void> {
    let reply = 'Bring your Minds research into this thread. Select an Audience and review your question, or share existing Study findings.';
    if (config.agent && input.question) {
      try {
        const draft = await draftResearch(input.question, await getClient(input), config.agent);
        input = {...input, question: draft.question, intent: draft.intent, preferredId: draft.targetId};
        reply = draft.reply;
      } catch { /* The native controls remain available when account/model access is unavailable. */ }
    }
    const id = nonce();
    await store.put('selection', id, input, {input, choices: []}, 1800);
    const client = await slack(input.team);
    await client.chat.postEphemeral({channel: input.channel, user: input.user, thread_ts: input.thread,
      text: 'Ask an Audience or read existing Study findings.', blocks: [
        {type: 'section', text: plain(reply)},
        {type: 'actions', elements: [
          {type: 'button', text: plain('Ask an Audience'), action_id: 'ask', value: id},
          {type: 'button', text: plain('Read a Study'), action_id: 'read', value: id},
          {type: 'button', text: plain('Connect Minds'), url: await auth.link(input), action_id: 'connect'},
          {type: 'button', text: plain('Disconnect'), action_id: 'disconnect', value: id},
        ]},
      ]});
  }
  app.event('app_mention', async ({event, body}) => {
    if (event.bot_id || !event.user || !body.team_id) return;
    const input: RequestInput = {team: body.team_id, user: event.user, channel: event.channel,
      thread: event.thread_ts ?? event.ts, question: event.text.replace(/<@[A-Z0-9]+>/g, '').trim(), intent: 'ask'};
    // Atomically deduplicate the signed event before preparing its menu.
    const receipt = `mention:${body.team_id}:${body.event_id}`;
    if (!await store.once('receipt', receipt, input, 86400)) return;
    await menu(input);
  });
  async function open(input: RequestInput, trigger: string): Promise<void> {
    const client = await slack(input.team);
    // Open immediately while the short-lived trigger is valid; fetch MCP choices afterwards.
    const loading = await client.views.open({trigger_id: trigger, view: {type: 'modal', title: plain('Minds'), close: plain('Close'),
      blocks: [{type: 'section', text: plain('Loading your Minds account…')}]}});
    if (!loading.view?.id) return;
    try {
      const mcp = await getClient(input);
      const choices = input.intent === 'read' ? await studies(mcp) : input.intent === 'ask' ? await audiences(mcp) : [];
      const id = nonce();
      await store.put('selection', id, input, {input, choices}, 1800);
      await client.views.update({view_id: loading.view.id, view: researchModal(id, input, choices.find(choice => choice.id === input.preferredId))});
    } catch {
      await client.views.update({view_id: loading.view.id, view: {type: 'modal', title: plain('Connect Minds'), close: plain('Close'), blocks: [
        {type: 'section', text: plain('Connect your own Minds account to use its Audiences and Studies.')},
        {type: 'actions', elements: [{type: 'button', text: plain('Connect Minds'), url: await auth.link(input), action_id: 'connect'}]},
      ]}});
    }
  }
  app.action<BlockAction>(/^(ask|read)$/, async ({ack, body, action}) => {
    await ack();
    if (!('value' in action) || !action.value) return;
    const selected = await store.get<Selection>('selection', action.value);
    if (!selected || selected.input.team !== body.team?.id || selected.input.user !== body.user.id) return;
    await open({...selected.input, intent: action.action_id === 'read' ? 'read' : 'ask'}, body.trigger_id);
  });
  app.shortcut('ask_minds', async ({ack, shortcut, body}) => {
    await ack();
    if (shortcut.type !== 'message_action' || !body.team?.id) return;
    await open({team: body.team.id, user: body.user.id, channel: shortcut.channel.id,
      thread: string(object(shortcut.message).thread_ts) || shortcut.message.ts,
      question: shortcut.message.text ?? '', intent: 'ask'}, shortcut.trigger_id);
  });
  app.options('target', async ({ack, body, options}) => {
    const view = object(object(body).view);
    const selection = await store.get<Selection>('selection', string(view.private_metadata));
    if (!selection || selection.input.team !== body.team?.id || selection.input.user !== body.user.id) { await ack({options: []}); return; }
    const query = options.value.toLowerCase();
    await ack({options: selection.choices.filter(c => c.name.toLowerCase().includes(query)).slice(0, 100)
      .map(choice => ({text: {...plain(choice.name.slice(0, 75))}, value: choice.id}))});
  });
  app.view('research_submit', async ({ack, body, view}) => {
    const selection = await store.get<Selection>('selection', view.private_metadata);
    if (!selection || selection.input.team !== body.team?.id || selection.input.user !== body.user.id) {
      await ack({response_action: 'errors', errors: {sharing: 'This request expired. Open a new request.'}}); return;
    }
    const values = view.state.values;
    const sharing = values.sharing?.sharing?.selected_options?.some(option => option.value === 'approved');
    if (!sharing) { await ack({response_action: 'errors', errors: {sharing: 'Approve sharing in the originating conversation to continue.'}}); return; }
    const target = values.target?.target?.selected_option?.value;
    const chosen = selection.choices.find(c => c.id === target);
    if (selection.input.intent !== 'followup' && !chosen) { await ack({response_action: 'errors', errors: {target: 'Choose an accessible item.'}}); return; }
    const question = values.question?.question?.value?.trim() ?? '';
    if (selection.input.intent !== 'read' && !question) { await ack({response_action: 'errors', errors: {question: 'Include the question and text to test.'}}); return; }
    const input: RequestInput = {...selection.input, question,
      ...(selection.input.intent === 'ask' ? {audienceId: chosen?.id, audienceName: chosen?.name} : selection.input.intent === 'read' ? {studyId: chosen?.id} : {})};
    const result = await store.enqueue(key(`${input.team}:${input.user}:${view.private_metadata}`), input);
    if (result === 'busy') { await ack({response_action: 'errors', errors: {sharing: 'You already have an active request. Wait for it to finish.'}}); return; }
    await ack();
  });
  app.action<BlockAction>('followup', async ({ack, body}) => {
    await ack();
    const team = body.team?.id, channel = body.channel?.id;
    const message = object(body.message), thread = string(message.thread_ts) || string(message.ts);
    if (!team || !channel || !thread) return;
    const context = await store.get<{studyId: string}>('thread', `${team}:${body.user.id}:${channel}:${thread}`);
    if (!context) { await menu({team, user: body.user.id, channel, thread, question: '', intent: 'ask'}); return; }
    await open({team, user: body.user.id, channel, thread, question: '', intent: 'followup', studyId: context.studyId}, body.trigger_id);
  });
  app.action<BlockAction>('disconnect', async ({ack, body}) => {
    await ack();
    if (!body.team?.id) return;
    await auth.disconnect({team: body.team.id, user: body.user.id});
  });
  app.action(/^(connect|open_study)$/, async ({ack}) => { await ack(); });
  app.event('app_uninstalled', async ({body}) => { if (body.team_id) await store.erase(body.team_id); });
  app.event('tokens_revoked', async ({body, event}) => {
    if (body.team_id && event.tokens.bot?.length) await store.erase(body.team_id);
  });
  return {app, receiver, worker, installationStore};
}
