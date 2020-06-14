import React, { useState } from 'react'
import ConversionFormula from './ConversionFormula'
import styles from './RecipeConversion.module.css'

import Layout from '../../components/Layout'

const RecipeConversion = () => {
  const [convertedRecipe, setConvertedRecipe] = useState('')

  return (
    <Layout>
      <div className={styles.container}>
        <h2>Recipe Calculator</h2>
        <div className={styles.RecipeConversionContainer}>
          <ConversionFormula updateRecipe={setConvertedRecipe} />
          <div>
            <label>
              <p>Result:</p>
            </label>
            <textarea
              className={styles.textArea}
              value={convertedRecipe}
              rows="20"
              cols="40"
              readOnly={true}
            ></textarea>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default RecipeConversion
