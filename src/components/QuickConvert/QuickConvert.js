import React, { useState } from 'react'
import numericQuantity from 'numeric-quantity'

import styles from './QuickConvert.module.css'

import { UNITS } from '../../constants'
import { parseLine } from '../../utils'

const QuickConvert = ({ updateIngredient }) => {
  const [recipe, setRecipe] = useState('1 cup sugar')
  const [ingredient, setIngredient] = useState('')

  const parseRecipe = () => {
    return recipe
      .split('\n')
      .filter((el) => {
        return el !== ''
      })
      .map((item) => parseLine(item))
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
      const units = Object.keys(UNITS)
      let conversion

      switch (currentUnit.name) {
        case units.cup:
          conversion = Math.round(numericQuantity(qty) * multiplier)
          break

        case units.tablespoon:
          conversion = Math.round((numericQuantity(qty) * multiplier) / 16)
          break

        case units.teaspoon:
          conversion = Math.round((numericQuantity(qty) * multiplier) / 3)
          break

        default:
          break
      }

      return `${conversion} gram${conversion !== 1 && 's'}`
    }
    return null
  }

  const convertFromGrams = (item, to) => {
    const { qty, multiplier } = item
    const units = Object.keys(UNITS)
    let conversion
    switch (to) {
      case units.cup:
        conversion = `${qty / multiplier.toFixed(2)} cups`
        break
      case units.tablespoon:
        conversion = `${((qty / multiplier) * 16).toFixed(2)} tablespoons`
        break
      default:
        break
    }
    return conversion
  }

  const renderConvertedRecipe = (parsedRecipe) => {
    if (
      Object.values(parsedRecipe[0]).includes(undefined) ||
      typeof parsedRecipe[0] !== 'object'
    ) {
      return 'Could not read input. Try again with the format: quantity scale ingredient'
    }

    return parsedRecipe
      .map((item) => {
        const { qty, scale, ingredient } = item
        let text = `${qty} ${scale} ${ingredient} `

        if (item.scale !== 'gram') {
          return `${text} → ${convertToGrams(item)} ${ingredient}`
        }
        return `${text} → ${convertFromGrams(item)} ${ingredient}`
      })
      .join('\n')
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!recipe) {
      setIngredient('Enter something!')
      return
    }

    setIngredient(renderConvertedRecipe(parseRecipe(recipe)))

    setRecipe('')
  }
  const handleChange = (event) => {
    setRecipe(event.target.value)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <p>
            Enter an ingredient below <i>(ex: 1 cup sugar)</i>
          </p>
          <input
            type="type"
            name="input"
            className={styles.input}
            value={recipe}
            onChange={handleChange}
          />
        </label>
        <div>
          <button className={styles.convertButton} type="submit">
            Convert
          </button>
        </div>
      </form>
      <p className={styles.quickConvertResult}>Result: {ingredient}</p>
    </div>
  )
}
export default QuickConvert
