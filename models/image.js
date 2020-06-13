const mongoose = require('mongoose');

// create image schema
const imageSchema = new mongoose.Schema({
  img: {
    data: Buffer,
    imgType: String
  }
});

// create the Image class and export it
module.exports = new mongoose.model('Image', imageSchema);