/**
 * New node file
 */
var appFastplate = require("../app");
var usuarios = require("../controllers/usuarios");

appFastplate.get('/usuarios', usuarios.all);
appFastplate.get('/usuarios/:usuarioid', usuarios.findById);
appFastplate.post('/usuarios/crear', usuarios.create);