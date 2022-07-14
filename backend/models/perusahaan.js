'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class perusahaan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  perusahaan.init({
    kode: DataTypes.STRING,
    nama: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'perusahaan',
  });
  return perusahaan;
};