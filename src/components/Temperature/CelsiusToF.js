import React, { useState } from "react";

const CelsiusToF = ({ updateCelsius }) => {
  const [celsiusToF, setCelsiusToF] = useState("");

  function handleChangeCelsiusToF(event, ing) {
    setCelsiusToF(event.target.value);
  }

  function handleSubmitCelsiusToF(event) {
    event.preventDefault();
    updateCelsius(Math.round(celsiusToF * (9 / 5) + 32));
    setCelsiusToF("");
  }
  return (
    <div>
      <form onSubmit={handleSubmitCelsiusToF}>
        <label>
          <p>Convert Farenheit to Celcius: </p>
        </label>
        <input
          type="number"
          value={celsiusToF}
          onChange={handleChangeCelsiusToF}
        />
        <button type="submit">Convert to Farenheit</button>
      </form>
    </div>
  );
};

export default CelsiusToF;
