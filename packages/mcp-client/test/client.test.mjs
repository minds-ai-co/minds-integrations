import assert from "node:assert/strict";
import test from "node:test";
import { decodeMcpResponse, MINDS_MCP_ENDPOINT } from "../dist/index.js";

test("pins the canonical endpoint", () => {
  assert.equal(MINDS_MCP_ENDPOINT, "https://getminds.ai/mcp");
});

test("decodes JSON and event-stream payloads", () => {
  assert.deepEqual(decodeMcpResponse('{"jsonrpc":"2.0","id":1,"result":{"ok":true}}'), {
    jsonrpc: "2.0",
    id: 1,
    result: { ok: true },
  });
  assert.deepEqual(
    decodeMcpResponse('event: message\ndata: {"jsonrpc":"2.0","id":2,"result":{"ok":true}}\n\n'),
    { jsonrpc: "2.0", id: 2, result: { ok: true } },
  );
});

test('ignores SSE notifications after the matching response', () => {
  const raw='data: {"jsonrpc":"2.0","id":4,"result":{"ok":true}}\n\ndata: {"jsonrpc":"2.0","method":"notifications/progress"}\n\n';
  assert.equal(decodeMcpResponse(raw,4).result.ok,true);
});

test('initializes, discovers tools and sends protocol headers without leaking HTTP errors', async () => {
  const {MindsMcpClient}=await import('../dist/index.js');
  const requests=[];
  const client=new MindsMcpClient({apiKey:'test-credential',clientName:'test',clientVersion:'1',fetchImpl:async(url,init)=>{
    assert.equal(url,MINDS_MCP_ENDPOINT);
    assert.equal(init.redirect,'error');
    assert.equal(init.headers['MCP-Protocol-Version'],'2025-06-18');
    const body=JSON.parse(init.body);requests.push(body);
    if(body.method==='initialize')return Response.json({jsonrpc:'2.0',id:body.id,result:{}},{headers:{'mcp-session-id':'test-session'}});
    if(body.method==='notifications/initialized')return new Response(null,{status:202});
    if(body.method==='tools/list')return Response.json({jsonrpc:'2.0',id:body.id,result:{tools:[{name:'list_audiences'}]}});
    return new Response('private upstream payload test-credential',{status:401});
  }});
  assert.deepEqual(await client.listTools(),[{name:'list_audiences'}]);
  await assert.rejects(()=>client.callTool('list_audiences',{}), error=>{
    assert.match(error.message,/HTTP 401/);assert.ok(!error.message.includes('test-credential'));return true;
  });
  assert.deepEqual(requests.map(r=>r.method),['initialize','notifications/initialized','tools/list','tools/call']);
});
