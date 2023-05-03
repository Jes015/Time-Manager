// React hooks
import { useEffect, useMemo, useState } from 'react'

// Utils
import { calcProgressBarTime, setLocalStorage } from '@/utilities'

const useGoals = (time, goals) => {
  const [actualGoal, setActualGoal] = useState(goals.find((goal) => goal.percentCompleted !== 100))
  const actualGoalIndex = useMemo(() => goals.findIndex((goal) => goal.name === actualGoal.name), [actualGoal])

  useEffect(() => {
    // Set the new goal to the state
    const tempGoal = { ...actualGoal, percentCompleted: calcProgressBarTime(time, actualGoal.time) }
    setActualGoal(tempGoal)

    // Save the new goal to the localStorage
    goals[actualGoalIndex] = tempGoal
    setLocalStorage('goals', JSON.stringify(goals))

    if (tempGoal.percentCompleted === 100) {
      setCompletedGoal()
      setNextGoal()
    }
  }, [time])

  const setCompletedGoal = () => {
    setActualGoal({ ...actualGoal, completed: true })
  }

  const setNextGoal = () => {
    const newGoal = goals[actualGoalIndex + 1]
    if (newGoal) return
    setActualGoal(newGoal)
  }

  return { goals, actualGoal }
}

export default useGoals
