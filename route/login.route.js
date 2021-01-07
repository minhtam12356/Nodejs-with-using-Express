var express = require('express');
var controller = require('../controller/login.controller');
var route = express.Router();
var validate = require('../validate/login.validate');

route.get('/', controller.login)

route.post('/', validate.postLogin, controller.postLogin)

route.get('/signout', controller.signOut)

module.exports = route;
