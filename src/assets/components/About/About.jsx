import styles from './About.module.css'
import about_img from '../../img/about.jpg'

export default function About() {
    return (
        <section id='about-us' className={styles.about}>
            <div className={styles.content}>
                <h1 className={styles.title}>Mais do que café: uma experiência de Viana</h1>
                <div className={styles.p_content}>
                    <h2>Sobre</h2>
                    <p>O Viana Concept nasceu com a vontade de reinventar o café de sempre, unindo 
                        conforto e modernidade num só espaço. Aqui, cada chávena é preparada com 
                        dedicação, acompanhada de um ambiente acolhedor que convida a ficar. Dos 
                        pequenos-almoços energéticos às pausas a meio da tarde, oferecemos experiências 
                        que aquecem o dia e criam memórias.
                    </p>
                </div>
            </div>
            <div className={styles.imageWrapper}>
                <img src={about_img} alt="Girl drinking an orange juice" />
            </div>
        </section>
    )
}