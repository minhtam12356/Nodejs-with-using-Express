var express = require('express');
var controller = require('../controller/create.controller');
var route = express.Router();
var validate = require('../validate/create.validate');

    //create
route.get('/',controller.create)

    //post
route.post('/', validate.postCreate, controller.postCreate)

module.exports = route;