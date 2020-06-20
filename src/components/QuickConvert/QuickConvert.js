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

  const convertFromGrams = (item, to) => {
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
        const { ingredient, original } = item
        let text = `${original}`

        if (item.scale === undefined) {
          return `Couldn't convert "${item}".`
        } else if (item.multiplier === undefined) {
          return `Couldn't find "${ingredient}" in our database.`
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
