import React, { useState } from 'react'

import styles from './Temperature.module.css'

const CelsiusToF = () => {
  const [celsiusToF, setCelsiusToF] = useState('')
  const [celsius, setCelsius] = useState('')

  function handleChangeCelsiusToF(event) {
    setCelsiusToF(event.target.value)
  }

  function handleSubmitCelsiusToF(event) {
    event.preventDefault()
    if (!celsiusToF) {
      setCelsius('Enter degrees in Celsius')
      return
    }
    setCelsius(`${Math.round(celsiusToF * (9 / 5) + 32)} °F`)
    setCelsiusToF('')
  }

  return (
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
  )
}

export default CelsiusToF
