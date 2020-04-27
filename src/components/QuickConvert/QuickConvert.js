import React, { useState } from "react";

const QuickConvert = ({ updateIngredient }) => {
  const [recipe, setRecipe] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(recipe * 2);
    updateIngredient(recipe * 2);
    setRecipe("");
  };

  const handleChange = (event) => {
    setRecipe(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your ingredient below <i>(ex: 1 cup sugar)</i>
          <input
            type="type"
            name="input"
            className="input"
            value={recipe}
            onChange={handleChange}
          />
        </label>
        <button type="submit">convert</button>
      </form>
    </div>
  );
};
export default QuickConvert;
