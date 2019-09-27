/* create a web server and send message to client */

// import 'http' node module 
var http = require('http');
// sets the port of the web server 	
var port = 8080;
// create an instance of web server applicarion and called it 'server' 
var server = http.createServer(function(request, response) {
		var message = "Hello, I'm Ahmed !";
		// set the 'content type' of the response and 'content length' 
		response.writeHead(200, { 'Content-Type' : 'text/plain', 'Content-Length' : message.length } );
		// send message to browser 
		response.end(message);
}); 
// listen at specific port and use 'anonymous callback' function to print a messsge 
server.listen(port, function(){
	console.log('\n Web Sever at: http://localhost:%s',  port)
});
