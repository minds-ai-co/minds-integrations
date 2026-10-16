import { app } from "../../scripts/app.js";
import { STRINGS } from "./strings.js";

const copy = () => STRINGS[app.ui.settings.getSettingValue("Comfy.Locale")] || STRINGS.en;

function reviewFor(node) {
  const input = node.inputs?.find(input => input.name === "draft");
  const link = app.graph.links[input?.link];
  return app.graph.getNodeById(link?.origin_id)?.mindsReview;
}

function showReview(node, review) {
  const strings = copy();
  const dialog = document.createElement("dialog");
  const heading = document.createElement("h2");
  heading.textContent = strings.reviewTitle;
  const content = document.createElement("pre");
  content.textContent = [
    `${strings.audiences}: ${review.audiences.map(item => item.name).join(", ")}`,
    `${strings.language}: ${review.locale}`,
    `${strings.question}:\n${review.question.text}`,
    `${strings.alternatives}:\n${review.creativeLabels.join("\n")}`,
  ].join("\n\n");
  content.style.cssText = "white-space:pre-wrap;max-height:65vh;overflow:auto;max-width:800px";
  const notice = document.createElement("p");
  notice.textContent = strings.notice;
  const approve = document.createElement("button");
  approve.textContent = strings.approve;
  approve.onclick = () => {
    const widget = node.widgets.find(widget => widget.name === "reviewed_draft");
    widget.value = review.approval;
    node.setDirtyCanvas(true, true);
    dialog.close();
  };
  const cancel = document.createElement("button");
  cancel.textContent = strings.cancel;
  cancel.onclick = () => dialog.close();
  dialog.append(heading, content, notice, approve, cancel);
  dialog.addEventListener("close", () => dialog.remove(), { once: true });
  document.body.append(dialog);
  dialog.showModal();
}

app.registerExtension({
  name: "minds.creative-tests",
  async beforeRegisterNodeDef(nodeType, nodeData) {
    if (nodeData.name === "MindsPrepareCreativeTest") {
      const configured = nodeType.prototype.onConfigure;
      nodeType.prototype.onConfigure = function (...args) {
        const result = configured?.apply(this, args);
        const widget = this.widgets.find(widget => widget.name === "request_id");
        if (widget && !widget.value) widget.value = crypto.randomUUID();
        return result;
      };
      const created = nodeType.prototype.onNodeCreated;
      nodeType.prototype.onNodeCreated = function (...args) {
        const result = created?.apply(this, args);
        const widget = this.widgets.find(widget => widget.name === "request_id");
        if (!widget.value) widget.value = crypto.randomUUID();
        this.addWidget("button", copy().newTest, null, () => {
          widget.value = crypto.randomUUID();
          this.mindsReview = null;
          this.setDirtyCanvas(true, true);
        }, { serialize: false });
        return result;
      };
      const executed = nodeType.prototype.onExecuted;
      nodeType.prototype.onExecuted = function (message) {
        executed?.call(this, message);
        this.mindsReview = message.minds_review?.[0] || null;
      };
    }
    if (nodeData.name === "MindsRunCreativeTest") {
      const created = nodeType.prototype.onNodeCreated;
      nodeType.prototype.onNodeCreated = function (...args) {
        const result = created?.apply(this, args);
        this.addWidget("button", copy().reviewDraft, null, () => {
          const review = reviewFor(this);
          if (!review) {
            app.extensionManager.toast.add({ severity: "info", summary: copy().prepareTitle,
              detail: copy().prepareDetail });
            return;
          }
          showReview(this, review);
        }, { serialize: false });
        return result;
      };
    }
  },
});
