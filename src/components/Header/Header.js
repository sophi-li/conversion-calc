import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Header.module.css'

const Header = () => {
  return (
    <nav className={styles.colorContainer}>
      <div className={styles.container}>
        <div className={styles.titleConatiner}>
          <Link className={styles.title} to={'/'}>
            Baking Calculator
          </Link>
        </div>

        <div className={styles.navbar}>
          <p className={styles.navItem}>
            <Link className={styles.link} to={'/RecipeConversion'}>
              Recipe Calculator
            </Link>
          </p>
          <p className={styles.navItem}>
            <Link className={styles.link} to={'/RecipeResizer'}>
              Recipe Resizer
            </Link>
          </p>
          <p className={styles.navItem}>
            <Link className={styles.link} to={'/Temperature'}>
              Temperature Converter
            </Link>
          </p>
        </div>
      </div>
    </nav>
  )
}

export default Header
