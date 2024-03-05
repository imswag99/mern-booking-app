const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var placeSchema = new mongoose.Schema({
    owner: {
      type: mongoose.Types.ObjectId,
      ref: 'User'
    },
    title: String,
    address: String,
    photos: [String],
    description: String,
    perks: [String],
    extraInfo: String,
    checkIn: Number,
    checkOut: Number,
    maxGuests: Number,
    price: Number
});

//Export the model
module.exports = mongoose.model('Place', placeSchema);