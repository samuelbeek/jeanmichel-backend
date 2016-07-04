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

// Deep populate (to embed podcasts in shows in stations...)
var deepPopulate = require('mongoose-deep-populate')(mongoose);
stationSchema.plugin(deepPopulate, {});

var Station = mongoose.model('Station', stationSchema);
module.exports = Station
