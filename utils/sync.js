var Station = require('../models/station');
var Show = require('../models/show');
var Podcast = require('../models/podcast');
var _ = require('lodash');
var middlewares = require("../utils/middlewares");
var podcastSearch = require('../utils/podcastSearch.js');
var urlExists = require('url-exists');
var settle = require('promise-settle');

module.exports = function(){

  return {
    syncStation: function(stationId, callback) {

      Station.findById(stationId).deepPopulate('shows shows.podcasts shows.podcasts._creator').exec(function (error, station) {
        if (error) {
          callback(null, error);
        } else if (station == null) {
          callback(null, error);
        } else {
          var promises = []

          var station = station;
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
                        })
                      )
                    });

                    settle(episodePromises).then(function(results){
                      var resolvedPromises = []

                      _.each(results, function(result) {

                        if (result.isFulfilled()) {
                          resolvedPromises.push(result.value());
                          console.log("fullfilled")
                        } else {
                          console.log('Promise is rejected', result.reason());
                        }

                      })

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
            callback(resolvedPromises, null);
          });
        }
      });
  }
}
}
