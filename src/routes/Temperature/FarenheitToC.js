import React, { useState } from 'react'

import styles from './Temperature.module.css'

const FarenheitToC = () => {
  const [farenheitToC, setFarenheitToC] = useState('')
  const [farenheit, setFarenheit] = useState('')

  function handleChangeFarenheitToC(event) {
    setFarenheitToC(event.target.value)
  }

  function handleSubmitFarenheitToC(event) {
    event.preventDefault()
    if (!farenheitToC) {
      setFarenheit('Enter degrees in Farenheit')
      return
    }
    setFarenheit(`${Math.round((farenheitToC - 32) * (5 / 9))} °C`)
    setFarenheitToC('')
  }
  return (
    <div className={styles.temperatureContainer}>
      <form onSubmit={handleSubmitFarenheitToC}>
        <label>
          <h3>Farenheit to Celcius</h3>
        </label>
        <input
          type="number"
          value={farenheitToC}
          onChange={handleChangeFarenheitToC}
          className={styles.input}
          placeholder="e.g. 350"
        />
        <button type="submit" className={styles.submitButton}>
          Convert to Celcius
        </button>
      </form>
      <p>Result: {farenheit}</p>
    </div>
  )
}

export default FarenheitToC
