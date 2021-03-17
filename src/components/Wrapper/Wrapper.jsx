import React from "react";
import "./Wrapper.css";

const Wrapper = (props) => {
  return (
    <main className={props.className} style={props.style}>
      <div className="card mainCard">
        <div className="container mainContainer">{props.children}</div>
      </div>
    </main>
  );
};

export default Wrapper;
