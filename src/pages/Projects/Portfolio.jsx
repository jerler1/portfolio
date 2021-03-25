import React from "react";
import Projects from "../../components/Projects/Projects";
import works from "./ProjectInfo";
import "./Portfolio.css";
import CardHeader from "../../components/CardHeader/CardHeader";

const Portfolio = () => {
  return (
    <>
      <CardHeader headingName="Portfolio" />
      <header>
        <h1 className="has-text-centered is-size-3 my-4 portfolioHeader">
          My Recent Work
        </h1>
        <h2 className="has-text-centered is-size-4">
          Work In Progress - Transitions
        </h2>
      </header>
      <div className="columns is-flex is-multiline gridContainer m-0 has-text-center">
        {works.map((project) => {
          return (
            <div
              className="column is-full-mobile is-half-tablet is-one-third-desktop"
              key={project.id}
            >
              <figure>
                <img
                  src={project.image}
                  alt={project.alt}
                  key={project.id}
                  className="projectImage"
                />
                <figcaption className="transistion is-size-4 is-size-3-mobile is-size-3-tablet">
                  {project.name}
                </figcaption>
                <button className="gitHub button transistion">GitHub</button>
                <button className="liveSite button transistion">
                  Live Site
                </button>
                <div className="overlay"></div>
              </figure>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Portfolio;
