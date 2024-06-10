module.exports = (sequelize, DataTypes) => {
  const ProductTag = sequelize.define('ProductTag', {
    product_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'Products',
        key: 'id'
      }
    },
    tag_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'Tags',
        key: 'id'
      }
    }
  });

  return ProductTag;
};
