// JOY
import Box from '@mui/joy/Box'

// CUSTOM COMPONENTS
import Time from './components/time'
import Controls from './components/controls'

export default function TimerMain ({ time, setTotalTime, start, restartTimer, startStopTimer }) {
  return (
    <main>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', paddingBottom: '10vh' }}>
        <Time time={time} setTime={setTotalTime} start={start} />
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Controls time={time} start={start} startStopTimer={startStopTimer} restartTimer={restartTimer} />
        </Box>
      </Box>
    </main>
  )
}
