import React from "react";
import Photo from "../../components/Photo/Photo";
import CardHeader from "../../components/CardHeader/CardHeader";
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
          <h1 className="my-3 has-text-centered">About me</h1>
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
          <h1 className="my-3">My Fundamentals</h1>
          <div className="skillIcons is-flex">
            {skills.map((icon) => {
              return <figure>{icon.icon}</figure>;
            })}
          </div>
          <div>
            <div className="button">Resume</div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
