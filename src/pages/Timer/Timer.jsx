// React
import { useState } from 'react'

// Custom Hooks
import useTimer from '../../hooks/useTimer'

// JOY
import Box from '@mui/joy/Box'

// Custom components
import { Modal } from '../../components'
import { TimerHeader, TimerMain, TimerFooter, Settings } from './components'

// Initial states
import { defaultTime, defaultAlarmTone } from './config'

export default function Timer () {
  const { time, start, startStopTimer, restartTimer, progressNumber, setTotalTime, setAlarmTone } = useTimer(defaultTime, defaultAlarmTone)
  const [modalOpen, setModalOpen] = useState(false)

  const handleModal = () => {
    setModalOpen(!modalOpen)
  }
  return (
    <Box sx={{ position: 'relative' }}>
      <TimerHeader progressNumber={progressNumber} />
      <TimerMain time={time} setTotalTime={setTotalTime} start={start} restartTimer={restartTimer} startStopTimer={startStopTimer} />
      <TimerFooter handleModal={handleModal} />
      <Modal modalOpen={modalOpen} handleModal={handleModal}>
        <Settings setAlarmTone={setAlarmTone} />
      </Modal>
    </Box>
  )
}
