import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  return (
    <header>
      <div className="title-section">
        <h1>John Patrick Eiler</h1>
        <div className="title-info">
          <h2>
            <span>Email: </span>jp.eiler97@gmail.com
          </h2>
          <h2>
            <span>Phone Number: </span> 214-529-3578
          </h2>
        </div>
      </div>

      <nav>
        <ul>
          <Link
            to="/aboutme"
            className={
              location.pathname === "/aboutme" ? "nav-link active" : "nav-link"
            }
          >
            About Me
          </Link>
        </ul>
        <ul>
          <Link to="/projects" className={location.pathname === "/projects"}>
            Projects
          </Link>
        </ul>
        <ul>
          <Link to="/contact" className={location.pathname === "/contact"}>
            Contact
          </Link>
        </ul>
        <ul>
          <a href="./assets/files/resume.docx" download="jpEilerResume">
            Resume
          </a>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
