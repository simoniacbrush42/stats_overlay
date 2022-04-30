const remote = require ("electron").remote;
const {ipcRenderer} = require('electron');
let maximized = false;
function closeWindow(){
	ipcRenderer.send("quit")
}

function minimizeWindow(){
	let window = remote.getCurrentWindow()
	window.minimize()
}

function fullscreenWindow(){
	let window = remote.getCurrentWindow()
	if (maximized){
		window.unmaximize()
		maximized = false
	}else{
		window.maximize()
		maximized = true
	}
	
}

