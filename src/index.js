import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import styles from "./index.module.css";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import RecipeConversion from "./routes/RecipeConversion";
import RecipeResizer from "./routes/RecipeResizer";
import Temperature from "./routes/Temperature";
import Faq from "./routes/Faq";
import Home from "./routes/Home";

const App = () => {
  return (
    <div className={styles.container}>
      <Router>
        <Header />
        <Switch>
          <Route path="/RecipeConversion">
            <RecipeConversion />
          </Route>
          <Route path="/RecipeResizer">
            <RecipeResizer />
          </Route>
          <Route path="/Temperature">
            <Temperature />
          </Route>
          <Route path="/Faq">
            <Faq />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
