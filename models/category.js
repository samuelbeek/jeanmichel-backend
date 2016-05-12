var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var categorySchema = Schema({
  title: String,
  description: String,
  imageUrl: String,
  author: String,
  shows: [{ type: Schema.Types.ObjectId, ref: 'Show' }]
});

var Category = mongoose.model('Category', categorySchema);
module.exports = Category
