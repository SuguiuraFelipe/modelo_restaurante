import styles from './StorySection.module.css'
import storyImg from '../../img/story.jpg'

export default function StorySection() {
  return (
    <section id='story' className={styles.storySection}>
      <div className={styles.imageWrapper}>
        <img src={storyImg} alt="Our Story" />
      </div>

      <div className={styles.timeline}>
        <span className={styles.year}>1967</span>
        <div className={styles.line} />
        <span className={styles.year}>2024</span>
      </div>

      <div className={styles.content}>
        <h2 className={styles.title}>
          From Tradition to Table: Our Culinary Journey
        </h2>
        <p className={styles.link}>Our Story</p>
        <p className={styles.text}>
          Authentic taste of Italy in every dish. With a rich culinary heritage spanning generations,
          we are dedicated to using the finest ingredients to craft dishes that tantalize the taste buds.
          From classic pasta dishes to mouthwatering pizzas cooked in a traditional wood‑fired oven,
          each bite tells a story of tradition and craftsmanship. Whether you’re dining with family,
          friends, or colleagues, our warm and inviting atmosphere sets the stage for memorable culinary
          experiences. Join us and embark on a gastronomic journey through the heart of Italy right here in Lisbon.
        </p>
      </div>
    </section>
  )
}
