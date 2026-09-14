import { createHash, randomBytes, timingSafeEqual } from 'node:crypto';
import type { IncomingMessage, ServerResponse } from 'node:http';
import { Store, actorKey, type Actor } from './store.js';
import { object, string } from './minds.js';

const origin = 'https://getminds.ai';
interface Connection { accessToken: string; refreshToken?: string; expiresAt: number; clientId: string }
interface Authorization extends Actor { verifier: string; cookie: string; clientId: string }
const random = (): string => randomBytes(32).toString('base64url');
const digest = (s: string): string => createHash('sha256').update(s).digest('base64url');

export class MindsAuthorization {
  constructor(private readonly store: Store, readonly publicUrl: string, private readonly request: typeof fetch = fetch) {}
  async link(actor: Actor): Promise<string> {
    const nonce = random();
    await this.store.put('connect', digest(nonce), actor, actor, 600);
    return `${this.publicUrl}/minds/connect?ticket=${nonce}`;
  }
  async token(actor: Actor): Promise<string> {
    const key = actorKey(actor);
    // Serialize refresh-token rotation across all instances for this connection.
    const lock = await this.store.pool.connect();
    try {
      await lock.query('SELECT pg_advisory_lock(hashtextextended($1,0))', [`minds-slack:${key}`]);
      const connection = await this.store.get<Connection>('connection', key, lock);
      if (!connection) throw new Error('Connect your Minds account first');
      if (connection.expiresAt > Date.now() + 60000) return connection.accessToken;
      if (!connection.refreshToken) throw new Error('Reconnect your Minds account');
      const updated = await this.exchange({grant_type: 'refresh_token', refresh_token: connection.refreshToken, client_id: connection.clientId}, connection.clientId);
      if (!updated.refreshToken) updated.refreshToken = connection.refreshToken;
      if (!await this.store.replaceExisting('connection', key, updated, lock)) throw new Error('Minds connection was removed');
      return updated.accessToken;
    } finally {
      try { await lock.query('SELECT pg_advisory_unlock(hashtextextended($1,0))', [`minds-slack:${key}`]); } finally { lock.release(); }
    }
  }
  async disconnect(actor: Actor): Promise<void> {
    const connection = await this.store.get<Connection>('connection', actorKey(actor));
    // Erase local access even when remote revocation is temporarily unavailable.
    await this.store.erase(actor.team, actor.user);
    if (connection) {
      await this.request(`${origin}/oauth/revoke`, {method: 'POST', redirect: 'error',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}, signal: AbortSignal.timeout(10000),
        body: new URLSearchParams({token: connection.refreshToken ?? connection.accessToken, client_id: connection.clientId})}).catch(() => undefined);
    }
  }
  private async exchange(fields: Record<string, string>, clientId: string): Promise<Connection> {
    const response = await this.request(`${origin}/oauth/token`, {method: 'POST', redirect: 'error',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}, body: new URLSearchParams(fields), signal: AbortSignal.timeout(15000)});
    if (!response.ok) throw new Error('Minds authorization failed; reconnect your account');
    const value = object(await response.json());
    if (!string(value.access_token)) throw new Error('Minds did not return an access token');
    return {accessToken: string(value.access_token), refreshToken: string(value.refresh_token) || undefined,
      expiresAt: Date.now() + (typeof value.expires_in === 'number' ? value.expires_in : 3600) * 1000, clientId};
  }
  private async registration(): Promise<string> {
    const stored = await this.store.get<{id: string}>('oauth-client', this.publicUrl);
    if (stored) return stored.id;
    const response = await this.request(`${origin}/oauth/register`, {method: 'POST', redirect: 'error',
      headers: {'Content-Type': 'application/json'}, signal: AbortSignal.timeout(15000),
      body: JSON.stringify({client_name: 'Minds for Slack', redirect_uris: [`${this.publicUrl}/minds/callback`],
        grant_types: ['authorization_code','refresh_token'], response_types: ['code'], token_endpoint_auth_method: 'none'})});
    if (!response.ok) throw new Error('Minds client registration failed');
    const id = string(object(await response.json()).client_id);
    if (!id) throw new Error('Minds did not return a client ID');
    await this.store.put('oauth-client', this.publicUrl, {team: '', user: ''}, {id});
    return id;
  }
  async handle(req: IncomingMessage, res: ServerResponse): Promise<void> {
    res.setHeader('Cache-Control', 'no-store');
    res.setHeader('Referrer-Policy', 'no-referrer');
    res.setHeader('Content-Security-Policy', "default-src 'none'; frame-ancestors 'none'");
    try {
      if (req.method !== 'GET') { res.writeHead(405).end(); return; }
      const url = new URL(req.url ?? '/', this.publicUrl);
      if (url.pathname === '/minds/connect') {
        const ticket = url.searchParams.get('ticket') ?? '';
        const actor = await this.store.take<Actor>('connect', digest(ticket));
        if (!actor) throw new Error('Connection link expired; request a new link in Slack');
        const clientId = await this.registration();
        const state = random(), verifier = random(), cookie = random();
        await this.store.put('authorization', digest(state), actor, {...actor, clientId, verifier, cookie: digest(cookie)}, 600);
        res.setHeader('Set-Cookie', `minds_slack_oauth=${cookie}; Secure; HttpOnly; SameSite=Lax; Path=/minds; Max-Age=600`);
        const params = new URLSearchParams({response_type: 'code', client_id: clientId, redirect_uri: `${this.publicUrl}/minds/callback`,
          scope: 'openid sparks:read flows:read flows:write', state, code_challenge: digest(verifier), code_challenge_method: 'S256', resource: `${origin}/mcp`});
        res.writeHead(302, {Location: `${origin}/oauth/authorize?${params}`}).end();
      } else if (url.pathname === '/minds/callback') {
        const state = url.searchParams.get('state') ?? '';
        const record = await this.store.get<Authorization>('authorization', digest(state));
        const cookie = req.headers.cookie?.split(';').map(s => s.trim()).find(s => s.startsWith('minds_slack_oauth='))?.split('=')[1] ?? '';
        if (!record || !timingSafeEqual(Buffer.from(record.cookie), Buffer.from(digest(cookie)))) throw new Error('Invalid authorization state');
        const code = url.searchParams.get('code');
        if (!code || url.searchParams.has('error')) throw new Error('Minds connection was not approved');
        const connection = await this.exchange({grant_type: 'authorization_code', code, client_id: record.clientId,
          redirect_uri: `${this.publicUrl}/minds/callback`, code_verifier: record.verifier, resource: `${origin}/mcp`}, record.clientId);
        if (!await this.store.bindConnection(digest(state), record, connection)) throw new Error('Connection was disconnected or authorization already used');
        res.setHeader('Set-Cookie', 'minds_slack_oauth=; Secure; HttpOnly; SameSite=Lax; Path=/minds; Max-Age=0');
        res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'}).end('Minds connected. Return to Slack and ask @minds to start research.');
      } else res.writeHead(404).end();
    } catch {
      res.writeHead(400, {'Content-Type': 'text/plain; charset=utf-8'}).end('Connection could not be completed. Return to Slack and request a fresh Connect Minds link.');
    }
  }
}
