import React from "react";
import "./NavBar.css";

function Navbar({ setPage, currentPage }) {
  return (
    <nav className="dark-nav">
      <div className="nav-left">
        <a href="/home">
          <span className="logo-text">ST-GYM</span>
        </a>
      </div>

      <ul>
        <li>
          <button
            className={currentPage === "home" ? "active" : ""}
            onClick={() => setPage("home")}
          >
            Home
          </button>
        </li>
        <li>
          <button
            className={currentPage === "about" ? "active" : ""}
            onClick={() => setPage("about")}
          >
            About
          </button>
        </li>
        <li>
          <button
            className={currentPage === "services" ? "active" : ""}
            onClick={() => setPage("services")}
          >
            Services
          </button>
        </li>
        <li>
          <button
            className={currentPage === "contact" ? "active" : ""}
            onClick={() => setPage("contact")}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
