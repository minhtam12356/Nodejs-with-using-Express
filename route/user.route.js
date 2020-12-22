var express = require('express');
var low = require('lowdb');
var controller = require('../controller/user.controller')
var FileSync = require('lowdb/adapters/FileSync');

var adapter = new FileSync('user.json')
var db = low(adapter)
db.defaults({ listUser: []})
  .write()
var route = express.Router();

route.get('/',controller.index)

  //search
route.get('/search', controller.search)

  //create
route.get('/create', controller.create)

route.post('/create', controller.postCreate)

  //view user
route.get('/:id', controller.view)

module.exports = route;