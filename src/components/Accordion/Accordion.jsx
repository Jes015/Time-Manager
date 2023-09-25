import styles from './accordion.module.css'

const Accordion = ({ children, header, open = true }) => {
  return (
        <details {...{ open }}>
            <summary className={styles.accordion__summary}>{header}</summary>
            {children}
        </details>
  )
}

export default Accordion
