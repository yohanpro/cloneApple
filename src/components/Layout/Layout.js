import React from "react";

import styles from "./Layout.module.scss";

const Layout = ({ children, title, description }: Props) => (
  <div className={styles.layout}>
    <h2 className={styles.h2}>Is it working?</h2>
  </div>
);

export default Layout;
