const express = require('express');
const router = express.Router();
const db = require('../../models');

// Get all products
router.get('/', async (req, res) => {
  try {
    const products = await db.Product.findAll({ include: ['category', 'tags'] });
    res.json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get a single product by id
router.get('/:id', async (req, res) => {
  try {
    const product = await db.Product.findByPk(req.params.id, { include: ['category', 'tags'] });
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create a new product
router.post('/', async (req, res) => {
  try {
    const product = await db.Product.create(req.body);
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update a product by id
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await db.Product.update(req.body, {
      where: { id: req.params.id }
    });
    if (!updated) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json({ message: 'Product updated' });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete a product by id
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await db.Product.destroy({
      where: { id: req.params.id }
    });
    if (!deleted) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json({ message: 'Product deleted' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
