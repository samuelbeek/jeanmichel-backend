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
    search: function(query) {
      return new Promise(function (resolve, reject){
          audiosearch.searchEpisodes(query).then(function (results) {
            resolve(results);
          });
      });
    }
  }

  // app.post('/audiosearch/search', function (req, res) {
  //   var query = req.body.query
  //   audiosearch.searchEpisodes(query).then(function (results) {
  //     res.send(results);
  //   });
  //
  // });
  //
  // // gets shows with id's in the params
  // app.get('/audiosearch/shows', function (req, res) {
  //
  //   var showArray = req.query.shows.split(',')
  //   // create a promises array in which we will return all the shows
  //   var promises = []
  //
  //   // loop through all the shows and return their information
  //   _.each(showArray, function(showId){
  //     promises.push(
  //       new Promise(function (resolve, reject) {
  //         audiosearch.getShow(showId).then(function (results) {
  //           resolve(results);
  //         });
  //       })
  //     );
  //   });
  //
  //   // if all promises succeeded, send them to thte client
  //   Promise.all(promises).then(function(resolvedPromises) {
  //     res.send(resolvedPromises);
  //   });
  //
  // });
  //
  // // gets shows's episodes with id's in the params
  // app.get('/audiosearch/shows/episodes', function (req, res) {
  //
  //   var showArray = req.query.shows.split(',')
  //   // create a promises array in which we will return all the shows
  //   var promises = []
  //
  //   // loop through all the shows and return their information
  //   _.each(showArray, function(showId){
  //     promises.push(
  //       new Promise(function (resolve, reject) {
  //         audiosearch.getShow(showId).then(function (show) {
  //           var latestIds = show.episode_ids.slice(0,10)
  //           var episodes = []
  //           _.each(latestIds, function(episodeId){
  //             episodes.push(
  //               new Promise(function(resolve, reject) {
  //                 audiosearch.getEpisode(episodeId).then(function(episode){
  //                   resolve(episode)
  //                 });
  //               })
  //             );
  //
  //           })
  //
  //           Promise.all(episodes).then(function(resolvedPromises) {
  //             res.send(resolvedPromises);
  //           });
  //         });
  //       })
  //     );
  //   });
  //
  //   // if all promises succeeded, send them to thte client
  //   Promise.all(promises).then(function(resolvedPromises) {
  //     res.send(resolvedPromises);
  //   });
  //
  // });
  //
  //


}
