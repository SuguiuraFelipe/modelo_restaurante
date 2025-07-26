import styles from './Quote.module.css'

export default function Quote() {
  return (
    <section className={styles.quoteSection}>
      <div className={styles.container}>
        <svg className={styles.icon} viewBox="0 0 24 24">
          <path d="M12 2C12 2 13.5 6 18 6C18 6 13.5 7.5 12 12C12 12 10.5 7.5 6 6C6 6 10.5 6 12 2Z" />
        </svg>
        <p className={styles.text}>
          With a rich culinary heritage spanning generations, we are dedicated to using the finest 
          ingredients to craft dishes that tantalize the taste buds. From classic pasta dishes to 
          mouthwatering pizzas cooked in a traditional wood‑fired oven, each bite tells a story of 
          tradition and craftsmanship.
        </p>
        <br />
        <svg className={styles.icon} viewBox="0 0 24 24">
          <path d="M12 2C12 2 13.5 6 18 6C18 6 13.5 7.5 12 12C12 12 10.5 7.5 6 6C6 6 10.5 6 12 2Z" />
        </svg>
      </div>
    </section>
)
}
