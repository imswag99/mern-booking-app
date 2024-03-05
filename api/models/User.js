const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    name: String,
    email:{
        type:String,
        unique:true,
    },
    password: String,
});

//Export the model
module.exports = mongoose.model('User', userSchema);