import React from "react";
import "./Project.css";

const Project = ({id, image, alt, handleReveal, handleHiding, name}) => {
  return (
    <div
      className="column is-full-mobile is-half-tablet is-one-third-desktop"
      key={id}
    >
      <figure onMouseEnter={handleReveal} onMouseLeave={handleHiding}>
        <img
          src={image}
          alt={alt}
          key={id}
          className="projectImage"
        />
        <figcaption className="transistion is-size-4 is-size-3-mobile is-size-3-tablet">
          {name}
        </figcaption>
        <button className="gitHub button transistion">GitHub</button>
        <button className="liveSite button transistion">Live Site</button>
        <div className="overlay"></div>
      </figure>
    </div>
  );
};

export default Project;
