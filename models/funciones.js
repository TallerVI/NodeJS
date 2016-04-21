/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('funciones', {
    funcionid: {
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
    }
  }, {
    tableName: 'funciones',
    freezeTableName: true,
    timestamp : false
  });
};
