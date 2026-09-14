import { MindsMcpClient, type JsonObject, type McpToolResult } from '@minds/mcp-client';

export interface ToolClient { callTool(name: string, args: JsonObject): Promise<McpToolResult> }
export const allowedTools = new Set(['list_audiences', 'get_audience', 'ask_audience', 'ask_study', 'list_studies', 'get_study_status', 'get_study_summary']);
export function mindsClient(token: string): ToolClient {
  const transport = new MindsMcpClient({ apiKey: token, clientName: 'minds-slack', clientVersion: '0.1.0',
    fetchImpl: (input, init) => fetch(input, {...init, redirect: 'error', signal: AbortSignal.timeout(45000)}) });
  return { async callTool(name, args) {
    if (!allowedTools.has(name)) throw new Error('Tool is not allowed in Slack');
    return transport.callTool(name, args);
  }};
}
export function object(value: unknown): Record<string, unknown> {
  return value !== null && typeof value === 'object' && !Array.isArray(value) ? value as Record<string, unknown> : {};
}
export function rows(value: unknown): Record<string, unknown>[] { return Array.isArray(value) ? value.map(object) : []; }
export function string(value: unknown): string { return typeof value === 'string' ? value : ''; }
export function data(result: McpToolResult): Record<string, unknown> { return object(result.structuredContent); }
export function studyUrl(id: string): string { return `https://getminds.ai/?studyId=${encodeURIComponent(id)}`; }

export interface Choice { id: string; name: string }
export async function audiences(client: ToolClient): Promise<Choice[]> {
  const result = data(await client.callTool('list_audiences', {}));
  return rows(result.audiences).flatMap(row => typeof row.id === 'string' && typeof row.name === 'string' ? [{id: row.id, name: row.name}] : []);
}
export async function studies(client: ToolClient): Promise<Choice[]> {
  const result = data(await client.callTool('list_studies', {}));
  return rows(result.studies).flatMap(row => typeof row.id === 'string' && typeof row.name === 'string' ? [{id: row.id, name: row.name}] : []);
}
export function resultText(question: Record<string, unknown>): string {
  const output = object(question.outputData);
  const sections = rows(output.audiences).slice(0, 4).map(audience => {
    const answers = rows(audience.answers);
    const excerpts = answers.slice(0, 3).map(answer => {
      const text = string(answer.message) || string(answer.answer) || string(answer.value);
      return text ? `• ${string(answer.persona) || 'Mind'}: ${text.slice(0, 450)}` : '';
    }).filter(Boolean);
    return [string(audience.audience) || string(audience.name) || string(audience.audienceName), string(audience.summary) || string(audience.value) || (typeof audience.value === 'number' ? `Overall response: ${audience.value}` : ''), ...excerpts].filter(Boolean).join('\n');
  }).filter(Boolean);
  const count = typeof question.answeredCount === 'number' ? `${question.answeredCount} completed synthetic responses.` : 'Completed response count unavailable.';
  return [string(question.question), count, string(output.summary), ...sections].filter(Boolean).join('\n\n').slice(0, 2400);
}
