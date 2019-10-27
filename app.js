const path = require('path');
const rootDir = require('./util/path');
const express = require('express');
const bodyParser = require('body-parser');
const adminRouters = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public'))); // of path.join(rootDir, 'public'))

app.use('/admin', adminRouters);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
})

app.listen(3000);