// Icons
import { AiOutlineLink } from '@/components'

// Styles
import styles from './contributor.module.css'

export default function Contributor ({ author, organization }) {
  const { nameAuthor, urlAuthor, rol } = author
  const { nameOrganization, urlOrganization } = organization
  return (
    <div className={styles.contributor__container}>
      <header className={styles.contributor__header}>
        <span>{nameAuthor}</span>
        <a className={styles.contributor__authorUrl} target='_blank' rel='noreferrer' href={urlAuthor}>
          <AiOutlineLink />
        </a>
      </header>
      <main>
        <span className={styles.contributor__rol}>{rol}</span>
      </main>
      <footer>
        <span className={styles.contributor__organization}>from <a target='_blank' rel='noreferrer' href={urlOrganization}>{nameOrganization}</a></span>
      </footer>
    </div>
  )
}
