// Icons
import { IoCloseSharp, IoLogoGithub } from 'react-icons/io5'

// React router
import { Link } from 'react-router-dom'

// React Dom
import { createPortal } from 'react-dom'

// Custom components
import { Backdrop } from '.'

// Styles
import styles from './modal.module.css'

export default function Modal ({ title, modalOpen, handleModal, children }) {
  const handleOnClose = () => {
    handleModal(title)
  }
  return (
    modalOpen && createPortal(
      <Backdrop>
        <div className={styles.modal}>
          <div className={styles.modal__container}>
            <header className={styles.modal__header}>
              <span className={styles.modal__title}>{title}</span>
              <button className={styles.modal__button} onClick={handleOnClose}><IoCloseSharp />  </button>
            </header>
            <main className={styles.modal__main}>
              {children}
            </main>
            <footer className={styles.modal__footer}>
              <Link className={styles.modal__footerLink} to='/credits'>Credits</Link>
              <a href='https://github.com/Jes015/Time-Manager' target='_blank' rel='noreferrer'><IoLogoGithub /></a>
            </footer>
          </div>
        </div>
      </Backdrop>,
      document.getElementById('root')
    )
  )
}
