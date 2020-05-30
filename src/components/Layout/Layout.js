import React from "react";
// import { Link } from "react-router-dom";

import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return <div className={styles.layoutContainer}>{children}</div>;
};

export default Layout;
