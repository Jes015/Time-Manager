// Icons
import { IoCloseSharp, IoLogoGithub } from 'react-icons/io5'

// Custom components
import { Backdrop } from '.'

// Styles
import styles from './modal.module.css'

export default function BasicModal ({ title, modalOpen, handleModal, children }) {
  return (
    modalOpen && (
      <Backdrop>
        <div className={styles.modal}>
          <div className={styles.modal__container}>
            <header className={styles.modal__header}>
              <span className={styles.modal__title}>{title}</span>
              <button className={styles.modal__button} onClick={handleModal}><IoCloseSharp />  </button>
            </header>
            <main className={styles.modal__main}>
              {children}
            </main>
            <footer className={styles.modal__footer}>
              <a href='https://github.com/Jes015/Time-Manager' target='_blank' rel='noreferrer'><IoLogoGithub /></a>
            </footer>
          </div>
        </div>
      </Backdrop>
    )
  )
}
