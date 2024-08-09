const express = require("express");
const User = require("../model/user_model");

const router = express.Router();

router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const newUser = new User({ username });

  newUser
    .save()
    .then(() => res.json("User Added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/delete/:id").delete((req, res) => {
  const id = req.params.id;

  User.findByIdAndDelete(id)
    .then(() => res.json("User Deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
});
module.exports = router;
