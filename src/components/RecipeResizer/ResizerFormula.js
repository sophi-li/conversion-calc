import React, { useState } from "react";

const ResizerFormula = ({ updateSize }) => {
  const [recipe, setRecipe] = useState("");
  const [multiplier, setMultiplier] = useState("");
  const [multiply, setMultiply] = useState(false);
  const [divide, setDivide] = useState(false);

  const handleSubmitMultiply = () => {
    // event.preventDefault();
    console.log("MULTIPLY", !multiply);
    setMultiply(!multiply);
  };

  const handleSubmitDivide = () => {
    // event.preventDefault();
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
      console.log("parsed", parsedItemArray);
    }

    for (let i = 0; i < parsedItemArray.length; i++) {
      console.log("in the loop", multiplier);
      console.log("in the loop MULTIPLY", multiply);
      console.log("in the loop DIVIDE", divide);

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
    // IF MULPTILY IS CLICKED, use the multiplier to multiply
    multiply ? console.log("MULT") : console.log("NOPE");
    divide ? console.log("DIVIDE") : console.log("NO DIVIDE");
    // console.log("convertsize mulptiy", !multiply);
    // return recipe * multiplier
    console.log("convertSize recipe", recipe);
    return convert(recipe);
  };

  const handleSubmitRecipe = (event) => {
    event.preventDefault();
    updateSize(convertSize(recipe));
    // setRecipe("");
    // console.log(event);
  };

  const handleChangeRecipe = (event) => {
    console.log("handleChangeRecipe event target", event.target.value);
    setRecipe(event.target.value);
  };

  const handleChangeMultiplier = (event) => {
    console.log("handleChangeMultiplier event target", event.target.value);
    setMultiplier(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmitRecipe}>
        {/* <form> */}
        <label>
          <p>Enter your recipe with line breaks</p>
        </label>
        <textarea
          value={recipe}
          onChange={handleChangeRecipe}
          type="text"
          rows="20"
          cols="50"
        ></textarea>
        <input
          type="number"
          value={multiplier}
          onChange={handleChangeMultiplier}
        />
        <button type="submit" value="multiply" onClick={handleSubmitMultiply}>
          Multiply
        </button>
        <button type="submit" value="divide" onClick={handleSubmitDivide}>
          Divide
        </button>
      </form>
    </div>
  );
};

export default ResizerFormula;
