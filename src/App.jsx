import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Projects/Projects";
import Resume from "./pages/Resume/Resume";
import Column from "./components/Column/Column";
import Columns from "./components/Columns/Columns";
import Container from "./components/Container/Container";
import Row from "./components/Row/Row";
import Wrapper from "./components/Wrapper/Wrapper";
import Photo from "./components/Photo/Photo";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <Row className="full has-background-info">
        <Columns className="full">
          <Column className="full is-one-quarter">
            <Row className="full photo has-background-success">
              <p>Hi</p>
            </Row>
          </Column>
          <Column className="full is-three-quarters">
            Navbar
            <Row className="full has-background-warning">
              <p>Routes</p>
            </Row>
          </Column>
        </Columns>
      </Row>
      {/* <section className="section mainContent">
        <div className="columns full">
          <div className="column is-one-quarter full">
            <section className="section photo full"></section>
          </div>
          <div className="column is-three-quarters">
            {/* Nav bar */}
      {/* <Wrapper>This is the main</Wrapper>
          </div>
        </div>
      </section> */}
      <Footer />
    </Router>
  );
}

export default App;
