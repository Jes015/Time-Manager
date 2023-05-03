// Custom components
import { Goal } from '@/components'

// Styles
import styles from './goals.module.css'

export default function Goals ({ goals, actualGoal, setNextGoal }) {
  return (
    <div className={styles.goals}>
      {
        actualGoal &&
          <section>
            <span className={styles.goals__SectionTitle}>Actual Goal</span>
            <Goal setNextGoal={setNextGoal} goal={actualGoal} />
          </section>
      }
      <section>
        <span className={styles.goals__SectionTitle}>All goals</span>
        <div className={[styles.goals__AllGoals, !actualGoal && styles.goalsDesactivated].join(' ')}>
          {goals.map((goal) => <Goal key={goal.name} setNextGoal={setNextGoal} goal={goal} />)}
        </div>
      </section>
    </div>
  )
}
