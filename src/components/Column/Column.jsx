import React from "react";
import "./Column.css";

const Column = (props) => {
  return (
    <div className={`column ${props.className}`} style={props.style} id={props.id}>
      {props.children}
    </div>
  );
};

export default Column;
