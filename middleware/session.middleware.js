const { generate } = require('shortid');

var shortid = require('shortid');
var session = require('../session')

module.exports = function(req, res, next){
    var sessionCookie = shortid.generate();
    if(!req.signedCookies.sessionCookie){
        res.cookie('sessionCookie', sessionCookie, { signed: true })
        session.get('session').push({sessionID : sessionCookie}).write();
    }
    

    next()
}