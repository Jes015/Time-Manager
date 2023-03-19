// Icons
import { AiFillSetting } from 'react-icons/ai'

// Styles
import styles from '../timerFooter.module.css'

export default function SettingsButton ({ handleModal }) {
  return (
    <button className={styles.timerFooter__button} onClick={handleModal}>
      <AiFillSetting />
    </button>
  )
}
