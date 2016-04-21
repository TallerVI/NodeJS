/**
 * New node file
 */
var appFastplate = require("../app");
var usuarios = require("../controllers/usuarios");

appFastplate.get('/usuario', usuarios.all);
appFastplate.get('/usuario/:usuarioid', usuarios.findById);
appFastplate.post('/usuario', usuarios.create);