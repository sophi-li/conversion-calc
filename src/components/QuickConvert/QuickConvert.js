import React, { useState } from "react";
import numericQuantity from "numeric-quantity";
import styles from "./QuickConvert.module.css";
import { CUP_IN_GRAMS, UNITS } from "../../constants";
import { parseLine } from "../../utils";

const QuickConvert = ({ updateIngredient }) => {
  const [recipe, setRecipe] = useState("");
  let multiplier = 0;
  let converted = "";
  const { tablespoon, teaspoon, cup, gram } = UNITS;
  function convert() {
    let originalArray = recipe.split("\n").filter(function (el) {
      return el !== "";
    });
    let parsedItemArray = [];
    for (let i = 0; i < originalArray.length; i++) {
      parsedItemArray.push(parseLine(originalArray[i]));
    }
    for (let i = 0; i < parsedItemArray.length; i++) {
      //   get multiplier of ingredient for conversion formula
      for (let ing = 0; ing < Object.keys().length; ing++) {
        let values = Object.values(ingredientsCupsToGrams);
        if (parsedItemArray[i].ingredient.includes(values[ing][0])) {
          multiplier = values[ing][1];
        }
      }
      // conversion formula
      if (multiplier) {
        // cups to grams
        for (let j = 0; j < cup.length; j++) {
          if (parsedItemArray[i].scale === cup[j]) {
            let newConversion = Math.round(
              numericQuantity(parsedItemArray[i].qty) * multiplier
            );
            converted = `${parsedItemArray[i].original} → ${newConversion} grams ${parsedItemArray[i].ingredient}`;
            multiplier = 0;
          }
        }
        // tablespoons to grams
        for (let j = 0; j < tablespoon.length; j++) {
          if (parsedItemArray[i].scale === tablespoon[j]) {
            let newConversion = Math.round(
              (numericQuantity(parsedItemArray[i].qty) * multiplier) / 16
            );
            converted = `${parsedItemArray[i].original} →  ${newConversion} grams ${parsedItemArray[i].ingredient}`;
            // multiplier = 0;
          }
        }
        // teaspoon to grams
        for (let j = 0; j < teaspoon.length; j++) {
          if (parsedItemArray[i].scale === teaspoon[j]) {
            let newConversion = (
              Math.round(numericQuantity(parsedItemArray[i].qty) * multiplier) /
              16 /
              3
            ).toFixed(2);
            converted = `${parsedItemArray[i].original} →  ${newConversion} grams ${parsedItemArray[i].ingredient}`;
            multiplier = 0;
          }
        }
        // grams to CUPS
        for (let j = 0; j < gram.length; j++) {
          if (parsedItemArray[i].scale === gram[j]) {
            // grams to TBS
            if (parsedItemArray[i].qty < 40) {
              let newConversion = (
                (parsedItemArray[i].qty / multiplier) *
                16
              ).toFixed(2);
              converted = `${parsedItemArray[i].original} →  ${newConversion} tablespoons ${parsedItemArray[i].ingredient}`;
              multiplier = 0;
              // grams to CUPS
            } else {
              if (parsedItemArray[i].scale === gram[j]) {
                let newConversion = (
                  parsedItemArray[i].qty / multiplier
                ).toFixed(2);
                converted = `${parsedItemArray[i].original} →  ${newConversion} cups ${parsedItemArray[i].ingredient}`;
                multiplier = 0;
              }
            }
          }
        }
      }
      // return originalArray.join("\n");
      return converted;
    }
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    updateIngredient(convert(recipe));
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
          <div>
            <input
              type="type"
              name="input"
              className={styles.input}
              value={recipe}
              onChange={handleChange}
            />
          </div>
        </label>
        <button className={styles.convertButton} type="submit">
          convert
        </button>
      </form>
    </div>
  );
};
export default QuickConvert;
