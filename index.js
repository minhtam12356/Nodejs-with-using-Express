require('dotenv').config()

var express = require('express');
var app = express();
var UserRouter = require('./route/user.route')
var LoginRouter = require('./route/login.route')
var CreateRouter = require('./route/create.route')
var ProductRouter = require('./route/product.route')

var middleware = require('./middleware/login.middleware')

var port = 3000;

var db = require('./db');

var cookieParser = require('cookie-parser');
app.use(cookieParser('secret'))

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.static('public'));

  //home
app.get('/home', middleware.postLogin, function(req, res){
  var user = db.get('listUser').find({id: req.signedCookies.userCookie}).value()
  res.render('home', {name: user.name});
})

app.use('/', LoginRouter);
app.use('/create', CreateRouter);
app.use('/user', middleware.postLogin, UserRouter);
app.use('/product', middleware.postLogin, ProductRouter);

app.listen(port, function(){
    console.log(`Server listening on port ${port}`)
})