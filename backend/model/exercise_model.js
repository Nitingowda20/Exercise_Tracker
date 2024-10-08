// import { Schema, model } from "mongoose";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

const exercisemodel = mongoose.model("Exercise", exerciseSchema);
module.exports = exercisemodel;
