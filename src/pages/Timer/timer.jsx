// React
import { useState } from 'react'

// Custom Hooks
import { useGoals, useStaticShortCuts, useTimer } from '@/hooks/'

// Custom components
import { Modal } from '@/components'
import { Goals, Settings, TimerFooter, TimerHeader, TimerMain } from './components'

// Consts
import { footerButtons } from './consts'

// Config
import { defaultGoals, defaultTime, defaultTimerRingtone, defaultTimerVolume } from './config'

export default function Timer () {
  const { time, start, startStopTimer, restartTimer, totalTime, setTotalTime, setAlarmTone, setAlarmVolume, alarmVolume } = useTimer(defaultTime, defaultTimerRingtone, defaultTimerVolume)
  const { goals, actualGoal, setNextGoal } = useGoals(time, defaultGoals, setTotalTime)

  const [modalOpen, setModalOpen] = useState({ [footerButtons.Settings]: { open: false }, [footerButtons.Goals]: { open: false } })

  useStaticShortCuts(restartTimer, startStopTimer, start)

  const handleModal = (title) => {
    const newModalState = modalOpen[title]
    newModalState.open = !newModalState.open

    setModalOpen({ [title]: newModalState, ...modalOpen })
  }

  return (
    <div style={{ position: 'relative' }}>
      <TimerHeader currentTime={time} totalTime={totalTime} />
      <TimerMain time={time} setTotalTime={setTotalTime} start={start} restartTimer={restartTimer} startStopTimer={startStopTimer} />
      <TimerFooter handleModal={handleModal} />
      <Modal title={modalOpen[footerButtons.Settings].open ? footerButtons.Settings : footerButtons.Goals} modalOpen={modalOpen[footerButtons.Settings].open || modalOpen[footerButtons.Goals].open} handleModal={handleModal}>
        {modalOpen[footerButtons.Settings].open && <Settings setAlarmTone={setAlarmTone} setAlarmVolume={setAlarmVolume} alarmVolume={alarmVolume} />}
        {modalOpen[footerButtons.Goals].open && <Goals setNextGoal={setNextGoal} goals={goals} actualGoal={actualGoal} />}
      </Modal>
    </div>
  )
}
