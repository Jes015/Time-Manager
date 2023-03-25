// Custom components
import { ProgressBar } from '@/components'

// Utilities
import { calcProgressBarTime } from '@/utilities'

export default function TimerHeader ({ totalTime, currentTime }) {
  return (
    <header style={{ position: 'relative' }}>
      <ProgressBar value={calcProgressBarTime(totalTime, currentTime)} />
    </header>
  )
}
