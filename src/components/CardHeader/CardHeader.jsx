import "./CardHeader.css";

import React from 'react';

const CardHeader = (props) => {
    return (
        <section className="card-header cardHeader">
            {props.children}
        </section>
    );
};

export default CardHeader;