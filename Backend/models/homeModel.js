const mongoose = require("mongoose");

const HomeSchema = new mongoose.Schema({
  /*    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    photos: {
        type: [String],    //an array of string because we want many photos 
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
    */
  title: { type: String, required: true },
  text: { type: String, required: true },
  image: { type: String, required: true },
});

const HomeModel = mongoose.model("homes", HomeSchema);

module.exports = HomeModel;
