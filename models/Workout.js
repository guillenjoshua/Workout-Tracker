const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({

workouts: [{
  
  name: {
    type: String,
    unique: true,
    required: true
  },
  type: {
    type: String,
    unique: true,
    required: true
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
}]
  // schema.set('toJSON', {
  //   virtuals: true
  // });
  
});



const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;


// I should also be able to track the name, type, weight, sets, reps, and duration of exercise.