// JOY
import Button from '@mui/joy/Button'

export default function Controls ({ time, start, startStopTimer, restartTimer }) {
  return (
    <>
      {!(time.seconds === 0 && time.minutes === 0 && time.hours === 0) && <Button color='neutral' variant='outlined' sx={{ width: 110, fontSize: 12 }} onClick={startStopTimer}>{start ? 'Stop' : 'Start'}</Button>}
      <Button color='neutral' variant='outlined' sx={{ width: 110, fontSize: 12 }} onClick={restartTimer}>Restart</Button>
    </>
  )
}
