import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import RecipeConversion from "../RecipeConversion/RecipeConversion.js";
import RecipeResizer from "../RecipeResizer/RecipeResizer";
import Faq from "../Faq/Faq";
import Temperature from "../Temperature/Temperature";
import Home from "../Home/Home";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <Router>
      <nav className={styles.navbar}>
        <Link className={styles.title} to={"/"}>
          Baking Conversion
        </Link>
        <ul>
          <li>
            <Link to={"/RecipeConversion"}>Recipe Conversion</Link>
          </li>
          <li>
            <Link to={"/RecipeResizer"}>Recipe Resizer</Link>
          </li>
          <li>
            <Link to={"/Temperature"}>Temperature Converter</Link>
          </li>
          <li>
            <Link to={"/Faq"}>FAQ</Link>
          </li>
        </ul>
      </nav>
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
    </Router>
  );
};

export default Header;
