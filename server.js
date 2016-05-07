var express		= require('express');
var app 		= express();
var bodyParser 	= require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/', function(req, res){
	res.sendFile(__dirname + '/' +'index.html');
})

app.post('/form1', urlencodedParser, function(req, res){
	console.log("%s, %s", req.body.FirstName, req.body.LastName);
	res.sendFile(__dirname + '/' +'index.html');
})


var server 		= app.listen(8000, function(){
	var host 	= "localhost";
	var port 	= server.address().port;
	console.log("http://%s:%s", host, port);
})
