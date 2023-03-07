// React
import React from 'react'

// MUI
import Box from '@mui/joy/Box'

// Custom components
import Timer from '../components/Timer/Timer'

export default function Temp () {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', paddingBottom: '10vh' }}>
      <Timer />
    </Box>
  )
}
