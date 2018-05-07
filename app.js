/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express');

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');

// create a new express server
var app = express();

// serve the files out of ./public as our main files
///chg sta
//app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/public'),function(req, res){
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write('<h1>Hello Node !</h1>');
    res.end();
});
//chg sto
// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();
//add sta
app.on('request', function(req, res){
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write('<h1>Hello Node !</h1>');
    res.end('Hello World\n');
//    res.end();
});

//add sto
// start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function() {
  // print a message when the server starts listening
  console.log("server starting on " + appEnv.url);


});
