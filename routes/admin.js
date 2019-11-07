const path = require('path');
const rootDir = require('../util/path');
const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);

// /admin/add-product => GET
router.get('/products', adminController.getProducts);

// => POST
router.post('/add-product', adminController.postAddProduct);

module.exports = router;