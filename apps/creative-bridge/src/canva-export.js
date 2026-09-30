/** Transfer an approved Canva PDF through the existing owner-authenticated upload API. */
export async function importCanvaPdf(body, { request, upload }) {
  const source = body.source;
  if (source.kind !== 'document' || source.mimeType !== 'application/pdf' || !source.url) return body;
  const url = new URL(source.url);
  if (url.hostname !== 'export-download.canva.com') return body;
  if (url.protocol !== 'https:' || url.username || url.password || url.port || url.hash) throw new Error('Invalid Canva export.');
  // No Minds credentials go to the vendor, and redirects cannot change the trusted host.
  const response = await request(url.href, { redirect: 'error', signal: AbortSignal.timeout(30000) });
  if (!response.ok || !response.body) throw new Error('Canva export is unavailable.');
  const chunks = [];
  let size = 0;
  for await (const chunk of response.body) {
    size += chunk.byteLength;
    if (size > 25 * 1024 * 1024) { await response.body.cancel().catch(() => undefined); throw new Error('Canva export is too large.'); }
    chunks.push(Buffer.from(chunk));
  }
  const bytes = Buffer.concat(chunks);
  if (bytes.subarray(0, 4).toString() !== '%PDF') throw new Error('Canva export is not a PDF.');
  const name = source.label.replace(/[^\p{L}\p{N} ._-]/gu, '_').slice(0, 170).replace(/\.pdf$/i, '') + '.pdf';
  const form = new FormData();
  form.append('folder', 'chat');
  form.append('file', new Blob([bytes], { type: 'application/pdf' }), name);
  const uploaded = await upload(form);
  if (typeof uploaded.url !== 'string' || !uploaded.url.startsWith('/api/uploads/chat/')) throw new Error('Invalid owned document upload.');
  return { ...body, source: { ...source, url: uploaded.url } };
}
