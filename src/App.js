import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Portfolio from "./pages/Projects/Portfolio";
import Resume from "./pages/Resume/Resume";
import Column from "./components/Column/Column";
import Columns from "./components/Columns/Columns";
import Photo from "./components/Photo/Photo";
import Navbar from "./components/Navbar/Navbar";
import Container from "./components/Container/Container";
import Row from "./components/Row/Row";
import Wrapper from "./components/Wrapper/Wrapper";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <Wrapper>
        <Switch>
          <Navbar />
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Wrapper>
    </Router>
  );
}

export default App;
