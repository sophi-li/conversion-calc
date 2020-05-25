import React from "react";
import Layout from "../../components/Layout";

import styles from "./Faq.module.css";

const Faq = () => {
  return (
    <Layout>
      <h2>Frequently Asked Questions</h2>
      <section className={styles.faqContainer}>
        <p className={styles.question}>
          1. Which weighs more, a pound of feathers or a pound of bricks?
        </p>
        <p>
          Great question, they're the same weight! One pound of feathers is
          equal to one pound of bricks, but the volume of 1 pound of feathers is
          greater than the volume of 1 pound of bricks.
        </p>
        <p className={styles.question}>
          2. Which weighs more, 100 grams of flour or 100 grams of honey?
        </p>
        <p>
          You know it, 100 grams of flour and 100 grams of honey are the same
          weight! But the volume of honey is larger than the volume of flour. 1
          cup of honey is 336 grams while 1 cup of flour is 120 grams.
        </p>

        <p className={styles.question}>
          3. Is it better to measure by volume (ie. cups) or weight (ie. grams)?
        </p>
        <p>
          Because baking requires sharp precision, it's better to measure by
          weight. But we don't always have the right equipment to matches a
          recipe. What if you have a recipe that specifies ingredients by
          weight, but you only have measuring cups? Or vice versa? This app's
          got you covered. It'll help you convert your recipe from grams to cups
          or cups to grams.
        </p>

        <p className={styles.question}>4. What measurements do you support?</p>
        <p>Currently, we support grams, cups, tablespoons, teaspoons.</p>

        <p className={styles.question}>
          5. There's an ingredient missing, I don't think it's in your database.
          Can you add it?
        </p>
        <p>
          I'm working on adding more ingredients and conversions.{" "}
          <a href="https://twitter.com/sophia_wyl">Send me a tweet</a> and let
          me know what's missing!
        </p>

        <p className={styles.question}>
          6. How does the manual recipe conversion calculator work?
        </p>
        <p>
          Here's how the recipe conversion calculator works:
          <ol>
            <li>
              Parses your recipe to determine what ingredients need to be
              converted
            </li>
            <li>Looks up the ingredient's conversion rate on our database</li>{" "}
            <li>
              Applies a formula to the ingredient's quantity based on the
              conversion rate
            </li>
            <li>Returns your original and converted recipe</li>
          </ol>
        </p>

        <p className={styles.question}>
          7. How does the web recipe conversion calculator work?
        </p>
        <p>
          Here's how the recipe conversion calculator works:
          <ol>
            <li>
              When you enter your url, the calculator uses a web scraping tool
              called Playwright to get the recipe.
            </li>
            <li>
              If Playwright is able to get the recipe, then the calculator
              follows the same steps as listed in the previous question.
            </li>
          </ol>
          <p>
            <i>Note</i>: Some websites don't allow web scraping, so the web
            conversion calculator may not always work.
          </p>
        </p>

        <p className={styles.question}>8. Where can I find the source code?</p>
        <p>
          You can find the{" "}
          <a href="https://github.com/sophi-li/conversion-calc">
            source code on GitHub
          </a>
          .
        </p>
      </section>
    </Layout>
  );
};

export default Faq;
