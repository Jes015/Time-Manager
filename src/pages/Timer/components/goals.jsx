// Custom components
import { Goal } from '@/components'

// Styles
import syles from './goals.module.css'

export default function Goals ({ goals, actualGoal }) {
  return (
    <div className={syles.goals}>
      {goals.map((goal) => <Goal key={goal.name} goal={goal} />)}
    </div>
  )
}
