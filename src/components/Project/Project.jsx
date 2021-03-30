import React from "react";
import "./Project.css";

const Project = ({title, id, image, alt, handleReveal, handleHiding, name}) => {
  return (
    <div
      className="column is-full-mobile is-half-tablet is-one-third-desktop"
      
    >
      <figure onMouseEnter={handleReveal} onMouseLeave={handleHiding}>
        <img
          src={image}
          alt={alt}
          className="projectImage"
        />
        <figcaption className="is-size-4 is-size-3-mobile is-size-3-tablet">
          {name}
        </figcaption>
        <button className="gitHub button">GitHub</button>
        <button className="liveSite button">Live Site</button>
        <div className="overlay" name={title}></div>
      </figure>
    </div>
  );
};

export default Project;
