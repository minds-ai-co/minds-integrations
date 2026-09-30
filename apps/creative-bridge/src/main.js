import { createServer } from 'node:http';
import { createBridge } from './bridge.js';

const handler = createBridge({
  publicUrl: process.env.CREATIVE_PUBLIC_URL || 'http://127.0.0.1:8788',
  allowedOrigins: (process.env.CREATIVE_ALLOWED_ORIGINS || 'http://localhost:3000').split(',').map(value => value.trim()),
  clientId: process.env.MINDS_OAUTH_CLIENT_ID,
});
const server = createServer(handler);
server.requestTimeout = 100000;
server.headersTimeout = 15000;
server.listen(Number(process.env.PORT || 8788), process.env.HOST || '127.0.0.1', () => console.log('Minds creative gateway listening'));
