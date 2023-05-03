// Styles
import styles from '../timerFooter.module.css'

function IconButton ({ title, handleModal, children }) {
  const handleOnOpen = () => {
    handleModal(title)
  }
  return (
    <button className={styles.timerFooter__button} onClick={handleOnOpen}>
      {children}
    </button>
  )
}

export default IconButton
