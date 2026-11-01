const { request, unwrapData } = require('./client');
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

// Four requests with 4.5 s timeouts plus three 750 ms pauses stay below
// Zapier's 30 s execution limit. A task retry observes the same accepted work.
const preparePlan = async (z, { path, body, requestId }) => {
  const headers = { 'Idempotency-Key': requestId, 'X-Minds-Study-Plan-Protocol': '1' };
  for (let attempt = 0; attempt < 4; attempt += 1) {
    let response;
    try {
      response = await request(z, { method: 'POST', path, body, headers: { ...headers }, timeout: 4500, skipThrowForStatus: true });
    } catch (error) {
      if (error.type === 'request-timeout' || error.code === 'ETIMEDOUT' || error.name === 'AbortError') {
        throw new z.errors.ThrottledError('Minds is still preparing the saved plan. Zapier will retry the same request.', 60);
      }
      throw error;
    }
    response.throwForStatus();
    const data = unwrapData(response.data);
    if (response.status !== 202) {
      if (!data?.draftPlanId) throw new Error('Minds did not return a saved draft. Retry the same request identifier.');
      return data;
    }
    if (data?.status === 'pending' && data.accepted === true && data.requestId === requestId && UUID.test(data.operationId)) {
      if (headers['X-Minds-Study-Plan-Operation-Id'] && headers['X-Minds-Study-Plan-Operation-Id'] !== data.operationId) {
        throw new Error('Minds returned a different planning operation.');
      }
      headers['X-Minds-Study-Plan-Operation-Id'] = data.operationId;
    } else if (data?.status !== 'capability-wait' || data.accepted !== false) {
      throw new Error('Minds returned an invalid planning receipt.');
    }
    if (attempt < 3) await new Promise(resolve => setTimeout(resolve, 750));
  }
  throw new z.errors.ThrottledError('Minds is still preparing the saved plan. Zapier will retry the same request.', 60);
};
module.exports = { preparePlan };
