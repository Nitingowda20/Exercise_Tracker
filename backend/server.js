const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 6969;

app.use(cors());
express().use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
// console.log(uri);

mongoose
  .connect(uri)
  .then(() => {
    console.log("MongoDB Connected.");
  })
  .catch((ex) => {
    console.log("Error while establishing db connection", ex);
  });

const usersRouter = require("./routes/user_route");
app.use("/users", usersRouter);

const exerciseRouter = require("./routes/exercise_route");
app.use("/exercises", exerciseRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
