import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <p>
          Icons made by{" "}
          <a href="https://www.freepik.com" title="Freepik">
            Freepik
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flat Icon">
            www.flaticon.com
          </a>
        </p>
        <div className="content has-text-centered">
          <p className="center">© 2021 Copyright John Erler</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
