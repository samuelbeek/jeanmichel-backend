var Station = require('../models/station');
var Podcast = require('../models/podcast');

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
      Station.findById(stationId).populate('shows').exec(function (error, station) {
        if (error) {
          res.send(error);
        } else if (station == null) {
          res.send("Error: no station can be found for that id");
        } else {
          req.station = station;
          next();
        }
    });
  },
  stationByIdWithPodcasts: function(req, res, next) {
    var stationId = req.params.stationId;
    Station.findById(stationId).deepPopulate('shows shows.podcasts shows.podcasts._creator').exec(function (error, station) {
      if (error) {
        res.send(error);
      } else if (station == null) {
        res.send("Error: no station can be found for that id");
      } else {
        req.station = station;
        next();
      }
  });
}

}
