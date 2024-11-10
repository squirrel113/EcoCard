const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  tokenBalance: {
    type: Number,
    default: 0,
  },
  address: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
