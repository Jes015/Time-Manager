// React
import React, { useState } from 'react'

// Mui
import Input from '@mui/joy/Input'
import Box from '@mui/joy/Box'
import IconButton from '@mui/joy/IconButton'
import SendIcon from '@mui/icons-material/Send'
import Typography from '@mui/joy/Typography'

export default function InputModal ({ id, setData, label, placeholder }) {
  const [value, setValue] = useState('')
  const [info, setInfo] = useState('')

  const handleInfo = (message, status) => {
    setInfo({ message, status })
    const timeout = setTimeout(() => {
      setInfo('')
      clearTimeout(timeout)
    }, 4000)
  }

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const handleClick = () => {
    setData(value)
      .then(res => { handleInfo(res, 'success') })
      .catch(err => { handleInfo(err.message, 'danger') })
  }
  return (
    <Box>
      <label htmlFor='url'>{label}</label>
      <Input id={id} placeholder={placeholder} value={value} onChange={handleChange} variant='outlined' sx={{ '--Input-focusedHighlight': 'rgb(80, 80, 80)', '--Input-focusedThickness': '1px' }} endDecorator={<IconButton onClick={handleClick} variant='outlined' color='neutral' sx={{ pr: 0 }}><SendIcon /></IconButton>} />
      <Typography level='body4' color={info.status}>{info.message}</Typography>
    </Box>
  )
}
