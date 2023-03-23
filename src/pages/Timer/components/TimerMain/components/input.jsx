// Styles
import styles from '../timerMain.module.css'

export default function Input ({ data, setTime, enable }) {
  const parseValue = (event) => {
    // only keeps last 2 characters
    event.target.value = event.target.value.substring(event.target.value.length - 2)
    // Verify value
    if (Number(event.target.value) > 59) event.target.value = event.target.value.substring(event.target.value.length - 1)
  }
  const handleChange = (event) => {
    // Parse value
    parseValue(event)
    // Set value
    setTime(Object.keys(data)[0], Number(event.target.value))
  }

  // Select input
  const handleClick = (event) => {
    event.target.select()
  }

  // Prevent propagation to system key manager
  const handleKeyUp = (event) => {
    // Prevent stopPropagation method to set new time to system key manager
    if (event.ctrlKey) return
    event.stopPropagation()
  }
  const format = (data2) => data2.toString().length === 1 ? `0${data2}` : data2

  return (
    <input className={styles.input} type='number' value={format(data[Object.keys(data)[0]])} onChange={handleChange} onClick={handleClick} disabled={enable} onKeyUp={handleKeyUp} />
  )
}
