
const vscode = require('vscode');
const clipboard = vscode.env.clipboard;

const { executeCommand } = vscode.commands


function get_from_start_to_here() {
	// TODO
}

function refocus_to_editor(){
	setTimeout(() => {
		executeCommand('workbench.action.focusActiveEditorGroup');
	  }, 50)
}


function get_lineOrSelection_to_run() {
	const editor = vscode.window.activeTextEditor;
	const selection = editor?.selection;
	if (selection == undefined) {
		return "no_file_err"
	}
	if (selection.isEmpty) {
		const lineNumber = editor.selection.active.line;
		const lineText = editor.document.lineAt(lineNumber).text;
		const filePath = editor.document.fileName;
		if (lineText.trim().startsWith("#")) {
			return `run_line_at("${filePath}",${lineNumber})`
		}
		return lineText
	} else {
		return editor.document.getText(selection)+'\n'
	}
}


/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	const RunInTerminal = vscode.commands.registerCommand(
		'terminal-interaction.RunInTerminal',
		function () {
			let runing_code = get_lineOrSelection_to_run()
			// copy text to clipboard
			clipboard.writeText(runing_code)
			// focus on terminal
			executeCommand('workbench.action.terminal.focus');
			// paste
			executeCommand('workbench.action.terminal.paste');
			setTimeout(() => {
				// move the focus back
				clipboard.writeText('\n')
				executeCommand('workbench.action.terminal.paste');
				refocus_to_editor()
			}, 100)
		});

	const newIntegratedIpython = vscode.commands.registerCommand(
		'terminal-interaction.newIntegratedIpython', 
		() => {
			// new ipython in an integrated terminal
			executeCommand('workbench.action.terminal.new');
			clipboard.writeText('ipython\n')
			executeCommand('workbench.action.terminal.paste');
			refocus_to_editor()
		}
	)
	context.subscriptions.push(RunInTerminal);
	context.subscriptions.push(newIntegratedIpython);
}

function deactivate() { }

module.exports = {
	activate,
	deactivate
}
