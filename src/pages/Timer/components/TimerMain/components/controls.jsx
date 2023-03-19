// Styles
import styles from '../timerMain.module.css'

export default function Controls ({ time, start, startStopTimer, restartTimer }) {
  return (
    <>
      {!(time.seconds === 0 && time.minutes === 0 && time.hours === 0) && <button className={styles.controls__button} onClick={startStopTimer}>{start ? 'Stop' : 'Start'}</button>}
      <button className={styles.controls__button} onClick={restartTimer}>Restart</button>
    </>
  )
}
