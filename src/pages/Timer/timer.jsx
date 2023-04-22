// React
import { useState } from 'react'

// Custom Hooks
import { useDynamicShortCuts, useTimer, useStaticShortCuts } from '@/hooks/'

// Custom components
import { Modal } from '@/components'
import { TimerHeader, TimerMain, TimerFooter, Settings } from './components'

// Config
import { defaultTime, defaultTimerRingtone, defaultTimerVolume } from './config'
import { addShortcut, getShortcut, getShortcutAction } from '@/infrastructure/keyboardshortcuts'

export default function Timer () {
  const { time, start, startStopTimer, restartTimer, totalTime, setTotalTime, setAlarmTone, setAlarmVolume, alarmVolume } = useTimer(defaultTime, defaultTimerRingtone, defaultTimerVolume)
  const [modalOpen, setModalOpen] = useState(false)

  useDynamicShortCuts(time, start, setTotalTime, addShortcut, getShortcut)
  useStaticShortCuts(restartTimer, startStopTimer, start, getShortcutAction)

  const handleModal = () => {
    setModalOpen(!modalOpen)
  }
  return (
    <div style={{ position: 'relative' }}>
      <TimerHeader currentTime={time} totalTime={totalTime} />
      <TimerMain time={time} setTotalTime={setTotalTime} start={start} restartTimer={restartTimer} startStopTimer={startStopTimer} />
      <TimerFooter handleModal={handleModal} />
      <Modal title='Settings' modalOpen={modalOpen} handleModal={handleModal}>
        <Settings setAlarmTone={setAlarmTone} setAlarmVolume={setAlarmVolume} alarmVolume={alarmVolume} />
      </Modal>
    </div>
  )
}
