$(document).ready(function() {

	$("#title-bar a[command=window-close]").click(function(){
		var win = gui.Window.get();
		gui.App.quit();
	});

	$("#title-bar a[command=window-min]").click(function(){
		var win = gui.Window.get();
		win.minimize();
	});

	$("#title-bar a[command=window-cfg]").click(function(){
		gui.Window.get().showDevTools();
	});

	// 加载本地UI库
	// Load native UI library
	var gui = require('nw.gui');

	// 系统托盘实现
	// Create a tray icon
	var tray = new gui.Tray({
		title : 'IQQ',
		tooltip : 'IQQ V3',
		icon : 'resources/icon.png'
	});

	// Get the current window
	var win = gui.Window.get();

	// Listen to the minimize event
	win.on('minimize', function() {
		// Minimize the window
		this.hide();
		// Show window and remove tray when clicked
		tray.on('click', function() {
			win.restore();
			win.show();
		});
	});

	// Give it a menu
	var menu = new gui.Menu();
	menu.append(new gui.MenuItem({
		label : '打开主面板',
		click : function() {
			win.show();
		}
	}));
	menu.append(new gui.MenuItem({
		label : '设置',
		click : function() {
			alert("no implements!");
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
}
);