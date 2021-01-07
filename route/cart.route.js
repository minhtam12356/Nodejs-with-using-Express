var express = require('express');
var controller = require('../controller/cart.controller');
var route = express.Router();

route.get('/add/:productid', controller.cart)

module.exports = route;
