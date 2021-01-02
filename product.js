var FileSync = require('lowdb/adapters/FileSync');
var low = require('lowdb');
var adapter = new FileSync('product.json')
var product = low(adapter)
product.defaults({ product: []})

module.exports = product;