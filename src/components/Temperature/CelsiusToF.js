import React, { useState } from "react";
import styles from "./CelsiusToF.module.css";

const CelsiusToF = ({ updateCelsius }) => {
  const [celsiusToF, setCelsiusToF] = useState("");

  function handleChangeCelsiusToF(event, ing) {
    setCelsiusToF(event.target.value);
  }

  function handleSubmitCelsiusToF(event) {
    event.preventDefault();
    updateCelsius(`${Math.round(celsiusToF * (9 / 5) + 32)} °F`);
    setCelsiusToF("");
  }
  return (
    <div className={styles.CelsiusToFContainer}>
      <form onSubmit={handleSubmitCelsiusToF}>
        <label>
          <h3>Convert Celcius to Farenheit: </h3>
        </label>
        <input
          type="number"
          value={celsiusToF}
          onChange={handleChangeCelsiusToF}
          className={styles.input}
        />
        <button type="submit" className={styles.submitButton}>
          Convert to Farenheit
        </button>
      </form>
    </div>
  );
};

export default CelsiusToF;
