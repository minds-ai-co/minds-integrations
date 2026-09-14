import assert from 'node:assert/strict';
import {randomBytes,createHash} from 'node:crypto';
import {createServer} from 'node:http';
import {test} from 'node:test';
import {Store} from '../dist/store.js';
import {MindsAuthorization} from '../dist/oauth.js';
const database=process.env.SLACK_TEST_DATABASE_URL;
// Separate tenant and no global truncation: test files run concurrently.
const actor={team:'T_OAUTH',user:'U_OAUTH'};
const hash=s=>createHash('sha256').update(s).digest('base64url');
test('Minds PKCE binds browser, Slack actor, one-use state and rotated refresh tokens',{skip:!database},async()=>{
 const store=new Store(database,randomBytes(32).toString('base64'));
 await store.migrate();await store.erase(actor.team);
 const origin='https://slack-oauth.test';
 await store.remove('oauth-client',origin);
 const exchanges=[];
 const fakeFetch=async(url,init)=>{
  assert.ok(url.startsWith('https://getminds.ai/oauth/'));
  assert.equal(init.redirect,'error');
  if(url.endsWith('/register')){
   assert.deepEqual(JSON.parse(init.body).redirect_uris,[`${origin}/minds/callback`]);
   return Response.json({client_id:'test-registered-client'});
  }
  const fields=Object.fromEntries(init.body);exchanges.push(fields);
  if(url.endsWith('/revoke'))return Response.json({});
  return Response.json({access_token:'test-access',refresh_token:'test-refresh-rotated',expires_in:3600});
 };
 const auth=new MindsAuthorization(store,origin,fakeFetch);
 const server=createServer(auth.handle.bind(auth));
 await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
 const local=`http://127.0.0.1:${server.address().port}`;
 try{
  const link=await auth.link(actor);
  const response=await fetch(link.replace(origin,local),{redirect:'manual'});
  assert.equal(response.status,302);
  const authorization=new URL(response.headers.get('location'));
  assert.equal(authorization.origin,'https://getminds.ai');
  assert.equal(authorization.searchParams.get('code_challenge_method'),'S256');
  const state=authorization.searchParams.get('state');
  const cookie=response.headers.get('set-cookie').split(';')[0];
  const callback=`${local}/minds/callback?state=${state}&code=test-code`;
  assert.equal((await fetch(callback)).status,400);
  assert.equal(exchanges.length,0);
  assert.equal((await fetch(callback,{headers:{cookie}})).status,200);
  assert.equal(hash(exchanges[0].code_verifier),authorization.searchParams.get('code_challenge'));
  assert.equal((await fetch(callback,{headers:{cookie}})).status,400);
  assert.equal(exchanges.length,1);
  assert.equal(await auth.token(actor),'test-access');
  assert.equal(await store.get('connection','T_OTHER:U_OAUTH'),null);
  const connection=await store.get('connection','T_OAUTH:U_OAUTH');
  await store.put('connection','T_OAUTH:U_OAUTH',actor,{...connection,expiresAt:0});
  await Promise.all(Array.from({length: 8},()=>auth.token(actor)));
  assert.equal(exchanges.filter(e=>e.grant_type==='refresh_token').length,1);
  await store.put('authorization','pending-callback',actor,{...actor},600);
  await auth.disconnect(actor);
  assert.equal(await store.bindConnection('pending-callback',actor,{accessToken:'late-callback'}),false);
  assert.equal(await store.get('connection','T_OAUTH:U_OAUTH'),null);
  await assert.rejects(()=>auth.token(actor));
 }finally{await new Promise(resolve=>server.close(resolve));await store.erase(actor.team);await store.pool.end()}
});

test('registration failures report service unavailability without leaking details or blaming the link',{skip:!database},async()=>{
 const store=new Store(database,randomBytes(32).toString('base64'));
 const requester={team:'T_SETUP',user:'U_SETUP'};
 const origin='https://slack-setup.test';
 await store.migrate();await store.erase(requester.team);await store.remove('oauth-client',origin);
 let unavailable=false;
 const auth=new MindsAuthorization(store,origin,async()=>{
  if(unavailable)throw new Error('private-provider-detail');
  return Response.json({error:'invalid_redirect_uri',detail:'private-provider-detail'},{status:400});
 });
 const server=createServer(auth.handle.bind(auth));
 await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
 const local=`http://127.0.0.1:${server.address().port}`;
 try{
  for(const outage of [false,true]){
   unavailable=outage;
   const link=(await auth.link(requester)).replace(origin,local);
   const response=await fetch(link,{redirect:'manual'});
   assert.equal(response.status,503);
   const text=await response.text();
   assert.match(text,/temporarily unavailable/);
   assert.doesNotMatch(text,/fresh|private-provider-detail|invalid_redirect_uri/);
   assert.equal(response.headers.get('location'),null);
   assert.equal(response.headers.get('set-cookie'),null);
  }
  const expired=await fetch(`${local}/minds/connect?ticket=expired-fixture`);
  assert.equal(expired.status,400);
  assert.match(await expired.text(),/fresh Connect Minds link/);
 }finally{await new Promise(resolve=>server.close(resolve));await store.erase(requester.team);await store.pool.end()}
});
