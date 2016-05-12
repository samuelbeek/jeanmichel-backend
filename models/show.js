var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var showSchema = Schema({
  title: String,
  description: String,
  imageUrl: String,
  url: String,
  audioSearchId: String,
  podcasts: [{ type: Schema.Types.ObjectId, ref: 'Podcast' }]
});

var Show = mongoose.model('Show', showSchema);
module.exports = Show
