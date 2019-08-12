import React from "react";

const SearchBar = () => {
  return (
    <div className={"SearchBar"}>
      <div className={"SearchBar__searchArea"}>
        <div className="SearchBar-icon-search" />
        <div className="SearchBar-typingArea">apple.com 검색</div>
      </div>
    </div>
  );
};
export default SearchBar;
