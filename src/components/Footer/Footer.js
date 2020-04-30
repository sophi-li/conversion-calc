import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <footer className={styles.footer}>
        <p>
          <a href="https://github.com/sophi-li/conversion-calc">
            {" "}
            Source Code |
          </a>{" "}
          <a href="https://twitter.com/sophia_wyl"> Contact </a>{" "}
        </p>
      </footer>
    </div>
  );
};

export default Footer;
