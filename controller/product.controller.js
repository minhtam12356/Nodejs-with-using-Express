var product = require('../product');
var session = require('../session');
var perPage = 4;

module.exports.product = function(req, res){
    var page = req.query.page || 1;
    var start = (page - 1) * perPage;
    var end = page * perPage

    var products = [];
    var numbers = [0]
    var cartIDproducts = session.get('session').find({sessionID : req.signedCookies.sessionCookie}).value();
    for(cartIDproduct in cartIDproducts.cart){
        var getProduct = product.get('product').find({id : cartIDproduct}).value()
        getProduct['quantity']= cartIDproducts.cart[cartIDproduct]
        products.push(getProduct);
        numbers.push(cartIDproducts.cart[cartIDproduct]);
    }
    var number = numbers.reduce((a,b)=>a+b)
    res.locals.number = number
    
    res.render('product', {products: product.get('product').value().slice(start, end)
        , perPage: perPage
        , page: req.query.page
        , next: parseInt(req.query.page) + 1
        , previous: parseInt(req.query.page) - 1
        , productLength: product.get('product').value().length});
}

module.exports.search = function(req, res){ 
    var search = req.query.q;
    var result = product.get('product').value().filter(function(user){
        return user.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    })
    res.render('product', {products: result
                        , value: search
                        , productLength: product.get('product').value().length})
}