/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usuarios', {
    usuario: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: '',
        key: ''
      }
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tipousuario: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'tiposusuario',
        key: 'tipousuarioid'
      }
    },
    maquinaestado: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    fechacreacion: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: 'CURRENT_TIMESTAMP'
    }
  }, {
    tableName: 'usuarios',
    freezeTableName: true,
    timestamp : false
  });
};
