var Station = require('../models/station');
var Show = require('../models/show');
var Podcast = require('../models/podcast');
var _ = require('lodash');
var middlewares = require("../utils/middlewares");
var podcastSearch = require('../utils/podcastSearch.js');

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
        // Only save this change when showId isn't alreay part of this station
        var shows = station.shows;
        shows.push(show)
        station.shows = _.uniqBy(shows, 'audioSearchId');
        console.log(shows);
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
              podcastSearch().getEpisodesByShowId(show.audioSearchId).then(function(results, error){
                var episodePromises = []
                _(results).forEach(function(unparsedPodcast) {
                  episodePromises.push(

                    new Promise(function(resolve, reject){

                      // create new podcast
                      var newPodcast = {
                        title: unparsedPodcast.title,
                        _creator: show._id,
                        description: unparsedPodcast.description,
                        audioUrl: unparsedPodcast.audio_files[0].url[0],
                        audioSearchId: unparsedPodcast.id,
                        imageUrl: show.imageUrl,
                        shareUrl: unparsedPodcast.digital_location,
                        dateCreated: unparsedPodcast.date_added,
                        duration: unparsedPodcast.duration
                      }

                      // add podcast if it isn't around, if not: update
                      Podcast.update({audioSearchId: unparsedPodcast.id}, newPodcast, {upsert: true}, function (err, result) {
                        if (err) return console.error(err);
                        resolve(result)
                      });

                    })
                  )
                });

                Promise.all(episodePromises).then(function(resolvedPromises){
                  resolve(resolvedPromises);
                })
              })
            })
          );
      })

      // if all promises succeeded, send them to thte client
      Promise.all(promises).then(function(resolvedPromises) {
        res.send(resolvedPromises);
      });

  });

}
