var Station = require('../models/station');
var Show = require('../models/show');
var Podcast = require('../models/podcast');
var _ = require('lodash');
var middlewares = require("../utils/middlewares");
var podcastSearch = require('../utils/podcastSearch.js');
var urlExists = require('url-exists');
var settle = require('promise-settle');
var rp = require('request-promise');

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

  app.post('/station/sync', function(req, res){

    var promises = []


    Station.find(function (err, stations) {
      if (err) {
        console.error(err);
        res.send({"error":err})
      }

      _.each(stations, function(station){
        promises.push(
          new Promise(function(resolve, reject){

          })
        )
      })


    })


    // if all promises succeeded, send them to thte client
    Promise.all(promises).then(function(resolvedPromises) {
      res.send(resolvedPromises);
    });


  });

  app.post('/station/:stationId/sync', middlewares.stationByIdWithPodcasts, function(req, res){
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

                      var podcastUrl = unparsedPodcast.audio_files[0].url[0];

                      // Only create podcast objects for urls that are actually legit.
                      urlExists(podcastUrl, function(err, exists) {
                        if (exists == true) {
                          // create new podcast
                          var newPodcast = {
                            title: unparsedPodcast.title,
                            _creator: show._id,
                            description: unparsedPodcast.description,
                            audioUrl: podcastUrl,
                            audioSearchId: unparsedPodcast.id,
                            imageUrl: show.imageUrl,
                            shareUrl: unparsedPodcast.digital_location,
                            dateCreated: unparsedPodcast.date_added,
                            duration: unparsedPodcast.duration
                          }

                          // add podcast if it isn't around, if not: update
                          Podcast.findOneAndUpdate({audioSearchId: unparsedPodcast.id}, newPodcast, {upsert: true}, function (err, result) {
                            if (err) {
                              reject(err);
                              return console.error(err);
                            }
                            resolve(result);
                          });

                        } else {
                          reject("url wasn't reachable");
                        }
                      });




                    })
                  )
                });

                settle(episodePromises).then(function(results){
                  var resolvedPromises = []

                  _.each(results, function(result) {

                    if (result.isFulfilled()) {
                      resolvedPromises.push(result.value());
                    } else {
                      console.log('Promise is rejected', result.reason());
                    }

                  })

                  console.log("these are fulfilled", resolvedPromises);

                  var podcasts = show.podcasts.concat(resolvedPromises);
                  podcasts = _.uniqBy(podcasts, 'audioSearchId');
                  show.podcasts = podcasts;
                  show.save(function(err, result){
                      if (err) return console.error(err);
                      resolve(result.toJSON());
                  })
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
