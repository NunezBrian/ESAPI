const express = require('express');
const router = express.Router();

router.use('/categories', require('./api/categoryRoutes'));
router.use('/products', require('./api/productRoutes'));
router.use('/tags', require('./api/tagRoutes'));
router.use('/productTags', require('./api/productTagRoutes'));

module.exports = router;
