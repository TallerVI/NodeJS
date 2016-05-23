/**
 * New node file
 */
var app				= require ("../app");
var http			= app.get("http");

var load = function(hostname, port, method, request, response, callback){
	var options;
	if(method == 'POST' || method == 'PUT' || method == 'PATCH'){
		var querystring = require('querystring');
		var post_data = querystring.stringify(request.body);
		options = {
				hostname : hostname,
				headers : {
					'Content-Type': "application/x-www-form-urlencoded",
					'Content-Length': post_data.length
				},
				path : request.originalUrl,
				port : port,
				method : method
		};
	} else {
		options = {
				hostname : hostname,
				path : request.originalUrl,
				port : port,
				method : method
		};
	}
	
	
	
	var req;
	if(callback instanceof Function){
		req = http.request(options, callback);
	} else {
		req = http.request(options, ( res ) => {
			res.on('data', (resource) => {
				response.status(res.statusCode).send(resource.toString());
			});
		});
	}

	req.on('error',( error ) => {
		response.status(400).send(error);
	});
	
	if(method == 'POST' || method == 'PUT' || method == 'PATCH'){
		req.write(post_data);
	}
	req.end();
};

exports.load 		= load;