const express = require("express");
let Exercise = require("../model/exercise_model");

const router = express.Router();

router.route("/").get((req, res) => {
  Exercise.find()
    .then((exercises) => res.json(exercises))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const newExercise = new Exercise({ username, description, duration, date });

  newExercise
    .save()
    .then(() => res.json("Exercise Added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

//To delete by particular ID
router.route("/:id").delete((req, res) => {
  const id = req.params.id;

  Exercise.findByIdAndDelete(id)
    .then(() => res.json("Exercise Deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
});

//To find a collection on particular id
router.route("/:id").get((req, res) => {
  const id = req.params.id;
  Exercise.findById(id)
    .then((Exercise) => res.json(Exercise))
    .catch((err) => res.status(400).json("Error: " + err));
});

//To Update by particular ID
router.route("/update/:id").post((req, res) => {
  const id = req.params.id;

  Exercise.findById(id)
    .then((Exercise) => {
      Exercise.username = req.body.username;
      Exercise.description = req.body.description;
      Exercise.duration = Number(req.body.duration);
      Exercise.date = Date.parse(req.body.date);

      Exercise.save()
        .then(() => res.json("Exercise Updated"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
