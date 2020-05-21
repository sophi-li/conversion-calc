import React from "react";
import { Link } from "react-router-dom";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.titleContainer}>
        <Link className={styles.title} to={"/"}>
          Baking Conversion
        </Link>
      </div>
      <div className={styles.navLinksContainer}>
        <ul className={styles.navLinks}>
          <li>
            <Link className={styles.link} to={"/WebConversion"}>
              Web Recipe Conversion
            </Link>
          </li>
          <li>
            <Link className={styles.link} to={"/RecipeConversion"}>
              Recipe Conversion
            </Link>
          </li>
          <li>
            <Link className={styles.link} to={"/RecipeResizer"}>
              Recipe Resizer
            </Link>
          </li>
          <li>
            <Link className={styles.link} to={"/Temperature"}>
              Temperature Converter
            </Link>
          </li>
          <li>
            <Link className={styles.link} to={"/Faq"}>
              FAQ
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
