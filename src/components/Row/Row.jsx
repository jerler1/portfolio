import React from "react";
import "./Row.css";

const Row = (props) => {
  return (
    <section className={`section ${props.className}`} style={props.style}>
      {props.children}
    </section>
  );
};

export default Row;
