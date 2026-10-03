import type { CheckoutInput } from "./billing.js";
import type { JsonObject } from "./index.js";

export interface ComparisonBrief {
  audienceId: string;
  messages: [string, string];
  objective: string;
}

export interface ComparisonCheckpoint {
  version: 1;
  id: string;
  actorId?: string;
  brief: ComparisonBrief;
  stage: "new" | "review" | "confirmed" | "running" | "needs_purchase" |
    "checkout_pending" | "checkout_canceled" | "checkout_completed" | "completed" | "incomplete";
  studyId?: string;
  draft?: { id: string; revision: number; review: JsonObject };
  confirmation?: { id: string; revision: number };
  runId?: string;
  purchase?: { key: string; input: CheckoutInput; sessionId?: string };
}

export function newComparison(brief: ComparisonBrief): ComparisonCheckpoint {
  if (!brief.audienceId?.trim() || !brief.objective?.trim() ||
      !Array.isArray(brief.messages) || brief.messages.length !== 2 ||
      brief.messages.some(message => typeof message !== "string" || !message.trim())) {
    throw new Error("An existing Audience, an objective and exactly two messages are required");
  }
  return { version: 1, id: crypto.randomUUID(), brief: structuredClone(brief), stage: "new" };
}

export function comparisonRequest(brief: ComparisonBrief): string {
  return [
    "Design one controlled synthetic message-comparison Study for this objective:", brief.objective,
    "Compare exactly these supplied messages, preserving their wording:",
    JSON.stringify({ A: brief.messages[0], B: brief.messages[1] }),
    "Prepare one cohesive block covering preference, reasons and objections. Include both messages in the respondent-visible stimulus.",
    "Explain order effects and limitations in the review. Do not invent product claims or treat synthetic responses as representative human fieldwork.",
  ].join("\n\n");
}
