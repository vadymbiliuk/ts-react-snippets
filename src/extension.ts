import * as vscode from 'vscode';



export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand('extension.tsrSnippets', () => {

    vscode.window.showInformationMessage('TS React Snippets');
  });

  context.subscriptions.push(disposable);
}

export function deactivate() { }
