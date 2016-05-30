
/*
 * GET users listing.
 */

/**
 * Private Attributes
 * */
var serverrequest	= require ("./serverrequest");

/** 
 * Private Functions 
 * */
var all 			= function(request, response){
	serverrequest.load("","2000", "GET", request, response);
};
var findById 		= function(request, response){
	serverrequest.load("","2000", "GET", request, response);
};
var create 			= function(request, response){
	serverrequest.load("","2000", "POST", request, response);
};
var updateAll 		= function(request, response){
	serverrequest.load("","2000", "PUT", request,response);
};
var updatePart 		= function(request, response){
	serverrequest.load("","2000", "PATCH", request,response);
};
var deleteById 		= function(request, response){
	serverrequest.load("","2000", "DELETE", request,response);
};

/**
 * Export functions
 * 
 */
exports.all 		= all;
exports.findById 	= findById;
exports.create 		= create;
exports.updateAll 	= updateAll;
exports.updatePart 	= updatePart;
exports.deleteById 	= deleteById;