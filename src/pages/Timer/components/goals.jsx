// Custom components
import { ActualGoalSection, AddGoalsSection, GoalsSection } from './Sections/'

// Styles
import styles from './goals.module.css'

export default function Goals ({ goals, actualGoal, setNextGoal, addNewGoal, removeGoal, editGoal }) {
  return (
    <div className={styles.goals}>
      {
        actualGoal &&
        <ActualGoalSection {...{ setNextGoal, actualGoal }} />
      }
      <AddGoalsSection {...{ addNewGoal }}/>
      <GoalsSection {...{ goals, setNextGoal, actualGoal, removeGoal }} />
    </div >
  )
}
