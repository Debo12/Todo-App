var express = require('express');
var app = express();
var todoController = require('./controllers/todoController');

//Set up Template Engine
app.set('view engine', 'ejs');

// Static files
app.use(express.static('./public'));

//Fire the Controller
todoController(app);
 
//Listen to Port
app.listen(3000, () => {
    console.log('App listening on port 3000!');
});