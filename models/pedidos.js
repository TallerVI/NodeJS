/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pedidos', {
    pedidosid: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: '',
        key: ''
      }
    },
    maquinaestadoid: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'maquinaestados',
        key: 'maquinaestadoid'
      }
    },
    fechacreacion: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: 'CURRENT_TIMESTAMP'
    },
    usuarioid: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'usuarios',
        key: 'usuario'
      }
    },
    mesaid: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'mesas',
        key: 'mesaid'
      }
    }
  }, {
    tableName: 'pedidos',
    freezeTableName: true,
    timestamp : false
  });
};
