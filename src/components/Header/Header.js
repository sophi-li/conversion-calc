import React from "react";
import { Link } from "react-router-dom";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <nav className={styles.navbar}>
      <Link className={styles.title} to={"/"}>
        Baking Conversion
      </Link>
      <ul>
        <li>
          <Link to={"/WebConversion"}>Web Conversion</Link>
        </li>
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
  );
};

export default Header;
