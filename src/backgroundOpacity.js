const electron = require('electron');
$(document).ready(function() {
	var path = require("path")
	var fs = require('fs')
    const userDataPath = (electron.app || electron.remote.app).getPath('userData');
	//const filename = path.resolve(__dirname, "data.json");
    const filename = path.join(userDataPath, "data" + '.json');
	fs.readFile(filename, 'utf8', (error, data) => {
     if(error){
        console.log(error);
        return;
     }
     var content = JSON.parse(data);
     console.log(content.background)
     $('body').css('background', content.background);
     var top = document.getElementById("top");
     console.log(top)
     var opacity = content.background.slice(-6,-1)
     var newOpacity = parseFloat(opacity)-0.3;
     console.log(newOpacity)
     top.style.backgroundColor = "rgba(0,0,0,"+newOpacity+")";
     // $('top').css('background', content.background);
	})
	//console.log(filename)
	// var file_content = fs.readFileSync(filename, 'utf8');
	// console.log(file_content)
	//var content = JSON.parse(file_content);
	//console.log(content)
	
});