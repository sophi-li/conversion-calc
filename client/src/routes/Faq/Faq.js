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
          2. Which weighs more, a pound of flour or a pound of honey?
        </p>
        <p>
          You know it, they're the same weight! But the volume of honey is a
          larger than the volume of flour. One cup of honey is 336 grams while
          one cup of flour is 120 grams.
        </p>

        <p className={styles.question}>
          3. Is it better to measure by volume (ie. cups) or weight (ie. grams)?
        </p>
        <p>
          Because baking requires sharp precision, it's better to measure by
          weight. But we don't always have a scale with us. So you have a recipe
          by weight, but only measuring cups? Or vice versa? This app's got you
          covered. It'll help you convert your recipe from grams to cups or cups
          to grams.
        </p>

        <p className={styles.question}>2. What measurements do you support?</p>
        <p>Currently, we support grams, cups, tablespoons, teaspoons.</p>

        <p className={styles.question}>
          4. There's an ingredient missing, I don't think it's in your database.
          Can you add it?
        </p>
        <p>
          I'm working on adding more ingredients and conversions.{" "}
          <a href="https://twitter.com/sophia_wyl">Send me a tweet</a> and let
          me know what's missing!
        </p>

        <p className={styles.question}>
          4. How does the recipe conversion calculator work?
        </p>
        <p>
          The recipe conversion calculator parses your recipe, determines what
          ingredients need to be converted, then applies a formula to the
          ingredient's quantity based on the conversion rate.
        </p>

        <p className={styles.question}>Where can I find the source code?</p>
        <p>
          You can find the{" "}
          <a href="https://github.com/sophi-li/conversion-calc">
            source code on GitHub
          </a>
          .
        </p>

        <p className={styles.question}>4. How can I contact you?</p>
        <p>
          <a href="https://twitter.com/sophia_wyl">Send me a tweet!</a>
        </p>
      </section>
    </Layout>
  );
};

export default Faq;
