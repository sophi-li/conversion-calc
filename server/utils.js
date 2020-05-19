const { CUP_IN_GRAMS } = require('./constants')
const { UNITS } = require('./constants')
const numericQuantity = require('numeric-quantity')

const parseLine = (text) => {
  const operatorWords = /(of)/i
  const scaleWordsRegex = /(tablespoon|tablespoons|tbs|tbs.|teaspoon|teaspoons|tsp.|tsp|gram|grams|g|g.|gm|cup|cups|c|c.|tsp|medium)[\w]*\s/i
  const containsScaleWord = text.match(scaleWordsRegex)

  if (containsScaleWord) {
    const { index } = containsScaleWord

    const ingredient = text
      .slice(index + containsScaleWord[0].length)
      .replace(operatorWords, '')
      .trim()

    return {
      scale: containsScaleWord[1].toLowerCase(),
      qty: parseInt(text.slice(0, index).trim()),
      ingredient,
      multiplier: CUP_IN_GRAMS[ingredient],
      original: text,
    }
  } else {
    return text
  }
}

const parseRecipe = (recipe) => {
  return (
    recipe
      // .split(',')
      .filter((el) => {
        return el !== ''
      })
      .map((item) => parseLine(item))
  )
}

const convertToGrams = (item) => {
  const currentUnit = UNITS.filter((unit) => {
    if (unit.variations.includes(item.scale)) {
      return true
    }

    return false
  })

  if (currentUnit.length > 0) {
    let { qty, multiplier } = item
    let conversion

    switch (currentUnit[0].name) {
      case 'cup':
        conversion = Math.round(numericQuantity(qty) * multiplier)
        break

      case 'tablespoon':
        conversion = Math.round((numericQuantity(qty) * multiplier) / 16)
        break

      case 'teaspoon':
        conversion = Math.round((numericQuantity(qty) * multiplier) / 48)
        break

      default:
        conversion = 0
        break
    }

    return `${conversion} gram${conversion !== 1 && 's'}`
  }

  return null
}

const convertFromGrams = (item) => {
  const { qty, multiplier } = item

  let conversion

  const currentUnit = UNITS.filter((unit) => {
    if (unit.variations.includes(item.scale)) {
      return true
    }

    return false
  })

  if (currentUnit.length > 0) {
    if (qty < 20) {
      conversion = `${((qty / multiplier) * 48).toFixed(2)} teaspoons`
    } else if (qty < 50) {
      conversion = `${((qty / multiplier) * 16).toFixed(2)} tablespoons`
    } else {
      conversion = `${(qty / multiplier).toFixed(2)} cups`
    }

    return conversion
  }

  return null
}

const renderConvertedRecipe = (parsedRecipe) =>
  parsedRecipe.map((item) => {
    const { original } = item

    let text = `${original}`

    if (
      item.scale === 'gram' ||
      item.scale === 'grams' ||
      item.scale === 'g' ||
      item.scale === 'gm' ||
      item.scale === 'g.'
    ) {
      return `${text} (${convertFromGrams(item)})`
    }

    return `${text} (${convertToGrams(item)})`
  })

module.exports = { renderConvertedRecipe, parseRecipe }
