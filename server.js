// Requiring Dependencies.
var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')

// Create an instance of express server.
var app = express();

// Our port will be whatever we are given, or if given nothing it will be 80.
var appPORT = process.env.PORT || 80;

// Enabling Express to serve static files. (Allows our JavaScript & CSS files to be used)
app.use(express.static('app/public'));

// Body-parser middleware!
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// Requiring the files with routing information.
require('./app/routing/api-routes.js')(app); 
require('./app/routing/html-routes.js')(app);

// Starts our server.
app.listen(appPORT, function() {
    console.log("Listening on port: " + appPORT);
});