// Styles
import styles from './backdrop.module.css'

export default function Backdrop ({ children }) {
  // Prevent propagation to system key manager
  const handleKeyUp = (event) => {
    event.stopPropagation()
  }

  return (
    <div className={styles.backdrop__container} onKeyUp={handleKeyUp}>
      {children}
    </div>
  )
}
