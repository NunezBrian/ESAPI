const express = require('express');
const router = express.Router();
const db = require('../../models');

// Get all product-tag associations
router.get('/', async (req, res) => {
  try {
    const productTags = await db.ProductTag.findAll({
      include: [
        { model: db.Product, as: 'product' },
        { model: db.Tag, as: 'tag' }
      ]
    });
    res.json(productTags);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a single product-tag association by id
router.get('/:id', async (req, res) => {
  try {
    const productTag = await db.ProductTag.findByPk(req.params.id, {
      include: [
        { model: db.Product, as: 'product' },
        { model: db.Tag, as: 'tag' }
      ]
    });
    if (!productTag) {
      return res.status(404).json({ message: 'ProductTag not found' });
    }
    res.json(productTag);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create a new product-tag association
router.post('/', async (req, res) => {
  try {
    const { product_id, tag_id } = req.body;
    const productTag = await db.ProductTag.create({ product_id, tag_id });
    res.status(201).json(productTag);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a product-tag association by id
router.put('/:id', async (req, res) => {
  try {
    const { product_id, tag_id } = req.body;
    const [updated] = await db.ProductTag.update({ product_id, tag_id }, {
      where: { id: req.params.id }
    });

    if (updated) {
      const updatedProductTag = await db.ProductTag.findOne({ where: { id: req.params.id } });
      res.json(updatedProductTag);
    } else {
      res.status(404).json({ error: 'ProductTag not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a product-tag association by id
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await db.ProductTag.destroy({
      where: { id: req.params.id }
    });

    if (deleted) {
      res.json({ message: 'ProductTag deleted' });
    } else {
      res.status(404).json({ error: 'ProductTag not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
