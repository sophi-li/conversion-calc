import React from 'react'
import styles from './Home.module.css'
import QuickConvert from '../../components/QuickConvert/QuickConvert'
import Layout from '../../components/Layout'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <Layout>
      <div className={styles.homeContainer}>
        <div className={styles.homeContentContainer}>
          <section className={styles.backgroundcolorContainer}>
            <div className={styles.quickConvertContainer}>
              <h2 className={styles.quickConvertTitle}>Quick Convert</h2>
              <QuickConvert />
            </div>
          </section>

          <div className={styles.colorSectionNavContainer}>
            <div className={styles.sectionNavContainer}>
              <section className={styles.sectionContainer}>
                <h2>Convert cups to grams or grams to cups</h2>
                <Link className={styles.linkBtn} to={'/RecipeConversion'}>
                  Recipe Calculator
                </Link>
              </section>

              <section
                className={`${styles.backgroundcolorContainer} ${styles.resizerContainer}`}
              >
                <div className={styles.sectionContainer}>
                  <h2>Scale up or scale down your recipe</h2>
                  <Link className={styles.linkBtn} to={'/RecipeResizer'}>
                    Recipe Resizer
                  </Link>
                </div>
              </section>

              <section className={styles.sectionContainer}>
                <h2>Convert Farenheit to Celcuis and Celcuis to Farenheit</h2>
                <Link className={styles.linkBtn} to={'/Temperature'}>
                  Temperature Calculator
                </Link>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
