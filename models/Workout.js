const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({

workouts: [{
  
  type: {
    type: String,
    unique: true,
    trim: true,
    required: true
  },
  name: {
    type: String,
    unique: true, //What is unique
    trim: true,
    required: true
  },
  weight: {
    type: Number
  
  },
  sets: {
    type: Number
   
  },
  reps: {
    type: Number

    
  },
  distance: {
    type: Number
  
  
  },
  duration: {
    type: Number
  
    
  }
}]

});



const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;


// I should also be able to track the name, type, weight, sets, reps, and duration of exercise.