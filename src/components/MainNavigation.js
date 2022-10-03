import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../Assets/logo.png";
import "./MainNavigation.css";

const mainNavigation = (props) => (
  <header className="main-navigation">
    <nav>
      <ul>
        <li>
          <img src={logo}></img>
        </li>
        <li>Home</li>
        <li>
          <NavLink style={{ color: "green" }} to="/">
            Get NJOI
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink style={{ color: "green" }} to="/channels">
            Buy Channels & Packs
          </NavLink>
        </li>
        <li>Topups </li>
        <li>Support</li>
      </ul>
    </nav>
  </header>
);

export default mainNavigation;
