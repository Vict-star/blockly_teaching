var CodeMirrorTextArea = document.getElementById("python-code");
var CodeMirrorEditor = CodeMirror.fromTextArea(CodeMirrorTextArea, {
	mode: {name: "python",
		   version: 3,
		   singleLineStringErrors: false},
	lineNumbers: true,
	indentUnit: 4,
	matchBrackets: true
});
CodeMirrorEditor.setSize("100%", "400px")
//console.log("CodeMirrorEditor gen");

/* TODO: Change toolbox XML ID if necessary. Can export toolbox XML from Workspace Factory. */
var toolbox = document.getElementById("toolbox");

var options = { 
	toolbox : toolbox, 
	collapse : true, 
	comments : true, 
	disable : true, 
	maxBlocks : Infinity, 
	trashcan : true, 
	horizontalLayout : false, 
	toolboxPosition : 'start', 
	css : true, 
	rtl : false, 
	scrollbars : true, 
	sounds : true, 
	oneBasedIndex : true, 
	grid : {
		spacing : 20, 
		length : 1, 
		colour : '#888', 
		snap : false
	},
	zoom : {
		controls : true, 
		wheel : true, 
		startScale : 1, 
		maxScale : 3, 
		minScale : 0.3, 
		scaleSpeed : 1.2
	}
};

/* Inject your workspace */ 
var workspace = Blockly.inject("blockly-div", options);

/* Load Workspace Blocks from XML to workspace. Remove all code below if no blocks to load */

/* TODO: Change workspace blocks XML ID if necessary. Can export workspace blocks XML from Workspace Factory. */
var workspaceBlocks = document.getElementById("workspaceBlocks"); 

function myUpdateFunction(event) {
	var code = Blockly.Python.workspaceToCode(workspace);
	//document.getElementById('python-code').value = code;
	//console.log("myUpdate run");
	CodeMirrorEditor.setValue(code);
}
workspace.addChangeListener(myUpdateFunction);

/* Load blocks to workspace. */
Blockly.Xml.domToWorkspace(workspaceBlocks, workspace);
