import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { test } from 'node:test';
import { randomBytes } from 'node:crypto';
import { Store } from '../dist/store.js';

test('idle pool errors do not terminate the process or print client/error payloads', () => {
  const child = spawnSync(process.execPath, ['--input-type=module', '-e', `
    import { Store } from './dist/store.js';
    const store = new Store('postgres://localhost/slack_test', Buffer.alloc(32).toString('base64'));
    store.pool.emit('error', new Error('PRIVATE_DATABASE_ERROR'), { password: 'PRIVATE_DATABASE_PASSWORD' });
    await store.pool.end();
    console.log('process-survived');
  `], { cwd: new URL('../', import.meta.url), encoding: 'utf8' });
  assert.equal(child.status, 0, 'an idle pool error must not terminate Slack');
  assert.match(child.stdout, /process-survived/);
  assert.equal(child.stderr.trim(), 'Slack database connection lost; pool will reconnect; payload omitted');
  assert.doesNotMatch(child.stdout + child.stderr, /PRIVATE_DATABASE/);
});

test('startup failures are logged without native error or connection dumps', () => {
  const child = spawnSync(process.execPath, ['dist/main.js'], {
    cwd: new URL('../', import.meta.url), encoding: 'utf8',
    env: { PATH: process.env.PATH, SLACK_PUBLIC_URL: 'https://invalid.example/PRIVATE_STARTUP_INPUT' },
  });
  assert.equal(child.status, 1);
  assert.equal(child.stderr.trim(), 'Minds for Slack failed to start or stopped unexpectedly; payload omitted');
  assert.doesNotMatch(child.stdout + child.stderr, /PRIVATE_STARTUP_INPUT|Error:|at .*main/);
});

test('a terminated idle database connection is replaced and subsequent queries succeed', {
  skip: !process.env.SLACK_TEST_DATABASE_URL,
}, async () => {
  const database = process.env.SLACK_TEST_DATABASE_URL;
  const store = new Store(database, randomBytes(32).toString('base64'));
  const admin = new Store(database, randomBytes(32).toString('base64'));
  const errors = [];
  const original = console.error;
  console.error = (...args) => errors.push(args);
  try {
    const { rows: [{ pid }] } = await store.pool.query('SELECT pg_backend_pid() AS pid');
    await admin.pool.query('SELECT pg_terminate_backend($1)', [pid]);
    for (let attempt = 0; attempt < 100 && errors.length === 0; attempt++) {
      await new Promise(resolve => setTimeout(resolve, 20));
    }
    assert.deepEqual(errors, [['Slack database connection lost; pool will reconnect; payload omitted']]);
    const { rows: [{ pid: replacement }] } = await store.pool.query('SELECT pg_backend_pid() AS pid');
    assert.notEqual(replacement, pid);
  } finally {
    console.error = original;
    await Promise.all([store.pool.end(), admin.pool.end()]);
  }
});
