import React from 'react'
import FarenheitToC from './FarenheitToC'
import CelsiusToF from './CelsiusToF'
import Layout from '../../components/Layout'

import styles from './Temperature.module.css'

const Temperature = ({ updateFtoC }) => {
  return (
    <Layout>
      <div>
        <h2 className={styles.title}>Temperature Converter</h2>

        <FarenheitToC />

        <CelsiusToF />
      </div>
    </Layout>
  )
}

export default Temperature
