import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import classnames from "classnames";

const Navbar = () => {
  let [expanded, setMenuState] = useState(false);
  const changeMeunIcon = e => {
    expanded = !expanded;
    setMenuState(expanded);
  };
  return (
    <nav
      id="globalNav"
      className={styles.navbar__global}
      role="navigation"
      aria-label="main-navigation"
    >
      <ul className={styles["navbar__global-content"]}>
        <li className={classnames("menuIcon")} onClick={e => changeMeunIcon(e)}>
          <div className={classnames("menuIcon-top", { expanded: expanded })} />
          <div
            className={classnames("menuIcon-bottom", { expanded: expanded })}
          />
        </li>
        <li className={styles.navbar__appleIcon}>
          <a />
        </li>
        <li className={styles.navbar__shopIcon}>
          <a />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
