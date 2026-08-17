export const MINDS_MCP_ENDPOINT = "https://getminds.ai/mcp";
export const MINDS_PROTOCOL_VERSION = "2025-06-18";

export type JsonObject = Record<string, unknown>;

export interface McpContent {
  type: string;
  text?: string;
  [key: string]: unknown;
}

export interface McpToolResult {
  content?: McpContent[];
  structuredContent?: unknown;
  isError?: boolean;
  [key: string]: unknown;
}

interface JsonRpcResponse<T> {
  jsonrpc: "2.0";
  id?: number;
  result?: T;
  error?: { code: number; message: string; data?: unknown };
}

export function decodeMcpResponse(raw: string): JsonRpcResponse<unknown> | null {
  const trimmed = raw.trim();
  if (!trimmed) return null;
  if (trimmed.startsWith("{")) return JSON.parse(trimmed) as JsonRpcResponse<unknown>;

  const payloads: JsonRpcResponse<unknown>[] = [];
  let data: string[] = [];
  for (const line of raw.split(/\r?\n/)) {
    if (line.startsWith("data:")) {
      data.push(line.slice(5).trimStart());
    } else if (line === "" && data.length) {
      payloads.push(JSON.parse(data.join("\n")) as JsonRpcResponse<unknown>);
      data = [];
    }
  }
  if (data.length) payloads.push(JSON.parse(data.join("\n")) as JsonRpcResponse<unknown>);
  if (!payloads.length) throw new Error("MCP response was neither JSON nor a JSON SSE event");
  return payloads.at(-1) ?? null;
}

export class MindsMcpClient {
  private sessionId: string | null = null;
  private nextId = 1;

  constructor(
    private readonly options: {
      apiKey: string;
      clientName: string;
      clientVersion: string;
      fetchImpl?: typeof fetch;
    },
  ) {
    if (!options.apiKey.trim()) throw new Error("A Minds API key is required");
  }

  private async request<T>(method: string, params?: unknown, notification = false): Promise<T | null> {
    const fetchImpl = this.options.fetchImpl ?? fetch;
    const id = notification ? undefined : this.nextId++;
    const body: JsonObject = { jsonrpc: "2.0", method };
    if (id !== undefined) body.id = id;
    if (params !== undefined) body.params = params;

    const headers: Record<string, string> = {
      Accept: "application/json, text/event-stream",
      Authorization: `Bearer ${this.options.apiKey}`,
      "Content-Type": "application/json",
    };
    if (this.sessionId) headers["Mcp-Session-Id"] = this.sessionId;

    const response = await fetchImpl(MINDS_MCP_ENDPOINT, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    });
    const raw = await response.text();
    if (!response.ok) {
      throw new Error(`Minds MCP request failed with HTTP ${response.status}: ${raw.slice(0, 300)}`);
    }
    const returnedSession = response.headers.get("mcp-session-id");
    if (returnedSession) this.sessionId = returnedSession;
    if (notification && !raw.trim()) return null;

    const payload = decodeMcpResponse(raw) as JsonRpcResponse<T> | null;
    if (payload?.error) throw new Error(`Minds MCP ${method} failed: ${payload.error.message}`);
    return payload?.result ?? null;
  }

  async initialize(): Promise<void> {
    await this.request("initialize", {
      protocolVersion: MINDS_PROTOCOL_VERSION,
      capabilities: {},
      clientInfo: {
        name: this.options.clientName,
        version: this.options.clientVersion,
      },
    });
    if (!this.sessionId) throw new Error("Minds MCP did not return Mcp-Session-Id");
    await this.request("notifications/initialized", undefined, true);
  }

  async callTool(name: string, args: JsonObject): Promise<McpToolResult> {
    if (!this.sessionId) await this.initialize();
    const result = await this.request<McpToolResult>("tools/call", {
      name,
      arguments: args,
    });
    if (!result) throw new Error(`${name} returned no result`);
    if (result.isError) {
      const message = result.content?.map((item) => item.text).filter(Boolean).join("\n");
      throw new Error(message || `${name} returned a tool error`);
    }
    return result;
  }
}

export function extractText(result: McpToolResult): string {
  return (result.content ?? [])
    .filter((item) => item.type === "text" && typeof item.text === "string")
    .map((item) => item.text)
    .join("\n")
    .trim();
}
