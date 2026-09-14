import {spawn,execFileSync} from 'node:child_process';
import {randomBytes} from 'node:crypto';
const files=['test/agent.test.mjs','test/lifecycle.test.mjs','test/oauth.test.mjs'];
const supplied=process.env.SLACK_TEST_DATABASE_URL;
let name;
try{
 let database=supplied;
 if(!database){
  name=`minds-slack-tests-${randomBytes(6).toString('hex')}`;
  execFileSync('docker',['run','-d','--rm','--name',name,'-e','POSTGRES_HOST_AUTH_METHOD=trust','-e','POSTGRES_DB=slack_test','-p','127.0.0.1::5432','postgres:17-alpine@sha256:18cfe3ef5e6815560c98237d6216d1e5119702fb0f3894c8785dd58b8bbe5d73'],{stdio:'ignore'});
  let ready=false;
  for(let i=0;i<60;i++){
   try{execFileSync('docker',['exec',name,'pg_isready','-U','postgres'],{stdio:'ignore'});ready=true;break}catch{await new Promise(r=>setTimeout(r,500))}
  }
  if(!ready)throw Error('Isolated test database did not become ready');
  const binding=execFileSync('docker',['port',name,'5432/tcp'],{encoding:'utf8'}).trim();
  database=`postgres://postgres@${binding}/slack_test`;
 }
 const url=new URL(database);
 if(url.pathname!=='/slack_test'||!['localhost','127.0.0.1','[::1]'].includes(url.hostname))throw Error('Tests require a local database named slack_test');
 const child=spawn(process.execPath,['--test','--test-concurrency=1',...files],{stdio:'inherit',env:{...process.env,SLACK_TEST_DATABASE_URL:database}});
 process.exitCode=await new Promise(resolve=>child.on('exit',code=>resolve(code??1)));
}catch(error){console.error(error instanceof Error?error.message:'Slack tests failed');process.exitCode=1}
finally{if(name)execFileSync('docker',['rm','-f',name],{stdio:'ignore'})}
