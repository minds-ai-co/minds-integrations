import assert from "node:assert/strict";
import test from "node:test";
import {
  MessageComparisonJourney, MindsBillingClient, MindsToolError, newComparison,
} from "../dist/index.js";

const brief = { audienceId: "audience-owned", objective: "Clarity and credibility", messages: ["Exact message A", "Exact message B"] };
const draft = { draftPlanId: "draft-owned", revision: 2, respondentVisibility: { stimulus: "Exact message A / Exact message B" } };
const approval = { id: draft.draftPlanId, revision: draft.revision };
const purchase = { kind: "response_credits", priceId: "price_existing" };
const limited = () => new MindsToolError("Plan limit", {
  isError: true, structuredContent: { status: "plan_limited", executionStarted: false, quotaUsed: false },
});

function fixture(checkpoint = newComparison(brief)) {
  const calls = [], saves = [];
  const context = { actor: "owner", payment: "requires_escalation", limit: false, runStatus: "running", checkoutThrows: false };
  let saved;
  const research = { async callTool(name, args) {
    calls.push({ name, args: structuredClone(args) });
    if (name === "create_study") return { structuredContent: { studyId: "study-owned" } };
    if (name === "plan_study_questions") return { structuredContent: structuredClone(draft) };
    if (name === "run_study_questions") {
      assert.ok(saved.confirmation, "confirmation must be persisted before execution");
      if (context.limit) throw limited();
      return { structuredContent: { runId: "run-owned", status: "queued" } };
    }
    if (name === "get_study_status") return { structuredContent: { status: context.runStatus, artifacts: [{ evidence: "Original answers" }] } };
    if (name === "get_study_summary") return { structuredContent: { summary: "Comparison with evidence and limitations", blocks: [] } };
    throw new Error("Unexpected tool");
  } };
  const billing = {
    async actor() { return context.actor; },
    async catalog() { return { responseCredits: { packs: [{ priceId: "price_existing" }] } }; },
    async checkout(input, key) {
      assert.equal(saved.purchase.key, key, "purchase key must be durable before checkout");
      calls.push({ name: "checkout", input: structuredClone(input), key });
      if (context.checkoutThrows) throw new Error("Unknown network outcome");
      return { checkoutSessionId: "cs_test_existing", url: "https://checkout.stripe.com/private-continuation" };
    },
    async session(id) { calls.push({ name: "session", id }); return { id, status: context.payment, continue_url: context.payment === "requires_escalation" ? "https://checkout.stripe.com/private-continuation" : undefined }; },
  };
  const options = { research, billing, save: async state => { saved = structuredClone(state); saves.push(saved); } };
  const journey = new MessageComparisonJourney(checkpoint, options);
  return { journey, options, context, calls, saves, get saved() { return saved; } };
}

test("prepare is private, contains exact messages and does not execute research", async () => {
  const f = fixture();
  const state = await f.journey.prepare();
  assert.equal(state.stage, "review");
  assert.deepEqual(f.calls.map(x => x.name), ["create_study", "plan_study_questions"]);
  assert.equal(f.calls[0].args.isLinkSharingEnabled, false);
  assert.deepEqual(JSON.parse(f.calls[1].args.stimulus.source.content), { A: brief.messages[0], B: brief.messages[1] });
  assert.equal(f.calls[1].args.policy.sourcePolicy, "request_only");
  assert.ok(f.saves[0].actorId);
});

test("preparation and planning reuse stable identities after a lost response", async () => {
  const f = fixture();
  const original = f.options.research.callTool;
  let fail = true;
  f.options.research.callTool = async (name, args) => {
    const result = await original(name, args);
    if (name === "plan_study_questions" && fail) { fail = false; throw new Error("Response lost"); }
    return result;
  };
  await assert.rejects(() => f.journey.prepare());
  const restored = new MessageComparisonJourney(f.saved, f.options);
  await restored.prepare();
  await restored.prepare();
  assert.equal(f.calls.filter(x => x.name === "create_study").length, 1);
  const plans = f.calls.filter(x => x.name === "plan_study_questions");
  assert.deepEqual(plans[0].args, plans[1].args);
});

test("lost Study creation response retries the identical private creation request", async () => {
  const f = fixture(); const original = f.options.research.callTool; let fail = true;
  f.options.research.callTool = async (name, args) => {
    const result = await original(name, args);
    if (name === "create_study" && fail) { fail = false; throw new Error("Response lost"); }
    return result;
  };
  await assert.rejects(() => f.journey.prepare());
  await new MessageComparisonJourney(f.saved, f.options).prepare();
  const creations = f.calls.filter(x => x.name === "create_study");
  assert.deepEqual(creations[0].args, creations[1].args);
});

