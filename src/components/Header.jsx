
// React
import React from 'react'

// MUI
import Typography from '@mui/joy/Typography'
import Tooltip from '@mui/joy/Tooltip'
import LockClock from '@mui/icons-material/HourglassBottom'
import { useTheme } from '@mui/joy/styles'
import Box from '@mui/system/Box'

export default function Header () {
  const theme = useTheme()
  return (
    <header style={{ height: '54px', backgroundColor: theme.colorSchemes.dark.palette.background.level1 }}>
      <Box sx={{ height: '100%', width: '90%', margin: 'auto' }}>
        <Tooltip title='Logo' variant='solid'>
          <Box sx={{ height: '100%', display: 'inline-flex', alignItems: 'center', gap: 0.5 }}>
            <LockClock />
            <Typography level='h6'><span style={{ backgroundColor: '#690375', padding: '3px 4px', borderRadius: '4px 0px 0px 4px' }}>Time</span><span style={{ backgroundColor: theme.colorSchemes.dark.palette.background.surface, padding: 2, borderRadius: '0px 5px 5px 0px' }}>Manager</span></Typography>
          </Box>
        </Tooltip>
      </Box>
    </header>
  )
}
