var shortid = require('shortid');
var FileSync = require('lowdb/adapters/FileSync');
var low = require('lowdb');
var adapter = new FileSync('user.json')
var db = low(adapter)
db.defaults({ listUser: []})
  .write()
 
module.exports.index = function(req,res){
    res.render('user', {users: db.get('listUser').value()})
}

module.exports.search = function(req, res){
    var searchList = req.query.q;
    var result = db.get('listUser').value().filter(function(user){
        return user.name.toLowerCase().indexOf(searchList.toLowerCase()) !== -1;
    })
    res.render('user', {users: result, value: searchList});
}

module.exports.create = function(req,res){
    res.render('create');
}

module.exports.postCreate = function(req,res){
    req.body.id = shortid.generate();
    db.get('listUser').push(req.body).write();
      res.redirect('/user');
}

module.exports.view = function(req, res){
    var id = req.params.id;
    var user = db.get('listUser').find({id: id}).value();
    res.render('view', {user: user});
  }