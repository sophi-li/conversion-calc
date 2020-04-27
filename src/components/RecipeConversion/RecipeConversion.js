import React, { useState } from "react";
import ConversionFormula from "./ConversionFormula";

const RecipeConversion = () => {
  const [rec, setRec] = useState("");
  function updateRecipe(rec) {
    setRec(rec);
  }
  return (
    <div>
      <ConversionFormula updateRecipe={updateRecipe} />
      <textarea value={rec} rows="20" cols="50"></textarea>
    </div>
  );
};

export default RecipeConversion;
