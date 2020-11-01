const { Workout } = require("../models");
var db = require("../models");


module.exports = function(app) {



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
    app.post("/api/workouts", (req, res) => {
        db.Workout.create(req.body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        })
    })

            //????????
    app.put("/api/workouts/:id", ({body,params}, res) => {
        db.Workout.findOneAndUpdate({
            _id: params.id
        }, {$push:{exercises: body}}) 

        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        })
    })



};
