// * express
//======================================
var express = require('express');
var exphbs = require('express-handlebars');
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB. You could name it something else, but I was just following their convention.
var sequelize = require("../config/connection.js");
var app = express();
//======================================
// * handlbars

app.engine('handlebars',
exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
//======================================
// * method-override
var methodOverride  = require("method-override");
//======================================
// * body-parser
var bodyParser      = require("body-parser");
//======================================
// object relational mapping
var orm = require('./config/orm.js');
var burger = "tasty crab burger";

app.get('/', function(req,res){
	res.send('Hello world');
//	res.render(burger);
});


// GET /style.css etc
app.use(express.static(__dirname + '/public'));





//=====================================================
//define PORT, start server
//
var PORT = Number(process.env.PORT  || 5000);
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});

//module.exports = burger;