import styles from './About.module.css'
import about_img from '../../img/about.jpg'

export default function About() {
    return (
        <section id='about-us' className={styles.about}>
            <div className={styles.content}>
                <h1 className={styles.title}>The treasures of the Louvre palace and collections</h1>
                <div className={styles.p_content}>
                    <h2>About</h2>
                    <p>Authentic taste of Italy in every dish. With a rich 
                        culinary heritage spanning generations, we are dedicated 
                        to using the finest ingredients to craft dishes that 
                        tantalize the taste buds. From classic pasta dishes to 
                        mouthwatering pizzas cooked in a traditional wood-fired 
                        oven, each bite tells a story of tradition and 
                        craftsmanship. Whether you're dining with family, 
                        friends, or colleagues, our warm and inviting atmosphere 
                        sets the stage for memorable culinary experiences. Join 
                        us and embark on a gastronomic journey through the heart 
                        of Italy right here in
                    </p>
                </div>
            </div>
            <div className={styles.imageWrapper}>
                <img src={about_img} alt="Girl drinking an orange juice" />
            </div>
        </section>
    )
}