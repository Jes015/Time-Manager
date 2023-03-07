// React
import React from 'react'

// MUI
import Box from '@mui/joy/Box'
import Typography from '@mui/joy/Typography'

// Custom components
import InputTime from './InputTime'

export default function Time ({ time, setTime, start }) {
  const { hours, minutes, seconds } = time

  const handleTime = (part, data) => {
    setTime({ ...time, [part]: data })
  }

  return (
    time &&
      <Box sx={{ display: 'flex', justifyItems: 'center' }}>
        <InputTime data={({ hours })} setTime={handleTime} enable={start} />
        <Typography level='display1'>:</Typography>
        <InputTime data={({ minutes })} setTime={handleTime} enable={start} />
        <Typography level='display1'>:</Typography>
        <InputTime data={({ seconds })} setTime={handleTime} enable={start} />
      </Box>
  )
}
