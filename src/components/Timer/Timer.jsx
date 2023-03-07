// React
import React, { useState } from 'react'

// MUI
import Button from '@mui/joy/Button'
import Box from '@mui/joy/Box'
import LinearProgress from '@mui/joy/LinearProgress'
import IconButton from '@mui/joy/IconButton'
import SettingsIcon from '@mui/icons-material/Settings'

// Custom components
import Time from './Time'
import Modal from './Modal'

// Custom Hooks
import useTimer from '../../hooks/useTimer'

// Initial states
const defaultTime = { hours: 0, minutes: 0, seconds: 1 }
const defaultAlarmTone = localStorage.getItem('alarmTone') || 'https://soundbible.com/mp3/Tick%20Tock-SoundBible.com-1165545065.mp3'

export default function Timer () {
  const { time, start, startStopTimer, restartTimer, progressNumber, setTotalTime, setAlarmTone } = useTimer(defaultTime, defaultAlarmTone)
  const [modalOpen, setModalOpen] = useState(false)

  const handleModal = () => {
    setModalOpen(!modalOpen)
  }
  return (
    <>
      <Box sx={{ width: '100%', position: 'fixed', top: 0 }}>
        <LinearProgress variant='plain' color='neutral' thickness={2} determinate value={progressNumber} sx={{ '--LinearProgress-radius': '0px' }} />
      </Box>
      <Box>
        <Time time={time} setTime={setTotalTime} start={start} />
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
          {!(time.seconds === 0 && time.minutes === 0 && time.hours === 0) && <Button color='neutral' variant='outlined' sx={{ width: 110, fontSize: 12 }} onClick={startStopTimer}>{start ? 'Stop' : 'Start'}</Button>}
          <Button color='neutral' variant='outlined' sx={{ width: 110, fontSize: 12 }} onClick={restartTimer}>Restart</Button>
        </Box>
      </Box>
      <Box sx={{ position: 'absolute', bottom: 5, right: 5 }}>
        <IconButton variant='outlined' color='neutral' onClick={handleModal}>
          <SettingsIcon />
        </IconButton>
      </Box>
      <Modal modalOpen={modalOpen} handleModal={handleModal} setAlarmTone={setAlarmTone} />
    </>
  )
}
