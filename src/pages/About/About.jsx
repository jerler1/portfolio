import React from "react";
import Container from "../../components/Container/Container";

const About = () => {
  return (
    <Container>
      <div className="tile is-ancestor centerTile">
        <div className="tile is-vertical is-8">
          <div className="tile is-parent aboutMeTile">
            <article className="tile is-child welcome  has-text-centered">
              <p className="title is-size-3">Hi There, I am</p>
              <p className="title is-size-3">John Erler</p>
              <p className="title is-size-3">Welcome to My Portfolio</p>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child notification is-danger">
              <p className="title">About Me</p>

              <div className="content">
                I am a software engineer with experience in Javascript, but with
                an interest in Python and C++. Recently earned a certificate in
                full stack development from Georgia Tech, with skill refinement
                primarily in JavaScript, CSS, Node.js, React.js. In my previous
                career as a chemist I have utilized my passion for problem
                solving to troubleshoot and fix problems, and I look forward to
                utilizing that passion in web application development.
              </div>
            </article>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
