import * as vscode from "vscode";
import { MindsMcpClient, extractText, type McpToolResult } from "@minds/mcp-client";

const secretKey = "minds.apiKey";

async function client(context: vscode.ExtensionContext): Promise<MindsMcpClient> {
  let apiKey = await context.secrets.get(secretKey);
  if (!apiKey) {
    apiKey = await vscode.window.showInputBox({
      title: "Minds API key",
      prompt: "Create a key at getminds.ai/settings/api-keys",
      password: true,
      ignoreFocusOut: true,
    });
    if (!apiKey) throw new Error("A Minds API key is required");
    await context.secrets.store(secretKey, apiKey.trim());
  }
  return new MindsMcpClient({
    apiKey,
    clientName: "minds-vscode",
    clientVersion: "0.1.0",
  });
}

function printable(result: McpToolResult): string {
  const text = extractText(result);
  return text || JSON.stringify(result.structuredContent ?? result, null, 2);
}

async function showResult(title: string, result: McpToolResult): Promise<void> {
  const document = await vscode.workspace.openTextDocument({
    language: "markdown",
    content: `# ${title}\n\n${printable(result)}\n`,
  });
  await vscode.window.showTextDocument(document, { preview: false });
}

export function activate(context: vscode.ExtensionContext): void {
  context.subscriptions.push(
    vscode.commands.registerCommand("minds.setApiKey", async () => {
      const value = await vscode.window.showInputBox({
        title: "Set Minds API key",
        password: true,
        ignoreFocusOut: true,
      });
      if (value?.trim()) {
        await context.secrets.store(secretKey, value.trim());
        void vscode.window.showInformationMessage("Minds API key saved securely.");
      }
    }),
    vscode.commands.registerCommand("minds.listGroups", async () => {
      await vscode.window.withProgress(
        { location: vscode.ProgressLocation.Notification, title: "Loading Minds Groups" },
        async () => {
          const result = await (await client(context)).callTool("list_groups", {});
          await showResult("Minds Groups", result);
        },
      );
    }),
    vscode.commands.registerCommand("minds.planSelectedText", async () => {
      const editor = vscode.window.activeTextEditor;
      const selected = editor?.document.getText(editor.selection).trim();
      if (!selected) throw new Error("Select product copy, a requirement, or a concept brief first");
      if (selected.length > 20_000) throw new Error("Selection exceeds the 20,000 character limit");

      const panelName = await vscode.window.showInputBox({
        title: "Panel name",
        prompt: "Use an existing Minds Panel",
        ignoreFocusOut: true,
      });
      if (!panelName?.trim()) return;
      const request = await vscode.window.showInputBox({
        title: "Research goal",
        prompt: "What should the study learn from this material?",
        ignoreFocusOut: true,
      });
      if (!request?.trim()) return;

      await vscode.window.withProgress(
        { location: vscode.ProgressLocation.Notification, title: "Planning Minds study" },
        async () => {
          const result = await (await client(context)).callTool("plan_panel_study", {
            panelName: panelName.trim(),
            request: request.trim(),
            source: {
              kind: "prompt",
              label: editor?.document.fileName.split(/[\\/]/).at(-1) || "VS Code selection",
              content: selected,
            },
          });
          await showResult("Minds research plan", result);
        },
      );
    }),
  );
}

export function deactivate(): void {}
