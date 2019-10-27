const express = require('express');
const bodyParser = require('body-parser');
const adminRouters = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRouters);
app.use(shopRoutes);

app.listen(3000);