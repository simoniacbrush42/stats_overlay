function bedwarsLink(e){
	e.preventDefault()
	ipcRenderer.send("bedwars-link");
}

function bridgeLink(e){
	e.preventDefault()
	ipcRenderer.send("bridge-link");
}

function skywarsLink(e){
	e.preventDefault()
	ipcRenderer.send("skywars-link");
}

function searchLink(e){
	e.preventDefault()
	ipcRenderer.send("search-link");
}

function settingsLink(e){
	e.preventDefault()
	ipcRenderer.send("settings-link");
}

function selectLink(e="hi"){
	if(e != "hi"){
		e.preventDefault()
	}
	ipcRenderer.send("select-link");
}

function aboutLink(e){
	e.preventDefault();
	ipcRenderer.send("about-link");
}

function searchedLink(){
	ipcRenderer.send("searched-link");
}


