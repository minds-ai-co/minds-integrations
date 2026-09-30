import { panelMessages, defaultText } from './messages.js';
import { CreativeReviewClient, reviewUrl, formatRunFindings } from '@minds/creative-review';

export const styles = `body{margin:0;padding:16px;font:14px/1.5 system-ui;color:#18202a;background:#fff}main{max-width:640px;margin:auto}h1{font-size:20px;margin:0 0 8px}label{display:block;margin:12px 0 4px}button,input,select,textarea{font:inherit;box-sizing:border-box;border:1px solid #b6bdc7;border-radius:6px;padding:8px}button{cursor:pointer;background:#f3f4f6;margin:8px 4px 0 0}button:disabled{cursor:wait;opacity:.5}textarea,input,select{width:100%}textarea{min-height:85px}pre{white-space:pre-wrap;overflow-wrap:anywhere;background:#f6f7f9;padding:10px}img{max-width:100%;max-height:180px}a{color:#3646ac}#status{min-height:24px}[hidden]{display:none!important}`;

// Each host supplies only explicit export/open/import operations.
/** @param {any} options */
export function mountPanel({ root, gatewayUrl, exportMaterial, openUrl, importFindings = undefined, hostName, formatMessage = defaultText }) {
  const client = new CreativeReviewClient(gatewayUrl);
  const text = (source, values = {}) => formatMessage(panelMessages[source], values);
  // Translated strings are data, including attribute values.
  const html = source => text(source).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
  root.innerHTML = `<h1>${html("Minds creative review")}</h1><p>${html("Review your artwork and copy with the AI personas in your Audience.")}</p>
    <button id="connect">${html("Connect Minds")}</button><button id="refresh">${html("Refresh Studies")}</button><button id="disconnect">${html("Disconnect")}</button>
    <label for="study">${html("Study")}</label><select id="study"><option value="">${html("Connect and refresh Studies")}</option></select>
    <label for="request">${html("What do you want to learn?")}</label><textarea id="request" placeholder="${html("Which parts are clear, credible and persuasive?")}"></textarea>
    <label for="locale">${html("Study language")}</label><select id="locale"><option value="en">${html("English")}</option><option value="de">${html("German")}</option><option value="es">${html("Spanish")}</option><option value="fr">${html("French")}</option><option value="zh">${html("Chinese")}</option><option value="tr">${html("Turkish")}</option><option value="ar">${html("Arabic")}</option><option value="ja">${html("Japanese")}</option><option value="ko">${html("Korean")}</option></select>
    <button id="export">${html("Select material to review")}</button><p id="material">${html("No material selected.")}</p><img id="image" alt="${html("Selected artwork")}" hidden>
    <label><input id="consent" type="checkbox" style="width:auto"> ${html("Send this selected material to Minds to draft a research plan.")}</label>
    <button id="preview">${html("Draft research plan")}</button><button id="open">${html("Open Study in Minds")}</button>
    <p>${html("Review and run the saved plan in Minds, then return here to load its findings.")}</p>
    <button id="summary">${html("Load findings")}</button><button id="import" hidden>${html("Add findings to design")}</button><pre id="result" hidden></pre><p id="status" role="status" aria-live="polite"></p>`;
  const el = id => root.querySelector(`#${id}`);
  let material, imageUrl, summary, previewKey, fingerprint, busy = false;
  let savedDraft;
  const resetDraft = () => { savedDraft = summary = undefined; el('import').hidden = true; el('result').hidden = true; };
  let connected = false;
  const requireConnection = () => { if (!connected) throw new Error(text("Connect Minds and refresh your Studies first.")); };
  const studyId = () => { if (!el('study').value) throw new Error(text("Choose a Study.")); return el('study').value; };
  const operation = fn => async () => {
    if (busy) return; busy = true;
    root.querySelectorAll('button,input,select,textarea').forEach(control => { control.disabled = true; });
    el('status').textContent = text("Working\u2026");
    try { await fn(); } catch (error) { el('status').textContent = error.message || text("Unable to complete this action."); }
    finally { busy = false; root.querySelectorAll('button,input,select,textarea').forEach(control => { control.disabled = false; }); }
  };
  async function refresh() {
    connected = (await client.status()).connected;
    requireConnection();
    const value = await client.studies();
    const list = value.data?.studies || value.data?.items || value.data || [];
    if (!Array.isArray(list)) throw new Error(text("Minds returned an unexpected Studies list."));
    el('study').replaceChildren(new Option(text("Choose a Study"), ''));
    for (const study of list) el('study').append(new Option(study.name || study.title || study.id, study.id));
    el('status').textContent = text("Choose an existing Study with your Audience in Minds.");
  }
  el('connect').onclick = operation(async () => {
    if (client.session) await client.disconnect();
    connected = false;
    const url = await client.connect(); await openUrl(url);
    el('status').textContent = text("Approve the connection in your browser, then select Refresh Studies.");
  });
  el('refresh').onclick = operation(refresh);
  el('disconnect').onclick = operation(async () => {
    await client.disconnect(); connected = false;
    el('study').replaceChildren(new Option(text("Connect and refresh Studies"), ''));
    material = previewKey = fingerprint = undefined; resetDraft();
    if (imageUrl) URL.revokeObjectURL(imageUrl);
    el('image').hidden = true; el('result').hidden = true; el('import').hidden = true;
    el('material').textContent = text("No material selected."); el('consent').checked = false;
    el('status').textContent = text("Disconnected.");
  });
  el('export').onclick = operation(async () => {
    const selected = await exportMaterial();
    if (!selected) { el('status').textContent = text("Selection cancelled."); return; }
    material = selected; previewKey = fingerprint = undefined; el('consent').checked = false; resetDraft();
    if (imageUrl) URL.revokeObjectURL(imageUrl);
    el('image').hidden = !material.blob;
    if (material.blob) { imageUrl = URL.createObjectURL(material.blob); el('image').src = imageUrl; }
    el('material').textContent = text("{material} — selected from {host}", { material: material.label, host: hostName });
    el('status').textContent = text("Check the selected material, then choose whether to send it to Minds.");
  });
  el('preview').onclick = operation(async () => {
    requireConnection(); const id = studyId();
    if (!material) throw new Error(text("Select material to review."));
    if (!el('consent').checked) throw new Error(text("Confirm that you want to send the selected material to Minds."));
    if (!el('request').value.trim()) throw new Error(text("Describe what you want to learn."));
    if (material.blob && !material.url) {
      const uploaded = await client.upload(material.blob, `${material.label}.png`);
      material.url = uploaded.url;
    }
    const source = { kind: material.kind, label: material.label, url: material.url, content: material.content, mimeType: material.blob?.type || material.mimeType };
    const input = { request: el('request').value, studyLocale: el('locale').value, source };
    const nextFingerprint = JSON.stringify({ id, input });
    if (nextFingerprint !== fingerprint) { previewKey = crypto.randomUUID(); fingerprint = nextFingerprint; }
    const result = await client.preview(id, input, previewKey);
    const draft = result.data || result;
    if (!draft.draftPlanId) throw new Error(text('Minds did not return a saved draft. Try again.'));
    savedDraft = { studyId: id, draftPlanId: draft.draftPlanId };
    summary = undefined; el('import').hidden = true;
    el('result').hidden = false; el('result').textContent = [draft.plan?.intent?.objective,
      ...(draft.plan?.modules || []).flatMap(module => module.questions.map((question, index) => `${index + 1}. ${question.text}`)),
      ...(draft.plan?.confirmation?.missingInputs || [])].filter(Boolean).join('\n\n');
    el('status').textContent = text("Draft saved. Open it in Minds to review usage, confirm and run research.");
  });
  el('open').onclick = operation(async () => {
    if (!savedDraft) throw new Error(text('Draft a research plan first.'));
    await openUrl(reviewUrl(savedDraft.studyId, savedDraft.draftPlanId)); el('status').textContent = text("Minds opened.");
  });
  el('summary').onclick = operation(async () => {
    requireConnection();
    summary = undefined; el('import').hidden = true;
    if (!savedDraft) throw new Error(text('Draft a research plan first.'));
    const value = await client.run(savedDraft.studyId, savedDraft.draftPlanId);
    const report = value.data || value;
    if (report.draftPlanId !== savedDraft.draftPlanId) throw new Error(text('Findings do not match this saved draft.'));
    summary = formatRunFindings(report);
    if (!summary) throw new Error(text('Findings are not ready. Open this draft in Minds to check its research status, then try again.'));
    el('result').hidden = false; el('result').textContent = summary;
    el('import').hidden = !importFindings;
    el('status').textContent = text("Aggregate findings loaded.");
  });
  el('study').onchange = resetDraft;
  el('request').oninput = resetDraft;
  el('locale').onchange = resetDraft;
  el('import').onclick = operation(async () => {
    if (!summary) throw new Error(text("Load findings first."));
    await importFindings(`${text("Minds research findings")}\n${summary}`); el('status').textContent = text("Findings added to your design.");
  });
}
