import vscode from 'vscode';
import snippets from '../snippets/snippets.json';

const snippetArray = Object.entries(snippets);

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand('extension.tsrSnippets', async () => {
    const items = snippetArray.map(([shortDescription, { prefix, body, description }], index) => {
      const value = typeof prefix === 'string' ? prefix : prefix[0];

      return {
        id: index,
        label: value,
        description: description || shortDescription,
        value,
        body
      };
    });

    const options = {
      matchOnDescription: true,
      matchOnDetail: true,
      placeHolder: 'Search for snippet',
    };

    const snippet = (await vscode.window.showQuickPick(items, options)) || { body: '' };
    const activeTextEditor = vscode.window.activeTextEditor;
    const body = typeof snippet.body === 'string'
      ? snippet.body
      : (snippet.body as string[]).join('\n');

    activeTextEditor && activeTextEditor.insertSnippet(new vscode.SnippetString(body));
  });

  context.subscriptions.push(disposable);
}

export function deactivate() { }
