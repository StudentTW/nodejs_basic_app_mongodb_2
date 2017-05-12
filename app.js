
//Import Express Library in this application
var express = require('express');
//Import Mongodb Library in this application
var mongodb = require('mongodb');
//Import Mongoose Library in this application (Used to easy communicate with MongoDB)
var mongoose = require('mongoose');

//create app as express instance
var app = express();


// Declare Monogo DB  URL that we created as per tutorial
// Replace it with your Mongodb Url

var url='mongodb://admin:admin@ds137801.mlab.com:37801/sampledb1234';

// Connection to Mongo DB with connection url using mongoose

mongoose.connect(url);

// Check DB Connection Status

var db = mongoose.connection;
db.on('error', function callback(err) {console.log("Database connection failed. Error: " + err);});
db.once('open', function callback() {console.log("Database connection successful.");});



//REST GET method at address "/"

app.get('/', function (req, res) {

  //req is data as input for this GET REST Method


  //res is data is output to send back with this GET REST Method

  res.send('Hello world');

  //res.send is method to send the response as output

});




// Create server at given address "0.0.0.0" and posrt "8080"

var server = app.listen(8080, "0.0.0.0", function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port)
});


