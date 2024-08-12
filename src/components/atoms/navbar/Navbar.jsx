import React, { useState } from "react";
import logo from "../../../assets/Images/logo.svg";
import prime from "../../../assets/Images/prime.svg";
import "./style.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <div className="logo-container">
        <img src={logo} alt="moviefix logo" className="logo-img" />
      </div>
      <div className="menu-container">
        <button className="hamburger" onClick={toggleMenu}>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        </button>
        <div className={`menu-wrapper ${menuOpen ? "active" : ""}`}>
          <ul className={`menu ${menuOpen ? "active" : ""}`}>
            <li>Movies</li>
            <li>TV Shows</li>
            <li>People</li>
            <li>More</li>
            <li>
              <img src={prime} alt="moviefix logo" className="prime-img" />
            </li>
            <li>
              <button>Sign In</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
