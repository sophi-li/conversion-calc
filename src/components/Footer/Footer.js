import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Footer.module.css'

const Footer = () => (
  <footer className={styles.footerContainer}>
    <p>
      <a
        className={styles.footerContent}
        href="https://github.com/sophi-li/conversion-calc"
      >
        Source Code
      </a>
      <a className={styles.footerContent} href="https://twitter.com/sophia_wyl">
        Contact
      </a>
      <Link className={styles.footerContent} to={'/Faq'}>
        FAQ
      </Link>
    </p>
  </footer>
)

export default Footer
