import React, { useReducer } from "react";
import styles from "./Navbar.module.scss";
import classnames from "classnames";
import NavList from "./NavList/NavList";

function reducer() {}
const Navbar = () => {
  const [expanded, dispatch] = useReducer((state, action) => {
    if (action.type === "menuExpand") {
      state = !state;
      return state;
    }
  }, false);
  const StateContext = React.createContext();
  return (
    <StateContext.Provider value={expanded}>
      <nav
        id="globalNav"
        className={styles.navbar__global}
        role="navigation"
        aria-label="main-navigation"
      >
        <ul className={styles["navbar__global-content"]}>
          <li
            className={classnames("menuIcon")}
            onClick={e => dispatch({ type: "menuExpand" })}
          >
            <div
              className={classnames("menuIcon-top", { expanded: expanded })}
            />
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
        <NavList />
      </nav>
    </StateContext.Provider>
  );
};

export default Navbar;
