import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = (props) => {
  const location = useLocation();
  return (
    <div className="tabs is-centered is-fullwidth">
      <ul>
        <li>
          <Link
            to="/"
            className={
              location.pathname === "/" ||
              location.pathname === "/about"
                ? "navbar-item is-active"
                : "navbar-item"
            }
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/resume"
            className={
              location.pathname === "/resume"
                ? "navbar-item is-active"
                : "navbar-item"
            }
          >
            Resume
          </Link>
        </li>
        <li>
          <Link
            to="/portfolio"
            className={
              location.pathname === "/portfolio"
                ? "navbar-item is-active"
                : "navbar-item"
            }
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={
              location.hash === "/contact"
                ? "navbar-item is-active"
                : "navbar-item"
            }
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
