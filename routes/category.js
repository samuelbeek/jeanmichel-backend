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
  
}
