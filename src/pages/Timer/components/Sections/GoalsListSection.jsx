import { Goal } from '@/components'
import styles from './section.module.css'

export const GoalsSection = ({ goals, setNextGoal, actualGoal, removeGoal }) => {
  return (
        <section>
            <header>
                <h3 className={styles.section__title}>Goals</h3>
            </header>
            <main>
                <div className={[styles.section__AllGoals, !actualGoal && styles.goalsDesactivated].join(' ')}>
                    {goals.map((goal) => <Goal key={goal.name} {...{ setNextGoal, goal, removeGoal }} />)}
                </div>
            </main>
        </section>
  )
}
