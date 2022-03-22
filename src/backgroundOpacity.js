
$(document).ready(function() {
	var path = require("path")
	var fs = require('fs')
	const filename = path.resolve(__dirname, "data.json");
	var file_content = fs.readFileSync(filename);
	var content = JSON.parse(file_content);
	$('body').css('background', content.background);
});