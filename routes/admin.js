const path = require('path');
const rootDir = require('../util/path');
const express = require('express');

const router = express.Router();

const products = [];

// => GET
router.get('/add-product', (req, res, next) => {
  res.render('add-product', { 
    pageTitle: 'Add Product Page',
    path: '/admin/add-product'
  })
});

// => POST
router.post('/add-product', (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect('/');
})

// module.exports = router;
module.exports.routes = router;
module.exports.products = products;