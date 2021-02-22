import React from 'react';
import "./Wrapper.css";

const Wrapper = (props) => {
    return (
        <main className={props.className} style={props.style}>
            {props.children}
        </main>
    );
};

export default Wrapper;