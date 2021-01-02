var product = require('../product');

module.exports.product = function(req, res){
    var page = req.query.page || 1;
    var perPage = 4;

    var start = (page - 1) * perPage;
    var end = page * perPage

    res.render('product', {products: product.get('product').value().slice(start, end)
        , perPage: perPage
        , page: req.query.page
        , next: parseInt(req.query.page) + 1
        , previous: parseInt(req.query.page) - 1
        , productLength: product.get('product').value().length});
}