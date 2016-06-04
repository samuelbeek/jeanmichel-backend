var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var Promise = require('promise');
var _ = require('lodash');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connected");
});

// parsing
app.use(bodyParser.json())

// models
var Podcast = require('./models/podcast');
var Show = require('./models/show');
var Category = require('./models/category');

// Audiosearch intergration
// current callback is: http://google.com - we might wanna change that
var Audiosearch = require('audiosearch-client-node');
var appId = "8baa461e60a3fb576151e54f327ff76e8d9169e10e4ae36f82e4783c4c02b767";
var appSecret = "d9dd62f9f6aa29735077352dbac0f9a70f7cbeca72877ae27b04a21151e56c51";
var audiosearch = new Audiosearch(appId, appSecret);

// Initialize ALL routes including subfolders
var fs = require('fs');
var path = require('path');

function recursiveRoutes(folderName) {
    fs.readdirSync(folderName).forEach(function(file) {

        var fullName = path.join(folderName, file);
        var stat = fs.lstatSync(fullName);

        if (stat.isDirectory()) {
            recursiveRoutes(fullName);
        } else if (file.toLowerCase().indexOf('.js')) {
            require('./' + fullName)(app);
            console.log("require('" + fullName + "')");
        }
    });
}
recursiveRoutes('routes'); // Initialize it

app.get('/', function (req, res) {
  res.send('Hello world');
});

app.listen(3000, function () {
  console.log('🤖',' - App listening on port 3000!');
});
