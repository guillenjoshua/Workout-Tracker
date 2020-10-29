const { Workout } = require("../models");
var db = require("../models");
const path = require ("path");

module.exports = function(app) {


    // app.get("/all", (req, res) => {

    //     db.Workout.find({})
    //         .then(dbWorkout => {
    //             res.json(dbWorkout);
    //         })
    //         .catch(err => {
    //             res.json(err);
    //         })
    // })

    app.get("/api/workouts", ({body}, res) => {
        db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        })
    })

    app.get("/api/workouts/range", ({body}, res) => {
        db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        })

    })



                            //What is body?
    app.post("/api/workouts", ({body}, res) => {
        db.Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        })
    })


    app.post("/api/workouts/:id", ({body}, res) => {
        db.Workout.create(body)
        
    })


    app.get("/stats", (req, res) => {
        db.Workout.find({})
        .populate("workouts")
        .then(dbWorkout => {
          res.json(dbWorkout);
        })
        .catch(err => {
          res.json(err);
        });
      
      });






};
