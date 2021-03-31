import React from "react";
import Fade from "react-reveal/Fade";
import "./Project.css";

const Project = ({
  title,
  image,
  alt,
  handleReveal,
  handleHiding,
  name,
  value,
}) => {
  return (
    <div className="column is-full-mobile is-half-tablet is-one-third-desktop">
      <figure
        onMouseEnter={handleReveal}
        onMouseLeave={handleHiding}
        name={title}
      >
        <img value={value} src={image} alt={alt} className="projectImage" />
        <Fade top when={value ? true : false}>
          <figcaption className="is-size-4 is-size-3-mobile is-size-3-tablet">
            {name}
          </figcaption>
        </Fade>

        <button className="gitHub button">GitHub</button>
        <button className="liveSite button">Live Site</button>
        <div className="overlay"></div>
      </figure>
    </div>
  );
};

export default Project;
