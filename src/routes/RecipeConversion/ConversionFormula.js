import React, { useState } from 'react'
import numericQuantity from 'numeric-quantity'
import styles from './RecipeConversion.module.css'

import { UNITS } from '../../constants'
import { parseLine } from '../../utils'

const ConversionFormula = ({ updateRecipe }) => {
  const [recipe, setRecipe] = useState(`1 cup sugar \n1 cup flour`)

  const parseRecipe = (recipe) => {
    return recipe
      .split('\n')
      .filter((el) => {
        return el !== ''
      })
      .map((item) => parseLine(item))
  }

  const convertToGrams = (item) => {
    const currentUnit = UNITS.filter((unit) => {
      return unit.variations.includes(item.scale)
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

  const renderConvertedRecipe = (parsedRecipe) => {
    return parsedRecipe
      .map((item) => {
        const { original } = item
        let text = `${original}`

        if (!item.scale) {
          return `${item}`
        } else if (!item.multiplier) {
          return `${text} `
        }

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
      .join('\n')
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    updateRecipe(renderConvertedRecipe(parseRecipe(recipe)))
  }

  const handleChange = (event) => {
    setRecipe(event.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.inputFormContainer}>
        <div>
          <label>
            <p>Enter your recipe with line breaks:</p>
          </label>
          <textarea
            className={styles.textArea}
            value={recipe}
            onChange={handleChange}
            type="text"
            rows="20"
            cols="40"
          />
        </div>

        <div className={styles.submitBtnContainer}>
          <button className={styles.submitButton} type="submit">
            Convert
          </button>
        </div>
      </div>
    </form>
  )
}

export default ConversionFormula
