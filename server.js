var express = require('express');
var app = express();
var mongoose = require('mongoose');
var port = process.env.PORT || 3000;
var database = require('./config/database');

var methodOverride = require('method-override');


//const models = join(__dirname, 'app/models');

mongoose.connect(database.url);

app.configure(function() {
    app.use(express.static(__dirname + '/public')); 		// set the static files location /public/img will be /img for users
    app.use(express.logger('dev')); 						// log every request to the console
    app.use(express.bodyParser()); 							// pull information from html in POST
    app.use(express.methodOverride()); 						// simulate DELETE and PUT
});


app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(methodOverride());

require('./app/routes')(app);

app.listen(port);
console.log("App listening on port " + port);