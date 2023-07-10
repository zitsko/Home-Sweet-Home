const express = require("express");
const HomeModel = require("../models/homeModel.js");
const { verifyUser } = require("../controllers/userController.js");

const router = express.Router();

//Create

router.post("/post", async (req, res) => {
  const home = new HomeModel(req.body); //what we can taking from user
  //we create a homemodel inside to our DB,and after we try catch method we save the new home model inside the DB,but if something goes wrong we catch it with the catch error.
  try {
    const savedHome = await home.save();
    res.status(200).json(savedHome);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Update method
router.put("/:id", async (req, res) => {
  try {
    const updateHome = await HomeModel.findByIdAndUpdate(
      {_id:req.params.id} , req.body
      // { $set: req.body },
      // { new: true }
    ); //set method is mongodB method the inside in the set we pass what we are going to change, the new will return the new version of our document
    res.status(200).json(updateHome);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Delete method

router.delete("/:id", async (req, res) => {
  try {
    await HomeModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Home deleted!" }); //we can make a varieble deletedHome and in json to put the deletedHome but we dont receive any message..
  } catch (error) {
    res.status(500).json(error);
  }
});
//get method with specific id
router.get("/:id", async (req, res) => {
  try {
    const home = await HomeModel.findById(req.params.id);
    res.status(200).json(home);
  } catch (error) {
    res.status(500).json(error);
  }
});

//get method all homes
router.get("/", async (req, res) => {
  // await verifyUser(req, res);
  try {
    const homes = await HomeModel.find();
    res.status(200).json(homes);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
