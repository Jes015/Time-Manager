// Custom components
import { SettingsButton } from './components'

// Styles
import styles from './timerFooter.module.css'

export default function TimerFooter ({ handleModal }) {
  return (
    <footer>
      <div className={styles.timerFooter__container}>
        <SettingsButton handleModal={handleModal} />
      </div>
    </footer>
  )
}
