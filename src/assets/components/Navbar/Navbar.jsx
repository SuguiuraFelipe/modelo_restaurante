import styles from './NavBar.module.css';

export default function NavBar() {
  const links = ['about Us', 'culture', 'story', 'menu', 'team', 'hours', 'reservation'];
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Viana Concept</div>
      <ul className={styles.menu}>
        {links.map(id => (
          <li key={id}>
            <a href={`#${id}`} className={styles.link}>
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
