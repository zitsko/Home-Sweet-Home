const mongoose = require("mongoose");

const HomeSchema = new mongoose.Schema({
    title: { type: String, required: true },
    text: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
  });
  

const HomeModel = mongoose.model("homes", HomeSchema);

module.exports = HomeModel;
