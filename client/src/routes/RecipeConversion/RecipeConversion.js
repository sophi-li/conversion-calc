import React, { useState } from "react";
import ConversionFormula from "./ConversionFormula";
import styles from "./RecipeConversion.module.css";

const RecipeConversion = () => {
  const [convertedRecipe, setConvertedRecipe] = useState("");

  return (
    <div>
      <h2>Recipe Conversion</h2>
      <h3>Instructions:</h3>
      <p>1. Enter your recipe with line breaks.</p>
      <p>2. Click the convert button.</p>

      <div className={styles.RecipeConversionContainer}>
        <ConversionFormula updateRecipe={setConvertedRecipe} />
        <div>
          <label>
            <h4>Result</h4>
          </label>
          <textarea
            className={styles.textArea}
            value={convertedRecipe}
            rows="20"
            cols="45"
            readOnly={true}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default RecipeConversion;
