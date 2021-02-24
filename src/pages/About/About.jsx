import React from "react";
import Container from "../../components/Container/Container";

const About = () => {
  return (
    <Container>
      <div class="tile is-ancestor centerTile">
        <div class="tile is-vertical is-8">
          <div class="tile is-parent">
            <article class="tile is-child welcome">
              <p class="title">Welcome to My Portfolio</p>
              <p class="subtitle">Aligned with the right tile</p>
              <div class="content">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
                magnam tenetur repellat doloremque repudiandae facilis! Ducimus
                tempora est impedit a soluta quae, neque minima aspernatur harum
                inventore unde sit nostrum.
              </div>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child notification is-danger">
              <p class="title">Wide tile</p>
              <p class="subtitle">Aligned with the right tile</p>
              <div class="content"></div>
            </article>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
