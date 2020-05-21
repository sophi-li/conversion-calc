import React, { useState } from "react";
import styles from "./Home.module.css";
import QuickConvert from "../../components/QuickConvert/QuickConvert";
import Layout from "../../components/Layout";

const Home = () => {
  const [ingredient, setIngredient] = useState("");

  return (
    <Layout>
      <section className={styles.homeContainer}>
        <div className={styles.howTo}>
          <h2>How to Use It</h2>

          <p>
            The calculator will understand most yummy things you feed it. For
            example:
          </p>
          <ul>
            <li>1 1/2 cups flour → 180g flour</li>
            <li>20 g salt → 1 tablespoon salt</li>
            <li>1.5 cups sugar → 300 grams sugar</li>
          </ul>
        </div>

        <div className={styles.quickConvert}>
          <h2>Quick Convert</h2>
          <QuickConvert updateIngredient={setIngredient} />
          <span>
            <p>Result: {ingredient}</p>
          </span>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
