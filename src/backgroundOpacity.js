const electron = require('electron');
const settings = require('electron-settings');


$(document).ready(function() {
	var path = require("path")
	var fs = require('fs')
    
    getSettings()
     // $('top').css('background', content.background);
    async function getSettings(){
        //const x = await settings.has('client')
        const background = await settings.get('background')
        console.log(background)
        $('body').css('background', background);
        var top = document.getElementById("top");
        console.log(top)
        var opacity = background.slice(-6,-1)
        var newOpacity = parseFloat(opacity)+0.35;
        console.log(newOpacity)
        top.style.backgroundColor = "rgba(0,0,0,"+newOpacity+")";
    }
	//console.log(filename)
	// var file_content = fs.readFileSync(filename, 'utf8');
	// console.log(file_content)
	//var content = JSON.parse(file_content);
	//console.log(content)
	
});

