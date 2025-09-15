import styles from './Hero.module.css'
import hero_img from '../../img/hero.jpg'
import coffe_img from '../../img/coffe.png'

export default function Hero() {
    return (
        <section id="hero" className={styles.hero}>
            <div className={styles.content}>
                <img className={styles.coffe} src={coffe_img} alt="coffe" />
                <h1 className={styles.title}>
                    Viana Concept: <br /> o sabor da tradição, o aconchego do presente
                </h1>
                <p className={styles.p}>
                    Desperte sentidos num espaço onde o café inspira diálogo, cultura e bem-estar. Venha sentir Viana em cada chávena.
                </p>
                <a href="#menu" className={styles.button}>
                    Nosso Menu
                </a>
            </div>
            <div className={styles.imageWrapper}>
                <img src={hero_img} alt="" />
            </div>
        </section>
    )
}
