import React from "react";
import styles from "./Footer.module.css";

const Footer = () => (
  <footer className={styles.footerContainer}>
    <p>
      <a
        className={styles.footerContent}
        href="https://github.com/sophi-li/conversion-calc"
      >
        {" "}
        Source Code
      </a>{" "}
      <a className={styles.footerContent} href="https://twitter.com/sophia_wyl">
        {" "}
        Contact{" "}
      </a>{" "}
    </p>
  </footer>
);

export default Footer;
