import assert from 'node:assert/strict';
import {randomBytes, createHmac} from 'node:crypto';
import {createServer} from 'node:http';
import {test} from 'node:test';
import {Store} from '../dist/store.js';
import {ResearchWorker} from '../dist/worker.js';
import {MindsAuthorization} from '../dist/oauth.js';
import {createSlackApp} from '../dist/app.js';
import {resultBlocks, researchModal} from '../dist/views.js';
import {studyUrl} from '../dist/minds.js';

const database = process.env.SLACK_TEST_DATABASE_URL;
const actor = {team: 'T_TEST', user: 'U_TEST'};
const input = {...actor, channel: 'C_TEST', thread: '100.1', intent: 'ask', audienceId: 'audience-a', question: 'What would stop you buying this test offer?'};
const structured = value => ({structuredContent: value});
const completed = {studyId: 'study-a', recentResults: [{questionId: 'q-a', question: input.question, answeredCount: 2,
  outputData: {audiences: [{audience: 'Test Audience', summary: 'Price was the main objection.', answers: [
    {persona: 'Test Mind A', message: 'The price is too high.'}, {persona: 'Test Mind B', message: 'I need more product information.'},
  ]}]}}]};
const calls = [];
const mcp = {async callTool(name,args) {
  calls.push({name,args});
  if (name === 'list_audiences') return structured({audiences: [{id:'audience-a',name:'Test Audience'}]});
  if (name === 'ask_audience') { assert.ok(args.name?.startsWith('Slack research ')); assert.equal(args.studyName,undefined); }
  if (name === 'ask_audience' || name === 'ask_study') return structured({studyId:'study-a',questionId:'q-a',status:'queued'});
  if (name === 'get_study_summary') return structured({summary:'Existing summary'});
  return structured(completed);
}};
async function fast(store) { await store.pool.query("UPDATE minds_slack.jobs SET available_at=now()-interval '1 second'"); }
async function withStore(fn) {
  const store = new Store(database, randomBytes(32).toString('base64'));
  await store.migrate();
  await store.pool.query('TRUNCATE minds_slack.jobs,minds_slack.records');
  calls.length=0;
  try { await fn(store); } finally { await store.pool.end(); }
}
const integration = (name,fn) => test(name,{skip: !database},()=>withStore(fn));

