module.exports.postLogin = function(req, res, next){
    var db = require('../db');
    if(!req.signedCookies.userCookie){
        res.redirect('/')
        return;
    }

    var user = db.get('listUser').find({id: req.signedCookies.userCookie}).value();
    if(!user){
        res.redirect('/')
        return;
    }
    res.locals.user = user;
    next()
}