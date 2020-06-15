import React from 'react'
import Layout from '../../components/Layout'
import { Link } from 'react-router-dom'

import styles from './Faq.module.css'

const Faq = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <h2>Frequently Asked Questions</h2>
        <section className={styles.faqContainer}>
          <p className={styles.question}>
            Which weighs more, one pound of feathers or one pound of bricks?
          </p>
          <p>
            Great question, they're the same weight! <u>One pound</u> of
            feathers is equal to <u>one pound</u> of bricks, but the{' '}
            <i>volume</i> of <u>one pound</u> of feathers is{' '}
            <strong>greater</strong> than the <i>volume</i> of <u>one pound</u>{' '}
            of bricks.
          </p>
          <p className={styles.question}>
            Which weighs more, 100 grams of flour or 100 grams of honey?
          </p>
          <p>
            You know it, <u>100 grams</u> of flour and <u>100 grams</u> of honey
            are the same weight! But the <i>volume</i> of honey is{' '}
            <strong>greater</strong> than the <i>volume</i> of flour. 1 cup of
            honey is 336 grams while 1 cup of flour is 120 grams.
          </p>

          <p className={styles.question}>
            Is it better to measure by volume (ie. cups) or weight (ie. grams)?
          </p>
          <p>
            Because baking requires sharp precision, it's better to measure by
            weight. But we don't always have the right equipment to match a
            recipe. What if you have a recipe that specifies ingredients by
            weight, but you only have measuring cups? Or vice versa? Our{' '}
            <Link to={'/RecipeConversion'}>baking calculator</Link> has you
            covered. It'll help you convert your recipe from grams to cups or
            cups to grams.
          </p>

          <p className={styles.question}>What measurements do you support?</p>
          <p>Currently, we support grams, cups, tablespoons, teaspoons.</p>

          <p className={styles.question}>
            There's an ingredient missing, I don't think it's in your database.
            Can you add it?
          </p>
          <p>
            I'm working on adding more ingredients and conversions.{' '}
            <a href="mailto:sophiali124@gmail.com">Send me an email</a> and let
            me know what's missing.
          </p>

          <p className={styles.question}>
            How does the recipe conversion calculator work?
          </p>
          <p>Here's how the recipe conversion calculator works:</p>
          <ol>
            <li>
              Parses your recipe to determine what ingredients need to be
              converted
            </li>
            <li>Looks up the ingredient's conversion rate in our database</li>{' '}
            <li>
              Applies a formula to the ingredient's quantity based on the
              conversion rate
            </li>
            <li>Returns your original and converted recipe</li>
          </ol>

          <p className={styles.question}>Where can I find the source code?</p>
          <p>
            You can find the{' '}
            <a
              href="https://github.com/sophi-li/conversion-calc"
              target="_blank"
              rel="noopener noreferrer"
            >
              source code on GitHub
            </a>
            .
          </p>
        </section>
      </div>
    </Layout>
  )
}

export default Faq
