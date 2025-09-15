import styles from './Quote.module.css'

export default function Quote() {
  return (
    <section id='culture' className={styles.quoteSection}>
      <div className={styles.container}>
        <svg className={styles.icon} viewBox="0 0 24 24">
          <path d="M12 2C12 2 13.5 6 18 6C18 6 13.5 7.5 12 12C12 12 10.5 7.5 6 6C6 6 10.5 6 12 2Z" />
        </svg>
        <p className={styles.text}>
          “No Viana Concept acreditamos que o café é uma viagem: começa no aroma que desperta memórias, 
          passa pelo sabor que aquece a alma e termina nos momentos que partilhamos à volta da mesa. 
          Cada detalhe foi pensado para transformar uma simples pausa num ritual de bem-estar, cultura 
          e descoberta.”
        </p>
        <br />
        <svg className={styles.icon} viewBox="0 0 24 24">
          <path d="M12 2C12 2 13.5 6 18 6C18 6 13.5 7.5 12 12C12 12 10.5 7.5 6 6C6 6 10.5 6 12 2Z" />
        </svg>
      </div>
    </section>
)
}
