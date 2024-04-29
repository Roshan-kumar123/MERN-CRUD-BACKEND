const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Define the schema
const workoutSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    reps: {
      type: Number,
      required: true,
    },
    load: {
      type: Number,
      required: true,
    },
    user_id: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Create the model
const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
