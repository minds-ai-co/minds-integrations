import { createCipheriv, createDecipheriv, randomBytes, randomUUID } from 'node:crypto';
import pg from 'pg';

export interface Actor { team: string; user: string }
export interface RequestInput extends Actor {
  channel: string; thread: string; question: string; audienceId?: string;
  audienceName?: string; studyId?: string; preferredId?: string; intent: 'ask' | 'read' | 'followup';
}
export interface Job extends RequestInput {
  id: string; phase: string; lease: string; questionId?: string; messageTs?: string;
  result?: string; studyUrl?: string; started: number;
}

export class Store {
  readonly pool: pg.Pool;
  private readonly key: Buffer;
  constructor(url: string, encryptionKey: string) {
    this.key = Buffer.from(encryptionKey, 'base64');
    if (this.key.length !== 32) throw new Error('SLACK_STORAGE_KEY must encode 32 random bytes');
    this.pool = new pg.Pool({ connectionString: url, max: 5, connectionTimeoutMillis: 5000, statement_timeout: 10000 });
  }
  seal(value: unknown, context: string): string {
    const iv = randomBytes(12);
    const cipher = createCipheriv('aes-256-gcm', this.key, iv);
    cipher.setAAD(Buffer.from(context));
    const data = Buffer.concat([cipher.update(JSON.stringify(value)), cipher.final()]);
    return Buffer.concat([iv, cipher.getAuthTag(), data]).toString('base64');
  }
  open<T>(value: string, context: string): T {
    const raw = Buffer.from(value, 'base64');
    const cipher = createDecipheriv('aes-256-gcm', this.key, raw.subarray(0, 12));
    cipher.setAAD(Buffer.from(context));
    cipher.setAuthTag(raw.subarray(12, 28));
    return JSON.parse(Buffer.concat([cipher.update(raw.subarray(28)), cipher.final()]).toString()) as T;
  }
  async migrate(): Promise<void> {
    await this.pool.query(`CREATE SCHEMA IF NOT EXISTS minds_slack;
      REVOKE ALL ON SCHEMA minds_slack FROM PUBLIC;
      CREATE TABLE IF NOT EXISTS minds_slack.records (
        kind text NOT NULL, key text NOT NULL, team text NOT NULL, actor text NOT NULL,
        value text NOT NULL, expires_at timestamptz, PRIMARY KEY(kind,key));
      CREATE INDEX IF NOT EXISTS records_owner ON minds_slack.records(team,actor);
      CREATE TABLE IF NOT EXISTS minds_slack.jobs (
        id text PRIMARY KEY, team text NOT NULL, actor text NOT NULL, phase text NOT NULL,
        value text NOT NULL, lease text, available_at timestamptz NOT NULL DEFAULT now(),
        created_at timestamptz NOT NULL DEFAULT now(), updated_at timestamptz NOT NULL DEFAULT now());
      CREATE INDEX IF NOT EXISTS jobs_ready ON minds_slack.jobs(available_at)
        WHERE phase NOT IN ('done','failed');
      CREATE UNIQUE INDEX IF NOT EXISTS jobs_one_active_actor ON minds_slack.jobs(team,actor)
        WHERE phase NOT IN ('done','failed');`);
  }
  async put(kind: string, key: string, actor: Actor, value: unknown, ttlSeconds?: number): Promise<void> {
    await this.pool.query(`INSERT INTO minds_slack.records VALUES($1,$2,$3,$4,$5,$6)
      ON CONFLICT(kind,key) DO UPDATE SET value=excluded.value, expires_at=excluded.expires_at`,
    [kind, key, actor.team, actor.user, this.seal(value, `${kind}:${key}`), ttlSeconds ? new Date(Date.now() + ttlSeconds * 1000) : null]);
  }
  async once(kind: string, key: string, actor: Actor, ttlSeconds: number): Promise<boolean> {
    const result = await this.pool.query(`INSERT INTO minds_slack.records VALUES($1,$2,$3,$4,$5,now()+($6*interval '1 second'))
      ON CONFLICT(kind,key) DO NOTHING RETURNING key`,
      [kind, key, actor.team, actor.user, this.seal(true, `${kind}:${key}`), ttlSeconds]);
    return !!result.rowCount;
  }
  async get<T>(kind: string, key: string, db: pg.Pool | pg.PoolClient = this.pool): Promise<T | null> {
    const r = await db.query<{value: string}>(`SELECT value FROM minds_slack.records
      WHERE kind=$1 AND key=$2 AND (expires_at IS NULL OR expires_at>now())`, [kind, key]);
    return r.rows[0] ? this.open<T>(r.rows[0].value, `${kind}:${key}`) : null;
  }
  async take<T>(kind: string, key: string): Promise<T | null> {
    const r = await this.pool.query<{value: string}>(`DELETE FROM minds_slack.records
      WHERE kind=$1 AND key=$2 AND (expires_at IS NULL OR expires_at>now()) RETURNING value`, [kind, key]);
    return r.rows[0] ? this.open<T>(r.rows[0].value, `${kind}:${key}`) : null;
  }
  async replaceExisting(kind: string, key: string, value: unknown, db: pg.Pool | pg.PoolClient = this.pool): Promise<boolean> {
    const result = await db.query('UPDATE minds_slack.records SET value=$3 WHERE kind=$1 AND key=$2 RETURNING key',
      [kind, key, this.seal(value, `${kind}:${key}`)]);
    return !!result.rowCount;
  }
  async remove(kind: string, key: string): Promise<void> {
    await this.pool.query('DELETE FROM minds_slack.records WHERE kind=$1 AND key=$2', [kind, key]);
  }
  async erase(team: string, user?: string): Promise<void> {
    const client = await this.pool.connect();
    try {
      await client.query('BEGIN');
      await client.query('SELECT pg_advisory_xact_lock(hashtextextended($1,0))', [`minds-slack-team:${team}`]);
      await client.query('DELETE FROM minds_slack.records WHERE team=$1 AND ($2::text IS NULL OR actor=$2)', [team, user ?? null]);
      await client.query('DELETE FROM minds_slack.jobs WHERE team=$1 AND ($2::text IS NULL OR actor=$2)', [team, user ?? null]);
      await client.query('COMMIT');
    } catch (e) { await client.query('ROLLBACK'); throw e; } finally { client.release(); }
  }
  async bindConnection(stateKey: string, actor: Actor, connection: unknown): Promise<boolean> {
    const client = await this.pool.connect();
    try {
      await client.query('BEGIN');
      await client.query('SELECT pg_advisory_xact_lock(hashtextextended($1,0))', [`minds-slack-team:${actor.team}`]);
      const state = await client.query(`DELETE FROM minds_slack.records WHERE kind='authorization' AND key=$1
        AND team=$2 AND actor=$3 AND expires_at>now() RETURNING key`, [stateKey, actor.team, actor.user]);
      if (!state.rowCount) { await client.query('ROLLBACK'); return false; }
      const key = actorKey(actor);
      await client.query(`INSERT INTO minds_slack.records(kind,key,team,actor,value) VALUES('connection',$1,$2,$3,$4)
        ON CONFLICT(kind,key) DO UPDATE SET value=excluded.value`,
        [key, actor.team, actor.user, this.seal(connection, `connection:${key}`)]);
      await client.query('COMMIT');
      return true;
    } catch (e) { await client.query('ROLLBACK'); throw e; } finally { client.release(); }
  }
  async enqueue(id: string, input: RequestInput): Promise<'queued' | 'duplicate' | 'busy'> {
    try {
      const r = await this.pool.query(`INSERT INTO minds_slack.jobs(id,team,actor,phase,value)
        VALUES($1,$2,$3,'queued',$4) ON CONFLICT(id) DO NOTHING RETURNING id`,
      [id, input.team, input.user, this.seal({...input, started: Date.now()}, `job:${id}`)]);
      return r.rowCount ? 'queued' : 'duplicate';
    } catch (e) { if (e instanceof Error && 'code' in e && e.code === '23505') return 'busy'; throw e; }
  }
  async claim(): Promise<Job | null> {
    const lease = randomUUID();
    const r = await this.pool.query<{id: string; phase: string; value: string}>(`UPDATE minds_slack.jobs SET
      lease=$1, available_at=now()+interval '120 seconds' WHERE id=(
        SELECT id FROM minds_slack.jobs WHERE phase NOT IN ('done','failed') AND available_at<=now()
        ORDER BY available_at FOR UPDATE SKIP LOCKED LIMIT 1) RETURNING id,phase,value`, [lease]);
    const row = r.rows[0];
    return row ? {...this.open<RequestInput & Partial<Job>>(row.value, `job:${row.id}`), id: row.id, phase: row.phase, lease} as Job : null;
  }
  async save(job: Job, phase: string, delaySeconds = 0): Promise<boolean> {
    const r = await this.pool.query(`UPDATE minds_slack.jobs SET phase=$3,value=$4,
      available_at=now()+($5 * interval '1 second'),updated_at=now() WHERE id=$1 AND lease=$2 RETURNING id`,
    [job.id, job.lease, phase, this.seal(job, `job:${job.id}`), delaySeconds]);
    return !!r.rowCount;
  }
  async owned(job: Job): Promise<boolean> {
    const r = await this.pool.query('SELECT 1 FROM minds_slack.jobs WHERE id=$1 AND lease=$2', [job.id, job.lease]);
    return !!r.rowCount;
  }
  async cleanup(): Promise<void> {
    await this.pool.query(`DELETE FROM minds_slack.records WHERE expires_at<now();
      DELETE FROM minds_slack.jobs WHERE phase IN ('done','failed') AND updated_at<now()-interval '7 days'`);
  }
}
export const actorKey = (actor: Actor): string => `${actor.team}:${actor.user}`;
