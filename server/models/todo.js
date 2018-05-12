const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    default: ""
  }
});

module.exports = mongoose.model("todos", todoSchema);
