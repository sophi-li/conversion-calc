import React from "react";
import ReactDOM from "react-dom";
import styles from "./index.module.css";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div className={styles.container}>
      <Header />
      {/* <Home /> */}
      <Footer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
