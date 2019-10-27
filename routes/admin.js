const path = require('path');
const rootDir = require('../util/path');
const express = require('express');

const router = express.Router();

// => GET
router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
});

// => POST
router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
})

module.exports = router;