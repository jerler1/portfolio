import React from 'react';

const Container = () => {
    return (
        <div className="container" style={props.style}>
            {props.children}
        </div>
    );
};

export default Container;