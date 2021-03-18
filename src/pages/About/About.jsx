import React from "react";
import Container from "../../components/Container/Container";
import Photo from "../../components/Photo/Photo";
import CardHeader from "../../components/CardHeader/CardHeader";
import { headShot as Me, github, linkedIn } from "../../assets/";

const About = () => {
  return (
    <>
      <CardHeader className="is-inline-block mainHeader">
        <Photo />
      </CardHeader>
      <div className="columns p-5">
        <div className="column">
          <h1 className="my-3">About me</h1>
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
        </div>
        <div className="column has-text-centered">
          <div className="button">Resume</div>
          <i className="devicon-mongodb-plain-wordmark devicon m-2"></i>
          <i className="devicon-express-original devicon m-2"></i>
          <i className="devicon-react-original-wordmark devicon m-2"></i>
          <i className="devicon-nodejs-plain devicon m-2"></i>
          <i className="devicon-javascript-plain devicon m-2"></i>
          <i className="devicon-jquery-plain-wordmark devicon m-2"></i>
          <i className="devicon-html5-plain-wordmark devicon m-2"></i>
          <i className="devicon-mysql-plain-wordmark devicon m-2"></i>
          <i className="devicon-handlebars-plain-wordmark devicon m-2"></i>
          <i className="devicon-sequelize-plain-wordmark devicon m-2"></i>
          <i className="devicon-bootstrap-plain-wordmark devicon m-2"></i>
          <i className="devicon-css3-plain-wordmark devicon m-2"></i>
          <i className="devicon-git-plain-wordmark devicon m-2"></i>
          <i className="devicon-github-original-wordmark devicon m-2"></i>
        </div>
      </div>
    </>
  );
};

export default About;
