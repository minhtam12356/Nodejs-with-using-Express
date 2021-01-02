var db = require('../db');
 

module.exports.user = function(req,res){
    res.render('user', {users: db.get('listUser').value()})
}

module.exports.search = function(req, res){
    var searchList = req.query.q;
    var result = db.get('listUser').value().filter(function(user){
        return user.phone.toLowerCase().indexOf(searchList.toLowerCase()) !== -1;
    })
    res.render('user', {users: result, value: searchList});
}


module.exports.view = function(req, res){
    var id = req.params.id;
    var user = db.get('listUser').find({id: id}).value();
    res.render('view', {user: user});
  }