import React, { useState } from "react";
import styles from "./FarenheitToC.module.css";

const FarenheitToC = ({ udpdateFarenheit }) => {
  const [farenheitToC, setFarenheitToC] = useState("");

  function handleChangeFarenheitToC(event) {
    setFarenheitToC(event.target.value);
  }

  function handleSubmitFarenheitToC(event) {
    event.preventDefault();
    udpdateFarenheit(`${Math.round((farenheitToC - 32) * (5 / 9))} °C`);
    setFarenheitToC("");
  }
  return (
    <div className={styles.FarenheitToCContainer}>
      <form onSubmit={handleSubmitFarenheitToC}>
        <label>
          <h3>Convert Farenheit to Celcius: </h3>
        </label>
        <input
          type="number"
          value={farenheitToC}
          onChange={handleChangeFarenheitToC}
          className={styles.input}
        />
        <button type="submit" className={styles.submitButton}>
          Convert to Celcius
        </button>
      </form>
    </div>
  );
};

export default FarenheitToC;
