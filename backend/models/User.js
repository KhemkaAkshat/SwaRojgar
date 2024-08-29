const mongoose = require('mongoose');

// Define the schema for the User model
const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phoneNumber: { type: String, required: true }
});

// Create the model from the schema
const User = mongoose.model('User', userSchema);

// Export the model for use in other files
module.exports = User;
