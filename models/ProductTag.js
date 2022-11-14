const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
      // defines all columns for product tag table
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // // Is referencing the product_id in the products model
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'product',
        key: 'id'
      }
    },
    // Is referencing the tag_id in the tag model
    tag_id: {
      type: DataTypes.INTEGER,
      model: 'tag',
      key: 'id'
    }
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
