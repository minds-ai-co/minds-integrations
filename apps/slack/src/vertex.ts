import { GoogleAuth } from 'google-auth-library';
import type { AgentConfig } from './agent.js';
import { object, string } from './minds.js';

/** Use only the configured service account; never fall back to ambient user credentials. */
export function vertexAgent(env: Record<string, string | undefined>): AgentConfig | undefined {
  const raw = env.SLACK_VERTEX_CREDENTIALS;
  const project = env.SLACK_VERTEX_PROJECT;
  const location = env.SLACK_VERTEX_LOCATION;
  if (!raw && !project && !location) return undefined;
  const model = env.SLACK_AGENT_MODEL;
  if (!raw || !project || !location || !model) throw new Error('Complete the Slack Vertex configuration');
  let credentials: Record<string, unknown>;
  try { credentials = object(JSON.parse(raw)); } catch { throw new Error('Invalid Slack Vertex service-account configuration'); }
  if (credentials.type !== 'service_account' || !string(credentials.client_email).endsWith('.gserviceaccount.com') ||
    !string(credentials.private_key).includes('BEGIN PRIVATE KEY') || credentials.project_id !== project) {
    throw new Error('Invalid Slack Vertex service-account configuration');
  }
  // Copy only known service-account fields; external credential URL/file overrides are not accepted.
  const auth = new GoogleAuth({projectId: project, scopes: ['https://www.googleapis.com/auth/cloud-platform'],
    credentials: {client_email: string(credentials.client_email), private_key: string(credentials.private_key), project_id: project}});
  return {project, location, model, accessToken: async () => {
    const token = await auth.getAccessToken();
    if (!token) throw new Error('Vertex authorization unavailable');
    return token;
  }};
}
