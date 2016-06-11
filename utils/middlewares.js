var Station = require('../models/station');

module.exports = {
    createPodcast: function(req, res, next) {
        var podcast = new Podcast({ title: 'Super podcast'})
        podcast.save(function (err, result) {
          if (err) return console.error(err);
          req.podcast = result;
          next()
        });
      },
    stationById: function(req, res, next) {
      var stationId = req.params.stationId;
      Station.findById(stationId, function(errpr, station){
        if (errpr) {
          res.send(errpr);
        } else {
          req.station = station;
          next();
        }
    });
  }
}
