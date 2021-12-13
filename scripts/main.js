const ui = require("ui-lib/library");
const schemC = "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";

var dialog = null, button = null;
var text = "Example Text";
var log = "";

// Resize UI function
function resize(UiObj,sx,sy){
	UiObj.width(sx);
	UiObj.height(sy);
}

const compTemplate = [
	" ",
	
	"A", "B", "C",
	"D", "E", "F",
	"G", "H", "I",
	"J", "K", "L",
	"M", "N", "O",
	"P", "Q", "R",
	"S", "T", "U",
	"V", "W", "X",
	"Y", "Z",
	
	"a", "b", "c",
	"d", "e", "f",
	"g", "h", "i",
	"j", "k", "l",
	"m", "n", "o",
	"p", "q", "r",
	"s", "t", "u",
	"v", "w", "x",
	"y", "z",
	
	
	".",
	",",
	"'",
	"!",
	"?",
	"#",
	"-",
	"(",
	")",
	"[",
	"]",
	
	"1", "2", "3",
	"4", "5", "6",
	"7", "8", "9",
	"0"
];

const compileChip = function(msg,ret){
	if(ret==null) ret = false;
	log = "";
	var enlog = "";
	var totalids = 0;
	for(let ci = 0; ci<msg.length; ci++){
		if(totalids>511) return;
		var isFound = false;
		compTemplate.forEach((v,i) => {
			if(isFound) return;
			if(msg[ci]==v){
				enlog += "write "+i+" bank1 "+totalids+"\n";
				totalids++;
				isFound = true;
			}
			if(i==compTemplate.length-1){
				Log.warn("Couldn't find eligible ID for character: "+msg[ci]+" : ["+ci+"]");
				log += "[yellow]Found invalid character: "+msg[ci]+" : "+ci+"[]\n";
			}
		})
	}
	
	if(msg.length>512){
		Log.warn("String length was cropped due to data limitations.");
		log += "[yellow]Text has been snipped at the end to cope with data limits. (Chars: "+msg.length+")[]\n";
	}
	Core.app.clipboardText = enlog;
	Vars.ui.showInfo("Copied compiled MLOG.");
	if(ret) return enlog;
}

ui.onLoad(() => {
	dialog = new BaseDialog("Chip Compiler");
	var table = dialog.cont;
	
	table.pane(list => {
		list.label(() => "[stat]Text -> MLOG");
		list.row();
		var txtf;
		if(!Vars.mobile){
			txtf = list.field(text, input => {
				text = input;
			}).width(450).get();
		} else {
			txtf = list.button("Input Text Here", () => {
				Vars.ui.showTextInput("Input text here","",512,text, input => {
					text = input;
					txtf.getLabel().text = '[lightgrey]Text:\n[]"'+text+'"';
				});
			}).width(450).get();
		}
		list.row();
		var cb = list.button("Compile Text", () => {
			compileChip(text);
		}); cb.width(300);
		list.row();
		var scl = list.button("Compilation Errors", () => {
			Vars.ui.showInfo(log);
		}); scl.width(300);
		list.row();
		list.label(() => "\n[stat]Don't have a Chip Reader schematic?");
		list.row();
		var csb = list.button("Copy Schematic to Clipboard", () => {
			Core.app.clipboardText = schemC;
			Vars.ui.showInfo("Copied schematic to clipboard.");
		}); csb.width(350);
	});
	
	dialog.addCloseButton();
});

ui.addButton("crc", Blocks.memoryBank, () => {
	dialog.show();
}, b => {button = b.get()});