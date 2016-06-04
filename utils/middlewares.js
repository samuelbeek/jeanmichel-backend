module.exports = {
    createPodcast: function(req, res, next) {
        var podcast = new Podcast({ title: 'Super podcast'})
        podcast.save(function (err, result) {
          if (err) return console.error(err);
          req.podcast = result;
          next()
        });
      }
}
