// Require mongoose
const mongoose = require('mongoose');

// Create a user schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  //etc,
});

// Create a model from the schema
const UserModel = mongoose.model('users', userSchema);

// Export the model
module.exports = UserModel;