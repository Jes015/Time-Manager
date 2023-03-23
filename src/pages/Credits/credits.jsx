// Custom components
import Contributor from './components/contributor'

// Styles
import styles from './credits.module.css'

export default function Credtis () {
  const authors = [
    {
      nameAuthor: 'Lesiakower',
      urlAuthor: 'https://pixabay.com/users/lesiakower-25701529/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=120696',
      rol: 'Timer ringtones'
    },
    {
      nameAuthor: 'Freepik',
      urlAuthor: 'https://www.flaticon.com/authors/freepik',
      rol: 'Favicon'
    }
  ]

  const organizations = [
    {
      nameOrganization: 'Pixabay',
      urlOrganization: 'https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=120696'
    },
    {
      nameOrganization: 'Flaticon',
      urlOrganization: 'https://www.flaticon.com/free-icons/clock'
    }
  ]
  return (
    <div className={styles.credits}>
      <header>
        <h1>Thank you</h1>
      </header>
      <main>
        <p>Queremos expresar nuestro sincero agradecimiento a los creadores de recursos gratuitos de uso libre que utilizamos para construir nuestro sitio web. Las imágenes, sonidos y otros elementos que proporcionaron nos permitieron realizar nuestra visión sin preocuparnos por el costo o los derechos de autor. Estamos agradecidos por su dedicación en ofrecer estos recursos a la comunidad en general. Gracias nuevamente por su contribución.</p>

        <section className={styles.credits__section}>
          <span className={styles.credits__sectionName}>Authors</span>
          <div className={styles.credits__contributors}>
            <Contributor author={authors[0]} organization={organizations[0]} />
            <Contributor author={authors[1]} organization={organizations[1]} />
          </div>
        </section>
      </main>
    </div>
  )
}
