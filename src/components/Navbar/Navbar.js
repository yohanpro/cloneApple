import React from "react";
import styles from "./Navbar.module.scss";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <nav
        id="globalNav"
        className={styles.navbar__global}
        role="navigation"
        aria-label="main-navigation"
      >
        <div className={styles.navbar__global__content}>
          <ul className={styles.navbar__global__header}>
            <li className={styles["navbar-menuIcon"]}>
              <span className={styles["navbar-menuIcon-top"]} />
            </li>
            <li className={styles["navbar-menuIcon-apple"]} />
          </ul>
        </div>
      </nav>
    );
  }
};

export default Navbar;
