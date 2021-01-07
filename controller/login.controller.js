var db = require('../db');

module.exports.login = function(req, res){
    res.render('login', {users: db.get('listUser').value()})
}

module.exports.postLogin = function(req,res){
    var searchListUser = req.body.username;
    var resultUser = db.get('listUser').find({username: searchListUser}).value();
    res.cookie('userCookie', resultUser.id, { signed: true })
    res.redirect('/home');
}

module.exports.signOut = function(req, res){
    res.clearCookie('userCookie')
    res.redirect('/');
}
  