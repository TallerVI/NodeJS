/**
 * New node file
 */
var appFastplate = require("../app");
var usuario = require("../controllers/usuario");

appFastplate.get('/usuario', usuario.all);
appFastplate.get('/usuario/:usuarioid', usuario.findById);
appFastplate.patch('/updateusuariopassword', usuario.updatePassword);
appFastplate.post('/usuario', usuario.create);
appFastplate.put('/usuario', usuario.updateAll);
appFastplate.patch('/usuario', usuario.updatePart);
appFastplate.delete('/usuario/:usuarioid', usuario.deleteById);