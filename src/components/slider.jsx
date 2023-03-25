// Styles
import styles from './slider.module.css'

export default function Slider ({ label, id, value, setData }) {
  const handleMouseUp = (event) => {
    setData(event.target.value)
  }
  return (
    <div className={styles.slider__container}>
      <label className={styles.slider__label} htmlFor={id}>{label}</label>
      <input id={id} defaultValue={value} className={styles.slider__container} type='range' min='0' max='1' step='0.02' onMouseUp={handleMouseUp} />
    </div>
  )
}
