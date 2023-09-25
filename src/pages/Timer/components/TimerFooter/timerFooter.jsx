// Custom components
import { AiFillBook, AiFillSetting } from '@/components'
import IconButton from './components/settingsButton'

// Styles
import styles from './timerFooter.module.css'

// Consts
import { footerButtons } from '../../consts'

export default function TimerFooter ({ handleModal }) {
  return (
    <footer className={styles.timerFooter}>
      <div>
        <IconButton title={footerButtons.Goals} handleModal={handleModal}>
          <AiFillBook />
        </IconButton>
      </div>
      <div>
        <IconButton title={footerButtons.Settings} handleModal={handleModal}>
          <AiFillSetting />
        </IconButton>
      </div>
    </footer>
  )
}
