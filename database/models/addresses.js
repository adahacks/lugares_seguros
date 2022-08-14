'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class addresses extends Model {
    static associate(models) {
      addresses.hasOne(models.places);
      
    }
  }
  addresses.init({
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    street: DataTypes.STRING,
    suburb: DataTypes.STRING,
    postalCode: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'addresses',
  });
  return addresses;
};