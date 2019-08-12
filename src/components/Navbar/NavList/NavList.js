import React from "react";
import styles from "./NavList.module.scss";
import SearchBar from "../../SearchBar/SearchBar";

const NavList = () => {
  return (
    <div className={styles["NavList-container"]}>
      <SearchBar />
      <div className={styles["NavList-container__wrapper"]}>
        <ul>
          <li>Mac</li>
          <li>iPad</li>
          <li>iPhone</li>
          <li>Watch</li>
          <li>Music</li>
          <li>고객지원</li>
        </ul>
      </div>
    </div>
  );
};

export default NavList;
