// React
import { useState } from 'react'

// Custom Hooks
import useTimer from '../../hooks/useTimer'

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
    <div style={{ position: 'relative' }}>
      <TimerHeader progressNumber={progressNumber} />
      <TimerMain time={time} setTotalTime={setTotalTime} start={start} restartTimer={restartTimer} startStopTimer={startStopTimer} />
      <TimerFooter handleModal={handleModal} />
      <Modal title='Settings' modalOpen={modalOpen} handleModal={handleModal}>
        <Settings setAlarmTone={setAlarmTone} />
      </Modal>
    </div>
  )
}
