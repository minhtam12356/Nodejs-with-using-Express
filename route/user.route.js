var express = require('express');
var controller = require('../controller/user.controller');
var route = express.Router();

  //user
route.get('/',controller.user)

  //search
route.get('/search', controller.search)

  //view user
route.get('/:id', controller.view)

module.exports = route;