import React from "react";

const Column = () => {
  return (
    <div className={props.className} style={props.style}>
      {props.children}
    </div>
  );
};

export default Column;
