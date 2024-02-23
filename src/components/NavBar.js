import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/gallery">Gallery</Link>
      <Link to="/links">Links</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
};

export default NavBar;
