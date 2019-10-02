import React from "react";

const StickyBar = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      <button id="btn-buy">Buy</button>
    </div>
  );
};

export default StickyBar;
