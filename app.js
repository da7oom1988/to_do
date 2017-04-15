var express = require('express');
var todo = require('./controllers/todoControlers');

var app = express();

//set the template
app.set("view engine" , "ejs");

//static files
app.use(express.static('./public'));

//fire conrollers
todo(app);


//listen to the port
app.listen(3000);
console.log("we are listening to port 3000");

