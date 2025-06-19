const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  package: String,
  message: String,
  date: { type: Date, default: Date.now },
  status: { type: String, default: 'unread' }
});

module.exports = mongoose.model('Contact', ContactSchema);
