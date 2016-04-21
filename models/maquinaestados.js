/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('maquinaestados', {
    maquinaestadoid: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: '',
        key: ''
      }
    },
    funcionid: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'funciones',
        key: 'funcionid'
      }
    },
    estadoid: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'estados',
        key: 'estadoid'
      }
    },
    fechacreacion: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: 'CURRENT_TIMESTAMP'
    }
  }, {
    tableName: 'maquinaestados',
    freezeTableName: true,
    timestamp : false
  });
};
