var express = require('express');
var app = express();
var router = require('./route/user.route')
var port = 3000;

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.static('public'));

app.get('/', function(request, response){
    response.render('index', {name : 'Tâm'});
})

app.use('/user', router);

app.listen(port, function(){
    console.log(`Server listening on port ${port}`)
})