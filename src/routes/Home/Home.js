import React from 'react'
import styles from './Home.module.css'
import QuickConvert from '../../components/QuickConvert/QuickConvert'
import Layout from '../../components/Layout'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <Layout>
      <div className={styles.homeContainer}>
        <section className={styles.homeContentContainer}>
          <div className={styles.quickConvertContainer}>
            <h2 className={styles.quickConvertTitle}>Quick Convert</h2>
            <QuickConvert />
          </div>
        </section>

        <section className={styles.sectionNavContainer}>
          <div className={styles.sectionContainer}>
            <h2>Convert cups to grams or grams to cups</h2>
            <Link className={styles.linkBtn} to={'/RecipeConversion'}>
              Recipe Calculator
            </Link>
          </div>

          <div className={styles.sectionContainer}>
            <h2>Scale up or scale down your recipe</h2>
            <Link className={styles.linkBtn} to={'/RecipeResizer'}>
              Recipe Resizer
            </Link>
          </div>

          <div className={styles.sectionContainer}>
            <h2>Convert Farenheit to Celcuis and Celcuis to Farenheit</h2>
            <Link className={styles.linkBtn} to={'/Temperature'}>
              Temperature Calculator
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Home
