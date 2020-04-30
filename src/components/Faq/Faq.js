import React from "react";

const Faq = () => {
  return (
    <div>
      <section>
        <p>
          <i>1. Which weighs more, a pound of feathers or a pound of bricks?</i>
        </p>
        <p>
          Great question, they're the same weight! One pound of feathers is
          equal to one pound of bricks, but the volume of 1 pound of feathers is
          greater than the volume of 1 pound of bricks.
        </p>
        <p>
          <i>2. Which weighs more, a pound of flour or a pound of honey?</i>
        </p>
        <p>
          You know it, they're the same weight! But the volume of honey is a
          larger than the volume of flour. One cup of honey is 336 grams while
          one cup of flour is 120 grams.
        </p>

        <p>
          <i>
            3. Is it better to measure by volume (ie. cups) or weight (ie.
            grams)?
          </i>
        </p>
        <p>
          Because baking requires sharp precision, it's better to measure by
          weight. But we don't always have a scale with us. So you have a recipe
          by weight, but only measuring cups? Or vice versa? This app's got you
          covered. It'll help you convert your recipe from grams to cups or cups
          to grams.
        </p>
        <p>
          <i>2. What measurements do you support?</i>
        </p>
        <p>Currently, we support grams, cups, tablespoons, teaspoons.</p>
        <p>
          <i>
            4. There's an ingredient missing, I don't think it's in your
            database. Can you add it?
          </i>
        </p>
        <p>
          I'm working on adding more ingredients and conversions.{" "}
          <a href="https://twitter.com/sophia_wyl">Send me a tweet</a> and let
          me know what's missing!
        </p>
        <p>
          <i>4. How does the recipe conversion calculator work?</i>
        </p>
        <p>
          The recipe conversion calculator parses your recipe, determines what
          ingredients need to be converted, then applies a formula to the
          ingredient's quantity based on the conversion rate.
        </p>
        <p>
          <i>Where can I find the source code?</i>
        </p>
        <p>
          You can find the{" "}
          <a href="https://github.com/sophi-li/conversion-calc">
            source code on GitHub
          </a>
          .
        </p>
        <p>
          <i>
            4. How can I contact you to talk about baking sourdough bread or
            interview you for a software engineering role?{" "}
          </i>
        </p>
        <p>
          I'd love to talk to you about bread or software engineering.{" "}
          <a href="https://twitter.com/sophia_wyl">Send me a tweet!</a>
        </p>
      </section>
    </div>
  );
};

export default Faq;
