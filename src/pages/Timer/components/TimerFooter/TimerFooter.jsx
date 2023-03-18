// Joy UI
import Box from '@mui/joy/Box'

// Custom components
import { SettingsButton } from './components'

export default function TimerFooter ({ handleModal }) {
  return (
    <footer>
      <Box sx={{ position: 'absolute', bottom: 5, right: 5 }}>
        <SettingsButton handleModal={handleModal} />
      </Box>
    </footer>
  )
}
