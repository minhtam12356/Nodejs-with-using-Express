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
    var numbers = [0];

    //sum
    var sumPQ = [];
    var sumPrice = [];
    var sumQuantity = [];

    var cartIDproducts = session.get('session').find({sessionID : req.signedCookies.sessionCookie}).value();
    for(cartIDproduct in cartIDproducts.cart){
        var getProduct = product.get('product').find({id : cartIDproduct}).value()
        getProduct['quantity']= cartIDproducts.cart[cartIDproduct]
        products.push(getProduct);
        numbers.push(cartIDproducts.cart[cartIDproduct]);
        //sum
        sumPrice.push(parseInt(getProduct.price));
        sumQuantity.push(getProduct.quantity);
    }

    //sum
    for(var i = 0; i < sumPrice.length; i++){
        var sumLoop = sumPrice[i] * sumQuantity[i];
        sumPQ.push(sumLoop);
    }
    var sum = sumPQ.reduce((a,b)=>a+b);
    var number = numbers.reduce((a,b)=>a+b);
    res.render('cart', {carts : products, number : number, sum : sum});
}
