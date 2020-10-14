const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
var adapter = new FileSync('db.json')
var db = low(adapter)

db.defaults({ users: []})
  .write()

app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',function(req,res){
  res.render('index', {
  	name :'AAAA'
  });
})

app.get('/users',function(req,res){
 res.render('users/index', {
  users: db.get('users').value()
  });
})

app.get('/users/search',function(req,res){
  var q= req.query.q;
  var match= db.get('users').value().filter(function(user){
  	return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
  });

  res.render('users/index',{
  	users: match
  })
})

app.get('/users/create',function(req,res){
 res.render('users/create');
})

app.post('/users/create',function(req,res){
  db.get('users').push(req.body).write();
  res.redirect('/users');
})

app.listen(port, function() {
  console.log(`Server listening on port ${port}`);
});