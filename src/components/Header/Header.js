import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Header.module.css'

const Header = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navLinksContainer}>
        <div className={styles.navLinks}>
          <li>
            <Link className={styles.title} to={'/'}>
              Baking Calculator
              {/* <img src= */}
            </Link>
          </li>
          <li>
            <Link className={styles.link} to={'/RecipeConversion'}>
              Recipe Calculator
            </Link>
          </li>
          <li>
            <Link className={styles.link} to={'/RecipeResizer'}>
              Recipe Resizer
            </Link>
          </li>
          <li>
            <Link className={styles.link} to={'/Temperature'}>
              Temperature Converter
            </Link>
          </li>
        </div>
      </div>
    </nav>
  )
}

export default Header
