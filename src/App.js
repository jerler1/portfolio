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

function App() {
  return (
    <Router>
      <Wrapper className="wrapper">
        <Row>
          <Columns>
            <Column className="is-one-quarter">
              <Photo />
            </Column>
            <Column
              className="is-three-quarters"
              style={{ backgroundColor: "gray" }}
            >
              <h1>This is the main section</h1>
            </Column>
          </Columns>
        </Row>
        <div className="App"></div>
      </Wrapper>
    </Router>
  );
}

export default App;
