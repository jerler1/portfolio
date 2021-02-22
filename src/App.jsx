import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Portfolio from "./pages/Projects/Portfolio";
import Resume from "./pages/Resume/Resume";
import Column from "./components/Column/Column";
import Columns from "./components/Columns/Columns";
import Navbar from "./components/Navbar/Navbar";
import Container from "./components/Container/Container";
import Row from "./components/Row/Row";
import Wrapper from "./components/Wrapper/Wrapper";
import Photo from "./components/Photo/Photo";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Row className="full has-background-info py-0">
        <Columns className="full">
          <Column className="full is-one-quarter">
            <Row className="full photo has-background-success py-1">
              <p>Hi</p>
            </Row>
          </Column>
          <Column className="full is-three-quarters">
            <Row className="full has-background-warning py-1">
              <Wrapper>
                <Switch>
                  <Route exact path="/" component={About} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/resume" component={Resume} />
                  <Route exact path="/portfolio" component={Portfolio} />
                  <Route exact path="/contact" component={Contact} />
                </Switch>
              </Wrapper>
            </Row>
          </Column>
        </Columns>
      </Row>
      <Footer />
    </Router>
  );
}

export default App;
