import assert from 'node:assert/strict';
import {test} from 'node:test';
import {vertexAgent} from '../dist/vertex.js';

test('missing Vertex configuration keeps guided controls and never uses a consumer API key',()=>{
 assert.equal(vertexAgent({SLACK_AGENT_API_KEY:'fixture-old-key',SLACK_AGENT_MODEL:'fixture-model'}),undefined);
 assert.throws(()=>vertexAgent({SLACK_VERTEX_PROJECT:'fixture-project'}),/Complete/);
});
test('rejects non-service-account credentials and hides invalid credential contents',()=>{
 const env={SLACK_VERTEX_PROJECT:'fixture-project',SLACK_VERTEX_LOCATION:'global',SLACK_AGENT_MODEL:'fixture-model'};
 for(const raw of ['private-invalid-json',JSON.stringify({type:'external_account',credential_source:{url:'https://invalid.test/secret'}})]){
  assert.throws(()=>vertexAgent({...env,SLACK_VERTEX_CREDENTIALS:raw}),error=>{
   assert.match(error.message,/Invalid Slack Vertex/);
   assert.doesNotMatch(error.message,/private-invalid|invalid.test/);
   return true;
  });
 }
});
