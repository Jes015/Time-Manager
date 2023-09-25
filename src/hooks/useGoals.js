// React hooks
import { useEffect, useMemo, useState } from 'react'

// Utils
import { calcProgressBarTime, setLocalStorage } from '@/utilities'

const useGoals = (time, defaultGoals, setTotalTime) => {
  const [actualGoal, setActualGoal] = useState(null)
  const [actualGoals, setGoals] = useState(() => defaultGoals)
  const actualGoalIndex = useMemo(() => actualGoal ? defaultGoals.findIndex((goal) => goal.name === actualGoal.name) : null, [actualGoal])

  useEffect(() => {
    if (actualGoal == null) return
    // Set the new goal to the state
    const tempGoal = { ...actualGoal, actualTime: time, percentCompleted: calcProgressBarTime(actualGoal.time, time) }
    setActualGoal(tempGoal)

    // Save the new goal to the localStorage
    const goalsCopy = [...actualGoals]
    goalsCopy[actualGoalIndex] = tempGoal
    setLocalStorage('goals', JSON.stringify(goalsCopy))

    if (tempGoal.percentCompleted === 100) {
      setCompletedGoal()
    }
  }, [time])

  const addGoalsGlobal = (newGoals) => {
    setLocalStorage('goals', JSON.stringify(newGoals))
    setGoals(newGoals)
  }
  const addNewGoal = (newGoal) => {
    const goalFound = actualGoals.find((goal) => goal.name === newGoal.name)

    if (goalFound != null) {
      throw new Error('This name already exists')
    }

    const newGoals = [newGoal, ...actualGoals]
    addGoalsGlobal(newGoals)
  }

  const removeGoal = (goalName) => {
    const newGoals = actualGoals.filter((goal) => goal.name !== goalName)
    addGoalsGlobal(newGoals)
  }

  const editGoal = (newGoalData, goalName) => {
    const goalToModifyIndex = actualGoals.findIndex((goal) => goal.name === goalName)

    if (goalToModifyIndex === -1) return

    const newGoals = [...actualGoals]
    newGoals[goalToModifyIndex] = newGoalData

    addGoalsGlobal(newGoals)
  }

  const setCompletedGoal = () => {
    setActualGoal({ ...actualGoal, percentCompleted: 100 })
  }

  const setNextGoal = (newGoal) => {
    // Determinate what's the next index for the new goal
    const newGoalIndex = !newGoal ? actualGoalIndex + 1 : actualGoals.findIndex((goal) => newGoal.name === goal.name)
    newGoal = actualGoals[newGoalIndex]

    if (newGoal === undefined) return

    setActualGoal(newGoal)

    // Set total time on the timer
    setTotalTime(newGoal.time)
  }

  return { actualGoal, actualGoals, setNextGoal, addNewGoal, removeGoal, editGoal }
}

export default useGoals
