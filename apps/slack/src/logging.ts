import { LogLevel, type Logger } from '@slack/logger';

// SDK errors can contain provider request/response objects. Keep payloads out of logs.
export const safeLogger: Logger = {
  debug() {}, info() {},
  warn() { console.warn('Slack SDK warning; payload omitted'); },
  error() { console.error('Slack SDK operation failed; payload omitted'); },
  setLevel() {}, getLevel() { return LogLevel.ERROR; }, setName() {},
};
