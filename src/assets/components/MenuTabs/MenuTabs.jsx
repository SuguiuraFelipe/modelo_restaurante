import { useState } from 'react'
import styles from './MenuTabs.module.css'
import { menuOptions } from '../../data/menuOptions'

export default function MenuTabs() {
  const [active, setActive] = useState(menuOptions[0].id)
  const section = menuOptions.find(opt => opt.id === active)

  return (
    <section className={styles.menuTabs}>
      <nav className={styles.nav}>
        {menuOptions.map(opt => (
          <button
            key={opt.id}
            className={`${styles.tab} ${active === opt.id ? styles.active : ''}`}
            onClick={() => setActive(opt.id)}
          >
            {opt.label}
          </button>
        ))}
      </nav>

      <div className={styles.content}>
        {section.categories.map(cat => (
          <div key={cat.name||'all'} className={styles.category}>
            {cat.name && <h3 className={styles.catTitle}>{cat.name}</h3>}
            <ul className={styles.items}>
              {cat.items.map(item => (
                <li key={item.name}>
                  <span className={styles.itemName}>{item.name}</span>
                  {item.desc && <small className={styles.itemDesc}>{item.desc}</small>}
                  <span className={styles.itemPrice}>{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
)
}
