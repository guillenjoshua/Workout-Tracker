const { Workout } = require("../models");
var db = require("../models");


module.exports = function(app) {


    app.get("/all", (req, res) => {

        db.Workout.find({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            })
    })

    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        })
    })

    app.get("/api/workouts/range", (req, res) => {
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

            //????????
    app.put("/api/workouts/:id", ({body}, res) => {
        db.Workout.findOneAndUpdate(body) 

        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        })
    })


    // app.get("/stats", (req, res) => {
    //     db.Workout.find({})
    //     .populate("workouts")
    //     .then(dbWorkout => {
    //       res.json(dbWorkout);
    //     })
    //     .catch(err => {
    //       res.json(err);
    //     });
      
    //   });






};
