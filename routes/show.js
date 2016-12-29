var middlewares = require("../utils/middlewares");
var Podcast = require('../models/podcast');
var Show = require('../models/show');
var Station = require('../models/station');
var podcastSearch = require('../utils/podcastSearch.js');

module.exports = function(app){

  app.post('/show', function (req, res) {
    var title = req.body.title;
    var description = req.body.description;
    var imageUrl = req.body.imageUrl;
    var url = req.body.url;
    var audioSearchId = req.body.audioSearchId;

    var show = new Show({title: title, description: description, imageUrl: imageUrl, url: url, audioSearchId: audioSearchId});
    show.save(function(err, result){
      if (err) return console.error(err);
      res.send(result.toJSON());
    });
  });

  app.post('/audiosearchshow', function(req, res) {

    var showId = req.body.audioSearchId;

    podcastSearch().getShowById(showId).then(function(result, error){

      if (error) return console.error(err);

      var title = result.title;
      var description  = result.description;
      var imageUrl = result.image_files[0].url.full;
      var url = result.urls.ui;
      var show = new Show({title: title, description: description, imageUrl: imageUrl, url: url, audioSearchId: showId});
      show.save(function(err, result){
        if (err) return console.error(err);
        res.send(result.toJSON());
      });
    })


  });

  app.post('/show/:showId/podcast', middlewares.createPodcast, function(req, res) {

    var showId = req.params.showId;

    Show.findOne({_id: showId}, function (err, show) {
        show.podcasts.push(req.podcast)
        show.save(function(err, result){
          if (err) return console.error(err);
          res.send(result.toJSON());
        });
    });
  });

  app.get('/show', function(req, res) {
    Show.find().then(function(results){
      console.log(results)
      res.send(results);
    });
  });

}
