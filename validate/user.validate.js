module.exports.postCreate = function(req, res, next){   
    var listError = []
    if(!req.body.name){
        listError.push('Name cannot be empty');
    }
    if(!req.body.phone){
        listError.push('Phone cannot be empty')
    }
    if(listError.length){
        res.render('create', {errors: listError, values: req.body})
        return;
    }
    next();
}