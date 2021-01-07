var session = require('../session');

module.exports.cart = function(req, res){
    var productid = req.params.productid;

    if(!req.signedCookies.sessionCookie){
        res.redirect('back');
        return;
    }
    if(!session.get('session').find({sessionID : req.signedCookies.sessionCookie}).value()){
        session.get('session').push({sessionID : req.signedCookies.sessionCookie}).write();
    }
    var count = session.get('session')
                       .find({sessionID : req.signedCookies.sessionCookie})
                       .get('cart.' + productid, 0)
                       .value();

    session.get('session')
           .find({sessionID : req.signedCookies.sessionCookie})
           .set('cart.' + productid, count + 1)
           .write();
    res.redirect('back');
}