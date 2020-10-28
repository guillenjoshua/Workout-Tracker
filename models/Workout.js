const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  name: {
    type: String,
    unique: true
  },
  type: {
    type: String,
    unique: true
  },
  weight: {
    type: Number,
    unique: true
  },
  sets: {
    type: Number,
    unique: true
  },
  reps: {
    type: Number,
    unique: true
  },
  duration: {
    type: Number,
    unique: true
  }
  
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;


// I should also be able to track the name, type, weight, sets, reps, and duration of exercise.