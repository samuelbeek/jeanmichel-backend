var middlewares = require("../utils/middlewares");
var podcastSearch = require('../utils/podcastSearch.js');

module.exports = function(app){

  app.post('/audiosearch/search', function (req, res) {
    var query = req.body.query
    podcastSearch().search(query).then(function(results, error){
      res.send(results);
    })
  });

  // gets shows with id's in the params
  app.get('/audiosearch/shows', function (req, res) {

    var showIds = req.query.shows.split(',')

    podcastSearch().getShowsById(showIds).then(function(results, error){
      res.send(results);
    })

  });

  // gets shows's episodes with id's in the params
  app.get('/audiosearch/shows/episodes', function (req, res) {

    var showIds = req.query.shows.split(',')

    podcastSearch().getEpisodesByShowIds(showIds).then(function(results, error){
      res.send(results);
    })

  });

  // gets shows's episodes with id's in the params
  app.get('/audiosearch/shows/:showId/episodes', function (req, res) {

    var showId = req.params.showId;

    podcastSearch().getEpisodesByShowId(showId).then(function(results, error){
      res.send(results);
    })

  });



  // get episode by id
  app.get('/audiosearch/episodes/:episodeId', function(req, res) {

    var episodeId = req.params.episodeId;

    podcastSearch().getEpisodeById(episodeId).then(function(results, error){
        res.send(results);
    });

  });
}
