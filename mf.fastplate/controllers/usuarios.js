
/*
 * GET users listing.
 */

/**
 * Private Attributes
 * */
var sequelize		= require ("../app").get("sequelize");
var usuarios 		= sequelize.import("../models/usuarios");

/** 
 * Private Functions 
 * */
var all 			= function(request, response){
	usuarios.findAll({
		attributes: ['usuario','password']
	}).then(function(users){
		response.jsonp({response : users});
	});
};
var findById 		= function(request, response){
	usuarios.findAll({
		attributes: ['usuario','password'],
		where : {
			userid : request.params.id
		}
	}).then(function(users){
		response.jsonp({response : users});
	});
};
var create 			= function(request, response){
	sequelize.transaction(function(transaction){
		return Promise.all([
		                    usuarios.create({ username : "pepe", password : "12345"}, {transaction : transaction})
		]);
	}).then(function(result){
		response.jsonp({response : result});
	}).catch(function(error){
		response.jsonp({response : error});
	});
};

/**
 * Export functions
 * 
 */

exports.all 		= all;
exports.findById 	= findById;
exports.create 		= create;