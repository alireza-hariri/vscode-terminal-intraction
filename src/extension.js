
const vscode = require('vscode');
const clipboard = vscode.env.clipboard;


function select_code_to_run(){
	const editor = vscode.window.activeTextEditor;
	const selection = editor?.selection;
	if (selection == undefined){
		return "no_file_err"
	}
	if (selection.isEmpty) {
		const lineNumber = editor.selection.active.line;
		const lineText = editor.document.lineAt(lineNumber).text;
		const filePath = editor.document.fileName;
		if (lineText.trim().startsWith("#")){
			return `run_section_at("${filePath}",${lineNumber})`
		}
		return lineText
	} else {
		return editor.document.getText(selection)
	}
}


/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	const disposable = vscode.commands.registerCommand(
		'terminal-interaction.RunInTerminal',
		function () {
			let runing_code = select_code_to_run()
			// copy text to clipboard
			clipboard.writeText(runing_code+'\n')
			// focus on terminal
			vscode.commands.executeCommand('workbench.action.terminal.focus');
			// paste
			vscode.commands.executeCommand('workbench.action.terminal.paste');
			setTimeout(() => {
				// move the focus back
				vscode.commands.executeCommand(
					'workbench.action.focusActiveEditorGroup'
				);
			},150)
		});

	context.subscriptions.push(disposable);
}

function deactivate() { }

module.exports = {
	activate,
	deactivate
}
