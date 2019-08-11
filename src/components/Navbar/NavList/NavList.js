import React from "react";
import styles from "./NavList.module.scss";
import { searchIcon } from "../../../assets/images/icons/icon-search.svg";

const NavList = () => {
  return (
    <div className={styles["NavList-container"]}>
      <div className={"SearchBar"}>
        <div className={"SearchBar__searchArea"}>
          <div />
          <img className="SearchBar-icon-search" src={searchIcon} />
        </div>
      </div>
      <div className={styles["NavList-container__wrapper"]}>
        <ul>{<li />}</ul>
      </div>
    </div>
  );
};

export default NavList;
// search
