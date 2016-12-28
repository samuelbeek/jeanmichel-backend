var Station = require('../models/station');
var Show = require('../models/show');
var Podcast = require('../models/podcast');
var _ = require('lodash');
var middlewares = require("../utils/middlewares");
var podcastSearch = require('../utils/podcastSearch.js');
var sync = require('../utils/sync.js')
var urlExists = require('url-exists');
var settle = require('promise-settle');

module.exports = function(app){

  app.get('/station', function (req, res) {
    Station.find().then(function(results){
      res.send(results);
    });
  });

  app.get('/station/:stationId/', middlewares.stationByIdWithPodcasts ,function(req, res){
    res.send(req.station);
  });

  app.get('/station/:stationId/podcasts', middlewares.stationByIdWithPodcasts ,function(req, res){
    var podcasts = [];
    _.each(req.station.shows, function(show) {
      podcasts = podcasts.concat(show.podcasts);
    });
    res.send(podcasts);
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
        // Only save this change when showId isn't alreay part of this station
        var shows = station.shows;
        shows.push(show)
        station.shows = _.uniqBy(shows, 'audioSearchId');
        station.save(function(err, result){
            if (err) return console.error(err);
            res.send(result.toJSON());
        })
      }
    });
  });

  app.post('/station/:stationId/sync', function(req, res){
    sync().syncStation(req.params.stationId, function(result, error){
      if (error) {
        res.send(error);
      } else {
        res.send(result);
      }
    });
  });

  app.post('/station/sync', function(req, res){

    Station.find().then(function(results, err) {

      if (err) {
        console.error(err);
        res.send({"error":err})
      } else {
        var promises = []
        _.each(results, function(station){

          promises.push(
            new Promise(function(resolve, reject){
              sync().syncStation(station._id, function(result, error){
                console.log("syncing station", station.title , station._id);
                if (error) {
                  reject(error);
                } else {
                  resolve(result);
                }
              });
            })
          )
        })

        // if all promises succeeded, send them to thte client
        Promise.all(promises).then(function(resolvedPromises) {
          console.log("finished");
          res.send(resolvedPromises);
        });

      }
  });
})
}
