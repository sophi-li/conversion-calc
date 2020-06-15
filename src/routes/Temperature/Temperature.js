import React from 'react'
import FarenheitToC from './FarenheitToC'
import CelsiusToF from './CelsiusToF'
import Layout from '../../components/Layout'

import styles from './Temperature.module.css'

const Temperature = ({ updateFtoC }) => {
  return (
    <Layout>
      <div>
        <div className={styles.backgroundcolorContainer}>
          <h2 className={styles.title}>Temperature Converter</h2>

          <div className={styles.container}>
            <FarenheitToC />
            <CelsiusToF />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Temperature
