let mongoose = require("mongoose");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

const userModel = require("../models/userModel");

var userSignup = async (req, res) => {
  var checkUser = await userModel.findOne({ username: req.body.username });
  if (checkUser) {
    res.send({ msg: "This username already exists" });
  }
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(req.body.password, salt, async (err, hash) => {
      var user = { username: req.body.username, password: hash };
      await userModel.create(user);
      res.send({ msg: "The user saved successfully" });
    });
  });
};

var userLogin = async (req, res) => {
  var user = await userModel.findOne({ username: req.body.username });
  if (user) {
    bcrypt.compare(req.body.password, user.password, function (err, result) {
      if (result) {
        //create the token to send it back to the front
        //payload + secret ==> token
        var token = jwt.sign({ id: user._id }, "greenfield");
        res.send({ token });
      } else {
        res.send({ msg: "wrong password" });
      }
    });
  } else {
    res.send({ msg: "wrong username" });
  }
};

//if the token is valid, return the userdata
var verifyUser = async (req, res) => {
  if (!req.body.token) {
    res.send({ msg: false });
  }
  try {
    var payload = jwt.verify(req.body.token, "greenfield");
    if (payload) {
      var foundUser = await userModel.findOne({ _id: payload.id });
      if (foundUser) {
        res.send(foundUser);
      } else {
        res.send("The token is invalid");
      }
    }
  } catch (err) {
    res.send("The token is invalid");
  }
};

module.exports = {
  userLogin,
  userSignup,
  verifyUser,
};
