import React from "react";
import "./Photo.css";
import Me from "../../images/headShot.png";

const Photo = (props) => {
  return (
    <div class="card sidebar">
      <h1 className="name">John Erler</h1>
      <h3 className="titleJob">Full Stack Web Developer</h3>
      <a
        className="icons"
        href="https://www.linkedin.com/in/john-erler/"
        target="_blank"
      >
        <i class="fab fa-linkedin-in" aria-hidden="true"></i>
      </a>
      <a className="icons" href="https://github.com/jerler1" target="_blank">
        <i class="fab fa-github" aria-hidden="true"></i>
      </a>
      <img className="photo" src={Me} />
      <div class="contact-details clearfix">
        <div class="detail">
          <span class="icon">
            <i class="icon fs-lg icon-location"></i>
          </span>
          <span class="info">Atlanta, Georgia, US</span>
        </div>
        <div class="detail">
          <span class="icon">
            <i class="icon fs-lg icon-phone"></i>
          </span>
          <span class="info" itemprop="telephone">
            +1 404 310 9828
          </span>
        </div>
        <div class="detail">
          <span class="icon">
            <i class="icon fs-lg icon-mail"></i>
          </span>
          <span class="info">
            <a
              class="link-disguise"
              href="mailto:jerler.dev@gmail.com"
              itemprop="email"
            ></a>
          </span>
        </div>
        <div class="detail">
          <span class="icon">
            <i class="icon fs-lg icon-link"></i>
          </span>
          <span class="info">
            <a href="https://www.castaldi.dev" target="_blank">
              https://www.castaldi.dev
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Photo;
