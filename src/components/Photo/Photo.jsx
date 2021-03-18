import React from "react";
import "./Photo.css";
import { headShot as Me, github, linkedIn } from "../../assets/";

const Photo = (props) => {
  return (
    <div className="columns">
      <div className="column is-one-half">
        <div className="card-image">
          <figure className="has-text-centered">
            <img
              className="photo m-5"
              src={Me}
              alt="John Erler"
              width="300px"
            />
          </figure>
        </div>
      </div>
      <div className="column is-one-half m-5">
        <div className="info">
          <h1 className="title is-1">John Erler</h1>
          <h1 className="subtitle is-3 mb-0">Full Stack Web Developer</h1>
          <h1 className="subtitle is-4">Atlanta, Georgia</h1>
          <a
            className="icons"
            href="https://www.linkedin.com/in/john-erler/"
            target="_blank"
          >
            <i className="socialIcons fab fa-linkedin"></i>
          </a>
          <a
            className="icons"
            href="https://github.com/jerler1"
            target="_blank"
          >
            <i className="socialIcons fab fa-github"></i>
          </a>
          <a className="icons" href="mailto:jerler.dev@gmail.com">
            <i className="socialIcons fas fa-envelope-square"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Photo;
