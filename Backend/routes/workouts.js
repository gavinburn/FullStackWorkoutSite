const express = require('express')
const Workout = require('../models/workoutmodel')
const {createWorkout} = require('../Controllers/workoutControllers')
const {getWorkout} = require('../Controllers/workoutControllers')
const {getWorkouts} = require('../Controllers/workoutControllers')
const {deleteWorkout} = require('../Controllers/workoutControllers')
const {updateWorkout} = require('../Controllers/workoutControllers')

const router = express.Router()

// GET all workouts
router.get('/', getWorkouts)

// GET a single workout
router.get('/:id', getWorkout)

// POST a new workout
router.post('/', createWorkout)

// DELETE a workout
router.delete('/:id', deleteWorkout)

// UPDATE a workout
router.patch('/:id', updateWorkout)

module.exports = router