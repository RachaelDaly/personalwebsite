s = require('express'),
	http = require('http'),
	fs = require('fs');

const PORT = process.env.PORT || 8080;

fs.readFile('./src/index.html', function(err, html){
	if(err)console.log(err);
	http.createServer(function(req, res){
		res.writeHeader(200, {"Content-Type": "text/html"});
		res.write(html);
		res.end();
	}).listen(PORT);
});
