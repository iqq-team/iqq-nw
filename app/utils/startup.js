// Load native UI library
var gui = require('nw.gui');
var win = gui.Window.get();
$(document).ready(function() {

	initWin();
	initTray();

});

function initWin() {
	$("#title-bar a[command=window-close]").click(function(){
		gui.App.quit();
	});

	$("#title-bar a[command=window-min]").click(function(){
		win.hide();
	});

	$("#title-bar a[command=window-cfg]").click(function(){
		win.showDevTools();
	});
}

var tray;
function initTray() {
	
	// Create a tray icon
	tray = new gui.Tray({
		title : 'IQQ',
		tooltip : 'IQQ V3',
		icon : 'resources/icon.png'
	});
	// Give it a menu
	var menu = new gui.Menu();
	menu.append(new gui.MenuItem({
		label : '打开主面板',
		click : function() {
			win.restore();
			console.log("win show...");
		}
	}));
	menu.append(new gui.MenuItem({
		label : '设置',
		click : function() {
			alert("no implements!");
			tray.icon = "default-avatar.jpg";
		}
	}));
	menu.append(new gui.MenuItem({
		type : 'separator'
	}));
	menu.append(new gui.MenuItem({
		label : '退出',
		click : function() {
			gui.App.quit();
		}
	}));
	tray.menu = menu;
	
	tray.on('click', function() {
		win.restore();
		win.show();
		console.log("win show...");
	});

}