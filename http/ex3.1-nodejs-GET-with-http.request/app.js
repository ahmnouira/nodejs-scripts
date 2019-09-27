/* sending http request GET and handling the http response */
/* https://github.com/ahmnouira/ex-api-seller-buyer */

var http = require('http')

var options = {
	host: '192.168.1.3',		// host server's name (ifconfig)
	port: '4000',		// port the server
	path: '/api/produit',		// route
	method : 'GET',		// method 
};

var req = http.request(options, function(response) {	
	var buffer = ' ';
	response.on('data', function(chunk) {
	buffer +=chunk;	
	}); 
	response.on('end', function(result) {
	console.log(buffer); 		      // prints the raw data  
	console.log(JSON.parse(buffer));      // convert the raw data to JSON representation 
	}); 
});

req.on('error',function(e){
	console.log(e.message)
});

req.end()
