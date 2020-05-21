import React, { useState } from "react";
import Layout from "../../components/Layout";

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
        <form onSubmit={handleSubmit}>
          <input value={inputURL} type="text" onChange={handleChange}></input>
          <button type="submit" placeholder="enter url">
            Submit
          </button>
        </form>
        Output:
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
