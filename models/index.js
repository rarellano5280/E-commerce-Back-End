// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
// Defines the association between category and product
Product.belongsTo(Category, {
  foreignKey: 'category_id'
});

// Categories have many Products
// Defines the relationship between categories and products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: "CASCADE",
});

// Products belongToMany Tags (through ProductTag)
// Defines the association between product and tags as product_tag
Product.belongsToMany(Tag, {
  through: 'product_tag',
  foreignKey: 'product_id',
});

// Tags belongToMany Products (through ProductTag)
// Defines the association between tags and products as product_tag
Tag.belongsToMany(Product, {
  through: 'product_tag',
  foreignKey: 'tag_id',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
