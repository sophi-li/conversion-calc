import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import RecipeConversion from "../RecipeConversion/RecipeConversion.js";
import RecipeResizer from "../RecipeResizer/RecipeResizer";
import Home from "../Home/Home";

const Header = () => {
  return (
    <Router>
      <Link to="/">
        <h1>Baking Conversion</h1>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to={"/RecipeConversion"}>Recipe Conversion</Link>
          </li>
          <li>
            <Link to={"/RecipeResizer"}>Recipe Resizer</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/RecipeConversion">
          <RecipeConversion />
        </Route>
        <Route path="/RecipeResizer">
          <RecipeResizer />
          <Route path="/">
            <Home />
          </Route>
        </Route>
      </Switch>
    </Router>
  );
};

export default Header;
