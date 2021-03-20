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
        <section className="column">
          <header className="my-3 has-text-centered aboutHeaders is-size-5">
            About <span className="spanHeader">Me</span>
          </header>
          <article className="my-3">
            At some point in your life you realize this isn't enough.  Y
            Have you ever just stopped and thought, "Hey, this career isn't providing enough for me."
            I am a full-stack web developer in Atlanta who recently completed a certificate in Full-Stack Web Development at Georgia Tech.  I am transistioning from a career of chemistry of 13 years to pursue this.
          </article>
          <article>
            My background in chemistry is a definite asset when it comes to learning new technologies and solving puzzles.
          </article>
          <article>

          </article>
        </section>
        <section className="column has-text-centered">
          <header className="my-3 aboutHeaders is-size-5">
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
            <a href={resume} target="_blank" className="button is-info mt-3 resumeButton">
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
