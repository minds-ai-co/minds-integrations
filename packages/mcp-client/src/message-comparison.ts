import { MindsToolError, type JsonObject, type McpToolResult } from "./index.js";
import type { CheckoutInput, CheckoutSession } from "./billing.js";
import { comparisonRequest, type ComparisonCheckpoint } from "./comparison-state.js";
export { newComparison } from "./comparison-state.js";
export type { ComparisonBrief, ComparisonCheckpoint } from "./comparison-state.js";

interface ResearchClient { callTool(name: string, args: JsonObject): Promise<McpToolResult> }
interface BillingClient {
  actor(): Promise<string>;
  catalog(): Promise<JsonObject>;
  checkout(input: CheckoutInput, key: string): Promise<{ checkoutSessionId: string; url: string }>;
  session(id: string): Promise<CheckoutSession>;
}

function object(value: unknown): JsonObject {
  if (!value || typeof value !== "object" || Array.isArray(value)) throw new Error("Missing structured Minds response");
  return value as JsonObject;
}

/** One durable workflow. Hosts must save checkpoints privately and show the exact draft. */
export class MessageComparisonJourney {
  private state: ComparisonCheckpoint;
  private busy = false;

  constructor(checkpoint: ComparisonCheckpoint, private readonly options: {
    research: ResearchClient;
    billing: BillingClient;
    save: (checkpoint: ComparisonCheckpoint) => Promise<void>;
  }) {
    if (checkpoint.version !== 1) throw new Error("Unsupported checkpoint version");
    this.state = structuredClone(checkpoint);
  }

  get checkpoint(): ComparisonCheckpoint { return structuredClone(this.state); }

  private async persist(): Promise<void> { await this.options.save(this.checkpoint); }

  private async operation<T>(work: () => Promise<T>): Promise<T> {
    if (this.busy) throw new Error("A workflow operation is already in progress");
    this.busy = true;
    try {
      const actor = await this.options.billing.actor();
      if (this.state.actorId && this.state.actorId !== actor) throw new Error("Checkpoint belongs to another Minds account");
      this.state.actorId = actor;
      await this.persist(); // Stable identity and retry keys precede every side effect.
      return await work();
    } finally { this.busy = false; }
  }

  async prepare(): Promise<ComparisonCheckpoint> {
    return this.operation(async () => {
      if (this.state.draft) return this.checkpoint;
      if (!this.state.studyId) {
        const created = object((await this.options.research.callTool("create_study", {
          name: `Message comparison ${this.state.id}`, audienceIds: [this.state.brief.audienceId], isLinkSharingEnabled: false,
        })).structuredContent);
        if (typeof created.studyId !== "string") throw new Error("Study creation did not return an ID");
        this.state.studyId = created.studyId;
        await this.persist();
      }
      const review = object((await this.options.research.callTool("plan_study_questions", {
        study: { id: this.state.studyId }, request: comparisonRequest(this.state.brief),
        idempotencyKey: `comparison-${this.state.id}`, policy: { sourcePolicy: "request_only" },
        stimulus: { source: { kind: "prompt", label: "Messages A and B", content:
          JSON.stringify({ A: this.state.brief.messages[0], B: this.state.brief.messages[1] }) } },
      })).structuredContent);
      if (typeof review.draftPlanId !== "string" || !Number.isInteger(review.revision) || Number(review.revision) < 1) {
        throw new Error("Planning did not return a reviewable draft revision");
      }
      this.state.draft = { id: review.draftPlanId, revision: Number(review.revision), review };
      this.state.stage = "review";
      await this.persist();
      return this.checkpoint;
    });
  }

  async run(confirmation: { id: string; revision: number }): Promise<ComparisonCheckpoint> {
    return this.operation(async () => {
      const draft = this.state.draft;
      if (!draft || confirmation.id !== draft.id || confirmation.revision !== draft.revision) {
        throw new Error("Explicit confirmation of the exact saved draft revision is required");
      }
      if (this.state.runId) return this.checkpoint; // Inspect/resume the existing run, never start another.
      if (this.state.purchase) throw new Error("Check the saved checkout before continuing research");
      this.state.confirmation = { id: draft.id, revision: draft.revision };
      this.state.stage = "confirmed";
      await this.persist();
      await this.execute(false);
      return this.checkpoint;
    });
  }

