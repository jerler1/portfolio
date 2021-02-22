import React from 'react';

const Columns = (props) => {
    return (
        <div className="columns" style={props.style}>
            {props.children}
        </div>
    );
};

export default Columns;