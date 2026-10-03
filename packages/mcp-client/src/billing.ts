import type { JsonObject } from "./index.js";

export type CheckoutInput = {
  kind: "response_credits";
  priceId: string;
} | {
  kind: "subscription";
  priceId: string;
  planType: "premium" | "team";
  quantity?: number;
  billingCountry?: string;
  currency?: "usd" | "eur";
  startTrial?: boolean;
  legalAcceptance: { termsAccepted: true; withdrawalConsent: true };
};

export interface CheckoutSession {
  id: string;
  status: "requires_escalation" | "in_progress" | "completed" | "canceled";
  continue_url?: string;
}

/** Uses the existing hosted Checkout adapter; fulfillment stays in Minds. */
export class MindsBillingClient {
  constructor(private readonly options: { apiKey: string; fetchImpl?: typeof fetch }) {
    if (!options.apiKey.trim()) throw new Error("A Minds API key is required");
  }

  private async request<T>(path: string, body?: unknown, key?: string): Promise<T> {
    const response = await (this.options.fetchImpl ?? fetch)(`https://getminds.ai${path}`, {
      method: body === undefined ? "GET" : "POST",
      headers: {
        Authorization: `Bearer ${this.options.apiKey}`,
        Accept: "application/json",
        ...(body === undefined ? {} : { "Content-Type": "application/json" }),
        ...(key ? { "Idempotency-Key": key } : {}),
      },
      ...(body === undefined ? {} : { body: JSON.stringify(body) }),
      redirect: "error",
      signal: AbortSignal.timeout(60000),
    });
    // Do not expose upstream bodies, which may contain private billing data.
    if (!response.ok) throw new Error(`Minds billing request failed with HTTP ${response.status}`);
    return await response.json() as T;
  }

  async actor(): Promise<string> {
    const actor = await this.request<{ id: string }>("/api/v1/auth/me");
    if (!actor.id) throw new Error("Minds did not identify the authenticated account");
    return actor.id;
  }

  async catalog(): Promise<JsonObject> {
    return (await this.request<{ data: JsonObject }>("/api/v1/billing/catalog")).data;
  }

  async checkout(input: CheckoutInput, key: string): Promise<{ checkoutSessionId: string; url: string }> {
    if (!/^[a-zA-Z0-9_-]{1,128}$/.test(key)) throw new Error("A stable purchase key is required");
    if (input.kind === "subscription" &&
      (input.legalAcceptance?.termsAccepted !== true || input.legalAcceptance?.withdrawalConsent !== true)) {
      throw new Error("Explicit subscription legal acceptance is required");
    }
    return (await this.request<{ data: { checkoutSessionId: string; url: string } }>(
      "/api/v1/billing/checkout", input, key,
    )).data;
  }

  async session(id: string): Promise<CheckoutSession> {
    if (!/^cs_(test_|live_)?[a-zA-Z0-9]{1,240}$/.test(id)) throw new Error("Invalid checkout session ID");
    const session = await this.request<CheckoutSession>(`/api/acp/checkout_sessions/${id}`);
    if (session.id !== id || !["requires_escalation", "in_progress", "completed", "canceled"].includes(session.status)) {
      throw new Error("Checkout response did not identify the saved session and status");
    }
    return session;
  }
}
