// Custom components
import InputTime from './input'

// Styles
import styles from '../timerMain.module.css'

export default function Time ({ time, setTime, start }) {
  const { hours, minutes, seconds } = time

  const handleTime = (part, data) => {
    setTime({ ...time, [part]: data })
  }

  return (
    time &&
      <div className='flex justify-items-center'>
        <InputTime data={({ hours })} setTime={handleTime} enable={start} />
        <span className={styles.time__divider}>:</span>
        <InputTime data={({ minutes })} setTime={handleTime} enable={start} />
        <span className={styles.time__divider}>:</span>
        <InputTime data={({ seconds })} setTime={handleTime} enable={start} />
      </div>
  )
}
