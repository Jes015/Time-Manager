// React
import { useState } from 'react'

// Custom Hooks
import useTimer from '@/hooks/useTimer'

// Custom components
import { KeyboardManager, Modal } from '@/components'
import { TimerHeader, TimerMain, TimerFooter, Settings } from './components'

// Config
import { defaultTime, defaultTimerRingtone, defaultTimerVolume } from './config'
import { timerShorcut } from '@/infrastructure/keyboardshortcuts'

export default function Timer () {
  const { time, start, startStopTimer, restartTimer, totalTime, setTotalTime, setAlarmTone, setAlarmVolume, alarmVolume } = useTimer(defaultTime, defaultTimerRingtone, defaultTimerVolume)
  const [modalOpen, setModalOpen] = useState(false)

  const handleModal = () => {
    setModalOpen(!modalOpen)
  }
  return (
    <KeyboardManager time={time} setTotalTime={setTotalTime} start={start} shortcuts={timerShorcut}>
      <div style={{ position: 'relative' }}>
        <TimerHeader currentTime={time} totalTime={totalTime} />
        <TimerMain time={time} setTotalTime={setTotalTime} start={start} restartTimer={restartTimer} startStopTimer={startStopTimer} />
        <TimerFooter handleModal={handleModal} />
        <Modal title='Settings' modalOpen={modalOpen} handleModal={handleModal}>
          <Settings setAlarmTone={setAlarmTone} setAlarmVolume={setAlarmVolume} alarmVolume={alarmVolume} />
        </Modal>
      </div>
    </KeyboardManager>
  )
}
