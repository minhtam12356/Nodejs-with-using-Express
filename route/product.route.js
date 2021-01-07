var express = require('express');
var controller = require('../controller/product.controller');
var route = express.Router();

route.get('/', controller.product)

route.get('/product/search', controller.search)

route.get('/product', controller.product)
module.exports = route;