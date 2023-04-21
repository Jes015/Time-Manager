// Styles
import styles from './selectOption.module.css'

export default function SelectOption ({ status, toggle }) {
  const handleClick = () => {
    toggle()
  }

  return (
    <div className={styles.selectOption}>
      <header className={styles.selectOption__header}>
        <span className={styles.selectOption__title}>Low mode</span>
        <span className={styles.selectOption__chip}>{status ? 'Activated' : 'Desactivated'} </span>
      </header>
      <button className={styles.selectOption__button} onClick={handleClick}>{status ? 'Off' : 'On'}</button>
    </div>
  )
}
