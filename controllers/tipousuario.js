
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
	serverrequest.load("", "/tipousuario", "", "5000", "GET", request, response);
};
var findById 		= function(request, response){
	serverrequest.load("", "/tipousuario", request.params.tipousuarioid, "5000", "GET", request, response);
};
var create 			= function(request, response){
	serverrequest.load("", "/tipousuario", request.body, "5000", "POST", request, response);
};
var updateAll 		= function(request, response){
	serverrequest.load("","/tipousuario", request.body, "5000", "PUT", request,response);
};
var updatePart 		= function(request, response){
	serverrequest.load("","/tipousuario", "", "5000", "PATCH", request,response);
};
var deleteById 		= function(request, response){
	serverrequest.load("","/tipousuario", request.params.tipousuarioid, "5000", "DELETE", request,response);
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