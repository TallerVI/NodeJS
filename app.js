
/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http')
  , path = require('path')
  , fs = require("fs")
  , Sequelize = require('sequelize');

var sequelize = new Sequelize('tallervi', 'root', '1234', { host: 'localhost', dialect: 'mysql', pool: { max: 5, min: 0, idle: 10000}});

var appFasplate = module.exports = express();

// all environments
appFasplate.set('sequelize',sequelize);
appFasplate.set('port', process.env.PORT || 3000);
appFasplate.use(express.favicon());
appFasplate.use(express.logger('dev'));
appFasplate.use(express.bodyParser());
appFasplate.use(express.methodOverride());
appFasplate.use(appFasplate.router);
appFasplate.use(require('./routes/usuario'));

/*
for (var i = 0; i < 100; i++) {
	console.log(
			"$F{cliente_domicilio_localidad} != null ? \n"
			+ "	$F{cliente_domicilio_localidad}.length() > " + i + " ? \n"
			+ "        $F{cliente_domicilio_localidad}.substring(" + i + "," + (i + 1) + ") \n"
			+ "    : \n"
			+ "    	\"\" \n"
			+ ": \n"
			+ "	\"\" \n"
	);
}*/

// development only
if ('development' == appFasplate.get('env')) {
	appFasplate.use(express.errorHandler());
}


http.createServer(appFasplate).listen(appFasplate.get('port'), function(){
  console.log('Express server listening on port ' + appFasplate.get('port'));
});
