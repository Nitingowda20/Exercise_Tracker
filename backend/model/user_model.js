// import { Schema, model } from "mongoose";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
    },
  },
  {
    timestamps: true,
  }
);

const usermodel = mongoose.model("User", userSchema);
module.exports = usermodel;
