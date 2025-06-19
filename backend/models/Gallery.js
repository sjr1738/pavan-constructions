const mongoose = require('mongoose');

const GallerySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  type: { type: String },
  year: { type: String },
  location: { type: String }
});

module.exports = mongoose.model('Gallery', GallerySchema);
