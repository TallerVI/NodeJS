/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mesas', {
    mesaid: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: '',
        key: ''
      }
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: true
    },
    maquinaestado: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'maquinaestados',
        key: 'maquinaestadoid'
      }
    }
  }, {
    tableName: 'mesas',
    freezeTableName: true,
    timestamp : false
  });
};
