const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({

  day: {
    type: Date,
    default: new Date().setDate(new Date().getDate())
  },
  exercises: Array

});
WorkoutSchema.set('toJSON', { getters: true, virtuals:true });
WorkoutSchema.virtual('totalDuration').get(function() {
  let totalDuration = 0
    this.exercises.forEach(exercise => {
      totalDuration = totalDuration + exercise.duration
    })

    return totalDuration

});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;


// I should also be able to track the name, type, weight, sets, reps, and duration of exercise.