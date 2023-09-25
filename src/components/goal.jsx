// Custom components
import { ProgressBar } from '@/components'

// Styles
import styles from './goal.module.css'

export default function Goal ({ goal, setNextGoal, removeGoal }) {
  const handleOnClickGoalSet = () => {
    setNextGoal(goal)
  }

  const handleOnClickGoalDelete = () => {
    removeGoal(goal.name)
  }

  return (
    <div className={styles.goal}>
      <header className={styles.goal__header}>
        <span>{goal.name}</span>
        {`${goal.time.hours} : ${goal.time.minutes} : ${goal.time.seconds}`}
      </header>
      <footer className={styles.goal__footer}>
        <ProgressBar value={goal.percentCompleted} />
        <button onClick={handleOnClickGoalSet}>Set goal</button>
        <button onClick={handleOnClickGoalDelete}>Delete goal</button>
      </footer>
    </div>
  )
}
