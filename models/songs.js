'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Songs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Artists, {
        through: "songsartists",
        as: "artists",
        foreignKey: "songId",
        onDelete: "CASCADE"
      })
    }
  };
  Songs.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Songs',
  });
  return Songs;
};