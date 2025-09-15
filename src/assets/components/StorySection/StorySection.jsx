import styles from './StorySection.module.css'
import storyImg from '../../img/story.jpg'

export default function StorySection() {
  return (
    <section id='story' className={styles.storySection}>
      <div className={styles.imageWrapper}>
        <img src={storyImg} alt="Our Story" />
      </div>

      <div className={styles.timeline}>
        <span className={styles.year}>2020</span>
        <div className={styles.line} />
        <span className={styles.year}>2025</span>
      </div>

      <div className={styles.content}>
        <h2 className={styles.title}>
          Da tradição para mesa, nossa história:
        </h2>
        <p className={styles.text}>
          No Viana Concept, começámos com uma ideia simples: criar um espaço que vai além do café e da pastelaria, 
          onde cada visita enriquece o corpo, desperta os sentidos e alimenta a alma. Desde os primeiros pães e 
          doces caseiros até aos produtos pensados para o bem-estar — passando por oferta estética e planos de nutrição 
          — cada etapa é cuidada com atenção e carinho. Usamos ingredientes de qualidade, valorizando produtores locais 
          sempre que possível, para garantir frescura, sabor verdadeiro e compromisso com a saúde. O Viana Concept 
          nasceu da vontade de conjugar tradição e modernidade: queremos que cada visitante sinta que está num espaço 
          de encontro — seja para um pequeno-almoço inspirador, uma pausa revigorante, ou um momento simples de convívio. 
          Aqui, o sabor, o cuidado consigo e a partilha são o que nos move. Venha fazer parte desta história connosco.
        </p>
      </div>
    </section>
  )
}
