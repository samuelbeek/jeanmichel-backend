var Category = require('../models/category');

module.exports = {
    createPodcast: function(req, res, next) {
        var podcast = new Podcast({ title: 'Super podcast'})
        podcast.save(function (err, result) {
          if (err) return console.error(err);
          req.podcast = result;
          next()
        });
      },
    categoryById: function(req, res, next) {
      var categoryId = req.params.categoryId;
      Category.findById(categoryId, function(errpr, category){
        if (errpr) {
          res.send(errpr);
        } else {
          req.category = category;
          next();
        }
    });
  }
}
