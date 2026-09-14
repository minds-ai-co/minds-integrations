import { LogLevel, type Logger } from '@slack/logger';

// SDK errors can contain provider request/response objects. Keep payloads out of logs.
export const safeLogger: Logger = {
  debug() {}, info() {},
  warn(...values: unknown[]) {
    const message = values.filter((value): value is string => typeof value === 'string').join(' ');
    const reason = message.includes('signature mismatch') ? 'signature_mismatch'
      : message.includes('request is stale') ? 'stale_timestamp'
      : message.includes('header x-slack-signature') ? 'invalid_signature_header'
      : message.includes('header x-slack-request-timestamp') ? 'invalid_timestamp_header'
      : message.includes('unknown signature version') ? 'unsupported_signature_version'
      : 'request_warning';
    console.warn(`Slack SDK warning: ${reason}; payload omitted`);
  },
  error() { console.error('Slack SDK operation failed; payload omitted'); },
  setLevel() {}, getLevel() { return LogLevel.ERROR; }, setName() {},
};
