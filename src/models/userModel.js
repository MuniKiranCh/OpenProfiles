const mongoose = require('mongoose');
const validator=require('validator');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true, 
    validate(value) {
    if (!validator.isStrongPassword(value)) {
      throw new Error("Enter a Strong Password: " + value);
    }
  }}
});

module.exports = mongoose.model('User', userSchema);
