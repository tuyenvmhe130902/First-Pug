const express = require("express");
const app = express();
const port = 3000;

app.set('view engine', 'pug');

	var users = [
  	{id :1 , name: 'Nam'},
  	{id :12 , name: 'Hai'},
  	{id :13 , name: 'Ha'},
  	{id :14 , name: 'Nhung'}
  	];

app.get('/',function(req,res){
  res.render('index', {
  	name :'AAAA'
  });
})

app.get('/users',function(req,res){
 res.render('users/index', {
  users: users
  });
})

app.get('/users/search',function(req,res){
  var q= req.query.q;
  var match= users.filter(function(user){
  	return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
  });

  res.render('users/index',{
  	users: match
  })
})

app.listen(port, function() {
  console.log(`Server listening on port ${port}`);
});