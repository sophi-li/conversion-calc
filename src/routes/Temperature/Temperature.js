import React, { useState } from 'react'
import FarenheitToC from './FarenheitToC'
import CelsiusToF from './CelsiusToF'
import Layout from '../../components/Layout'

import styles from './Temperature.module.css'

const Temperature = ({ updateFtoC }) => {
  const [farenheit, setFarenheit] = useState('')
  const [celsius, setCelsius] = useState('')

  function udpdateFarenheit(tempF) {
    setFarenheit(tempF)
  }

  function updateCelsius(tempC) {
    setCelsius(tempC)
  }

  return (
    <Layout>
      <div className={styles.container}>
        <h2>Temperature Converter</h2>

        <FarenheitToC udpdateFarenheit={udpdateFarenheit} />
        <p>Result: {farenheit}</p>
        <CelsiusToF updateCelsius={updateCelsius} />
        <p>Result: {celsius}</p>
      </div>
    </Layout>
  )
}

export default Temperature
