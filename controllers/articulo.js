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
	serverrequest.load("","4000", "GET", request, response);
};
var findById 		= function(request, response){
	serverrequest.load("","4000", "GET", request, response);
};
var create 			= function(request, response){
	serverrequest.load("", "4000", "POST", request, response);
};
var updateAll 		= function(request, response){
	serverrequest.load("","4000", "PUT", request,response);
};
var updatePart 		= function(request, response){
	serverrequest.load("","4000", "PATCH", request,response);
};
var deleteById 		= function(request, response){
	serverrequest.load("","4000", "DELETE", request,response);
};
var findByTipoArticulo = function(request, response){
	serverrequest.load("","4000", "GET", request,response);
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
exports.findByTipoArticulo = findByTipoArticulo;