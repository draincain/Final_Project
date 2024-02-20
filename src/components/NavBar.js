import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/gallery">Gallery</Link>
      <Link to="/store">Store</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
};

export default NavBar;