test("exact draft confirmation is required; repeat run does not start another", async () => {
  const f = fixture(); await f.journey.prepare();
  await assert.rejects(() => f.journey.run({ ...approval, revision: 1 }), /exact saved draft/);
  assert.equal(f.calls.filter(x => x.name === "run_study_questions").length, 0);
  assert.equal((await f.journey.run(approval)).stage, "running");
  await f.journey.run(approval);
  assert.equal(f.calls.filter(x => x.name === "run_study_questions").length, 1);
});

test("research retry after uncertain execution uses the same run key", async () => {
  const f = fixture(); await f.journey.prepare();
  const original = f.options.research.callTool;
  let fail = true;
  f.options.research.callTool = async (name, args) => {
    const result = await original(name, args);
    if (name === "run_study_questions" && fail) { fail = false; throw new Error("Response lost"); }
    return result;
  };
  await assert.rejects(() => f.journey.run(approval));
  const restored = new MessageComparisonJourney(f.saved, f.options);
  await restored.run(approval);
  const runs = f.calls.filter(x => x.name === "run_study_questions");
  assert.deepEqual(runs[0].args, runs[1].args);
});

test("buyer approval is required and no checkout starts during ordinary research", async () => {
  const f = fixture(); await f.journey.prepare(); await f.journey.run(approval);
  await assert.rejects(() => f.journey.purchase(purchase, false), /buyer approval/);
  await assert.rejects(() => f.journey.purchase(purchase, true), /additional access/);
  assert.ok(!f.calls.some(x => x.name === "checkout"));
});

test("purchase preserves body/key, omits URL from checkpoint and reuses saved session", async () => {
  const f = fixture(); await f.journey.prepare(); f.context.limit = true; await f.journey.run(approval);
  assert.equal(f.journey.checkpoint.stage, "needs_purchase");
  const first = await f.journey.purchase(purchase, true);
  assert.ok(first.url.startsWith("https://checkout.stripe.com/"));
  assert.ok(!JSON.stringify(f.saved).includes("private-continuation"));
  const restored = new MessageComparisonJourney(f.saved, f.options);
  await restored.purchase(purchase, true);
  assert.equal(f.calls.filter(x => x.name === "checkout").length, 1);
  await assert.rejects(() => restored.purchase({ ...purchase, priceId: "price_other" }, true), /cannot be changed/);
});

test("uncertain checkout keeps the identical durable purchase for retry", async () => {
  const f = fixture(); await f.journey.prepare(); f.context.limit = true; await f.journey.run(approval);
  f.context.checkoutThrows = true;
  await assert.rejects(() => f.journey.purchase(purchase, true));
  const restored = new MessageComparisonJourney(f.saved, f.options);
  f.context.checkoutThrows = false; await restored.purchase(purchase, true);
  const checkouts = f.calls.filter(x => x.name === "checkout");
  assert.deepEqual(checkouts[0], checkouts[1]);
});

test("a failed checkpoint write prevents checkout from being sent", async () => {
  const f = fixture(); await f.journey.prepare(); f.context.limit = true; await f.journey.run(approval);
  const originalSave = f.options.save;
  f.options.save = async state => { if (state.purchase) throw new Error("Disk unavailable"); await originalSave(state); };
  await assert.rejects(() => f.journey.purchase(purchase, true), /Disk unavailable/);
  assert.ok(!f.calls.some(x => x.name === "checkout"));
});

for (const payment of ["requires_escalation", "in_progress", "canceled"]) {
  test(`${payment} checkout never starts or resumes research`, async () => {
    const f = fixture(); await f.journey.prepare(); f.context.limit = true; await f.journey.run(approval);
    await f.journey.purchase(purchase, true); f.context.payment = payment;
    const before = f.calls.filter(x => x.name === "run_study_questions").length;
    assert.equal((await f.journey.resume(true)).stage, payment === "canceled" ? "checkout_canceled" : "checkout_pending");
    assert.equal(f.calls.filter(x => x.name === "run_study_questions").length, before);
  });
}

test("completed checkout with pending access is not claimed as activated", async () => {
  const f = fixture(); await f.journey.prepare(); f.context.limit = true; await f.journey.run(approval);
  await f.journey.purchase(purchase, true); f.context.payment = "completed";
  await assert.rejects(() => f.journey.resume(false), /confirmation/);
  assert.equal((await f.journey.resume(true)).stage, "needs_purchase");
  assert.equal(f.calls.filter(x => x.name === "checkout").length, 1);
  f.context.limit = false;
  assert.equal((await f.journey.resume(true)).stage, "running");
  await f.journey.resume(true);
  assert.equal(f.calls.filter(x => x.name === "run_study_questions").length, 3);
});

