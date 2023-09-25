import { Modal } from '@/components'
import { useGoals, useStaticShortCuts, useTimer } from '@/hooks/'
import { useState } from 'react'
import { AdSpace, Goals, Settings, TimerFooter, TimerHeader, TimerMain } from './components'
import { defaultGoals, defaultTime, defaultTimerRingtone, defaultTimerVolume } from './config'
import { footerButtons } from './consts'

export default function Timer () {
  const {
    time,
    start,
    startStopTimer,
    restartTimer,
    totalTime,
    setTotalTime,
    setAlarmTone,
    setAlarmVolume,
    alarmVolume
  } = useTimer(defaultTime, defaultTimerRingtone, defaultTimerVolume)


  const {
    actualGoal,
    actualGoals,
    setNextGoal,
    addNewGoal,
    removeGoal,
    editGoal
  } = useGoals(time, defaultGoals, setTotalTime)

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
      <AdSpace />
      <TimerMain time={time} setTotalTime={setTotalTime} start={start} restartTimer={restartTimer} startStopTimer={startStopTimer} />
      <TimerFooter handleModal={handleModal} />
      <Modal title={modalOpen[footerButtons.Settings].open ? footerButtons.Settings : footerButtons.Goals} modalOpen={modalOpen[footerButtons.Settings].open || modalOpen[footerButtons.Goals].open} handleModal={handleModal}>
        {modalOpen[footerButtons.Settings].open && <Settings setAlarmTone={setAlarmTone} setAlarmVolume={setAlarmVolume} alarmVolume={alarmVolume} />}
        {modalOpen[footerButtons.Goals].open && <Goals {...{ addNewGoal, setNextGoal, removeGoal, editGoal, goals: actualGoals, actualGoal }} />}
      </Modal>
    </div>
  )
}
