import styles from './Team.module.css'
import { team } from '../../data/team'

export default function Team() {
  return (
    <section id='team' className={styles.teamSection}>
      <h2 className={styles.title}>Nossa Equipa</h2>
      <div className={styles.grid}>
        {team.map(member => (
          <div key={member.name} className={styles.card}>
            <img src={member.img} alt={member.name} className={styles.photo} />
            <p className={styles.name}>{member.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
