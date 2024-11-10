const mongoose = require("mongoose");

const scanSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  amountSol: {
    type: Number,
    default: 0,
  },
  items: {
    type: Array,
    default: [],
  },
  date: {
    type: Date,
    default: Date.now,
  },
  score: {
    type: Number,
  },
});

module.exports = mongoose.model("Scan", scanSchema);
