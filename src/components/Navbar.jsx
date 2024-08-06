import React, { useState } from "react";
import Logo from "../../src/assets/logo.png";
import "remixicon/fonts/remixicon.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      <nav>
        <div className="nav_header">
          <div className="nav_logo">
            <a href="/" className="logo">
              <img src={Logo} alt="logo" />
              <span>Fudo</span>
            </a>
          </div>
          <div className="nav__menu__btn" onClick={handleMenuToggle}>
            <i className={isMenuOpen ? "ri-close-line" : "ri-menu-line"}></i>
          </div>
        </div>
        <ul
          className={`nav__links ${isMenuOpen ? "open" : ""}`}
          onClick={handleLinkClick}
        >
          <li>
            <a href="#whyfudo">Why Fudo</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <button className="btn">
              <span>
                <i className="ri-login-box-line"></i>
              </span>
              Login
            </button>
          </li>
        </ul>
        <div className="nav__btns">
          <button className="btn">
            <span>
              <i className="ri-login-box-line"></i>
            </span>
            Login
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
