var FileSync = require('lowdb/adapters/FileSync');
var low = require('lowdb');
var adapter = new FileSync('session.json')
var session = low(adapter)
session.defaults({ session: []}).write();

module.exports = session;