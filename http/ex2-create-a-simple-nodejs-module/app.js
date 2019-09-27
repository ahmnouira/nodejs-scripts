/* create a web server and send the day of week to the client */

// import 'http' node module 
var http = require('http');
// import custom module 
var myModule = require('./myModule')

console.log("\n", myModule)

// sets the port of the web server 	
var port = 8080;
// create an instance of web server applicarion and called it 'server' 
var server = http.createServer(function(request, response) {
		
		// set the 'content type' of the response and 'content length' 
		response.writeHead(200, { 'Content-Type' : 'text/html'});
		// send message to browser 
		response.end("<h2> Today is: <span style='color:red;'>" +  myModule.dayOfTheWeek() + "</span></h2>");

}); 
// listen at specific port and use 'anonymous callback' function to print a messsge 
server.listen(port, function(){
    console.log('\n Web Sever at: http://localhost:%s',  port)
});
