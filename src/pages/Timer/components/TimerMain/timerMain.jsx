// CUSTOM COMPONENTS
import Time from './components/time'
import Controls from './components/controls'

// Styles
import styles from './timerMain.module.css'

export default function TimerMain ({ time, setTotalTime, start, restartTimer, startStopTimer }) {
  return (
    <main>
      <div className={styles.timerMain__mainContainer}>
        <Time time={time} setTime={setTotalTime} start={start} />
        <div className={styles.timerMain__controlsContainer}>
          <Controls time={time} start={start} startStopTimer={startStopTimer} restartTimer={restartTimer} />
        </div>
      </div>
    </main>
  )
}
