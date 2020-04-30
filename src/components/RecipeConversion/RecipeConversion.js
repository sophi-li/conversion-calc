import React, { useState } from "react";
import ConversionFormula from "./ConversionFormula";
import styles from "./RecipeConversion.module.css";

const RecipeConversion = () => {
  const [rec, setRec] = useState("");
  function updateRecipe(rec) {
    setRec(rec);
  }
  return (
    <div className={styles.RecipeConversionContainer}>
      <ConversionFormula updateRecipe={updateRecipe} />
      {/* <p>Your recipe with line breaks</p> */}
      <div>
        <label>
          <p>Your output here:</p>
        </label>
        <textarea value={rec} rows="20" cols="50"></textarea>
      </div>
    </div>
  );
};

export default RecipeConversion;
