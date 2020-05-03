import { CUP_IN_GRAMS } from "./constants";

export const parseLine = (text) => {
  const operatorWords = /(of)/i;
  const scaleWordsRegex = /(tablespoon|tablespoons|tbs|tbs.|teaspoon|teaspoons|tsp.|tsp|gram|grams|g|g.|gm|cup|cups|c|c.|tsp|medium)[\w]*\s/i;
  const containsScaleWord = text.match(scaleWordsRegex);

  if (containsScaleWord) {
    const { index } = containsScaleWord;

    const ingredient = text
      .slice(index + containsScaleWord[0].length)
      .replace(operatorWords, "")
      .trim();

    return {
      scale: containsScaleWord[1].toLowerCase(),
      qty: parseInt(text.slice(0, index).trim()),
      ingredient,
      multiplier: CUP_IN_GRAMS[ingredient],
      original: text,
    };
  } else {
    return text;
  }
};
