var express = require('express'),
	http = require('http'),
	fs = require('fs'),
	path = require('path');

var app = express();

var publicDir = path.join(__dirname, '/public');
app.use(express.static(publicDir));

const PORT = process.env.PORT || 8080;

app.get('/', function(request, response){
	fs.readFile('./public/html/index.html', function(err, html){
		if(err)console.log(err);
		response.writeHeader(200, {"Content-Type": "text/html"});
		response.write(html);
		response.end();
	});
});


app.listen(PORT, function(){
	console.log("Server is running on port 8080");
});