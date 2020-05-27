import React, { useState } from "react";
import Layout from "../../components/Layout";

import styles from "./WebConversion.module.css";

const WebConversion = () => {
  const [recipe, setRecipe] = useState([]);
  const [inputURL, setInputURL] = useState("");

  function handleChange(event) {
    setInputURL(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/api/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: inputURL }),
      });

      const data = await response.json();

      setRecipe(data);
      setInputURL("");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Layout>
      <div className="App">
        <h1>Web Conversion</h1>
        <h3>Instructions:</h3>
        <ol>
          <li>Copy and paste a url to a website with a recipe.</li>
          <li>Click the submit button.</li>
          <li>
            Wait for about 10-30 seconds and your recipe and its conversion will
            apear under the results.
          </li>
        </ol>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            value={inputURL}
            type="text"
            onChange={handleChange}
            className={styles.input}
          ></input>
          <button
            type="submit"
            placeholder="enter url"
            className={styles.submitButton}
          >
            Submit
          </button>
        </form>
        Result:
        <ul>
          {recipe.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default WebConversion;
