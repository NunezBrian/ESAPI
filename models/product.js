module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isNumeric: true
      }
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Categories', // Ensure this matches the table name
        key: 'id'
      }
    }
  });

  Product.associate = function(models) {
    Product.belongsTo(models.Category, {
      as: 'category',
      foreignKey: 'category_id',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });

    Product.belongsToMany(models.Tag, {
      through: models.ProductTag,
      as: 'tags',
      foreignKey: 'product_id'
    });
  };

  return Product;
};
