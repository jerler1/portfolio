import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = (props) => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div id="navbar" className="navbar-menu">
        <div className="navbar-start">
          <Link
            to="/"
            className={
              window.location.pathname === "/" ||
              window.location.pathname === "/about"
                ? "navbar-item active"
                : "navbar-item"
            }
          >
            About
          </Link>

          <Link to="/resume" className={
              window.location.pathname === "/resume"
                ? "navbar-item active"
                : "navbar-item"
            }>Resume</Link>
          <Link to="/portfolio" className={
              window.location.pathname === "/portfolio"
                ? "navbar-item active"
                : "navbar-item"
            }>Portfolio</Link>
          <Link to="/contact" className={
              window.location.pathname === "/contact"
                ? "navbar-item active"
                : "navbar-item"
            }>Contact</Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
