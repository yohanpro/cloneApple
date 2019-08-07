import React from "react";
import styles from "./Navbar.module.scss";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  changeMeunIcon() {
    console.log(this);
  }
  render() {
    return (
      <nav
        id="globalNav"
        className={styles.navbar__global}
        role="navigation"
        aria-label="main-navigation"
      >
        <ul className={styles["navbar__global-content"]}>
          <li
            className={styles.navbar__menuIcon}
            onClick={e => this.changeMeunIcon(e)}
          >
            <div className={styles["menuIcon-top"]} />
            <div className={styles["menuIcon-bottom"]} />
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
  }
};

export default Navbar;
