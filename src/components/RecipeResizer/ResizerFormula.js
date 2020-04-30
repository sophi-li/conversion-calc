import React, { useState } from "react";
import styles from "./ResizerFormula.module.css";

const ResizerFormula = ({ updateSize }) => {
  const [recipe, setRecipe] = useState("");
  const [multiplier, setMultiplier] = useState("");
  const [multiply, setMultiply] = useState(false);
  const [divide, setDivide] = useState(false);

  const handleSubmitMultiply = () => {
    setMultiply(!multiply);
  };

  const handleSubmitDivide = () => {
    setDivide(!divide);
  };

  function convert() {
    let originalArray = recipe.split("\n").filter(function (el) {
      return el !== "";
    });
    let parsedItemArray = [];

    const parseLine = (text) => {
      const scaleWordsRegex = /(tablespoon|teaspoon|gram|cup|tsp|tbs|medium)[\w]*\s/i;
      const result = {
        qty: null,
        scale: null,
        ingredient: null,
        original: text,
      };

      const containsScaleWord = text.match(scaleWordsRegex);
      if (containsScaleWord) {
        result.scale = containsScaleWord[1]; // Captures the exact scale word
        const scaleWordPos = containsScaleWord.index;
        result.qty = text.slice(0, scaleWordPos).trim();
        result.ingredient = text.slice(
          scaleWordPos + containsScaleWord[0].length
        );

        const operatorWords = /(of)/i;
        result.ingredient = result.ingredient.replace(operatorWords, "").trim();
      }

      return result;
    };

    for (let i = 0; i < originalArray.length; i++) {
      parsedItemArray.push(parseLine(originalArray[i]));
    }

    for (let i = 0; i < parsedItemArray.length; i++) {
      let newQty = 0;
      if (multiply) {
        newQty = parsedItemArray[i].qty * multiplier;
      } else {
        newQty = parsedItemArray[i].qty / multiplier;
      }
      originalArray[i] = originalArray[i].concat(
        ` (${newQty} ${parsedItemArray[i].scale} ${parsedItemArray[i].ingredient})`
      );
    }

    return originalArray.join("\n");
  }

  const convertSize = () => {
    return convert(recipe);
  };

  const handleSubmitRecipe = (event) => {
    event.preventDefault();
    updateSize(convertSize(recipe));
    setRecipe("");
  };

  const handleChangeRecipe = (event) => {
    setRecipe(event.target.value);
  };

  const handleChangeMultiplier = (event) => {
    setMultiplier(event.target.value);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmitRecipe}
        className={styles.resizerFormulaContatiner}
      >
        <div>
          <label>
            <h4>Enter your recipe with line breaks:</h4>
          </label>
          <textarea
            value={recipe}
            onChange={handleChangeRecipe}
            type="text"
            rows="20"
            cols="45"
            className={styles.textArea}
          ></textarea>
        </div>

        <div className={styles.multiplierContainer}>
          <input
            type="number"
            value={multiplier}
            onChange={handleChangeMultiplier}
            className={styles.multiplierInput}
          />
          <button
            type="submit"
            value="multiply"
            onClick={handleSubmitMultiply}
            className={styles.multiplyButton}
          >
            Multiply
          </button>
          <button
            type="submit"
            value="divide"
            onClick={handleSubmitDivide}
            className={styles.divideButton}
          >
            Divide
          </button>
        </div>
      </form>
    </div>
  );
};

export default ResizerFormula;
