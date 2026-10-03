import assert from "node:assert/strict";
import test from "node:test";
import { mkdtemp, writeFile, readFile, stat, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

test("CLI persists a purchase-and-resume journey across separate processes", async () => {
  const directory = await mkdtemp(join(tmpdir(), "minds-comparison-test-"));
  try {
    const checkpoint = join(directory, "checkpoint.json");
    const brief = join(directory, "brief.json");
    const purchase = join(directory, "purchase.json");
    const payment = join(directory, "payment.json");
    const mock = join(directory, "transport.mjs");
    await writeFile(brief, JSON.stringify({ audienceId: "audience-test", objective: "Compare messages", messages: ["A", "B"] }));
    await writeFile(purchase, JSON.stringify({ buyerApproved: true, input: { kind: "response_credits", priceId: "price_existing" } }));
    await writeFile(payment, "false");
    await writeFile(mock, `
      import {readFile} from 'node:fs/promises';
      globalThis.fetch=async(url,init)=>{
        const complete=JSON.parse(await readFile(${JSON.stringify(payment)},'utf8'));
        if(url.endsWith('/auth/me'))return Response.json({id:'owner'});
        if(url.endsWith('/catalog'))return Response.json({data:{responseCredits:{packs:[{priceId:'price_existing'}]}}});
        if(url.endsWith('/billing/checkout'))return Response.json({data:{checkoutSessionId:'cs_test_existing',url:'https://checkout.stripe.com/test-continuation'}});
        if(url.includes('/api/acp/checkout_sessions/'))return Response.json({id:'cs_test_existing',status:complete?'completed':'requires_escalation'});
        const call=JSON.parse(init.body);
        if(call.method==='initialize')return Response.json({jsonrpc:'2.0',id:call.id,result:{}},{headers:{'mcp-session-id':'test-session'}});
        if(call.method==='notifications/initialized')return new Response(null,{status:202});
        const name=call.params.name;
        const data=name==='create_study'?{studyId:'study-owned'}:
          name==='plan_study_questions'?{draftPlanId:'draft-owned',revision:1}:
          name==='get_study_status'?{status:'completed',artifacts:[{answer:'Synthetic comparison'}]}:
          complete?{runId:'run-owned',status:'queued'}:{status:'plan_limited',executionStarted:false,quotaUsed:false};
        return Response.json({jsonrpc:'2.0',id:call.id,result:{structuredContent:data,...(data.status==='plan_limited'?{isError:true}: {})}});
      };
    `);
    const cli = fileURLToPath(new URL("../../../examples/message-comparison.mjs", import.meta.url));
    const invoke = (command, ...args) => {
      const result = spawnSync(process.execPath, ["--import", mock, cli, command, checkpoint, ...args], {
        env: { ...process.env, MINDS_API_KEY: "test-credential" }, encoding: "utf8",
      });
      assert.equal(result.status, 0, result.stderr);
      return JSON.parse(result.stdout);
    };
    assert.equal(invoke("prepare", brief).stage, "review");
    assert.equal(invoke("run", "draft-owned", "1").stage, "needs_purchase");
    assert.ok(invoke("catalog").responseCredits);
    assert.equal(invoke("checkout", purchase).checkpoint.stage, "checkout_pending");
    assert.equal(invoke("resume", "--confirm").stage, "checkout_pending");
    assert.ok(!(await readFile(checkpoint, "utf8")).includes("test-continuation"));
    assert.equal((await stat(checkpoint)).mode & 0o777, 0o600);
    await writeFile(payment, "true");
    assert.equal(invoke("resume", "--confirm").stage, "running");
    assert.equal(invoke("poll").checkpoint.stage, "completed");
    await assert.rejects(() => stat(`${checkpoint}.lock`), { code: "ENOENT" });
  } finally { await rm(directory, { recursive: true, force: true }); }
});
