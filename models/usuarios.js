/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usuarios', {
    usuarioid: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    usuario: {
      type: DataTypes.STRING,
      allowNull: true
    },
    password: {
      type: 'CHAR(32)',
      allowNull: true
    },
    tipousuarioid: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'usuariostipos',
        key: 'usuariotipoid'
      }
    }
  }, {
    tableName: 'usuarios',
    freezeTableName: true,
    timestamp : false
  });
};
