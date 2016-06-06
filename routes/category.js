var Category = require('../models/category');
var Show = require('../models/show');
var _ = require('lodash');
var middlewares = require("../utils/middlewares");

module.exports = function(app){

  app.get('/category', function (req, res) {
    Category.find().then(function(results){
      console.log(results)
      res.send(results);
    });
  });


  app.post('/category', function (req, res) {

    var title = req.body.title;
    var description = req.body.description;
    var imageUrl = req.body.imageUrl;
    var author = req.body.author;
    var color = req.body.color;
    var iconUrl = req.body.iconUrl;

    var category = new Category({title: title, description: description, imageUrl: imageUrl, iconUrl: iconUrl, color: color, author: author})
    category.save(function(err, result){
      if (err) return console.log(err);
      console.log("yes", result);
      res.send(result.toJSON());
    });
  });

app.post('/category/:categoryId/show', middlewares.categoryById, function(req, res){

    var category = req.category;
    var showId = req.body.showId;

    Show.findById(showId, function(err, show){
      if (err) {
        res.send(err);
      } else {
        category.shows.push(show);
        category.save(function(err, result){
            if (err) return console.error(err);
            res.send(result.toJSON());

            // maybe implement: https://gist.github.com/timhudson/5288685 here 
        })
      }
    });

  });

  app.post('/category/:categoryId/sync', function(req, res){
    var categoryId = req.params.categoryId;
    Category.findById(categoryId, function(err, category){
      if (err) {
        res.send(err);
      } else {
        console.log(category.shows);
        _(category.shows).forEach(function(show){
          console.log(show.audioSearchId);
          res.send(show);
        })
      }
    });


  });

}
