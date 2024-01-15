import { useWorkoutContext } from "../context/WorkoutContext"

const WorkoutDetails = ({ workout }) => {
    const { dispatch } = useWorkoutContext()
  
    const handleClick = async () => {
      const response = await fetch('/api/workouts/' + workout._id, {
        method: 'DELETE'
      })
      const json = await response.json()
  
      if (response.ok) {
        dispatch({type: 'DELETE_WORKOUTbbbbv', payload: json})
      }
    }
  
    return (
      <div className="workoutDetails">
        <h4>{workout.title}</h4>
        <p><strong>Load (kg): </strong>{workout.load}</p>
        <p><strong>Number of reps: </strong>{workout.reps}</p>
        <p>{workout.createdAt}</p>
        <span onClick={handleClick}>delete</span>
      </div>
    )
  }

export default WorkoutDetails