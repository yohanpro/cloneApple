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
      />
    );
  }
};

export default Navbar;
