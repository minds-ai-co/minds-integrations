import { AppBridge, PostMessageTransport } from "./app-bridge.js";
import { STRINGS } from "./strings.js";

export function mountResponse(container, payload, locale) {
  const iframe = document.createElement("iframe");
  iframe.title = "Minds response";
  iframe.setAttribute("sandbox", "allow-scripts allow-popups allow-popups-to-escape-sandbox");
  iframe.style.cssText = "width:100%;height:100%;border:0;background:#fff;border-radius:8px";
  // The artifact is local; it is the same published response UI used by Minds MCP.
  // A fresh frame for each completed run respects the widget's sealed-result identity.
  const bridge = new AppBridge(null, { name: "ComfyUI Minds", version: "0.2.0" },
    { openLinks: {} }, { hostContext: { locale, displayMode: "inline", theme: "dark" } });
  bridge.onopenlink = async ({ url }) => {
    const destination = new URL(url);
    if (destination.origin !== "https://getminds.ai") return { isError: true };
    window.open(destination.href, "_blank", "noopener,noreferrer");
    return {};
  };
  bridge.oninitialized = async () => {
    try {
      await bridge.sendToolInput({ arguments: {} });
      await bridge.sendToolResult({ content: [], structuredContent: payload });
    } catch { showFailure(); }
  };
  let disposed = false;
  function showFailure() {
    if (disposed) return;
    // Keep a useful link even if a browser cannot initialize MCP Apps.
    container.replaceChildren();
    const link = document.createElement("a");
    link.textContent = (STRINGS[locale] || STRINGS.en).viewStudy;
    link.href = `https://getminds.ai/?studyId=${encodeURIComponent(payload.studyId)}`;
    link.target = "_blank"; link.rel = "noopener noreferrer";
    container.append(link);
  }
  container.replaceChildren(iframe);
  // Connect before navigation so the iframe's initial handshake cannot be lost.
  const transport = new PostMessageTransport(iframe.contentWindow, iframe.contentWindow);
  bridge.connect(transport).catch(showFailure);
  iframe.src = new URL("./response.html", import.meta.url).href;
  return () => {
    disposed = true;
    bridge.close().catch(() => {});
    iframe.remove();
  };
}
