const db = require('../models');

const seed = async () => {
  try {
    // Recreate the tables
    await db.sequelize.sync({ force: true });

    // Insert categories and wait for them to complete
    const categories = await db.Category.bulkCreate([
      { category_name: 'Electronics' },
      { category_name: 'Clothing' }
    ], { returning: true });

    console.log('Categories seeded:', categories.map(cat => cat.toJSON()));

    // Insert products using the category IDs from the inserted categories
    const products = await db.Product.bulkCreate([
      { product_name: 'Laptop', price: 999.99, stock: 20, category_id: categories[0].id },
      { product_name: 'T-Shirt', price: 19.99, stock: 50, category_id: categories[1].id }
    ], { returning: true });

    console.log('Products seeded:', products.map(prod => prod.toJSON()));

    // Insert tags
    const tags = await db.Tag.bulkCreate([
      { tag_name: 'New' },
      { tag_name: 'Sale' }
    ], { returning: true });

    console.log('Tags seeded:', tags.map(tag => tag.toJSON()));

    // Insert product tags
    await db.ProductTag.bulkCreate([
      { product_id: products[0].id, tag_id: tags[0].id },
      { product_id: products[1].id, tag_id: tags[1].id }
    ]);

    console.log('ProductTags seeded!');

    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    process.exit(0);
  }
};

seed();
