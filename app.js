/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http')
  , path = require('path')
  , fs = require("fs")
  , Sequelize = require('sequelize');

//var sequelize = new Sequelize('fastplate', 'root', '1234', { host: 'localhost', dialect: 'mysql', pool: { max: 5, min: 0, idle: 10000}});

var appFastplate = module.exports = express();

// all environments
//appFastplate.set('sequelize',sequelize);
appFastplate.set('http', http);
appFastplate.set('port', process.env.PORT || 3000);
appFastplate.use(express.favicon());
appFastplate.use(express.logger('dev'));
appFastplate.use(express.bodyParser());
appFastplate.use(express.methodOverride());
appFastplate.use(appFastplate.router);
appFastplate.use((error,request,response,next) => {
  if(error){
    response.jsonp(error);
  }
  response.header('Access-Control-Allow-Origin', '*');
  response.header('Access-Control-Allow-Credentials', true);
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATH');
  next();
});
appFastplate.use(require('./routes/articulo'));
appFastplate.use(require('./routes/estado'));
appFastplate.use(require('./routes/funcion'));
appFastplate.use(require('./routes/historialprecio'));
appFastplate.use(require('./routes/maquinaestado'));
appFastplate.use(require('./routes/mesa'));
appFastplate.use(require('./routes/pedido'));
appFastplate.use(require('./routes/pedidodetalle'));
appFastplate.use(require('./routes/tipoarticulo'));
appFastplate.use(require('./routes/tipousuario'));
appFastplate.use(require('./routes/usuario'));


// development only
if ('development' == appFastplate.get('env')) {
	appFastplate.use(express.errorHandler());
}

http.createServer(appFastplate).listen(appFastplate.get('port'), () => {
  console.log('Express server listening on port ' + appFastplate.get('port'));
});