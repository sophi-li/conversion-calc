import React, { useState } from "react";

const FarenheitToC = ({ udpdateFarenheit }) => {
  const [farenheitToC, setFarenheitToC] = useState("");

  function handleChangeFarenheitToC(event, ing) {
    setFarenheitToC(event.target.value);
  }

  function handleSubmitFarenheitToC(event) {
    event.preventDefault();
    udpdateFarenheit(Math.round((farenheitToC - 32) * (5 / 9)));
    setFarenheitToC("");
  }
  return (
    <div>
      <form onSubmit={handleSubmitFarenheitToC}>
        <label>
          <p>Convert Farenheit to Celcius: </p>
        </label>
        <input
          type="number"
          value={farenheitToC}
          onChange={handleChangeFarenheitToC}
        />
        <button type="submit">Convert to Celcius</button>
      </form>
    </div>
  );
};

export default FarenheitToC;
