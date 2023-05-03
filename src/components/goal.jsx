// Custom components
import { ProgressBar } from '@/components'

// Styles
import styles from './goal.module.css'

export default function Goal ({ goal, setNextGoal }) {
  const handleOnClickGoal = () => {
    setNextGoal(goal)
  }
  return (
    <div className={styles.goal}>
      <header className={styles.goal__header}>
        <span>{goal.name}</span>
        {`${goal.time.hours} : ${goal.time.minutes} : ${goal.time.seconds}`}
      </header>
      <footer className={styles.goal__footer}>
        <ProgressBar value={goal.percentCompleted} />
        <button onClick={handleOnClickGoal}>Set goal</button>
        <button>Delete goal</button>
      </footer>
    </div>
  )
}
