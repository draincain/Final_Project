import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import "../styles/NavBar.css";

const NavBar = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate(); // Hook for navigation

  const handleLogout = () => {
    logout();
    navigate("/"); // Redirect to the home page upon logout
  };

  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/gallery">Gallery</Link>
      <Link to="/links">Links</Link>
      <Link to="/contact">Contact</Link>
      {!isAuthenticated ? (
        <Link to="/login" className="admin-link">
          Admin
        </Link>
      ) : (
        // Use handleLogout for the onClick event
        <button onClick={handleLogout}>Logout</button>
      )}
    </div>
  );
};

export default NavBar;
