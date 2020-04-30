import React, { useState } from "react";
import FarenheitToC from "./FarenheitToC";
import CelsiusToF from "./CelsiusToF";

const Temperature = ({ updateFtoC }) => {
  const [farenheit, setFarenheit] = useState("");
  const [celsius, setCelsius] = useState("");

  function udpdateFarenheit(tempF) {
    setFarenheit(tempF);
  }

  function updateCelsius(tempC) {
    setCelsius(tempC);
  }

  return (
    <div>
      <h2>Temperature Converter</h2>
      <p>
        Have a recipe that uses an oven temperature that doesn't match your
        oven?
      </p>
      <p>
        Enter your temperature in the appropriate text box and click the convert
        button.
      </p>
      <FarenheitToC udpdateFarenheit={udpdateFarenheit} />
      <p>Result: {farenheit}</p>
      <CelsiusToF updateCelsius={updateCelsius} />
      <p>Result: {celsius}</p>
    </div>
  );
};

export default Temperature;
