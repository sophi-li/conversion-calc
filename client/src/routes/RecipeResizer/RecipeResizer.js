import React, { useState } from "react";
import ResizerForumla from "./ResizerFormula";
import styles from "./RecipeResizer.module.css";
import Layout from "../../components/Layout";

const RecipeResizer = () => {
  const [resize, setResize] = useState("");

  const updateSize = (resize) => {
    setResize(resize);
  };

  return (
    <Layout>
      <div>
        <h2>Recipe Resizer</h2>
        <h3>Instructions:</h3>
        <p>1. Enter your recipe with line breaks.</p>
        <p>2. Enter a number for how much you need to scale your recipe by.</p>
        <p>
          3. Click multiply to increase your recipe or divide to decrease your
          recipe size.
        </p>

        <div className={styles.recipeResizerContainer}>
          <ResizerForumla updateSize={updateSize} />
          <div>
            <h4>Result:</h4>
            <textarea
              className={styles.textArea}
              value={resize}
              rows="20"
              cols="40"
            ></textarea>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RecipeResizer;
