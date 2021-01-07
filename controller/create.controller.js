var shortid = require('shortid');
var db = require('../db');
var md5 = require('md5');

module.exports.create = function(req, res){
    res.render('create')
}

module.exports.postCreate = function(req,res){   
    req.body.id = shortid.generate();
    delete req.body.cpass;

    req.body.avatar = (req.file.destination + req.file.filename).split('/').slice(2, 4).join('/');

    req.body.password = md5(req.body.password)
    db.get('listUser').push(req.body).write();
      res.redirect('/');
}  
  