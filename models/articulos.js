/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('articulos', {
    articuloid: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fechacreacion: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: 'CURRENT_TIMESTAMP'
    },
    maquinaestadoid: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'maquinaestados',
        key: 'maquinaestadoid'
      }
    },
    tipoarticulo: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'tiposarticulo',
        key: 'tipoarticuloid'
      }
    }
  }, {
    tableName: 'articulos',
    freezeTableName: true
  });
};
