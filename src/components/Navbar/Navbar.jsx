import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = (props) => {
  const location = useLocation();
  const [toggleBurger, setToggleBurger] = useState(false);

  const handleBurger = () => {
    setToggleBurger(!toggleBurger);
  };
  console.log(location.pathname);
  return (
    <nav className="navbar py-4" role="navigation" aria-label="main navigation">
      <div className="container">
        <figure className="navbar-brand is-size-3 logo">
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

        <div className={toggleBurger ? "navbar-menu is-active" : "navbar-menu"}>
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
              <Link to="/resume">Resume</Link>
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
