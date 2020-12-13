var express = require('express');
var app = express();
var port = 3000;
app.get('/', function(request, response){
    response.send('<h1>hello</h1>');
})

app.get('/user',function(req,res){
    res.send("User List")
  })

app.listen(port, function(){
    console.log(`Server listening on port ${port}`)
})