const mongoose = require('mongoose');
const validator=require('validator');

const PersonSchema = new mongoose.Schema({
  name: { type: String, required: true, minLength: 4, maxLength: 50 },
  age: { type: Number, required: true, min:10 },
  gender: { type: String, required: true, 
    enum: {
    values: ["male", "female", "other"],
    message: `{VALUE} is not a valid gender type`,
  }},
  mobileNumber: { type: String, required: true, minLength: 10, maxLength: 10 },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true } // Reference to User
});

module.exports = mongoose.model('Person', PersonSchema);