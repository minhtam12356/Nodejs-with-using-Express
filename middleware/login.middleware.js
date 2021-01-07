module.exports.postLogin = function(req, res, next){
    var db = require('../db');
    if(!req.signedCookies.userCookie){
        res.redirect('/login')
        return;
    }

    var userLocals = db.get('listUser').find({id: req.signedCookies.userCookie}).value();
    if(!userLocals){
        res.redirect('/login')
        return;
    }
    res.locals.userLocals = userLocals;
    next()
}
module.exports.product = function(req, res, next){
    var db = require('../db');
    var userLocals = db.get('listUser').find({id: req.signedCookies.userCookie}).value();
    res.locals.userLocals = userLocals;
    next()
}