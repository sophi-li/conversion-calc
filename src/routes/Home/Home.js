import React, { useState } from 'react'
import styles from './Home.module.css'
import QuickConvert from '../../components/QuickConvert/QuickConvert'
import Layout from '../../components/Layout'
import { Link } from 'react-router-dom'

const Home = () => {
  const [ingredient, setIngredient] = useState('')

  return (
    <Layout>
      <div className={styles.homeContainer}>
        <h1 className={styles.homeTitle}>Baking Calculator</h1>
        <p className={styles.tagline}>Helping you measure the right things</p>

        <div className={styles.homeContentContainer}>
          <section className={styles.backgroundcolorContainer}>
            <div className={styles.quickConvertContainer}>
              <h2>Quick Convert</h2>
              <QuickConvert updateIngredient={setIngredient} />
              <span>
                <p className={styles.quickConvertResult}>
                  Result: {ingredient}
                </p>
              </span>
            </div>
          </section>

          <section className={styles.sectionContainer}>
            <h2>Recipe Calculator</h2>
            <p>The baking calculator converts cups to grams or grams to cups</p>
            <Link className={styles.linkBtn} to={'/RecipeConversion'}>
              <span role="img" aria-label="abacus emoji">
                🧮
              </span>{' '}
              Recipe Calculator
            </Link>
          </section>

          <section className={styles.backgroundcolorContainer}>
            <div className={styles.sectionContainer}>
              <h2>Recipe Resizer</h2>
              <p>Scale up or scale down your recipe</p>
              <Link className={styles.linkBtn} to={'/RecipeResizer'}>
                <span role="img" aria-label="scissors emoji">
                  ✂️
                </span>{' '}
                Recipe Resizer
              </Link>
            </div>
          </section>

          <section className={styles.sectionContainer}>
            <h2>Temperature Calculator</h2>
            <p>
              The temperature calculator converts Farenheit to Celcuis and
              Celcuis to Farenheit.
            </p>
            <Link className={styles.linkBtn} to={'/Temperature'}>
              <span role="img" aria-label="thermometer emoji">
                🌡️
              </span>{' '}
              Temperature Calculator
            </Link>
          </section>
        </div>
      </div>
    </Layout>
  )
}

export default Home
