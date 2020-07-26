import React, { useState } from 'react'

import styles from './Temperature.module.css'

const CelsiusToF = () => {
  const [celsiusToF, setCelsiusToF] = useState('')
  const [farenheit, setFarenheit] = useState('')
  const [originalCelsius, setOriginalCelsius] = useState('')

  function handleChangeCelsiusToF(event) {
    setCelsiusToF(event.target.value)
  }

  function handleSubmitCelsiusToF(event) {
    event.preventDefault()
    if (!celsiusToF) {
      setFarenheit('Enter degrees in Celsius')
      return
    }
    setFarenheit(`${Math.round(celsiusToF * (9 / 5) + 32)} °F`)
    setOriginalCelsius(`${celsiusToF} °C → `)
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
      <p>
        Result: {originalCelsius} {farenheit}
      </p>
    </div>
  )
}

export default CelsiusToF
