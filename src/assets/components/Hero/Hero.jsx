import styles from './Hero.module.css'
import hero_img from '../../img/hero.jpg'
import coffe_img from '../../img/coffe.png'

export default function Hero() {
    return (
        <section id="hero" className={styles.hero}>
            <div className={styles.content}>
                <img className={styles.coffe} src={coffe_img} alt="coffe" />
                <h1 className={styles.title}>
                    Savor Italy: Tradition on Every Plate!
                </h1>
                <p className={styles.p}>
                    Each dish tells a story of Italy's rich culinary heritage, 
                    meticulously crafted to transport you to the heart of Italian 
                    tradition with every savory bite.
                </p>
                <a href="#menu" className={styles.button}>
                    See Menu
                </a>
            </div>
            <div className={styles.imageWrapper}>
                <img src={hero_img} alt="" />
            </div>
        </section>
    )
}