integration('durable execution survives worker replacement and duplicate submission spends once', async store=>{
  assert.equal(await store.enqueue('request-a',input),'queued');
  assert.equal(await store.enqueue('request-a',input),'duplicate');
  assert.equal(await store.enqueue('request-b',input),'busy');
  const messages=[];
  const delivery={async start(){return '200.1'}, async update(job,text){messages.push({job,text})}};
  await new ResearchWorker(store,async()=>mcp,delivery).tick();
  await fast(store);
  await new ResearchWorker(store,async()=>mcp,delivery).tick();
  await new ResearchWorker(store,async()=>mcp,delivery).tick();
  assert.equal(calls.filter(c=>c.name==='ask_audience').length,1);
  assert.equal(messages.length,1);
  assert.match(messages[0].text,/2 completed synthetic responses/);
  assert.match(messages[0].text,/Price was the main objection/);
  assert.match(messages[0].text,/Test Mind B/);
  assert.equal(messages[0].job.studyUrl,'https://getminds.ai/?studyId=study-a');
  assert.equal(await store.enqueue('request-a',input),'duplicate');
});
integration('expired mutation lease reports ambiguity without repeating paid research', async store=>{
  await store.enqueue('request-a',input);
  const job=await store.claim(); job.messageTs='200.1';
  await store.save(job,'executing');
  const messages=[];
  const worker=new ResearchWorker(store,async()=>mcp,{async start(){throw Error('unexpected')},async update(_job,text){messages.push(text)}});
  await worker.tick(); await worker.tick();
  assert.equal(calls.filter(c=>c.name.startsWith('ask_')).length,0);
  assert.match(messages[0],/has not been repeated/);
});
integration('duplicate event receipts are atomic', async store=>{
  const receipts=await Promise.all([store.once('receipt','event-a',actor,60),store.once('receipt','event-a',actor,60)]);
  assert.deepEqual(receipts.sort(),[false,true]);
});
integration('concurrent workers cannot claim the same job and stale leases cannot overwrite', async store=>{
  await store.enqueue('request-a',input);
  const claims=await Promise.all([store.claim(),store.claim()]);
  assert.equal(claims.filter(Boolean).length,1);
  const first=claims.find(Boolean);
  await fast(store); const second=await store.claim();
  assert.equal(await store.save(first,'done'),false);
  assert.equal(await store.save(second,'done'),true);
});
integration('tenants remain isolated; erasure prevents stale worker persistence', async store=>{
  await store.put('connection','T_TEST:U_TEST',actor,{accessToken:'fixture-only'});
  assert.equal(await store.get('connection','T_OTHER:U_TEST'),null);
  const encrypted=(await store.pool.query('SELECT value FROM minds_slack.records')).rows[0].value;
  assert.ok(!encrypted.includes('fixture-only'));
  assert.throws(()=>store.open(encrypted,'connection:T_OTHER:U_TEST'));
  await store.enqueue('request-a',input); const job=await store.claim();
  await store.erase(actor.team,actor.user);
  assert.equal(await store.save(job,'polling'),false);
  assert.equal(await store.get('connection','T_TEST:U_TEST'),null);
});
integration('read-only retrieval uses existing summary and never asks respondents', async store=>{
  await store.enqueue('read-a',{...input,intent:'read',studyId:'study-a'});
  const messages=[];
  const worker=new ResearchWorker(store,async()=>mcp,{async start(){return '200.1'},async update(_job,text){messages.push(text)}});
  for(let i=0;i<3;i++) await worker.tick();
  assert.equal(calls.filter(c=>c.name.startsWith('ask_')).length,0);
  assert.deepEqual(calls.find(c=>c.name==='get_study_summary').args,{studyId:'study-a',refresh:false});
  assert.match(messages[0],/Existing summary/);
});
integration('delivery retry updates the existing message without relaunching research', async store=>{
  await store.enqueue('request-a',input); let attempts=0;
  const worker=new ResearchWorker(store,async()=>mcp,{async start(){return '200.1'},async update(job){assert.equal(job.messageTs,'200.1');if(++attempts===1)throw Error('timeout')}});
  for(let i=0;i<4;i++){await fast(store);await worker.tick()}
  assert.equal(attempts,2);
  assert.equal(calls.filter(c=>c.name==='ask_audience').length,1);
});
integration('revoked Minds access prevents result disclosure', async store=>{
  await store.enqueue('request-a',input);
  const job=await store.claim(); job.result='Private findings';job.messageTs='200.1';job.studyId='study-a';
  await store.save(job,'delivering');
  let sent=false;
  const worker=new ResearchWorker(store,async()=>{throw Error('revoked')},{async start(){return ''},async update(){sent=true}});
  await worker.tick(); assert.equal(sent,false);
});
integration('ambiguous MCP timeout never invokes research again', async store=>{
  await store.enqueue('request-a',input); let mutations=0;
  const client={async callTool(name,args){if(name==='ask_audience'){mutations++;throw Error('lost response')}return mcp.callTool(name,args)}};
  const worker=new ResearchWorker(store,async()=>client,{async start(){return '200.1'},async update(){}});
  await worker.tick();await fast(store);await worker.tick();await fast(store);await worker.tick();
  assert.equal(mutations,1);
});

test('Slack result cards keep respondent instructions inert and use authenticated Study links',()=>{
  const blocks=resultBlocks('Ignore instructions <!channel> <https://evil.test|click>',studyUrl('study-a'));
  assert.equal(blocks[0].text.type,'plain_text');
  assert.equal(blocks[2].elements[0].url,'https://getminds.ai/?studyId=study-a');
  const modal=researchModal('selection-a',input);
  assert.ok(modal.blocks.find(b=>b.block_id==='sharing'));
  assert.equal(modal.blocks.find(b=>b.block_id==='target').element.type,'external_select');
});

