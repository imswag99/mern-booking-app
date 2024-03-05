const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var bookingSchema = new mongoose.Schema({
  place: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: 'Place'
  },
  user: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  checkIn: {
    type: Date,
    required: true,
  },
  checkOut: {
    type: Date,
    required: true,
  },
  numberOfGuests: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

//Export the model
module.exports = mongoose.model("Booking", bookingSchema);
