const express = require("express");
const HomeModel = require("../models/homeModel.js");
//const { verifyUser } = require("../controllers/userController.js");

const router = express.Router();

router.post("/post", (req, res) => {
  HomeModel.create(req.body)
    .then((homes) => res.json(homes))
    .catch((error) => res.json(error));
});

router.get("/:id", async (req, res) => {
  try {
    const home = await HomeModel.findById(req.params.id);
    res.status(200).json(home);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/", (req, res) => {
  HomeModel.find({})
    .then((homes) => res.json(homes))
    .catch((error) => res.json(error));
});

router.get("/getHome/:id", (req, res) => {
  const id = req.params.id;
  HomeModel.findById({ _id: id })
    .then((homes) => res.json(homes))
    .catch((error) => res.json(error));
});

router.put("/updateHome/:id", (req, res) => {
  const id = req.params.id;
  HomeModel.findByIdAndUpdate(
    { _id: id },
    {
      title: req.body.title,
      text: req.body.text,
      image: req.body.image,
    }
  )
    .then((homes) => res.json(homes))
    .catch((error) => res.json(error));
});

router.delete("/deleteHome/:id", (req, res) => {
  const id = req.params.id;
  HomeModel.findByIdAndDelete({ _id: id })
    .then((homes) => res.json(homes))
    .catch((error) => res.json(error));
});

module.exports = router;
