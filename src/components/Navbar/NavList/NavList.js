import React, { useState } from "react";
import styles from "./NavList.module.scss";
import SearchBar from "../../SearchBar/SearchBar";
import classnames from "classnames";

const NavList = props => {
  const [product] = useState([
    {
      index: 1,
      name: "Mac"
    },
    {
      index: 2,
      name: "iPad"
    },
    {
      index: 3,
      name: "iPhone"
    },
    {
      index: 4,
      name: "Watch"
    },
    {
      index: 5,
      name: "Music"
    },
    {
      index: 6,
      name: "고객지원"
    }
  ]);
  return (
    <div
      className={classnames(
        styles["NavList-container"],
        {
          expanded: props.expanded
        },
        "NavList-container"
      )}
    >
      <SearchBar />
      <div className={classnames(styles["NavList-container__wrapper"])}>
        <ul>
          {product.map(el => {
            return <li key={el.index}>{el.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default NavList;
