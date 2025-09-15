import styles from './OpenHours.module.css'
import hoursImg from '../../img/open_hours.jpg'

export default function OpenHours() {
  return (
    <section id="hours" className={styles.openHours}>
      <h1 className={styles.title}>Horário de Funcionamento</h1>
      <div className={styles.wrapper}>
        <div className={styles.imageWrapper}>
          <img src={hoursImg} alt="Restaurant interior" />
        </div>
        <div className={styles.info}>
          <div className={styles.slot}>
            <p className={styles.subtitle}>Segunda a Sexta</p>
            <p className={styles.time}>07:00* – 20:00*</p>
            <p className={styles.text}>
              As nossas portas abrem de segunda a sexta às 07h00, para que possa começar o dia connosco, e 
              permanecem abertas até às 20h00, oferecendo momentos de sabor, partilha e bem-estar ao longo de 
              todo o dia.
            </p>
          </div>
          <div className={styles.slot}>
            <p className={styles.subtitle}>Fim de Semana</p>
            <p className={styles.time}>07:00* – 20:00*</p>
            <p className={styles.text}>
              Aos sábados, abrimos às 07h00 e estamos consigo até às 20h00, para que possa desfrutar de sabores únicos 
              em boa companhia. Aos domingos, recebemo-lo das 07h00 às 18h00, num ambiente descontraído que prolonga o 
              fim de semana com todo o sabor.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
