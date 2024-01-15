const Workout = require('../models/workoutmodel')
const mongoose = require('mongoose')

//Get a list of all workouts
const getWorkouts = async (req, res) => {
    const Workouts = await Workout.find({}).sort({createdAt: -1})

    res.status(200).json(Workouts)
} 

//Get a single workout 
const getWorkout = async (req, res) =>{
    const { id } = req.params
    const workout = await Workout.findById(id)

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such workout'})
    }

    if(workout){
        res.status(200).json(workout)
    }
    else{
        return res.status(404).json({error: "Workout does not exist"})
    }
}


//Create a workout
const createWorkout = async (req, res) => {
    const {title, load, reps} = req.body
    try {
      const workout = await Workout.create({title, load, reps})
      res.status(200).json(workout)
    } catch (error) {
      res.status(400).json({error: error.message})
    }
}

//Delete a workout
const deleteWorkout = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such workout'})
    }

    const workoutDelete = await Workout.findOneAndDelete({_id: id}) 

    if(!workoutDelete){
        return res.status(404).json({error: "Workout does not exist"})
    }
    else{
        res.status(200).json(workoutDelete)
    }
}

//Update a workout

const updateWorkout = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such workout'})
    }

    const workoutUpdate = await Workout.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!workoutUpdate){
        return res.status(400).json({error: "Workout does not exist"})
    }
    
    res.status(200).json(workoutUpdate)
    
}






module.exports = {
    getWorkout,
    getWorkouts,
    createWorkout,
    deleteWorkout,
    updateWorkout
}