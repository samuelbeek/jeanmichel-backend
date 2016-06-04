module.exports = function(app){

  app.post('/audiosearch/search', function (req, res) {
    var query = req.body.query
    audiosearch.searchEpisodes(query).then(function (results) {
      res.send(results);
    });

  });


  // gets shows with id's in the params
  app.get('/audiosearch/shows', function (req, res) {

    console.log("fetching podcasts");

    var showArray = req.query.shows.split(',')
    // create a promises array in which we will return all the shows
    var promises = []

    // loop through all the shows and return their information
    _.each(showArray, function(showId){
      promises.push(
        new Promise(function (resolve, reject) {
          audiosearch.getShow(showId).then(function (results) {
            resolve(results);
          });
        })
      );
    });

    // if all promises succeeded, send them to thte client
    Promise.all(promises).then(function(resolvedPromises) {
      res.send(resolvedPromises);
    });

  });

  // gets shows's episodes with id's in the params
  app.get('/audiosearch/shows/episodes', function (req, res) {

    var showArray = req.query.shows.split(',')
    // create a promises array in which we will return all the shows
    var promises = []

    // loop through all the shows and return their information
    _.each(showArray, function(showId){
      promises.push(
        new Promise(function (resolve, reject) {
          audiosearch.getShow(showId).then(function (show) {
            var latestIds = show.episode_ids.slice(0,10)
            var episodes = []
            _.each(latestIds, function(episodeId){
              episodes.push(
                new Promise(function(resolve, reject) {
                  audiosearch.getEpisode(episodeId).then(function(episode){
                    resolve(episode)
                  });
                })
              );

            })

            Promise.all(episodes).then(function(resolvedPromises) {
              res.send(resolvedPromises);
            });
          });
        })
      );
    });

    // if all promises succeeded, send them to thte client
    Promise.all(promises).then(function(resolvedPromises) {
      res.send(resolvedPromises);
    });

  });


  // get episode by id
  app.get('/audiosearch/episodes/:episodeId', function(req, res) {

    var episodeId = req.params.episodeId;
    audiosearch.getEpisode(episodeId).then(function(results){
        res.send(results);
    });

  });
}
