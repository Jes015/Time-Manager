// JOY
import Divider from '@mui/joy/Divider'
import Box from '@mui/joy/Box'

export default function ModalMain ({ children }) {
  return (
    <main>
      <Divider />
      <Box sx={{ py: '14px' }}>
        {children}
      </Box>
      <Divider />
    </main>
  )
}
