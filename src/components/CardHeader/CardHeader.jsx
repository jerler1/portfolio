import "./CardHeader.css";

import React from 'react';

const CardHeader = (props) => {
    return (
        <section className={`card-header cardHeader ${props.className}`}>
            {props.headingName ? <header className="card-header-title is-centered is-size-2 has-text-centered has-text-weight-bold headerText has-text-white">{props.headingName}</header> : props.children}
        </section>
    );
};

export default CardHeader;