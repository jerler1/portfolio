import React, { useState } from "react";
import Cobalt from "../../images/Cobalt.png"
import Picky from "../../images/Picky.png"
import EmployeeDirectory from "../../images/EmployeeDirectory.png"
import Weather from "../../images/weather.png"
import Roster from "../../images/EmployeeRoster.gif"
import DayCalender from "../../images/daycalender.png"
import "./Projects.css";

const Projects = (props) => {
  const Project = (props) => {
    const [projects, setProject] = useState([
      {
        name: "Cobalt Canvas",
        description:
          "A full-stack application where users can connect with other users to collaboratively make art projects. This app used Canvas Web API with an express server and MySQL database.  Sequelize was the ORM and handlebars handled the views",
        url: "https://cobalt-canvas.herokuapp.com/",
        github: "https://github.com/jerler1/Cobalt",
        image: Cobalt,
        id: "1",
      },
      {
        name: "Picky: the Recipe Finder",
        description:
          "This app was designed to help busy people find recipes quickly while still being mindful of allergies and diet preferences, and allowing them the access to email themselves ingredients required.",
        url: "https://www.castaldi.dev/project1-picky/",
        github: "https://github.com/jerler1/Picky",
        image: Picky,
        id: "2",
      },
      {
        name: "React Employee Directory ",
        description:
          "This application is an employee directory built with React using class components. The user has the ability to sort by clicking the heading of the column and filtering their search using the searchbar.",
        url:
          "https://jerler1.github.io/Employee-Directory/",
        github:
          "https://github.com/jerler1/Employee-Directory",
        image: EmployeeDirectory,
        id: "3",
      },
      {
        name: "WeatherSearch Dashboard ",
        description:
          "An application designed to obtain the current and 5 day weather forecast for an city using the Open Weather API. Weather Dashboard uses jQuery and local storage.",
        url: "https://jerler1.github.io/WeatherSearch/",
        github: "https://github.com/jerler1/WeatherSearch",
        image: Weather,
        id: "4",
      },
      {
        name: "Employee Roster",
        description:
          "Node CLI that takes in information about employees and generates a chart that displays the employee's information.",
        url: "https://drive.google.com/file/d/13U3kQguU-30ykuTUrLnWFEYe0VKW6Eel/view",
        github: "https://github.com/jerler1/Employee-Roster",
        image: Roster,
        id: "5",
      },

      {
        name: "Day Planner",
        description:
          "Day Planner allows you to keep notes to help keep your busy schedule.  Uses Day.js and jquery.",
        url: "https://jerler1.github.io/dayplanner/",
        github: "https://github.com/jerler1/dayplanner",
        image: DayCalender,
        id: "6",
      },
    ]);
    return <div></div>;
  };
};
export default Projects;
