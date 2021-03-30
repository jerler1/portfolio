import React, { useState, useEffect } from "react";
import works from "./ProjectInfo";
import Project from "../../components/Project/Project";
import Fade from "react-reveal/Fade";
import "./Portfolio.css";
import CardHeader from "../../components/CardHeader/CardHeader";

const Portfolio = () => {
  const [isShown, setIsShown] = useState(false);
  const [projectList, setProjectList] = useState({});

  useEffect(() => {
    works.map((project) => {
      setProjectList({ key: project.id, isShown: false });
    });
  }, []);

  const handleReveal = (event) => {
    console.log(event.target);
  };
  const handleHiding = (event) => {
    console.log("leaving");
  };

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
            <Project
              key={project.id}
              {...project}
              handleHiding={handleHiding}
              handleReveal={handleReveal}
            />
          );
        })}
      </div>
    </>
  );
};

export default Portfolio;
