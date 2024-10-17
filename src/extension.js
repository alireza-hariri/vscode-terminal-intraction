
const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	console.log('some text!');

	const disposable = vscode.commands.registerCommand(
		'terminal-interaction.helloWorld',
		function () {
			vscode.window.showInformationMessage('Hello VScode');
		});

	context.subscriptions.push(disposable);
}

function deactivate() { }

module.exports = {
	activate,
	deactivate
}
