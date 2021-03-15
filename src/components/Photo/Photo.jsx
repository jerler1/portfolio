import React from "react";
import "./Photo.css";
import Me from "../../assets/images/headShot.png";


const Photo = (props) => {
  return (
    <div className="card sidebar">
      <h1 className="mainHeading">John Erler</h1>
      <h3 className="subHeading">Full Stack Web Developer</h3>
      <div className="card-image">
        <figure>
          <img className="photo" src={Me} width="200px"/>
        </figure>
      </div>
      <div className="container info-box has-background-info-light has-text-black">
        <h2 className="mainHeading">Contact Me</h2>
        <ul className="subHeading">
          <li>404-310-9828</li>
          <li>jerler.dev@gmail.com</li>
          <li>Atlanta, Georgia</li>
        </ul>
        <a
          className="icons"
          href="https://www.linkedin.com/in/john-erler/"
          target="_blank"
        >
          <img
            className="socialIcons"
            src="../../assets/images/daycalender.png"
          ></img>
        </a>
        <a className="icons" href="https://github.com/jerler1" target="_blank">
          <img
            className="socialIcons"
            src="https://www.flaticon.com/svg/static/icons/svg/25/25231.svg"
          />
        </a>
        <div className=""></div>
        <a className="button resume">Resume</a>
      </div>
    </div>
  );
};

export default Photo;
