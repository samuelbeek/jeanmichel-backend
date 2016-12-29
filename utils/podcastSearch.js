// Audiosearch intergration
// current callback is: http://google.com - we might wanna change that
var Audiosearch = require('audiosearch-client-node');
var appId = "8baa461e60a3fb576151e54f327ff76e8d9169e10e4ae36f82e4783c4c02b767";
var appSecret = "d9dd62f9f6aa29735077352dbac0f9a70f7cbeca72877ae27b04a21151e56c51";
var audiosearch = new Audiosearch(appId, appSecret);
var _ = require('lodash');
var Promise = require('promise');


module.exports = function(){

  // get episode by id
  return {
    getEpisodeById: function(episodeId) {
      return new Promise(function (resolve, reject){
        audiosearch.getEpisode(episodeId).then(function(results){
            resolve(results);
        });

      });
    },
    // search eppisodes with query
    search: function(query) {
      return new Promise(function (resolve, reject){
          audiosearch.searchEpisodes(query).then(function (results) {
            resolve(results);
          });
      });
    },

    // get show by id
    getShowById: function(showId) {
      return new Promise(function(resolve, reject) {
        audiosearch.getShow(showId).then(function (results) {
          resolve(results);
        });
      });
    },
    // get shows from array of ids
    getShowsById: function(showIds) {
      return new Promise(function(resolve, reject){

        var promises = []

          // loop through all the shows and return their information
          _.each(showIds, function(showId){
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
            resolve(resolvedPromises);
          });

        });

    },
    getEpisodesByShowId: function(showId) {
      return new Promise(function (resolve, reject) {
        audiosearch.getShow(showId).then(function (show) {
          // slice to 20 if size is larger than 20.
          var latestIds = show.episode_ids;
          if (latestIds.length > 20) {
            latestIds = latestIds.slice(0,20);
          }
          var episodes = []
          _.each(latestIds, function(episodeId){
            episodes.push(
              new Promise(function(resolve, reject) {
                audiosearch.getEpisode(episodeId).then(function(episode){
                  resolve(episode)
                });
              })
            );

          })

          Promise.all(episodes).then(function(resolvedPromises) {
            resolve(resolvedPromises);
          });
        });
      })

    },
    // get episodes from array of ids
    getEpisodesByShowIds: function(showIds) {
      return new Promise(function(resolve, reject) {
          var promises = []
          // loop through all the shows and return their information
          _.each(showIds, function(showId){
            promises.push(
              new Promise(function (resolve, reject) {
                audiosearch.getShow(showId).then(function (show) {
                  var latestIds = show.episode_ids.slice(0,10)
                  var episodes = []
                  _.each(latestIds, function(episodeId){
                    episodes.push(
                      new Promise(function(resolve, reject) {
                        audiosearch.getEpisode(episodeId).then(function(episode){
                          resolve(episode)
                        });
                      })
                    );

                  })

                  Promise.all(episodes).then(function(resolvedPromises) {
                    resolve(resolvedPromises);
                  });
                });
              })
            );
          });

          // if all promises succeeded, send them to the client
          Promise.all(promises).then(function(resolvedPromises) {
            resolve(resolvedPromises);
          });

      });
    }
  }


}
