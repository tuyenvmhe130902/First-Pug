const express = require("express");
const app = express();

const port = 3000;


app.set('view engine', 'pug');

app.get('/',function(req,res){
  res.render('index', {
  	name :'AAAA'
  });
})

app.get('/user',function(req,res){
 res.render('users/index', {
  	users: [
  	{id :1 , name: 'ASdAsd'},
  	{id :12 , name: 'rwerwrewd'},
  	{id :13 , name: 'cvcxvxsd'},
  	{id :14 , name: 'ASdsdsddweAsd'}
  	]
  });
})

app.listen(port, function() {
  console.log(`Server listening on port ${port}`);
});