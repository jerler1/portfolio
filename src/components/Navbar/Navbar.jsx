import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import resume from "../../assets/Main_Resume.pdf"
import "./Navbar.css";

const Navbar = (props) => {
  const location = useLocation();
  const [toggleBurger, setToggleBurger] = useState(false);

  const handleBurger = () => {
    setToggleBurger(!toggleBurger);
  };
  return (
    <nav className="navbar py-4" role="navigation" aria-label="main navigation">
      <div className="container">
        <figure className="navbar-brand is-size-3 logo ml-1">
          <Link to="/" className="navbar-item">
            John <span className="ml-2 lastName">Erler</span>
          </Link>

          <a
            role="button"
            onClick={handleBurger}
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </figure>

        <div className={toggleBurger ? "navbar-menu is-active mr-1" : "navbar-menu mr-1"}>
          <ul className="navbar-end">
            <li
              className={
                location.pathname === "/" ? "navbar-item active" : "navbar-item"
              }
            >
              <Link to="/">Home</Link>
            </li>
            <li
              className={
                location.pathname === "/resume"
                  ? "navbar-item active"
                  : "navbar-item"
              }
            >
              <a href={resume} target="_blank" rel="noreferrer">Resume</a>
            </li>
            <li
              className={
                location.pathname === "/portfolio"
                  ? "navbar-item active"
                  : "navbar-item"
              }
            >
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li
              className={
                location.pathname === "/contact"
                  ? "navbar-item active"
                  : "navbar-item"
              }
            >
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
