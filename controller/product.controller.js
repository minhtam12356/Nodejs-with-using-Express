var product = require('../product');
var perPage = 4;

module.exports.product = function(req, res){
    var page = req.query.page || 1;
    var start = (page - 1) * perPage;
    var end = page * perPage

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