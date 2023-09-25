import { Goal } from '@/components'
import styles from './section.module.css'

export const ActualGoalSection = ({ setNextGoal, actualGoal }) => {
  return (
        <section>
                <main>
                    <h2 className={styles.section__title}>Actual goal</h2>
                    <Goal setNextGoal={setNextGoal} goal={actualGoal} />
                </main>
        </section>
  )
}