test("partially completed runs resume in place without replaying answered questions", async () => {
  const f = fixture(); await f.journey.prepare(); await f.journey.run(approval);
  f.context.runStatus = "plan_limited"; await f.journey.poll();
  await f.journey.purchase(purchase, true); f.context.payment = "completed";
  const restored = new MessageComparisonJourney(f.saved, f.options);
  await restored.resume(true);
  const run = f.calls.filter(x => x.name === "run_study_questions").at(-1);
  assert.deepEqual(run.args.resume, { runId: "run-owned" });
  assert.equal(run.args.draft, undefined);
  f.context.runStatus = "completed";
  assert.equal((await restored.poll()).checkpoint.stage, "completed");
});

for (const status of ["failed", "partial", "canceled"]) {
  test(`${status} research remains incomplete`, async () => {
    const f = fixture(); await f.journey.prepare(); await f.journey.run(approval);
    f.context.runStatus = status;
    assert.equal((await f.journey.poll()).checkpoint.stage, "incomplete");
  });
}

test("a checkpoint cannot be reused by a different account", async () => {
  const f = fixture(); await f.journey.prepare(); f.context.actor = "different-owner";
  const before = f.calls.length;
  await assert.rejects(() => f.journey.run(approval), /another Minds account/);
  assert.equal(f.calls.length, before);
});

test("only an explicit non-executing plan-limit refusal is treated as safe to purchase", async () => {
  const f = fixture(); await f.journey.prepare();
  f.options.research.callTool = async () => { throw new MindsToolError("Unknown outcome", { structuredContent: { status: "plan_limited" } }); };
  await assert.rejects(() => f.journey.run(approval), /Unknown outcome/);
  assert.equal(f.journey.checkpoint.stage, "confirmed");
});

test("billing pins credentials to Minds, refuses redirects, validates consent, and keeps failures bounded", async () => {
  const requests = [];
  const billing = new MindsBillingClient({ apiKey: "test-credential", fetchImpl: async (url, init) => {
    assert.ok(url.startsWith("https://getminds.ai/"));
    assert.equal(init.redirect, "error");
    assert.equal(init.headers.Authorization, "Bearer test-credential");
    requests.push({ url, init });
    if (url.endsWith("/auth/me")) return Response.json({ id: "owner" });
    if (url.endsWith("/catalog")) return Response.json({ data: { subscription: { plan: "free" } } });
    if (url.endsWith("/checkout")) return Response.json({ data: { checkoutSessionId: "cs_test_existing", url: "https://checkout.stripe.com/example" } });
    return new Response("private upstream data test-credential", { status: 404 });
  } });
  assert.equal(await billing.actor(), "owner");
  assert.equal((await billing.catalog()).subscription.plan, "free");
  await assert.rejects(() => billing.checkout({ kind: "subscription", priceId: "price_existing", planType: "premium" }, "stable_key"), /legal acceptance/);
  await billing.checkout(purchase, "stable_key");
  assert.equal(requests.at(-1).init.headers["Idempotency-Key"], "stable_key");
  await assert.rejects(() => billing.session("../../outside"), /Invalid checkout/);
  await assert.rejects(() => billing.session("cs_test_existing"), error => {
    assert.match(error.message, /HTTP 404/); assert.ok(!error.message.includes("test-credential")); return true;
  });
});

test("a mismatched checkout response cannot authorize research", async () => {
  const billing = new MindsBillingClient({ apiKey: "test-credential", fetchImpl: async () =>
    Response.json({ id: "cs_test_different", status: "completed" }) });
  await assert.rejects(() => billing.session("cs_test_existing"), /saved session/);
});

test("report generation requires full completion and uses the existing analysis service", async () => {
  const f = fixture(); await f.journey.prepare(); await f.journey.run(approval);
  await assert.rejects(() => f.journey.report(), /full research run/);
  f.context.runStatus = "partial"; await f.journey.poll();
  await assert.rejects(() => f.journey.report(), /full research run/);
  f.context.runStatus = "completed"; await f.journey.poll();
  assert.ok((await f.journey.report()).structuredContent.summary.includes("evidence"));
  assert.deepEqual(f.calls.at(-1).args, { study: { id: "study-owned" }, refresh: true, force: false, length: "standard" });
});
