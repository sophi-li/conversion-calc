import React, { useState } from 'react'
import numericQuantity from 'numeric-quantity'
import styles from './ResizerFormula.module.css'
import { parseLine } from '../../utils'

const ResizerFormula = ({ updateSize }) => {
  const [recipe, setRecipe] = useState(`1 cup sugar \n1 cup flour`)
  const [multiplier, setMultiplier] = useState('')
  const [multiply, setMultiply] = useState(false)
  const [divide, setDivide] = useState(false)

  const handleSubmitMultiply = () => {
    setMultiply(!multiply)
  }

  const handleSubmitDivide = () => {
    setDivide(!divide)
  }

  function convert() {
    let originalArray = recipe.split('\n').filter(function (el) {
      return el !== ''
    })
    let parsedItemArray = []

    for (let i = 0; i < originalArray.length; i++) {
      parsedItemArray.push(parseLine(originalArray[i]))
    }

    for (let i = 0; i < parsedItemArray.length; i++) {
      if (parsedItemArray[i].qty !== null) {
        let newQty = 0
        if (multiply) {
          newQty = numericQuantity(parsedItemArray[i].qty) * multiplier
        } else {
          newQty = numericQuantity(parsedItemArray[i].qty) / multiplier
        }
        originalArray[i] = originalArray[i].concat(
          ` (${newQty} ${parsedItemArray[i].scale} ${parsedItemArray[i].ingredient})`
        )
      }
    }

    return originalArray.join('\n')
  }

  const convertSize = () => {
    return convert(recipe)
  }

  const handleSubmitRecipe = (event) => {
    event.preventDefault()
    updateSize(convertSize(recipe))
    setRecipe('')
  }

  const handleChangeRecipe = (event) => {
    setRecipe(event.target.value)
  }

  const handleChangeMultiplier = (event) => {
    setMultiplier(event.target.value)
  }

  return (
    <div>
      <form
        onSubmit={handleSubmitRecipe}
        className={styles.resizerFormulaContatiner}
      >
        <div>
          <label>
            <p>Enter your recipe with line breaks:</p>
          </label>
          <textarea
            value={recipe}
            onChange={handleChangeRecipe}
            type="text"
            rows="20"
            cols="40"
            className={styles.textArea}
          ></textarea>
        </div>

        <div className={styles.multiplierContainer}>
          <div>
            <label>
              <p>Multiplier:</p>
              <input
                type="number"
                value={multiplier}
                onChange={handleChangeMultiplier}
                className={styles.multiplierInput}
                placeholder="e.g. 2"
              />
            </label>
          </div>
          <div>
            <button
              type="submit"
              value="multiply"
              onClick={handleSubmitMultiply}
              className={styles.multiplyButton}
            >
              Multiply
            </button>
          </div>
          <div>
            <button
              type="submit"
              value="divide"
              onClick={handleSubmitDivide}
              className={styles.divideButton}
            >
              Divide
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ResizerFormula
