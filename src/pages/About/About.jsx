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
          <h1 className="my-3 has-text-centered aboutHeaders is-size-5">
            About <span className="spanHeader">Me</span>
          </h1>
          <p className="my-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus velit libero unde. Nobis consequatur magni repellat
            quasi et impedit fugiat voluptatum quae quam tempora atque natus
            voluptates, expedita pariatur temporibus!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            temporibus dicta ullam, in facilis eos impedit distinctio? Similique
            hic ad, quas maiores vero nam deserunt quisquam tenetur animi, magni
            libero!
          </p>
        </section>
        <section className="column has-text-centered">
          <h1 className="my-3 aboutHeaders is-size-5">
            My <span className="spanHeader">Fundamentals</span>
          </h1>
          <div className="skillIcons is-flex">
            {skills.map((icon, index) => {
              return (
                <div className="iconDiv" key={index}>
                  <figure>{icon.icon}</figure>
                  <p className="subtitle is-6 iconSubtitle">{icon.title}</p>
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
