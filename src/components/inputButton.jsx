// React
import { useState } from 'react'

// Styles
import { AiOutlineSend } from 'react-icons/ai'

// Styles
import styles from './inputButton.module.css'

export default function InputModal ({ id, setData, label, placeholder }) {
  const [value, setValue] = useState('')
  const [info, setInfo] = useState('')

  const handleInfo = (message, status) => {
    setInfo({ message, status })
    const timeout = setTimeout(() => {
      setInfo('')
      clearTimeout(timeout)
    }, 4000)
  }

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const handleClick = () => {
    setData(value)
      .then(res => { handleInfo(res, 'success') })
      .catch(err => { handleInfo(err.message, 'danger') })
  }
  return (
    <div className={styles.inputButton__container}>
      <label className={styles.inputButton__label} htmlFor={id}>{label}</label>
      <div className={styles.inputButton__component}>
        <input className={styles.inputButton__input} id={id} placeholder={placeholder} value={value} onChange={handleChange} />
        <button className={styles.inputButton__button} onClick={handleClick}><AiOutlineSend /></button>
      </div>
      <span className={styles[info.status === 'danger' ? 'inputButton__descriptionError' : 'inputButton__descriptionSucces']}>{info.message}</span>
    </div>
  )
}
