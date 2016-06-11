var Station = require('../models/station');
var Show = require('../models/show');
var _ = require('lodash');
var middlewares = require("../utils/middlewares");

// TODO: make this a helper
// Audiosearch intergration
// current callback is: http://google.com - we might wanna change that
var Audiosearch = require('audiosearch-client-node');
var appId = "8baa461e60a3fb576151e54f327ff76e8d9169e10e4ae36f82e4783c4c02b767";
var appSecret = "d9dd62f9f6aa29735077352dbac0f9a70f7cbeca72877ae27b04a21151e56c51";
var audiosearch = new Audiosearch(appId, appSecret);


module.exports = function(app){

  app.get('/station', function (req, res) {
    Station.find().then(function(results){
      console.log(results)
      res.send(results);
    });
  });


  app.post('/station', function (req, res) {

    var title = req.body.title;
    var description = req.body.description;
    var imageUrl = req.body.imageUrl;
    var author = req.body.author;
    var color = req.body.color;
    var iconUrl = req.body.iconUrl;

    var station = new Station({title: title, description: description, imageUrl: imageUrl, iconUrl: iconUrl, color: color, author: author})
    station.save(function(err, result){
      if (err) return console.log(err);
      console.log("yes", result);
      res.send(result.toJSON());
    });
  });

app.post('/station/:stationId/show', middlewares.stationById, function(req, res){

    var station = req.station;
    var showId = req.body.showId;

    Show.findById(showId, function(err, show){
      if (err) {
        res.send(err);
      } else {
        station.shows.push(show);
        station.save(function(err, result){
            if (err) return console.error(err);
            res.send(result.toJSON());
        })
      }
    });

  });

  app.post('/station/:stationId/sync', middlewares.stationById, function(req, res){
      var station = req.station;
      var promises = []

      _(station.shows).forEach(function(show){
        // get all shows
          promises.push(
            new Promise(function (resolve, reject) {
              audiosearch.getShow(show.audioSearchId).then(function (results) {
                resolve(results);
              });
            })
          );
      })

      // if all promises succeeded, send them to thte client
      Promise.all(promises).then(function(resolvedPromises) {
        res.send(resolvedPromises);
      });

  });

}
