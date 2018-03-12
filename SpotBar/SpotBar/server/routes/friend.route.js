var express = require('express');
    MongoClient = require('mongodb').MongoClient,
    format = require('util').format;
    mongoose = require('mongoose');
    bcrypt = require('bcrypt');

   
module.exports.publicRoutes = function () {

    mongoose.connect('mongodb://localhost/spotbardb', function(err) {
        if (err) { throw err; }
        else{
            console.log("database Connected");
        }
      });

    
    var router = express.Router();

    return router;



}

module.exports.privateRoutes = function () {
  
    var router = express.Router();

    return router;



}