import React, { useState, useEffect } from "react";
import works from "./ProjectInfo";
import Project from "../../components/Project/Project";
import Fade from "react-reveal/Fade";
import "./Portfolio.css";
import CardHeader from "../../components/CardHeader/CardHeader";

const Portfolio = () => {
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    const newWorks = works.map((project) => {
      return { ...project, isShown: false };
    });
    setProjectList(newWorks);
  }, [works]);

  const handleReveal = (event) => {
    const revealed = projectList.map((project) => {
      if (event.currentTarget.getAttribute("name") === project.title) {
        return { ...project, isShown: true };
      } else {
        return project;
      }
    });
    setProjectList(revealed);
  };
  const handleHiding = (event) => {
    const hidden = projectList.map((project) => {
        return { ...project, isShown: false };
    });
    setProjectList(hidden);
  };

  return (
    <>
      <CardHeader headingName="Portfolio" />
      <header>
        <h1 className="has-text-centered is-size-3 my-4 portfolioHeader">
          My Recent Work
        </h1>
      </header>
      <div className="columns is-flex is-multiline gridContainer m-0 has-text-center">
        {projectList.map((project) => {
          return (
            <Project
              value={project.isShown}
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
