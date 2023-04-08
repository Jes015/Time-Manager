import { Link } from 'react-router-dom'
import styles from './index.module.css'

export default function Index () {
  return (
    <div className={styles.wrap}>
      <main style={{ height: '100%' }}>
        <section className={styles.mainSection}>
          <Link className={styles.link} to='/timer'>Timer</Link>
          <Link className={styles.link} to='/credits'>Credits</Link>
        </section>
      </main>
    </div>
  )
}
