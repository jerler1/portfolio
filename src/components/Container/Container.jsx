import React from "react";
import "./Container.css";

const Container = (props) => {
  return (
    <div className={`container ${props.className}`} id={props.id} style={props.style}>
      {props.children}
    </div>
  );
};

export default Container;
