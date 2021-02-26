import React from "react";
import "./Photo.css";
import Me from "../../images/headShot.png";

const Photo = (props) => {
  return (
    <div className="card sidebar">
      <h1 className="name">John Erler</h1>
      <h3 className="titleJob">Full Stack Web Developer</h3>
      <a
        className="icons"
        href="https://www.linkedin.com/in/john-erler/"
        target="_blank"
      >
        <i className="fab fa-linkedin-in" aria-hidden="true"></i>
      </a>
      <a className="icons" href="https://github.com/jerler1" target="_blank">
        <i className="fab fa-github" aria-hidden="true"></i>
      </a>
      <img className="photo" src={Me} />
      <div className="contact-details clearfix">
        <div className="detail titleJob">
          <span className="icon">
            <i className="icon fs-lg icon-location"></i>
          </span>
          <span className="info">Atlanta, Georgia</span>
        </div>
        <div className="detail titleJob">
          <span className="icon">
            <i className="icon fs-lg icon-phone"></i>
          </span>
          <span className="info" itemProp="telephone">
            +1 404 310 9828
          </span>
        </div>
      </div>
    </div>
  );
};

export default Photo;
