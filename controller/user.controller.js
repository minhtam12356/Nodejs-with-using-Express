var db = require('../db');
var session = require('../session');
var product = require('../product');


module.exports.user = function(req,res){
    res.render('user', {users: db.get('listUser').value()})
}

module.exports.search = function(req, res){
    var searchList = req.query.q;
    var result = db.get('listUser').value().filter(function(user){
        return user.name.toLowerCase().indexOf(searchList.toLowerCase()) !== -1;
    })
    res.render('user', {users: result, value: searchList});
}

module.exports.view = function(req, res){
    var id = req.params.id;
    var user = db.get('listUser').find({id: id}).value();
    res.render('view', {user: user});
}

module.exports.cart = function(req, res){
    var products = [];
    var cartIDproducts = session.get('session').value();
    for(cartIDproduct of cartIDproducts){
        for(IDproduct in cartIDproduct.cart){
            product.get('product').find({id : IDproduct}).value()['quantity']= cartIDproduct.cart[IDproduct]
            products.push(product.get('product').find({id : IDproduct}).value());
        }
    }

    res.render('cart', {carts : products});
}
