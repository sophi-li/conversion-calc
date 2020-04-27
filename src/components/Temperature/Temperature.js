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
      <FarenheitToC udpdateFarenheit={udpdateFarenheit} />
      <p>Result: {farenheit} °C</p>
      <CelsiusToF updateCelsius={updateCelsius} />
      <p>Result: {celsius} °F</p>
    </div>
  );
};

export default Temperature;
