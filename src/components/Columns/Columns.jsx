import React from 'react';
import "./Columns.css";

const Columns = (props) => {
    return (
        <div className={`columns ${props.className}`} style={props.style}>
            {props.children}
        </div>
    );
};

export default Columns;