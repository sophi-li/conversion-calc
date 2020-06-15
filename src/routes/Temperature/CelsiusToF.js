import React, { useState } from 'react'

import styles from './Temperature.module.css'

const CelsiusToF = () => {
  const [celsiusToF, setCelsiusToF] = useState('')
  const [celsius, setCelsius] = useState('')

  function handleChangeCelsiusToF(event) {
    setCelsiusToF(event.target.value)
  }

  function updateCelsius(tempC) {
    setCelsius(tempC)
  }

  function handleSubmitCelsiusToF(event) {
    event.preventDefault()
    updateCelsius(`${Math.round(celsiusToF * (9 / 5) + 32)} °F`)
    setCelsiusToF('')
  }

  return (
    // <div className={styles.backgroundcolorContainer}>
    <div className={styles.temperatureContainer}>
      <form onSubmit={handleSubmitCelsiusToF}>
        <label>
          <h3>Celcius to Farenheit: </h3>
        </label>
        <input
          type="number"
          value={celsiusToF}
          onChange={handleChangeCelsiusToF}
          className={styles.input}
          placeholder="e.g. 175"
        />
        <button type="submit" className={styles.submitButton}>
          Convert to Farenheit
        </button>
      </form>
      <p>Result: {celsius}</p>
    </div>
    // </div>
  )
}

export default CelsiusToF
