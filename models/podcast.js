var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var podcastSchema = Schema({
  title: String,
  _creator : { type: Schema.Types.ObjectId, ref: 'Show' },
  description: String,
  audioUrl: String,
  audioSearchId: String,
  imageUrl: String,
  shareUrl: String,
  dateCreated: Date,
  duration: Number
});


var Podcast = mongoose.model('Podcast', podcastSchema);
module.exports = Podcast
