// React hooks
import { useEffect, useMemo, useState } from 'react'

// Utils
import { calcProgressBarTime, setLocalStorage } from '@/utilities'

const useGoals = (time, goals, setTotalTime) => {
  const [actualGoal, setActualGoal] = useState(null)
  const actualGoalIndex = useMemo(() => actualGoal ? goals.findIndex((goal) => goal.name === actualGoal.name) : null, [actualGoal])

  useEffect(() => {
    if (actualGoal == null) return
    // Set the new goal to the state
    const tempGoal = { ...actualGoal, actualTime: time, percentCompleted: calcProgressBarTime(actualGoal.time, time) }
    setActualGoal(tempGoal)

    // Save the new goal to the localStorage
    goals[actualGoalIndex] = tempGoal
    setLocalStorage('goals', JSON.stringify(goals))

    if (tempGoal.percentCompleted === 100) {
      setCompletedGoal()
    }
  }, [time])

  const setCompletedGoal = () => {
    setActualGoal({ ...actualGoal, percentCompleted: 100 })
  }

  const setNextGoal = (newGoal) => {
    // Determinate what's the next index for the new goal
    const newGoalIndex = !newGoal ? actualGoalIndex + 1 : goals.findIndex((goal) => newGoal.name === goal.name)
    newGoal = goals[newGoalIndex]

    if (newGoal === undefined) return

    setActualGoal(newGoal)

    // Set total time on the timer
    setTotalTime(newGoal.time)
  }

  return { goals, actualGoal, setNextGoal }
}

export default useGoals
