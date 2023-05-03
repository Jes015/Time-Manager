// Custom components
import { ProgressBar } from '@/components'

// Styles
import styles from './goal.module.css'

export default function Goal ({ goal }) {
  return (
    <div className={styles.goal}>
      <header>
        <ProgressBar value={goal.percentCompleted} />
      </header>
      <main>
        {goal.name}
        {goal.percentCompleted === 100 && <span>Completed</span>}
      </main>
      <footer className={styles.goal__footer}>
        {`${goal.time.hours} : ${goal.time.minutes} : ${goal.time.seconds}`}
        <button>Set goal</button>
      </footer>
    </div>
  )
}
