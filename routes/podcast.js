var middlewares = require("../utils/middlewares");
var Podcast = require('../models/podcast');

module.exports = function(app){

  app.get('/podcast', function (req, res) {
    Podcast.find().then(function(results){
      res.send(results)
    });
  });

  app.post('/podcast', middlewares.createPodcast , function (req, res) {
    res.send(req.podcast)
  });
}
