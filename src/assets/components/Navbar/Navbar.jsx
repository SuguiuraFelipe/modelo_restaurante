import React, { useState } from 'react'
import styles from './NavBar.module.css'

const links = [
  { slug: 'about-us',    label: 'About Us' },
  { slug: 'culture',     label: 'Culture'  },
  { slug: 'story',       label: 'Our Story'},
  { slug: 'menu',        label: 'Menu'     },
  { slug: 'team',        label: 'Our Team' },
  { slug: 'hours',       label: 'Open Hours' },
  { slug: 'reservation', label: 'Reservation' }
]

export default function NavBar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Viana Concept</div>

      <button
        className={styles.hamburger}
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>

      <ul className={`${styles.menu} ${open ? styles.menuOpen : ''}`}>
        {links.map(({ slug, label }) => (
          <li key={slug}>
            <a href={`#${slug}`} className={styles.link}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
