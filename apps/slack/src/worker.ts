import { Store, type Actor, type Job } from './store.js';
import { audiences, data, resultText, rows, string, studyUrl, type ToolClient } from './minds.js';

export interface Delivery {
  start(job: Job): Promise<string>;
  update(job: Job, text: string): Promise<void>;
}
export class ResearchWorker {
  constructor(private readonly store: Store, private readonly client: (actor: Actor) => Promise<ToolClient>, private readonly delivery: Delivery) {}
  async tick(): Promise<boolean> {
    const job = await this.store.claim();
    if (!job) return false;
    try {
      if (job.phase === 'executing') {
        job.result = 'The research request could not be confirmed. To avoid duplicate charges, it has not been repeated. Check your Studies in Minds before starting another request.';
        await this.store.save(job, 'delivering');
        return true;
      }
      if (job.phase === 'delivering') {
        // Reauthorize before delivering any retained research after reconnect/revocation.
        const client = await this.client(job);
        if (job.studyId) await client.callTool('get_study_status', {studyId: job.studyId});
        if (!await this.store.owned(job)) return true;
        await this.delivery.update(job, job.result ?? 'No result available.');
        await this.store.save(job, 'done');
        return true;
      }
      const client = await this.client(job);
      if (job.phase === 'queued') {
        if (job.intent === 'ask') {
          const accessible = await audiences(client);
          const selected = accessible.find(a => a.id === job.audienceId);
          if (!selected) throw new Error('Audience is no longer accessible');
          job.audienceName = selected.name;
        } else {
          if (!job.studyId) throw new Error('A Study is required');
          await client.callTool('get_study_status', {studyId: job.studyId});
        }
        if (!job.messageTs) {
          job.messageTs = await this.delivery.start(job);
          if (!await this.store.save(job, 'queued', 120)) return true;
        }
        if (job.intent === 'read') {
          await this.store.save(job, 'polling');
          return true;
        }
        // Persist the mutation boundary BEFORE sending anything that can spend credits.
        if (!await this.store.save(job, 'executing', 120)) return true;
        const args = job.intent === 'ask'
          ? {audienceId: job.audienceId, question: job.question, name: `Slack research ${job.id}`}
          : {studyId: job.studyId, question: job.question};
        const submitted = data(await client.callTool(job.intent === 'ask' ? 'ask_audience' : 'ask_study', args));
        job.studyId = string(submitted.studyId);
        job.questionId = string(submitted.questionId);
        if (!job.studyId) throw new Error('Research did not return a Study');
        job.studyUrl = studyUrl(job.studyId);
        if (submitted.status === 'planning_required') {
          job.result = 'This request needs a reviewed question plan. Nothing was submitted to respondents. Open the Study in Minds to review and run the plan.';
          await this.store.save(job, 'delivering');
        } else {
          if (!job.questionId) throw new Error('Research did not return a question ID');
          await this.store.save(job, 'polling', 5);
        }
        return true;
      }
      if (job.phase === 'polling') {
        const status = data(await client.callTool('get_study_status', {studyId: job.studyId}));
        job.studyUrl = studyUrl(job.studyId ?? '');
        const completed = rows(status.recentResults);
        const result = job.intent === 'read' ? completed.at(-1) : completed.find(row => row.questionId === job.questionId);
        const failure = rows(status.failedQuestions).find(row => row.questionId === job.questionId);
        if (failure) job.result = 'The research did not complete. Open the Study to inspect its status. No additional research was started.';
        else if (result) {
          job.result = resultText(result);
          // Reuse an existing summary; never trigger generation during retrieval.
          if (job.intent === 'read') {
            const summary = data(await client.callTool('get_study_summary', {studyId: job.studyId, refresh: false}));
            const content = string(summary.summary);
            if (content && !content.startsWith('No summary')) job.result = `${content.slice(0, 1500)}\n\n${job.result.slice(0, 900)}`;
          }
        } else if (job.intent === 'read') job.result = 'This Study has no completed findings available yet. No new research was started.';
        else if (Date.now() - job.started > 60 * 60 * 1000) job.result = 'Research is still pending after an hour. Open the Study for its latest status. It has not been cancelled or repeated.';
        else { await this.store.save(job, 'polling', 15); return true; }
        if (!await this.store.owned(job)) return true;
        await this.store.put('thread', `${job.team}:${job.user}:${job.channel}:${job.thread}`, job, {studyId: job.studyId, audienceId: job.audienceId}, 7 * 86400);
        await this.store.save(job, 'delivering');
      }
    } catch {
      if (job.phase === 'queued') {
        // The stored phase may already be executing. Never turn a transport error into a retry.
        job.result = 'This request could not be completed or confirmed. Check Minds before trying again; research has not been automatically repeated.';
        await this.store.save(job, job.messageTs ? 'delivering' : 'failed', 15);
      } else if (Date.now() - job.started > 2 * 60 * 60 * 1000) {
        await this.store.save(job, 'failed');
      } else await this.store.save(job, job.phase, 30);
    }
    return true;
  }
}
