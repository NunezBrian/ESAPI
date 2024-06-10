const express = require('express');
const router = express.Router();
const db = require('../../models');

// Get all categories
router.get('/', async (req, res) => {
  try {
    const categories = await db.Category.findAll();
    res.json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get a single category by id
router.get('/:id', async (req, res) => {
  try {
    const category = await db.Category.findByPk(req.params.id);
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.json(category);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create a new category
router.post('/', async (req, res) => {
  try {
    const category = await db.Category.create(req.body);
    res.status(201).json(category);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update a category by id
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await db.Category.update(req.body, {
      where: { id: req.params.id }
    });
    if (!updated) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.json({ message: 'Category updated' });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete a category by id
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await db.Category.destroy({
      where: { id: req.params.id }
    });
    if (!deleted) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.json({ message: 'Category deleted' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
