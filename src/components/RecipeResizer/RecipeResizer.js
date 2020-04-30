import React, { useState } from "react";
import ResizerForumla from "./ResizerFormula";
import styles from "./RecipeResizer.module.css";

const RecipeResizer = () => {
  const [resize, setResize] = useState("");

  const updateSize = (resize) => {
    setResize(resize);
  };

  return (
    <div className={styles.recipeResizerContainer}>
      <ResizerForumla updateSize={updateSize} />
      <div>
        <p>Your output</p>
        <textarea value={resize} rows="20" cols="50"></textarea>
      </div>
    </div>
  );
};

export default RecipeResizer;
