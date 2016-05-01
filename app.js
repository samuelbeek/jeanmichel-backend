var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var Promise = require('promise');
var _ = require('lodash');

// Audiosearch intergration
// current callback is: http://google.com - we might wanna change that
var Audiosearch = require('audiosearch-client-node');

var appId = "8baa461e60a3fb576151e54f327ff76e8d9169e10e4ae36f82e4783c4c02b767";
var appSecret = "d9dd62f9f6aa29735077352dbac0f9a70f7cbeca72877ae27b04a21151e56c51";

var audiosearch = new Audiosearch(appId, appSecret);


app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send('Hello world');
});

// returns name property
app.post('/', function (req, res) {
  res.send(req.body.name);
});

app.post('/search', function (req, res) {
  var query = req.body.query
  audiosearch.searchEpisodes(query).then(function (results) {
    res.send(results);
  });

});

app.post('/shows', function (req, res) {

  // this american life : 27
  // 99% invisible: 11
  var showArray = req.body.shows
  console.log(showArray)
  // create a promises array in which we will return all the shows
  var promises = []

  // loop through all the shows and return their information
  _.each(showArray, function(showId){
    console.log("getting show id:", showId);
    promises.push(
      new Promise(function (resolve, reject) {
        audiosearch.getShow(showId).then(function (results) {
          resolve(results);
        });
      })
    );
  });

  // if all promises succeeded, send them to thte client
  Promise.all(promises).then(function(resolvedPromises) {
    res.send(resolvedPromises);
  });

});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
