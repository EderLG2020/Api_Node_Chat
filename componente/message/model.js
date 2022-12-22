const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mySchema = new Schema({
  chat: {
    type: String,
    ref: "Chat",
  },
  user: {
    type: Schema.ObjectId,
    ref: "User",
  },
  message: {
    type: String,
    default: "Sin nombre",
  },
  date: Date,
  file: String,
});

const model = mongoose.model("Message", mySchema);
module.exports = model;
