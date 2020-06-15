import React, { useState } from 'react'
import ResizerForumla from './ResizerFormula'
import Layout from '../../components/Layout'

import styles from './ResizerFormula.module.css'

const RecipeResizer = () => {
  const [resize, setResize] = useState('')

  const updateSize = (resize) => {
    setResize(resize)
  }

  return (
    <Layout>
      <div className={styles.backgroundcolorContainer}>
        <div className={styles.container}>
          <h2 className={styles.title}>Recipe Resizer</h2>
          <div className={styles.recipeResizerContainer}>
            <ResizerForumla updateSize={updateSize} />
            <div>
              <label>
                <p>Result:</p>
              </label>
              <textarea
                className={styles.textArea}
                value={resize}
                rows="20"
                cols="40"
                readOnly={true}
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default RecipeResizer
