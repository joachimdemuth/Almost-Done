import React from "react";
import logo from "../assets/icons/niji.svg";
import "./Header.css";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="logo-container">
        <img src={logo} alt="Logo" />

        <h4 className="logo">
            <Link to="/">
                Almost Done
                </Link>
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
            <li className="nav-link">Spotify</li>
          </div>

          <div className="link-container">
            <li className="nav-link">Contact</li>
          </div>
        </ul>
      </nav>
      <div className="coffee"></div>
    </header>
  );
}

export default Header;
