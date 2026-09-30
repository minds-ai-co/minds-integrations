import { CreativeReviewClient } from '@minds/creative-review';

export const styles = `body{margin:0;padding:16px;font:14px/1.5 system-ui;color:#18202a;background:#fff}main{max-width:640px;margin:auto}h1{font-size:20px;margin:0 0 8px}label{display:block;margin:12px 0 4px}button,input,select,textarea{font:inherit;box-sizing:border-box;border:1px solid #b6bdc7;border-radius:6px;padding:8px}button{cursor:pointer;background:#f3f4f6;margin:8px 4px 0 0}button:disabled{cursor:wait;opacity:.5}textarea,input,select{width:100%}textarea{min-height:85px}pre{white-space:pre-wrap;overflow-wrap:anywhere;background:#f6f7f9;padding:10px}img{max-width:100%;max-height:180px}a{color:#3646ac}#status{min-height:24px}[hidden]{display:none!important}`;

// Each host supplies only explicit export/open/import operations.
/** @param {any} options */
export function mountPanel({ root, gatewayUrl, exportMaterial, openUrl, importFindings = undefined, hostName }) {
  const client = new CreativeReviewClient(gatewayUrl);
  root.innerHTML = `<h1>Minds creative review</h1><p>Learn how your Audience reacts to your artwork and copy.</p>
    <button id="connect">Connect Minds</button><button id="refresh">Refresh Studies</button><button id="disconnect">Disconnect</button>
    <label for="study">Study</label><select id="study"><option value="">Connect and refresh Studies</option></select>
    <label for="request">What do you want to learn?</label><textarea id="request" placeholder="Which parts are clear, credible and persuasive?"></textarea>
    <label for="locale">Study language</label><select id="locale"><option value="en">English</option><option value="de">German</option><option value="es">Spanish</option><option value="fr">French</option><option value="zh">Chinese</option><option value="tr">Turkish</option><option value="ar">Arabic</option><option value="ja">Japanese</option><option value="ko">Korean</option></select>
    <button id="export">Select material to review</button><p id="material">No material selected.</p><img id="image" alt="Selected artwork" hidden>
    <label><input id="consent" type="checkbox" style="width:auto"> Send this selected material to Minds to draft a research plan.</label>
    <button id="preview">Draft research plan</button><button id="open">Review and run in Minds</button>
    <p>Review the plan and estimated cost in Minds before running the Study.</p>
    <button id="summary">Load findings</button><button id="import" hidden>Add findings to design</button><pre id="result" hidden></pre><p id="status" role="status" aria-live="polite"></p>`;
  const el = id => root.querySelector(`#${id}`);
  let material, imageUrl, summary, previewKey, fingerprint, busy = false;
  let connected = false;
  const requireConnection = () => { if (!connected) throw new Error('Connect Minds and refresh your Studies first.'); };
  const studyId = () => { if (!el('study').value) throw new Error('Choose a Study.'); return el('study').value; };
  const operation = fn => async () => {
    if (busy) return; busy = true;
    root.querySelectorAll('button').forEach(button => { button.disabled = true; });
    el('status').textContent = 'Working…';
    try { await fn(); } catch (error) { el('status').textContent = error.message || 'Unable to complete this action.'; }
    finally { busy = false; root.querySelectorAll('button').forEach(button => { button.disabled = false; }); }
  };
  async function refresh() {
    connected = (await client.status()).connected;
    requireConnection();
    const value = await client.studies();
    const list = value.data?.studies || value.data?.items || value.data || [];
    if (!Array.isArray(list)) throw new Error('Minds returned an unexpected Studies list.');
    el('study').replaceChildren(new Option('Choose a Study', ''));
    for (const study of list) el('study').append(new Option(study.name || study.title || study.id, study.id));
    el('status').textContent = 'Choose an existing Study with your Audience in Minds.';
  }
  el('connect').onclick = operation(async () => {
    if (client.session) await client.disconnect();
    connected = false;
    const url = await client.connect(); await openUrl(url);
    el('status').textContent = 'Approve the connection in your browser, then select Refresh Studies.';
  });
  el('refresh').onclick = operation(refresh);
  el('disconnect').onclick = operation(async () => {
    await client.disconnect(); connected = false;
    el('study').replaceChildren(new Option('Connect and refresh Studies', ''));
    material = summary = previewKey = fingerprint = undefined;
    if (imageUrl) URL.revokeObjectURL(imageUrl);
    el('image').hidden = true; el('result').hidden = true; el('import').hidden = true;
    el('material').textContent = 'No material selected.'; el('consent').checked = false;
    el('status').textContent = 'Disconnected.';
  });
  el('export').onclick = operation(async () => {
    const selected = await exportMaterial();
    if (!selected) { el('status').textContent = 'Selection cancelled.'; return; }
    material = selected; previewKey = fingerprint = undefined; el('consent').checked = false;
    if (imageUrl) URL.revokeObjectURL(imageUrl);
    el('image').hidden = !material.blob;
    if (material.blob) { imageUrl = URL.createObjectURL(material.blob); el('image').src = imageUrl; }
    el('material').textContent = `${material.label} — selected from ${hostName}`;
    el('status').textContent = 'Check the selected material, then choose whether to send it to Minds.';
  });
  el('preview').onclick = operation(async () => {
    requireConnection(); const id = studyId();
    if (!material) throw new Error('Select material to review.');
    if (!el('consent').checked) throw new Error('Confirm that you want to send the selected material to Minds.');
    if (!el('request').value.trim()) throw new Error('Describe what you want to learn.');
    if (material.blob && !material.url) {
      const uploaded = await client.upload(material.blob, `${material.label}.png`);
      material.url = uploaded.url;
    }
    const source = { kind: material.kind, label: material.label, url: material.url, content: material.content, mimeType: material.blob?.type || material.mimeType };
    const input = { request: el('request').value, studyLocale: el('locale').value, source };
    const nextFingerprint = JSON.stringify({ id, input });
    if (nextFingerprint !== fingerprint) { previewKey = crypto.randomUUID(); fingerprint = nextFingerprint; }
    const result = await client.preview(id, input, previewKey);
    el('result').hidden = false; el('result').textContent = JSON.stringify(result.data || result, null, 2);
    el('status').textContent = 'Draft ready. Review and confirm it in Minds to run the Study.';
  });
  el('open').onclick = operation(async () => { await openUrl(`https://getminds.ai/?studyId=${encodeURIComponent(studyId())}`); el('status').textContent = 'Minds opened.'; });
  el('summary').onclick = operation(async () => {
    requireConnection();
    const value = await client.summary(studyId());
    summary = JSON.stringify(value.data || value, null, 2);
    el('result').hidden = false; el('result').textContent = summary;
    el('import').hidden = !importFindings;
    el('status').textContent = 'Aggregate findings loaded.';
  });
  el('study').onchange = () => { summary = undefined; el('import').hidden = true; el('result').hidden = true; };
  el('import').onclick = operation(async () => {
    if (!summary) throw new Error('Load findings first.');
    await importFindings(`Minds research findings\n${summary}`); el('status').textContent = 'Findings added to your design.';
  });
}
