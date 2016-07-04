var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var Promise = require('promise');
var _ = require('lodash');
var mongoose = require('mongoose');

// Mongo Setup
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'database connection error:'));
db.once('open', function() {
  console.log("connected to database");
});

// Parser Setup
app.use(bodyParser.json())

// models
var Podcast = require('./models/podcast');
var Show = require('./models/show');
var Station = require('./models/station');


// Initialize ALL routes including subfolders
var fs = require('fs');
var path = require('path');

// Automtaically initializes routes in the roustes folder
function recursiveRoutes(folderName) {
    fs.readdirSync(folderName).forEach(function(file) {

        var fullName = path.join(folderName, file);
        var stat = fs.lstatSync(fullName);

        if (stat.isDirectory()) {
            recursiveRoutes(fullName);
        } else if (file.toLowerCase().indexOf('.js')) {
            require('./' + fullName)(app);
        }
    });
}
recursiveRoutes('routes');

app.get('/', function (req, res) {
  res.send('Hello world');
});

app.listen(3000, function () {
  console.log('🤖',' - App listening on port 3000!');
});
