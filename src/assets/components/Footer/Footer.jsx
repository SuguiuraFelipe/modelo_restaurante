import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copy}>
          &copy; {new Date().getFullYear()} JF. All rights reserved.
        </p>
        <ul className={styles.links}>
          <li><a href="/privacy">Política de Privacidade</a></li>
          <li><a href="/terms">Termos de serviço</a></li>
          <li><a href="/contact">Contato</a></li>
        </ul>
      </div>
    </footer>
  )
}
