// Custom components
import { ProgressBar } from '../../../../components'

export default function TimerHeader ({ progressNumber }) {
  return (
    <header style={{ position: 'relative' }}>
      <ProgressBar value={progressNumber} />
    </header>
  )
}
