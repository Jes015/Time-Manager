// JOY
import Box from '@mui/joy/Box'
import LinearProgress from '@mui/joy/LinearProgress'

export default function TimerHeader ({ progressNumber }) {
  return (
    <header>
      <Box sx={{ width: '100%', position: 'absolute', top: 0, left: 0 }}>
        <LinearProgress variant='plain' color='neutral' thickness={2} determinate value={progressNumber} sx={{ '--LinearProgress-radius': '0px' }} />
      </Box>
    </header>
  )
}
