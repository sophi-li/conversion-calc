import React, { useState } from "react";
import ResizerForumla from "./ResizerFormula";

const RecipeResizer = () => {
  const [resize, setResize] = useState("");

  const updateSize = (resize) => {
    setResize(resize);
  };

  return (
    <div>
      <ResizerForumla updateSize={updateSize} />
      <textarea value={resize} rows="20" cols="50"></textarea>
    </div>
  );
};

export default RecipeResizer;
