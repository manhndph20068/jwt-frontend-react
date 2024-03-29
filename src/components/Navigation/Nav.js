import React from "react";
import "./Nav.scss";
import { NavLink } from "react-router-dom";

const Nav = (props) => {
  return (
    <div class="topnav">
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/news">News</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/about">About</NavLink>
    </div>
  );
};

export default Nav;
