$(document).ready(function() {
	var path = require("path")
	var fs = require('fs')
	const filename = path.resolve(__dirname, "data.json");
	fs.readFile(filename, 'utf8', (error, data) => {
     if(error){
        console.log(error);
        return;
     }
     var content = JSON.parse(data);
     console.log(content.background)
     $('body').css('background', content.background);
	})
	//console.log(filename)
	// var file_content = fs.readFileSync(filename, 'utf8');
	// console.log(file_content)
	//var content = JSON.parse(file_content);
	//console.log(content)
	
});