  private async execute(resume: boolean): Promise<void> {
    const draft = this.state.draft!;
    try {
      const result = object((await this.options.research.callTool("run_study_questions", {
        study: { id: this.state.studyId }, confirmed: true,
        ...(resume ? { resume: { runId: this.state.runId } } : {
          draft: { id: draft.id, revision: draft.revision }, idempotencyKey: this.state.id,
        }),
      })).structuredContent);
      if (typeof result.runId !== "string") throw new Error("Research did not return a durable run ID");
      this.state.runId = result.runId;
      this.state.stage = result.status === "plan_limited" ? "needs_purchase" : "running";
    } catch (error) {
      const result = error instanceof MindsToolError ? error.result.structuredContent : undefined;
      if (!result || object(result).status !== "plan_limited" || object(result).executionStarted !== false) throw error;
      // A confirmed server refusal is safe to retry after access changes.
      this.state.stage = "needs_purchase";
    }
    await this.persist();
  }

  async purchase(input: CheckoutInput, approved: boolean): Promise<{ url?: string; checkpoint: ComparisonCheckpoint }> {
    return this.operation(async () => {
      if (approved !== true) throw new Error("Explicit buyer approval is required before checkout");
      if (!this.state.confirmation) throw new Error("Review and confirm the research before purchasing");
      if (this.state.purchase && JSON.stringify(input) !== JSON.stringify(this.state.purchase.input)) {
        throw new Error("The saved purchase cannot be changed; reconcile it before choosing another purchase");
      }
      if (!this.state.purchase && this.state.stage !== "needs_purchase") throw new Error("Research has not requested additional access");
      if (this.state.purchase?.sessionId) {
        const session = await this.options.billing.session(this.state.purchase.sessionId);
        return { url: session.continue_url, checkpoint: this.checkpoint };
      }
      this.state.purchase ??= { key: `comparison-${this.state.id}`, input: structuredClone(input) };
      await this.persist();
      const checkout = await this.options.billing.checkout(this.state.purchase.input, this.state.purchase.key);
      this.state.purchase.sessionId = checkout.checkoutSessionId;
      this.state.stage = "checkout_pending";
      await this.persist(); // Keep URLs in memory; do not persist checkout continuation credentials.
      return { url: checkout.url, checkpoint: this.checkpoint };
    });
  }

  async resume(approved: boolean): Promise<ComparisonCheckpoint> {
    return this.operation(async () => {
      if (approved !== true || !this.state.confirmation) throw new Error("Explicit confirmation to continue the saved research is required");
      if (!this.state.purchase?.sessionId) throw new Error("No saved checkout to verify");
      if (["running", "completed", "incomplete"].includes(this.state.stage)) return this.checkpoint;
      const session = await this.options.billing.session(this.state.purchase.sessionId);
      if (session.status === "canceled") {
        this.state.stage = "checkout_canceled";
        await this.persist();
        return this.checkpoint;
      }
      if (session.status !== "completed") return this.checkpoint;
      this.state.stage = "checkout_completed";
      await this.persist();
      // Checkout completion is separate from access. The research server checks
      // webhook-applied entitlements and may still refuse while they propagate.
      await this.execute(Boolean(this.state.runId));
      return this.checkpoint;
    });
  }

  async poll(): Promise<{ checkpoint: ComparisonCheckpoint; result: JsonObject }> {
    return this.operation(async () => {
      if (!this.state.runId) throw new Error("No research run to inspect");
      const result = object((await this.options.research.callTool("get_study_status", {
        study: { id: this.state.studyId }, runId: this.state.runId,
      })).structuredContent);
      if (result.status === "completed") this.state.stage = "completed";
      else if (result.status === "plan_limited") this.state.stage = "needs_purchase";
      else if (["failed", "partial", "canceled"].includes(String(result.status))) this.state.stage = "incomplete";
      await this.persist();
      return { checkpoint: this.checkpoint, result };
    });
  }

  async catalog(): Promise<JsonObject> { return this.operation(() => this.options.billing.catalog()); }

  async report(): Promise<McpToolResult> {
    return this.operation(async () => {
      if (this.state.stage !== "completed") throw new Error("Complete the full research run before generating its Study report");
      return this.options.research.callTool("get_study_summary", {
        study: { id: this.state.studyId }, refresh: true, force: false, length: "standard",
      });
    });
  }
}
