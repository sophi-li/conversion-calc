import React, { useState } from "react";
import numericQuantity from "numeric-quantity";

const ConversionFormula = ({ updateRecipe }) => {
  const [recipe, setRecipe] = useState("");

  const ingredientsCupsToGrams = {
    water: ["water", 236],
    butter: ["butter", 226],
    unsaltedButter: ["unsalted butter", 226],
    saltedButter: ["salted butter", 226],
    margarine: ["margarine", 230],
    flour: ["flour", 120],
    APflour: ["all purpose flour", 120],
    cakeFlour: ["cake flour", 114],
    cocoaPowder: ["cocoa powder", 100],
    salt: ["salt", 292],
    brownSugar: ["brown sugar", 195],
    sugar: ["sugar", 200],
    granulatedSugar: ["granulated sugar", 200],
    granulatedWhiteSugar: ["granulated white sugar", 200],
    whiteSugar: ["white sugar", 200],
    powderedSugar: ["powdered sugar", 120],
    honey: ["honey", 336],
    molasses: ["molasses", 336],
    syrup: ["syrup", 336],
    buttermilk: ["buttermilk", 245],
    milk: ["milk", 245],
    oats: ["oats", 102],
    bakingSoda: ["baking soda", 220],
    bakingPowder: ["baking powder", 220],
    oil: ["oil", 218],
    vegetableOil: ["vegetable oil", 218],
    vanillaExtract: ["vanilla extract", 208],
    activeDryYeast: ["active dry yeast", 224],
  };

  let multiplier = 0;
  const tablespoon = ["tablespoon", "tablespoons", "tbs", "tbs."];
  const teaspoon = ["teaspoon", "teaspoons", "tsp", "tsp."];
  const cup = ["cup", "cups", "c."];
  const gram = ["gram", "grams", "g."];

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
      // console.log("parsed", parsedItemArray);
    }

    for (let i = 0; i < parsedItemArray.length; i++) {
      //   get multiplier of ingredient for conversion formula
      for (
        let ing = 0;
        ing < Object.keys(ingredientsCupsToGrams).length;
        ing++
      ) {
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
            originalArray[i] = originalArray[i].concat(
              ` (${newConversion} grams)`
            );
            multiplier = 0;
          }
        }

        // tablespoons to grams
        for (let j = 0; j < tablespoon.length; j++) {
          if (parsedItemArray[i].scale === tablespoon[j]) {
            let newConversion = Math.round(
              (numericQuantity(parsedItemArray[i].qty) * multiplier) / 16
            );
            originalArray[i] = originalArray[i].concat(
              ` (${newConversion} grams)`
            );
            multiplier = 0;
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
            originalArray[i] = originalArray[i].concat(
              ` (${newConversion} grams)`
            );
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
              originalArray[i] = originalArray[i].concat(
                ` (${newConversion} tablespoons)`
              );
              multiplier = 0;
              // grams to CUPS
            } else {
              if (parsedItemArray[i].scale === gram[j]) {
                let newConversion = (
                  parsedItemArray[i].qty / multiplier
                ).toFixed(2);
                originalArray[i] = originalArray[i].concat(
                  ` (${newConversion} cups)`
                );
                multiplier = 0;
              }
            }
          }
        }
      }

      return originalArray.join("\n");
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    updateRecipe(convert(recipe));
    setRecipe("");
  };

  const handleChange = (event) => {
    setRecipe(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <p>Enter your recipe here:</p>
      </label>
      <textarea
        value={recipe}
        onChange={handleChange}
        type="text"
        rows="20"
        cols="50"
      >
        1 cup sugar
      </textarea>

      <button type="submit">Convert</button>
    </form>
  );
};

export default ConversionFormula;
