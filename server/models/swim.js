const mongoose = require("mongoose");

const { Schema } = mongoose;

const swimSchema = new Schema({
  where: String,
  name: String,
});

const Swim = mongoose.model("Swim", swimSchema);

module.exports = Swim;
