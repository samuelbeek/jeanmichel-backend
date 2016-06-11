var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var stationSchema = Schema({
  title: String,
  description: String,
  imageUrl: String,
  iconUrl: String,
  author: String,
  color: String,
  shows: [{ type: Schema.Types.ObjectId, ref: 'Show' }]
});

var Station = mongoose.model('Station', stationSchema);
module.exports = Station
