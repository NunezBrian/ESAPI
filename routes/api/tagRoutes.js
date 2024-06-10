const express = require('express');
const router = express.Router();
const db = require('../../models');

// Get all tags
router.get('/', async (req, res) => {
  try {
    const tags = await db.Tag.findAll();
    res.json(tags);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get a single tag by id
router.get('/:id', async (req, res) => {
  try {
    const tag = await db.Tag.findByPk(req.params.id);
    if (!tag) {
      return res.status(404).json({ message: 'Tag not found' });
    }
    res.json(tag);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create a new tag
router.post('/', async (req, res) => {
  try {
    const tag = await db.Tag.create(req.body);
    res.status(201).json(tag);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update a tag by id
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await db.Tag.update(req.body, {
      where: { id: req.params.id }
    });
    if (!updated) {
      return res.status(404).json({ message: 'Tag not found' });
    }
    res.json({ message: 'Tag updated' });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete a tag by id
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await db.Tag.destroy({
      where: { id: req.params.id }
    });
    if (!deleted) {
      return res.status(404).json({ message: 'Tag not found' });
    }
    res.json({ message: 'Tag deleted' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
