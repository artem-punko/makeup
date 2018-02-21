var mongoose = require('mongoose');

var ImageSchema = new mongoose.Schema({
  imageId: String,
  type: Number,
});

module.exports = mongoose.model('Image', ImageSchema);