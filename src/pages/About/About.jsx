import React from "react";
import Container from "../../components/Container/Container";

const About = () => {
  return (
    <Container>
      <div class="tile is-ancestor centerTile">
        <div class="tile is-vertical is-8">
          <div class="tile is-parent aboutMeTile">
            <article class="tile is-child welcome  has-text-centered">
              <p class="title is-size-3">Hi There, I am</p>
              <p class="title is-size-3">John Erler</p>
              <p class="title is-size-3">Welcome to My Portfolio</p>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child notification is-danger">
              <p class="title">About Me</p>

              <div class="content">
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
