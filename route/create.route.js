var multer  = require('multer')
var express = require('express');
var controller = require('../controller/create.controller');
var route = express.Router();
var validate = require('../validate/create.validate');

var upload = multer({ dest: './public/uploads/' })

    //create
route.get('/',controller.create)

    //post
route.post('/', upload.single('avatar'), validate.postCreate, controller.postCreate)

module.exports = route;