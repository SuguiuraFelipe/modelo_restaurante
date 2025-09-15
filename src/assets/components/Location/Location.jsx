import styles from './Location.module.css'
import location_img from '../../img/location.jpg'

export default function Location() {
  return (
    <section className={styles.location}>
      <h1 className={styles.title}>Melhor Cozinha em Lisboa</h1>
      <div className={styles.grid}>
        {/* Salertina */}
        <a
          href="https://www.google.com/maps/search/?api=1&query=Salertina+Lisbon"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.card}
        >
          <img src={location_img} alt="location in Salertina" />
          <h2>Lisboa</h2>
        </a>

        {/* London */}
        <a
          href="https://www.google.com/maps/search/?api=1&query=London"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.card}
        >
          <img src={location_img} alt="location in London" />
          <h2>Almada</h2>
        </a>

        {/* Napoli */}
        <a
          href="https://www.google.com/maps/search/?api=1&query=Napoli"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.card}
        >
          <img src={location_img} alt="location in Napoli" />
          <h2>Sintra</h2>
        </a>
      </div>
    </section>
  )
}
