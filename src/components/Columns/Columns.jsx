import React from 'react';

const Columns = () => {
    return (
        <div className="columns" style={props.style}>
            {props.children}
        </div>
    );
};

export default Columns;