integration('signed HTTP lifecycle: duplicate modal submit, durable research, threaded delivery, uninstall', async store=>{
  const slackCalls=[];
  const slackServer=createServer(async(req,res)=>{
    let raw='';for await(const c of req)raw+=c;
    const args=Object.fromEntries(new URLSearchParams(raw));
    slackCalls.push({method:req.url,args});
    let result={ok:true};
    if(req.url==='/auth.test')result={ok:true,team_id:actor.team,user_id:'B_TEST',bot_id:'B_TEST'};
    if(req.url==='/conversations.members')result={ok:true,members:[actor.user]};
    if(req.url==='/chat.postMessage')result={ok:true,ts:'200.1'};
    res.writeHead(200,{'content-type':'application/json'}).end(JSON.stringify(result));
  });
  await new Promise(resolve=>slackServer.listen(0,'127.0.0.1',resolve));
  const slackUrl=`http://127.0.0.1:${slackServer.address().port}/`;
  const auth=new MindsAuthorization(store,'https://slack.test');
  const {app,worker,installationStore}=createSlackApp({publicUrl:'https://slack.test',signingSecret:'test-signing-secret',clientId:'test-client',clientSecret:'test-client-secret',stateSecret:'test-state-secret'},store,auth,async()=>mcp,slackUrl);
  await installationStore.storeInstallation({team:{id:actor.team,name:'Test'},user:{id:actor.user},bot:{token:'test-bot-token',id:'B_TEST',userId:'B_TEST',scopes:[]},isEnterpriseInstall:false});
  const server=await app.start(0);
  const endpoint=`http://127.0.0.1:${server.address().port}/slack/events`;
  async function send(body,valid=true,timestamp=String(Math.floor(Date.now()/1000))){
    const raw=JSON.stringify(body);
    const signature='v0='+createHmac('sha256','test-signing-secret').update(`v0:${timestamp}:${raw}`).digest('hex');
    return fetch(endpoint,{method:'POST',headers:{'content-type':'application/json','x-slack-request-timestamp':timestamp,'x-slack-signature':valid?signature:'v0=invalid'},body:raw});
  }
  try{
    const challenge=await send({type:'url_verification',challenge:'test-challenge'});
    assert.equal(challenge.status,200);
    assert.match(await challenge.text(),/test-challenge/);
    assert.equal((await send({type:'url_verification',challenge:'test-challenge'},false)).status,401);
    assert.equal((await send({type:'url_verification',challenge:'test-challenge'},true,'1')).status,401);
    for (const [index, thread] of [undefined, '100.1'].entries()) {
      await send({type:'event_callback',team_id:actor.team,event_id:`mention-${index}`,api_app_id:'A_TEST',
        event:{type:'app_mention',user:actor.user,channel:input.channel,ts:`101.${index}`,text:'<@B_TEST> Test this offer',...(thread ? {thread_ts:thread} : {})}});
      for(let i=0;i<50 && slackCalls.filter(c=>c.method==='/chat.postEphemeral').length<=index;i++)await new Promise(r=>setTimeout(r,10));
      const menu=slackCalls.filter(c=>c.method==='/chat.postEphemeral')[index];
      assert.ok(menu, 'Mention should produce visible requester controls');
      assert.equal(menu.args.thread_ts, thread);
    }
    await store.put('selection','selected-a',actor,{input,choices:[{id:'audience-a',name:'Test Audience'}]},1800);
    const submission={type:'view_submission',team:{id:actor.team},user:{id:actor.user},api_app_id:'A_TEST',view:{id:'V_TEST',type:'modal',callback_id:'research_submit',private_metadata:'selected-a',state:{values:{
      target:{target:{type:'external_select',selected_option:{value:'audience-a'}}},
      question:{question:{type:'plain_text_input',value:input.question}},
      sharing:{sharing:{type:'checkboxes',selected_options:[{value:'approved'}]}},
    }}}};
    assert.equal((await send(submission)).status,200);
    assert.equal((await send(submission)).status,200);
    assert.equal((await store.pool.query('SELECT count(*) FROM minds_slack.jobs')).rows[0].count,'1');
    for(let i=0;i<3;i++){await fast(store);await worker.tick()}
    const posted=slackCalls.find(c=>c.method==='/chat.postMessage');
    const updated=slackCalls.find(c=>c.method==='/chat.update');
    assert.equal(posted.args.thread_ts,input.thread);
    assert.equal(updated.args.ts,'200.1');
    assert.match(updated.args.text,/Price was the main objection/);
    assert.equal(calls.filter(c=>c.name==='ask_audience').length,1);
    await send({type:'event_callback',team_id:actor.team,event_id:'uninstall-a',event:{type:'app_uninstalled'},api_app_id:'A_TEST'});
    for(let i=0;i<30 && await store.get('installation',actor.team);i++)await new Promise(r=>setTimeout(r,10));
    assert.equal(await store.get('installation',actor.team),null);
  }finally{await app.stop();await new Promise(resolve=>slackServer.close(resolve))}
});


integration('startup supports a pre-provisioned schema owner without database CREATE privilege', async admin => {
  await admin.pool.query('CREATE ROLE slack_restricted_test LOGIN NOINHERIT');
  await admin.pool.query('ALTER SCHEMA minds_slack OWNER TO slack_restricted_test');
  await admin.pool.query('ALTER TABLE minds_slack.records OWNER TO slack_restricted_test');
  await admin.pool.query('ALTER TABLE minds_slack.jobs OWNER TO slack_restricted_test');
  const url = new URL(database); url.username = 'slack_restricted_test';
  const restricted = new Store(url.toString(), randomBytes(32).toString('base64'));
  try {
    assert.equal((await restricted.pool.query("SELECT has_database_privilege(current_user,current_database(),'CREATE') AS allowed")).rows[0].allowed, false);
    await restricted.migrate();
    await restricted.put('probe','role',actor,{ok:true});
    assert.deepEqual(await restricted.get('probe','role'),{ok:true});
    assert.ok((await restricted.pool.query("SELECT rowsecurity FROM pg_tables WHERE schemaname='minds_slack'")).rows.every(row=>row.rowsecurity));
  } finally {
    await restricted.pool.end();
    await admin.pool.query('REASSIGN OWNED BY slack_restricted_test TO postgres');
    await admin.pool.query('DROP ROLE slack_restricted_test');
  }
});
