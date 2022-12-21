const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mySchema = new Schema({
  user: String,
  message: {
    type: String,
    default: "Sin nombre",
  },
  date: Date,
});

const model = mongoose.model("Message", mySchema);
module.exports = model;
