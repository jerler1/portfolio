import React from 'react';

const Wrapper = () => {
    return (
        <main className={props.className} style={props.style}>
            {props.children}
        </main>
    );
};

export default Wrapper;