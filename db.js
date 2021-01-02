var FileSync = require('lowdb/adapters/FileSync');
var low = require('lowdb');
var adapter = new FileSync('user.json')
var db = low(adapter)
db.defaults({ listUser: []})
  .write()

module.exports = db;