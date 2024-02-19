import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-white bg-white p-3">
        <span className="navigation-title">Acme</span>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarSupportedContent"
        >
          <ul className=" navigation-bar navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink to="/">Features</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/">Solutions</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/">Enterprise</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/">Resources</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/">Pricing</NavLink>
            </li>
          </ul>
          <button className="nav-buttons">Sign In</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
