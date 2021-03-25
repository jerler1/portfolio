import React from "react";
import Photo from "../../components/Photo/Photo";
import CardHeader from "../../components/CardHeader/CardHeader";
import resume from "../../assets/Main_Resume.pdf";
import skills from "./skills";
import "./About.css";

const About = () => {
  return (
    <>
      <CardHeader className="is-inline-block mainHeader">
        <Photo />
      </CardHeader>
      <div className="columns p-5">
        <section className="column aboutMe">
          <header className="my-3 has-text-centered aboutHeaders is-size-4 is-size-3-mobile">
            About <span className="spanHeader">Me</span>
          </header>
          <article className="my-3">
            I am a full-stack web developer in Atlanta who recently completed a certificate in Full-Stack Web Development at Georgia Tech.  I am transistioning from a career of chemistry of 13 years to pursue a career in web development.
          </article>
          <article>
            My background in chemistry is a definite asset when it comes to learning new technologies and solving puzzles. I am able to collaborate and work with a team while in a high-stress environment.   
          </article>
          <article className="my-3"> 
            I am always learning, and I would love to speak to you about tech, and especially best practices of the industry.
          </article>
          <article>
            In my spare time I like to play board games and read.  My first board game was Settlers of Catan, and I have since expanded into a collection of twenty-five different board games collected.
          </article>
        </section>
        <section className="column has-text-centered">
          <header className="my-3 aboutHeaders is-size-4 is-size-3-mobile">
            My <span className="spanHeader">Fundamentals</span>
          </header>
          <div className="skillIcons is-flex">
            {skills.map((icon, index) => {
              return (
                <div className="iconDiv" key={index}>
                  <figure>{icon.icon}</figure>
                  <figcaption className="iconSubtitle has-text-weight-semibold">{icon.title}</figcaption>
                </div>
              );
            })}
          </div>
          <div>
            <a href={resume} target="_blank" className="button mt-3 resumeButton">
              <span>Download Resume</span>
              <span>
              <i className="fas fa-file-export"></i>
              </span>
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
