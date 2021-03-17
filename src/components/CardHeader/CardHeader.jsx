import "./CardHeader.css";

import React from 'react';

const CardHeader = (props) => {
    return (
        <section className="card-header cardHeader">
            {props.headingName ? <h1 className="level is-size-2 has-text-centered has-text-weight-bold headerText">{props.headingName}</h1> : props.children}
        </section>
    );
};

export default CardHeader;