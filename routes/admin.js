const path = require('path');
const rootDir = require('../util/path');
const express = require('express');

const productController = require('../controllers/products');

const router = express.Router();

const products = [];

// => GET
router.get('/add-product', productController.getAddProduct);

// => POST
router.post('/add-product', productController.postAddProduct);

module.exports = router;