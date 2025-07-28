import styles from './OpenHours.module.css'
import hoursImg from '../../img/open_hours.jpg'

export default function OpenHours() {
  return (
    <section id="hours" className={styles.openHours}>
      <h1 className={styles.title}>Open Hours</h1>
      <div className={styles.wrapper}>
        <div className={styles.imageWrapper}>
          <img src={hoursImg} alt="Restaurant interior" />
        </div>
        <div className={styles.info}>
          <div className={styles.slot}>
            <p className={styles.subtitle}>Mid‑week</p>
            <p className={styles.time}>07:00* – 21:00*</p>
            <p className={styles.text}>
              Our doors open from Monday to Friday at 11:00 AM, offering a delightful Italian dining experience until 10:00 PM, allowing you to savor our culinary delights throughout the day.
            </p>
          </div>
          <div className={styles.slot}>
            <p className={styles.subtitle}>Weekend</p>
            <p className={styles.time}>11:00* – 01:00*</p>
            <p className={styles.text}>
              Embrace the weekend vibes with us! On Saturdays, we welcome you from 12:00 PM, keeping our kitchen fired up until 11:00 PM. Sundays are for relaxed enjoyment, starting at 12:00 PM and closing at 9:00 PM, ensuring your weekend ends on a flavorful note.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
