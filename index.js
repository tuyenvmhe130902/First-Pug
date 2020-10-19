const express = require("express");
const app = express();
const port = 3001;
const bodyParser = require('body-parser');
const UseRouter =  require('./routers/user.router');

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',function(req,res){
  res.render('index', {
  	name :'AAAA'
  });
})

app.use(express.static('public'));

app.use('/users',UseRouter);

app.listen(port, function() {
  console.log(`Server listening on port ${port}`);
});