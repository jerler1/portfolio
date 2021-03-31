import React from "react";
import Zoom from "react-reveal/Zoom";
import Tada from "react-reveal/Tada";
import LightSpeed from "react-reveal/LightSpeed";
import "./Project.css";

const Project = ({
  title,
  image,
  alt,
  description,
  github,
  url,
  handleReveal,
  handleHiding,
  value,
}) => {
  return (
    <div className="column is-full-mobile is-half-tablet is-one-third-desktop">
      <figure
        onMouseEnter={handleReveal}
        onMouseLeave={handleHiding}
        name={title}
        className="figureWrapper"
      >
        <img value={value} src={image} alt={alt} className="projectImage" />
        <Zoom left when={value ? true : false}>
          <figcaption className="is-size-4 is-size-3-mobile is-size-3-tablet">
            {title}
          </figcaption>
        </Zoom>
        <Zoom bottom when={value ? true : false} delay={400}>
          <p className="animatedDescription">{description}</p>
        </Zoom>
        <LightSpeed left when={value ? true : false}>
          <a href={github} target="_blank" className="gitHub button">
            GitHub
          </a>
        </LightSpeed>
        <LightSpeed right when={value ? true : false}>
          <a href={url} target="_blank" className="liveSite button">
            Live Site
          </a>
        </LightSpeed>

        <div className={value ? "overlay" : ""}></div>
      </figure>
    </div>
  );
};

export default Project;
