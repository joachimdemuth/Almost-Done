import React from "react";
import logo from "../assets/icons/niji.svg";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="logo-container">
          <img src={logo} alt="Logo" />
          <h4 className="logo">
            <Link to="/almost-done">Almost Done</Link>
          </h4>
        </div>
        <nav>
          <ul className="nav-links">
            <div className="link-container">
              <li className="nav-link">
                <Link to="/gallery"> NFT Gallery </Link>
              </li>
            </div>

            <div className="link-container">
              <li className="nav-link">
                <Link to="/spotify">Spotify</Link>
              </li>
            </div>

            <div className="link-container">
              <li className="nav-link">Contact</li>
            </div>
          </ul>
          <div className="burger-menu">
            <div className="first-line"></div>
            <div className="second-line"></div>
            <div className="third-line"></div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
