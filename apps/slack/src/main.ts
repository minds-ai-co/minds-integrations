import { createSlackApp } from './app.js';
import { Store } from './store.js';
import { MindsAuthorization } from './oauth.js';

function required(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`${name} is required`);
  return value;
}
function slackSecret(name: string): string {
  const value = required(name);
  if (!/^[a-f0-9]{32}$/.test(value)) throw new Error(`${name} must be the revealed Slack secret, not the dashboard placeholder`);
  return value;
}
const publicUrl = required('SLACK_PUBLIC_URL').replace(/\/$/, '');
const parsed = new URL(publicUrl);
if (parsed.protocol !== 'https:' || parsed.pathname !== '/' || parsed.search || parsed.hash || parsed.username || parsed.password) throw new Error('SLACK_PUBLIC_URL must be an HTTPS origin');
const store = new Store(required('SLACK_DATABASE_URL'), required('SLACK_STORAGE_KEY'));
await store.migrate();
const auth = new MindsAuthorization(store, publicUrl);
const {app, worker} = createSlackApp({publicUrl, signingSecret: slackSecret('SLACK_SIGNING_SECRET'),
  clientId: required('SLACK_CLIENT_ID'), clientSecret: slackSecret('SLACK_CLIENT_SECRET'), stateSecret: required('SLACK_STATE_SECRET'),
  ...(process.env.SLACK_AGENT_API_KEY ? {agent: {apiKey: process.env.SLACK_AGENT_API_KEY, model: required('SLACK_AGENT_MODEL')}} : {})}, store, auth);
await app.start(Number(process.env.PORT ?? 3000));
console.log('Minds for Slack started');
let stopping = false;
const shutdown = () => { stopping = true; };
process.on('SIGTERM', shutdown); process.on('SIGINT', shutdown);
let ticks = 0;
while (!stopping) {
  try { await worker.tick(); if (++ticks % 3600 === 0) await store.cleanup(); }
  catch { console.error('Slack worker unavailable; retrying without payload logging'); }
  await new Promise(resolve => setTimeout(resolve, 1000));
}
await app.stop();
await store.pool.end();
